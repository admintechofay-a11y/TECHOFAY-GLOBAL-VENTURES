import { User } from '../models/User.js';
import { Inquiry } from '../models/Inquiry.js';
import { BlogPost } from '../models/BlogPost.js';
import { Application } from '../models/Application.js';
import { DemoRequest } from '../models/DemoRequest.js';
import { isConnected } from '../config/db.js';

// Resilient in-memory fallback storage
export const memoryStore = {
  users: [],
  inquiries: [],
  blogPosts: [],
  applications: [],
  demoRequests: [],
  settings: {
    companyName: 'TECHOFAY GLOBAL VENTURES',
    tagline: 'Engineering the Future, One Solution at a Time',
    email: 'contact@techofay.com',
    phone: '+1 (800) 555-8324',
    address: 'One World Trade Center, Suite 8500, New York, NY 10007',
    smtpHost: 'smtp.gmail.com',
    smtpPort: '587',
    socials: {
      linkedin: 'https://linkedin.com/company/techofay',
      twitter: 'https://twitter.com/techofay',
      github: 'https://github.com/techofay',
      youtube: 'https://youtube.com/@techofay',
      instagram: 'https://instagram.com/techofay'
    }
  }
};

const initialBlogPosts = [
  {
    title: 'Zero Trust Architecture in Enterprise Cloud Environments',
    slug: 'zero-trust-architecture-enterprise-cloud',
    category: 'Cybersecurity',
    excerpt: 'How leading Fortune 500 enterprises are pivoting from perimeter defense to identity-aware, micro-segmented Zero Trust security models.',
    content: `
      <h2>The Death of the Traditional Perimeter</h2>
      <p>Modern distributed enterprises no longer operate inside a fortified fortress. With cloud infrastructure, remote workforces, and multi-tenant SaaS architectures, the perimeter has dissolved. The perimeter is now identity, telemetry, and continuous validation.</p>
      
      <h3>Core Pillars of Zero Trust</h3>
      <ul>
        <li><strong>Never Trust, Always Verify:</strong> Explicitly authenticate and authorize based on all available data points, including user identity, location, device health, service or workload, data classification, and anomalies.</li>
        <li><strong>Implement Least Privilege Access:</strong> Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA), risk-based adaptive policies, and data protection.</li>
        <li><strong>Assume Breach:</strong> Minimize blast radius for breaches and prevent lateral movement by segmenting access by network, user, devices, and application awareness.</li>
      </ul>

      <h3>Practical Implementation Steps</h3>
      <p>At TECHOFAY GLOBAL VENTURES, our cybersecurity division deploys automated microsegmentation combined with automated eBPF network observability to enforce real-time policy adjustments across multi-cloud environments.</p>
    `,
    author: {
      name: 'Elena Rostova',
      role: 'Chief Information Security Officer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80'
    },
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    tags: ['Cybersecurity', 'Zero Trust', 'Cloud Security', 'DevSecOps'],
    readTime: '7 min read',
    status: 'Published',
    featured: true,
    views: 1420
  },
  {
    title: 'Agentic AI and Autonomous Workflows: The 2025 Enterprise Shift',
    slug: 'agentic-ai-autonomous-workflows-2025',
    category: 'AI & Automation',
    excerpt: 'Moving beyond single prompts: Multi-agent systems that autonomously reason, verify, and orchestrate complex enterprise operations.',
    content: `
      <h2>Beyond Simple LLM Chatbots</h2>
      <p>The first wave of generative AI was conversational. The second wave is autonomous and agentic. Rather than having humans manually prompt and copy-paste results, Agentic AI systems execute multi-step workflows with planning, memory, and automated error-recovery.</p>
      
      <h3>Why Enterprise Teams are Adopting Agentic Loops</h3>
      <p>Autonomous agents interact with production databases, APIs, ERP systems, and internal wikis. They don't just draft replies; they perform root cause diagnosis, execute SQL migrations with safety guardrails, and trigger reconciliation tasks.</p>
      
      <h3>Guardrails and Determinism</h3>
      <p>At TECHOFAY, our AI engineering practice builds strict schema validation and deterministic gates around non-deterministic LLMs, guaranteeing 99.9% reliability for mission-critical operations.</p>
    `,
    author: {
      name: 'Dr. Marcus Vance',
      role: 'Head of AI Engineering',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80'
    },
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['AI', 'Agentic Workflows', 'LLM', 'Enterprise Automation'],
    readTime: '6 min read',
    status: 'Published',
    featured: true,
    views: 2890
  },
  {
    title: 'Scaling Microservices to 100M Requests/Day with Rust and Go',
    slug: 'scaling-microservices-100m-requests-rust-go',
    category: 'Cloud Architecture',
    excerpt: 'Architectural lessons learned from re-engineering bottlenecked services into low-latency, memory-safe high throughput pipelines.',
    content: `
      <h2>High Throughput Engineering</h2>
      <p>When handling global API traffic at scale, every millisecond of garbage collection pause translates to lost revenue and customer frustration. We explore how migrating critical ingress paths from legacy stacks to Rust and Go transformed throughput.</p>
      
      <h3>Key Architectural Paradigms</h3>
      <ul>
        <li>Zero-copy serialization with Protocol Buffers</li>
        <li>Event-driven architecture with Apache Kafka and Redis streams</li>
        <li>Connection pooling and async non-blocking I/O</li>
      </ul>
    `,
    author: {
      name: 'Tariq Al-Mansoor',
      role: 'VP of Distributed Infrastructure',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80'
    },
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    tags: ['Go', 'Rust', 'Microservices', 'Kubernetes'],
    readTime: '9 min read',
    status: 'Published',
    featured: false,
    views: 950
  }
];

const initialInquiries = [
  {
    fullName: 'Sophia Sterling',
    email: 's.sterling@apexfinance.com',
    phone: '+1 (212) 555-0192',
    companyName: 'Apex Financial Holdings',
    service: 'Cybersecurity',
    budget: '$50,000+',
    timeline: 'Immediate (< 1 Month)',
    message: 'We are seeking a comprehensive SOC2 Type II compliance audit, penetration testing of our trading gateway, and 24/7 managed detection and response (MDR).',
    referralSource: 'Industry Conference',
    status: 'New',
    createdAt: new Date(Date.now() - 3600000 * 4)
  },
  {
    fullName: 'David Chen',
    email: 'david@neurahealth.io',
    phone: '+1 (415) 555-0348',
    companyName: 'NeuraHealth AI',
    service: 'AI & Automation',
    budget: '$20,000 - $50,000',
    timeline: '1 - 3 Months',
    message: 'Looking to integrate HIPAA-compliant predictive diagnostic LLM pipelines and automated EHR data processing for our clinical trial partners.',
    referralSource: 'LinkedIn',
    status: 'In Progress',
    createdAt: new Date(Date.now() - 3600000 * 24)
  },
  {
    fullName: 'Amara Okafor',
    email: 'amara@orbitallogistics.co',
    phone: '+44 20 7946 0912',
    companyName: 'Orbital Freight UK',
    service: 'Development & Testing',
    budget: '$20,000 - $50,000',
    timeline: '3 - 6 Months',
    message: 'Need full-stack web and mobile application development with automated route optimization algorithms and IoT shipment tracking.',
    referralSource: 'Partner Referral',
    status: 'Resolved',
    createdAt: new Date(Date.now() - 3600000 * 48)
  }
];

const initialDemoRequests = [
  {
    productName: 'TechShield Pro',
    fullName: 'Jonathan Reed',
    email: 'jreed@vanguardtech.net',
    companyName: 'Vanguard Tech Solutions',
    companySize: '50-250',
    phoneNumber: '+1 (617) 555-0144',
    requirements: 'Interested in real-time endpoint monitoring and vulnerability posture dashboard.',
    status: 'Pending',
    createdAt: new Date(Date.now() - 3600000 * 8)
  },
  {
    productName: 'AutoBot AI',
    fullName: 'Claire Montgomery',
    email: 'claire@scalecommerce.co',
    companyName: 'ScaleCommerce Global',
    companySize: '250+',
    phoneNumber: '+1 (312) 555-0812',
    requirements: 'Customer support automation across Zendesk, Shopify, and WhatsApp.',
    status: 'Scheduled',
    createdAt: new Date(Date.now() - 3600000 * 36)
  }
];

export const seedDatabase = async () => {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@techofay.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'Techofay@2025!';

  if (isConnected) {
    try {
      // Seed Admin User
      const userCount = await User.countDocuments();
      if (userCount === 0) {
        const adminUser = new User({
          name: 'Super Admin',
          email: adminEmail,
          password: adminPassword,
          role: 'admin'
        });
        await adminUser.save();
        console.log(`[Seed] Created initial admin user: ${adminEmail}`);
      }

      // Seed Blog Posts
      const blogCount = await BlogPost.countDocuments();
      if (blogCount === 0) {
        await BlogPost.insertMany(initialBlogPosts);
        console.log(`[Seed] Seeded ${initialBlogPosts.length} initial blog posts`);
      }

      // Seed Inquiries
      const inquiryCount = await Inquiry.countDocuments();
      if (inquiryCount === 0) {
        await Inquiry.insertMany(initialInquiries);
        console.log(`[Seed] Seeded ${initialInquiries.length} initial inquiries`);
      }

      // Seed Demo Requests
      const demoCount = await DemoRequest.countDocuments();
      if (demoCount === 0) {
        await DemoRequest.insertMany(initialDemoRequests);
        console.log(`[Seed] Seeded ${initialDemoRequests.length} initial demo requests`);
      }
    } catch (err) {
      console.error('[Seed Error] Failed to seed MongoDB:', err.message);
    }
  }

  // Populate memoryStore as fallback
  memoryStore.users = [{
    _id: 'mem-admin-1',
    name: 'Super Admin',
    email: adminEmail,
    password: adminPassword, // will match in memory controller
    role: 'admin'
  }];
  memoryStore.blogPosts = initialBlogPosts.map((p, idx) => ({ ...p, _id: `post-${idx + 1}` }));
  memoryStore.inquiries = initialInquiries.map((i, idx) => ({ ...i, _id: `inq-${idx + 1}` }));
  memoryStore.demoRequests = initialDemoRequests.map((d, idx) => ({ ...d, _id: `demo-${idx + 1}` }));
  console.log('[Store] Resilient in-memory store initialized.');
};
