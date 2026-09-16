import nodemailer from 'nodemailer';

let inquiriesStore = [
  {
    _id: 'inq-01',
    fullName: 'Vikram Malhotra',
    companyName: 'Apex Healthtech',
    email: 'vikram@apexhealth.in',
    phone: '+91 98765 43210',
    service: 'Hospital HMS',
    budget: '$25,000+',
    timeline: '1 - 3 Months',
    message: 'Looking for a hospital management system for a 150-bed multi-speciality hospital.',
    status: 'New',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    _id: 'inq-02',
    fullName: 'Sarah Jenkins',
    companyName: 'Solaria Logistics',
    email: 'sarah@solaria.co',
    phone: '+1 415 555 0192',
    service: 'Transport & Fleet',
    budget: '$15,000 - $25,000',
    timeline: 'Immediately',
    message: 'Need real-time telematics and dispatch routing integration.',
    status: 'In Progress',
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
  },
  {
    _id: 'inq-03',
    fullName: 'Rahul Sharma',
    companyName: 'Nexus AI Labs',
    email: 'rahul@nexuslabs.io',
    phone: '+91 91234 56789',
    service: 'AI Systems',
    budget: '$50,000+',
    timeline: '3 - 6 Months',
    message: 'Custom LLM fine-tuning and retrieval-augmented generation pipeline.',
    status: 'Resolved',
    createdAt: new Date(Date.now() - 3600000 * 36).toISOString(),
  },
];

export default async function handler(req, res) {
  // CORS configuration for Vercel
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json(inquiriesStore);
  }

  if (req.method === 'PATCH' || req.method === 'DELETE') {
    return res.status(200).json({ success: true, message: 'Action completed' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        // fallback
      }
    }
    body = body || {};

    const {
      fullName,
      email,
      phone,
      companyName,
      service,
      budget,
      timeline,
      message,
      referralSource,
    } = body;

    if (!fullName || !email || !message) {
      return res.status(400).json({
        message: 'Full Name, Email, and Message are required fields.',
      });
    }

    // SMTP Credentials
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpSecure = smtpPort === 465;
    const smtpUser = process.env.SMTP_USER || 'admin.techofay@gmail.com';
    const smtpPass = process.env.SMTP_PASS || 'dxcapucktyurxakz';
    const receiver = process.env.CONTACT_EMAIL_RECEIVER || smtpUser;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 1. Admin Email Notification
    const adminMailOptions = {
      from: `"TECHOFAY Direct Intake" <${smtpUser}>`,
      to: receiver,
      replyTo: email,
      subject: `🚨 [Strategic Inquiry] ${fullName} — ${service || 'General Consultation'}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:30px;">
          <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e2e8f0;">
            <div style="background:#16A34A; padding:24px; text-align:center;">
              <h2 style="color:#ffffff; margin:0; font-size:22px;">TECHOFAY GLOBAL VENTURES</h2>
              <p style="color:#dcfce7; margin:6px 0 0 0; font-size:13px;">New Enterprise Client Intake</p>
            </div>
            <div style="padding:28px;">
              <h3 style="color:#111827; margin-top:0;">Inquiry Details</h3>
              <table style="width:100%; font-size:14px; color:#374151; border-collapse:collapse;">
                <tr><td style="padding:8px 0; font-weight:bold; width:140px;">Client Name:</td><td>${fullName}</td></tr>
                <tr><td style="padding:8px 0; font-weight:bold;">Email Address:</td><td><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:8px 0; font-weight:bold;">Phone / WhatsApp:</td><td>${phone || 'Not Provided'}</td></tr>
                <tr><td style="padding:8px 0; font-weight:bold;">Organization:</td><td>${companyName || 'Not Provided'}</td></tr>
                <tr><td style="padding:8px 0; font-weight:bold;">Required Service:</td><td><span style="background:#dcfce7; color:#166534; padding:3px 8px; border-radius:4px; font-weight:bold;">${service || 'Website Development'}</span></td></tr>
                <tr><td style="padding:8px 0; font-weight:bold;">Estimated Budget:</td><td>${budget || 'Not Specified'}</td></tr>
                <tr><td style="padding:8px 0; font-weight:bold;">Target Timeline:</td><td>${timeline || 'Not Specified'}</td></tr>
                <tr><td style="padding:8px 0; font-weight:bold;">Referral Source:</td><td>${referralSource || 'Direct Search'}</td></tr>
              </table>
              <div style="margin-top:20px; padding:16px; background:#f8fafc; border-left:4px solid #16A34A; border-radius:4px;">
                <strong style="color:#111827;">Project Scope & Brief:</strong>
                <p style="margin:8px 0 0 0; color:#334155; line-height:1.6; white-space:pre-wrap;">${message}</p>
              </div>
            </div>
            <div style="background:#f8fafc; padding:16px; text-align:center; font-size:12px; color:#64748b; border-top:1px solid #e2e8f0;">
              Received via Techofay Global Ventures Web Portal • Vadodara HQ Operations
            </div>
          </div>
        </div>
      `,
    };

    // 2. Client Confirmation Email
    const clientMailOptions = {
      from: `"TECHOFAY GLOBAL VENTURES" <${smtpUser}>`,
      to: email,
      subject: `Inquiry Received: Strategic Engagement with TECHOFAY GLOBAL VENTURES`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:30px;">
          <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e2e8f0;">
            <div style="background:#16A34A; padding:24px; text-align:center;">
              <h2 style="color:#ffffff; margin:0; font-size:22px;">TECHOFAY GLOBAL VENTURES</h2>
              <p style="color:#dcfce7; margin:6px 0 0 0; font-size:13px;">Enterprise Technology & Digital Growth</p>
            </div>
            <div style="padding:28px; color:#334155; font-size:14px; line-height:1.6;">
              <h3 style="color:#111827; margin-top:0;">Dear ${fullName},</h3>
              <p>Thank you for reaching out to <strong>TECHOFAY GLOBAL VENTURES</strong> regarding <strong>${service || 'your project'}</strong>.</p>
              <p>Our solutions architecture team has received your project specification and is currently reviewing the technical and strategic scope. A dedicated specialist will contact you within <strong>24 business hours</strong>.</p>
              <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:16px; margin:20px 0;">
                <strong style="color:#166534;">100% Client Guarantee</strong>
                <p style="margin:4px 0 0 0; font-size:13px; color:#166534;">We are dedicated to building high-converting digital infrastructure and custom AI systems that deliver tangible enterprise results.</p>
              </div>
              <p>If your matter is urgent, you can also connect directly with our headquarters hotline:</p>
              <p><strong>Hotline / WhatsApp:</strong> <a href="tel:+919359339000" style="color:#16a34a;">+91-9359339000</a><br/><strong>Official Email:</strong> <a href="mailto:info@techofay.com" style="color:#16a34a;">info@techofay.com</a></p>
              <p style="margin-top:24px;">Warm regards,<br/><strong>The Executive Architecture Team</strong><br/>TECHOFAY GLOBAL VENTURES</p>
            </div>
            <div style="background:#f8fafc; padding:16px; text-align:center; font-size:12px; color:#64748b; border-top:1px solid #e2e8f0;">
              Vadodara, Gujarat, India • Global Presence: Bangalore, Chennai, USA
            </div>
          </div>
        </div>
      `,
    };

    await Promise.allSettled([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    inquiriesStore.unshift({
      _id: `inq-${Date.now()}`,
      fullName,
      email,
      phone: phone || '',
      companyName: companyName || 'Enterprise Inquiry',
      service: service || 'General Consultation',
      budget: budget || 'Flexible',
      timeline: timeline || 'Immediate',
      message: message || '',
      status: 'New',
      createdAt: new Date().toISOString(),
    });

    return res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully. Our enterprise team will respond within 24 hours.',
    });
  } catch (err) {
    console.error('[Vercel Contact API Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to process inquiry. Please try again or reach out at info@techofay.com.',
      error: err.message,
    });
  }
}
