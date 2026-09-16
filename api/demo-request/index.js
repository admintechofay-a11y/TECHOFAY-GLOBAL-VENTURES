export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    return res.status(201).json({ success: true, message: 'Demo request received successfully' });
  }

  if (req.method === 'PATCH' || req.method === 'DELETE') {
    return res.status(200).json({ success: true, message: 'Action processed' });
  }

  return res.status(200).json([
    {
      _id: 'demo-01',
      fullName: 'Aarav Patel',
      company: 'Zenith Logistics',
      email: 'aarav@zenithlogistics.com',
      product: 'ERP Software Suite',
      phone: '+91 99887 76655',
      scheduledDate: new Date(Date.now() + 3600000 * 48).toISOString(),
      status: 'Pending',
      createdAt: new Date().toISOString(),
    },
    {
      _id: 'demo-02',
      fullName: 'Elena Rostova',
      company: 'Global MedTech',
      email: 'elena@medtechglobal.com',
      product: 'Hospital HMS',
      phone: '+1 212 555 0188',
      scheduledDate: new Date(Date.now() + 3600000 * 72).toISOString(),
      status: 'Confirmed',
      createdAt: new Date(Date.now() - 3600000 * 20).toISOString(),
    },
  ]);
}
