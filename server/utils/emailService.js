import nodemailer from 'nodemailer';

let transporter = null;

const initTransporter = async () => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    console.log('[EmailService] Configured with production SMTP.');
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
  const adminReceiver = process.env.CONTACT_EMAIL_RECEIVER || process.env.ADMIN_EMAIL || 'admin@techofay.com';

  const mailOptions = {
    from: `"TECHOFAY Alerts" <notifications@techofay.com>`,
    to: adminReceiver,
    subject: `🚨 New Enterprise Inquiry: ${inquiryData.fullName} (${inquiryData.companyName || 'Individual'})`,
    html: `
      <div style="font-family: Arial, sans-serif; background: #050B1F; color: #ffffff; padding: 24px; border-radius: 8px;">
        <h2 style="color: #00D4FF; margin-top: 0;">New Inquiry Received — TECHOFAY GLOBAL VENTURES</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr><td style="padding: 8px; color: #8B9AB5; width: 140px;">Name:</td><td style="padding: 8px; color: #ffffff; font-weight: bold;">${inquiryData.fullName}</td></tr>
          <tr><td style="padding: 8px; color: #8B9AB5;">Email:</td><td style="padding: 8px; color: #ffffff;">${inquiryData.email}</td></tr>
          <tr><td style="padding: 8px; color: #8B9AB5;">Phone:</td><td style="padding: 8px; color: #ffffff;">${inquiryData.phone || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; color: #8B9AB5;">Company:</td><td style="padding: 8px; color: #ffffff;">${inquiryData.companyName || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; color: #8B9AB5;">Service:</td><td style="padding: 8px; color: #2B6EFA; font-weight: bold;">${inquiryData.service}</td></tr>
          <tr><td style="padding: 8px; color: #8B9AB5;">Budget:</td><td style="padding: 8px; color: #00D4FF;">${inquiryData.budget || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; color: #8B9AB5;">Timeline:</td><td style="padding: 8px; color: #ffffff;">${inquiryData.timeline || 'N/A'}</td></tr>
        </table>
        <div style="background: rgba(255,255,255,0.05); padding: 16px; border-left: 4px solid #2B6EFA; border-radius: 4px;">
          <h4 style="margin: 0 0 8px 0; color: #00D4FF;">Project Scope / Message:</h4>
          <p style="margin: 0; line-height: 1.6; color: #e2e8f0;">${inquiryData.message}</p>
        </div>
      </div>
    `,
  };

  const autoReplyOptions = {
    from: `"TECHOFAY GLOBAL VENTURES" <contact@techofay.com>`,
    to: inquiryData.email,
    subject: `Thank you for contacting TECHOFAY GLOBAL VENTURES`,
    html: `
      <div style="font-family: Arial, sans-serif; background: #050B1F; color: #ffffff; padding: 24px; border-radius: 8px;">
        <h2 style="color: #00D4FF; margin-top: 0;">Engineering the Future, One Solution at a Time</h2>
        <p>Dear ${inquiryData.fullName},</p>
        <p>Thank you for reaching out to <strong>TECHOFAY GLOBAL VENTURES</strong>. Our enterprise consulting and technical architecture teams have received your project details regarding <strong>${inquiryData.service}</strong>.</p>
        <p>A dedicated Solutions Architect will review your specifications and schedule a strategic consultation within 24 business hours.</p>
        <hr style="border: 0; border-top: 1px solid rgba(43,110,250,0.3); margin: 24px 0;" />
        <p style="font-size: 12px; color: #8B9AB5;">TECHOFAY GLOBAL VENTURES | Global Headquarters: One World Trade Center, New York, NY</p>
      </div>
    `
  };

  try {
    if (transporter) {
      const info = await transporter.sendMail(mailOptions);
      await transporter.sendMail(autoReplyOptions);
      const previewUrl = nodemailer.getTestMessageUrl(info);
      if (previewUrl) {
        console.log(`[Email Preview] Inquiry notification viewable at: ${previewUrl}`);
      }
      return { success: true, previewUrl };
    }
  } catch (err) {
    console.warn('[Email Warning] Notification could not be sent through SMTP:', err.message);
  }
  return { success: true, simulated: true };
};
