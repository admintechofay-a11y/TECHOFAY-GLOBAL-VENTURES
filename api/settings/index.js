export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'PUT') {
    return res.status(200).json({ success: true, message: 'Settings saved' });
  }

  return res.status(200).json({
    siteName: 'TECHOFAY GLOBAL VENTURES',
    contactEmail: 'admin.techofay@gmail.com',
    supportPhone: '+91 98765 43210',
    emergencyAlerts: true,
    maintenanceMode: false,
    theme: 'dark',
  });
}
