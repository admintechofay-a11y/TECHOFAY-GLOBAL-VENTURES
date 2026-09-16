import crypto from 'crypto';

const JWT_SECRET = process.env.JWT_SECRET || 'techofay_super_secret_jwt_key_2025_enterprisegrade';

function generateToken(payload, secret) {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const body = Buffer.from(
    JSON.stringify({
      ...payload,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60, // 30 days
    })
  ).toString('base64url');
  const signature = crypto
    .createHmac('sha256', secret)
    .update(`${header}.${body}`)
    .digest('base64url');
  return `${header}.${body}.${signature}`;
}

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

    const { email, password } = body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide both email and password' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const adminEmail = (process.env.ADMIN_EMAIL || 'admin@techofay.com').trim().toLowerCase();
    const adminPassword = process.env.ADMIN_PASSWORD || 'Techofay@2025!';

    const isMasterAdminMatch = cleanEmail === adminEmail && password === adminPassword;

    if (isMasterAdminMatch) {
      const userData = {
        _id: 'master-admin-01',
        name: 'Super Admin',
        email: adminEmail,
        role: 'admin',
      };

      const token = generateToken(userData, JWT_SECRET);

      return res.status(200).json({
        ...userData,
        token,
      });
    }

    return res.status(401).json({ message: 'Invalid enterprise credentials' });
  } catch (err) {
    console.error('[Vercel Auth Login Error]:', err);
    return res.status(500).json({ message: 'Authentication server error', error: err.message });
  }
}
