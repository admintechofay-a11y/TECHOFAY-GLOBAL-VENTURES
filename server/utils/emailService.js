import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config();

let transporter = null;

const initTransporter = async () => {
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    const isGmail = (process.env.SMTP_HOST && process.env.SMTP_HOST.includes('gmail')) ||
                    (process.env.SMTP_USER && process.env.SMTP_USER.includes('@gmail.com'));

    const cleanPass = (process.env.SMTP_PASS || '').replace(/\s+/g, '');

    if (isGmail) {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER.trim(),
          pass: cleanPass,
        },
      });
      console.log(`[EmailService] Configured with Gmail SMTP for ${process.env.SMTP_USER}`);
    } else {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER.trim(),
          pass: cleanPass,
        },
      });
      console.log('[EmailService] Configured with production SMTP.');
    }

    try {
      await transporter.verify();
      console.log('[EmailService] SMTP connection verified successfully.');
    } catch (verifyErr) {
      console.warn('[EmailService Warning] SMTP verification failed:', verifyErr.message);
    }
  } else {
    try {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      console.log(`[EmailService] Ethereal test mailer initialized: ${testAccount.user}`);
    } catch (e) {
      console.warn('[EmailService] SMTP credentials not set; email dispatch will run in simulated preview mode.');
    }
  }
};

initTransporter();

export const sendContactNotification = async (inquiryData) => {
  const adminReceiver = process.env.CONTACT_EMAIL_RECEIVER || process.env.ADMIN_EMAIL || 'admin.techofay@gmail.com';
  const senderEmail = process.env.SMTP_USER || 'admin.techofay@gmail.com';

  const mailOptions = {
    from: `"TECHOFAY Alerts" <${senderEmail}>`,
    to: adminReceiver,
    replyTo: inquiryData.email,
    subject: `🚨 New Strategic Inquiry: ${inquiryData.fullName} (${inquiryData.companyName || 'Direct Client'})`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; padding: 32px 16px; color: #111827;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          
          <div style="background-color: #16A34A; padding: 24px 32px; color: #ffffff;">
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; color: #DCFCE7;">Lead Notification</span>
            <h2 style="margin: 6px 0 0 0; font-size: 22px; font-weight: 800; color: #ffffff;">New Solution Inquiry Received</h2>
          </div>

          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; width: 140px; font-weight: 600;">Full Legal Name</td>
                <td style="padding: 10px 0; color: #111827; font-weight: 700;">${inquiryData.fullName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600;">Corporate Email</td>
                <td style="padding: 10px 0; color: #16A34A; font-weight: 600;"><a href="mailto:${inquiryData.email}" style="color: #16A34A; text-decoration: none;">${inquiryData.email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600;">Phone / WhatsApp</td>
                <td style="padding: 10px 0; color: #111827;">${inquiryData.phone || 'Not Provided'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600;">Company / Org</td>
                <td style="padding: 10px 0; color: #111827;">${inquiryData.companyName || 'Individual'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600;">Service Required</td>
                <td style="padding: 10px 0; color: #166534; font-weight: 700;">${inquiryData.service}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600;">Estimated Budget</td>
                <td style="padding: 10px 0; color: #111827; font-weight: 700;">${inquiryData.budget || '₹1,00,000 - ₹5,00,000'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600;">Target Timeline</td>
                <td style="padding: 10px 0; color: #111827;">${inquiryData.timeline || '1 - 3 Months'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600;">Referral Source</td>
                <td style="padding: 10px 0; color: #6b7280;">${inquiryData.referralSource || 'Direct'}</td>
              </tr>
              ${inquiryData.attachment ? `
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600;">Attached Spec</td>
                <td style="padding: 10px 0; color: #16A34A;"><a href="http://localhost:5000${inquiryData.attachment}" style="color: #16A34A; font-weight: 600;">Download Attachment</a></td>
              </tr>` : ''}
            </table>

            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #16A34A; margin-bottom: 24px;">
              <h4 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; color: #4b5563; font-weight: 700;">Project Scope & Brief:</h4>
              <p style="margin: 0; line-height: 1.6; color: #1f2937; font-size: 14px; white-space: pre-wrap;">${inquiryData.message}</p>
            </div>

            <div style="text-align: center; padding-top: 8px;">
              <a href="mailto:${inquiryData.email}?subject=RE:%20Your%20Inquiry%20with%20TECHOFAY%20GLOBAL%20VENTURES" style="display: inline-block; background-color: #16A34A; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 700; font-size: 14px;">Reply Directly via Email &rarr;</a>
            </div>
          </div>

          <div style="background-color: #f9fafb; padding: 16px 32px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center;">
            TECHOFAY GLOBAL VENTURES &bull; Corporate Headquarters: Vadodara, Gujarat &bull; Branch: Bangalore
          </div>
        </div>
      </div>
    `,
  };

  const autoReplyOptions = {
    from: `"TECHOFAY GLOBAL VENTURES" <${senderEmail}>`,
    to: inquiryData.email,
    subject: `We have received your strategic inquiry — TECHOFAY GLOBAL VENTURES`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; padding: 32px 16px; color: #111827;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          
          <div style="background-color: #16A34A; padding: 28px 32px; color: #ffffff;">
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; color: #DCFCE7;">TECHOFAY GLOBAL VENTURES</span>
            <h2 style="margin: 6px 0 0 0; font-size: 22px; font-weight: 800; color: #ffffff;">Inquiry Received & Confirmed</h2>
          </div>

          <div style="padding: 32px;">
            <p style="font-size: 15px; margin-top: 0;">Dear <strong>${inquiryData.fullName}</strong>,</p>
            <p style="font-size: 14px; line-height: 1.6; color: #374151;">
              Thank you for reaching out to <strong>TECHOFAY GLOBAL VENTURES</strong>. Our solution architecture and enterprise strategy teams have successfully received your project inquiry regarding <strong>${inquiryData.service}</strong>.
            </p>

            <div style="background-color: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px; padding: 18px; margin: 24px 0;">
              <h4 style="margin: 0 0 6px 0; font-size: 13px; color: #166534; font-weight: 700;">What Happens Next?</h4>
              <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: #166534; line-height: 1.6;">
                <li>A dedicated Solutions Architect is reviewing your specifications.</li>
                <li>We will contact you via email or phone within <strong>24 business hours</strong>.</li>
                <li>All consultations and project scopes are governed by our mutual non-disclosure policy.</li>
              </ul>
            </div>

            <p style="font-size: 13px; color: #6b7280; line-height: 1.6;">
              If your request is urgent, you can reach our enterprise hotline directly at <a href="tel:+919359339000" style="color: #16A34A; font-weight: 700; text-decoration: none;">+91-9359339000</a> or reply directly to this email.
            </p>

            <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 13px; font-weight: 700; color: #111827;">Best regards,</p>
              <p style="margin: 2px 0 0 0; font-size: 13px; color: #16A34A; font-weight: 600;">Technical Consultation & Solutions Team</p>
              <p style="margin: 2px 0 0 0; font-size: 12px; color: #6b7280;">TECHOFAY GLOBAL VENTURES</p>
            </div>
          </div>

          <div style="background-color: #f9fafb; padding: 16px 32px; border-top: 1px solid #e5e7eb; font-size: 11px; color: #9ca3af; text-align: center;">
            Headquarters: Vadodara, Gujarat, India &bull; Bangalore Innovation Center<br/>
            Web: <a href="https://www.techofay.com" style="color: #16A34A; text-decoration: none;">www.techofay.com</a> &bull; Email: <a href="mailto:admin.techofay@gmail.com" style="color: #16A34A; text-decoration: none;">admin.techofay@gmail.com</a>
          </div>
        </div>
      </div>
    `
  };

  try {
    if (transporter) {
      const info = await transporter.sendMail(mailOptions);
      console.log(`[EmailService] Admin notification sent successfully. Message ID: ${info.messageId}`);
      
      try {
        await transporter.sendMail(autoReplyOptions);
        console.log(`[EmailService] Auto-reply confirmation sent to client: ${inquiryData.email}`);
      } catch (autoErr) {
        console.warn('[EmailService Warning] Auto-reply failed:', autoErr.message);
      }

      const previewUrl = nodemailer.getTestMessageUrl ? nodemailer.getTestMessageUrl(info) : null;
      return { success: true, messageId: info.messageId, previewUrl };
    }
  } catch (err) {
    console.error('[EmailService Error] Notification could not be sent through SMTP:', err.message);
    return { success: false, error: err.message };
  }
  return { success: true, simulated: true };
};
