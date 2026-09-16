export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const verticals = [
    'Cybersecurity',
    'ERP Software',
    'Hospital HMS',
    'School Software',
    'Hotel HMS',
    'Transport & Fleet',
    'Engineering & QA',
    'AI Systems',
    'Cloud Architecture',
  ];

  const inquiriesByVertical = verticals.map((v, i) => ({
    vertical: v,
    count: [8, 14, 11, 7, 5, 9, 6, 18, 12][i] || 5,
  }));

  const monthlyLeadsTrend = [
    { month: 'Apr', inquiries: 6, demos: 3 },
    { month: 'May', inquiries: 9, demos: 5 },
    { month: 'Jun', inquiries: 14, demos: 8 },
    { month: 'Jul', inquiries: 18, demos: 10 },
    { month: 'Aug', inquiries: 24, demos: 15 },
    { month: 'Sep', inquiries: 31, demos: 19 },
  ];

  const recentInquiries = [
    {
      _id: 'inq-01',
      fullName: 'Vikram Malhotra',
      companyName: 'Apex Healthtech',
      email: 'vikram@apexhealth.in',
      service: 'Hospital HMS',
      budget: '$25,000+',
      timeline: '1 - 3 Months',
      status: 'New',
      createdAt: new Date().toISOString(),
    },
    {
      _id: 'inq-02',
      fullName: 'Sarah Jenkins',
      companyName: 'Solaria Logistics',
      email: 'sarah@solaria.co',
      service: 'Transport & Fleet',
      budget: '$15,000 - $25,000',
      timeline: 'Immediately',
      status: 'In Progress',
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    },
    {
      _id: 'inq-03',
      fullName: 'Rahul Sharma',
      companyName: 'Nexus AI Labs',
      email: 'rahul@nexuslabs.io',
      service: 'AI Systems',
      budget: '$50,000+',
      timeline: '3 - 6 Months',
      status: 'Resolved',
      createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
    },
  ];

  return res.status(200).json({
    stats: {
      totalInquiries: 38,
      newThisWeek: 9,
      pendingInquiries: 4,
      resolvedInquiries: 34,
      totalApplications: 12,
      totalDemoRequests: 16,
      totalBlogPosts: 6,
    },
    charts: {
      inquiriesByVertical,
      monthlyLeadsTrend,
    },
    recentInquiries,
  });
}
