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
    return res.status(201).json({ success: true, message: 'Application submitted successfully' });
  }

  if (req.method === 'PATCH' || req.method === 'DELETE') {
    return res.status(200).json({ success: true, message: 'Application updated' });
  }

  return res.status(200).json([
    {
      _id: 'app-01',
      fullName: 'Devansh Roy',
      email: 'devansh.roy@gmail.com',
      phone: '+91 98111 22334',
      position: 'Senior AI / Machine Learning Engineer',
      experience: '5+ Years',
      portfolio: 'https://github.com/devanshroy',
      status: 'Under Review',
      createdAt: new Date().toISOString(),
    },
    {
      _id: 'app-02',
      fullName: 'Pooja Nair',
      email: 'pooja.nair@outlook.com',
      phone: '+91 97444 55667',
      position: 'Full-Stack React & Three.js Developer',
      experience: '4 Years',
      portfolio: 'https://poojanair.dev',
      status: 'Interviewed',
      createdAt: new Date(Date.now() - 3600000 * 30).toISOString(),
    },
  ]);
}
