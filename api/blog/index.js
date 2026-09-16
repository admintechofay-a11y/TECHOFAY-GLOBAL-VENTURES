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
    return res.status(201).json({ success: true, message: 'Blog post created' });
  }

  if (req.method === 'PATCH' || req.method === 'DELETE') {
    return res.status(200).json({ success: true, message: 'Blog post updated' });
  }

  return res.status(200).json([
    {
      _id: 'blog-01',
      title: 'Architecting Resilient Multi-Agent AI Systems in 2025',
      slug: 'architecting-multi-agent-ai-systems-2025',
      category: 'Artificial Intelligence',
      author: 'TECHOFAY Engineering',
      excerpt: 'How autonomous agents and distributed LLM pipelines are transforming enterprise automation.',
      published: true,
      createdAt: new Date().toISOString(),
    },
    {
      _id: 'blog-02',
      title: 'Next-Gen Cyber Threat Hunting with Neural Telemetry',
      slug: 'next-gen-cyber-threat-hunting',
      category: 'Cybersecurity',
      author: 'Security Operations Team',
      excerpt: 'Zero-trust architecture combined with behavioral heuristic surveillance.',
      published: true,
      createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
    },
  ]);
}
