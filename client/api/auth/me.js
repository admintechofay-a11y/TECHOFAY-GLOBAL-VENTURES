import crypto from 'crypto';

const JWT_SECRET = process.env.JWT_SECRET || 'techofay_super_secret_jwt_key_2025_enterprisegrade';

function verifyToken(token, secret) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const [header, body, signature] = parts;
    const expectedSig = crypto
      .createHmac('sha256', secret)
      .update(`${header}.${body}`)
      .digest('base64url');
    if (signature !== expectedSig) return null;
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch (e) {
    return null;
  }
}

export default async function handler(req, res) {
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

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();

    if (!token) {
      return res.status(401).json({ message: 'Authorization token required' });
    }

    const payload = verifyToken(token, JWT_SECRET);
    if (!payload) {
      return res.status(401).json({ message: 'Session expired or invalid token' });
    }

    return res.status(200).json({
      _id: payload._id || 'master-admin-01',
      name: payload.name || 'Super Admin',
      email: payload.email || 'admin@techofay.com',
      role: payload.role || 'admin',
    });
  } catch (err) {
    console.error('[Vercel Auth Me Error]:', err);
    return res.status(500).json({ message: 'Authentication server error', error: err.message });
  }
}
