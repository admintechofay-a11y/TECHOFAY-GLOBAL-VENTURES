export const jobsData = [
  {
    id: 'frontend-dev',
    title: 'Senior Frontend Developer (React / Three.js / WebGL)',
    department: 'Engineering',
    location: 'Remote (Pan-India & Global)',
    type: 'Full-time',
    salary: '₹24 - ₹36 LPA + Equity',
    description: 'We are looking for an exceptional Senior Frontend Developer with an obsession for high-end digital aesthetics, micro-animations, and 3D web experiences using React, Three.js, and GSAP.',
    responsibilities: [
      'Architect and build immersive, responsive web applications for enterprise clients and internal SaaS products.',
      'Develop custom Three.js and WebGL shaders, particle effects, and high-performance interactive canvases.',
      'Collaborate closely with UI/UX designers to translate Figma design systems into pixel-perfect Tailwind CSS components.',
      'Optimize Web Vitals, runtime rendering performance, and bundle size across mobile and 4K displays.'
    ],
    requirements: [
      '5+ years of production experience with modern React.js, TypeScript, and state management.',
      'Demonstrated mastery of Three.js / WebGL, GSAP ScrollTrigger, and Framer Motion.',
      'Expert proficiency in CSS, Tailwind CSS, responsive layouts, and cross-browser quirks.',
      'Strong eye for visual polish, timing, easing curves, and design craft.'
    ]
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Lead Cybersecurity & Penetration Testing Analyst',
    department: 'Cybersecurity',
    location: 'Hybrid (Bengaluru / Mumbai)',
    type: 'Full-time',
    salary: '₹28 - ₹42 LPA + Performance Bonus',
    description: 'Join our elite offensive red team and SOC operations conducting rigorous adversary simulations, zero-day threat discovery, and multi-cloud vulnerability assessments for tier-1 enterprises.',
    responsibilities: [
      'Lead red team exercises, manual penetration testing, and VAPT across web, mobile, and API surfaces.',
      'Analyze telemetry in Wazuh, Splunk, and CrowdStrike to detect advanced persistent threats (APTs).',
      'Author executive-ready technical audit reports and guide enterprise dev teams through vulnerability remediation.',
      'Design Zero Trust microsegmentation blueprints for AWS, Azure, and on-premises client networks.'
    ],
    requirements: [
      'OSCP, OSWE, CISSP, or equivalent offensive security certifications.',
      '4+ years hands-on experience in manual exploitation, Burp Suite Pro, Metasploit, and network packet analysis.',
      'Deep understanding of OWASP Top 10, MITRE ATT&CK framework, and Active Directory exploitation.',
      'Exceptional communication skills to articulate technical risk to C-suite stakeholders.'
    ]
  },
  {
    id: 'aiml-engineer',
    title: 'Staff AI/ML Engineer (Agentic Systems & LLMs)',
    department: 'Artificial Intelligence',
    location: 'Remote (Pan-India & Global)',
    type: 'Full-time',
    salary: '₹35 - ₹55 LPA + Stock Grants',
    description: 'Build the next generation of autonomous enterprise agents. You will design multi-agent feedback loops, fine-tune domain-specific foundation models, and engineer low-latency RAG vector pipelines.',
    responsibilities: [
      'Architect multi-agent autonomous reasoning workflows with planning, memory, and automated error-recovery.',
      'Implement high-throughput RAG systems utilizing vector databases (Pinecone, Weaviate) and hybrid search.',
      'Fine-tune open-weight models (Llama 3, Mistral) on domain datasets using LoRA/QLoRA in PyTorch.',
      'Deploy deterministic safety guardrails preventing prompt injection and data hallucination in production.'
    ],
    requirements: [
      'Master’s or PhD in Computer Science, Machine Learning, or equivalent demonstrable industry track record.',
      'Strong expertise in Python, PyTorch, LangChain/LlamaIndex, Hugging Face Transformers, and vLLM.',
      'Proven experience building and shipping production-grade LLM applications at scale.',
      'Solid foundations in distributed systems, vector mathematics, and API scalability.'
    ]
  },
  {
    id: 'marketing-specialist',
    title: 'Digital Marketing & Growth Specialist',
    department: 'Marketing',
    location: 'Hybrid (Delhi NCR / Mumbai)',
    type: 'Full-time',
    salary: '₹18 - ₹28 LPA + High-Performance Incentives',
    description: 'Lead B2B demand generation, paid acquisition, and programmatic SEO initiatives for Techofay’s software products and enterprise consulting services across global markets.',
    responsibilities: [
      'Manage substantial monthly ad spend across Google Ads, LinkedIn Campaign Manager, and Meta Ads.',
      'Execute technical SEO strategies, Core Web Vitals optimizations, and content cluster architectures.',
      'Build multi-touch attribution dashboards connecting ad impressions to CRM pipeline revenue.',
      'Run rapid A/B experiments on landing pages to systematically improve enterprise conversion rates.'
    ],
    requirements: [
      '4+ years driving measurable B2B tech growth, SaaS demand gen, or enterprise agency campaigns.',
      'Deep expertise with Google Analytics 4, HubSpot, SEMrush, and Segment.',
      'Strong analytical mindset with proficiency in SQL or Python for marketing data modeling.',
      'Superb copywriting capabilities for developer and C-suite audiences.'
    ]
  },
  {
    id: 'qa-engineer',
    title: 'Principal QA Automation Engineer',
    department: 'Quality Assurance',
    location: 'Remote (India)',
    type: 'Full-time',
    salary: '₹20 - ₹32 LPA',
    description: 'Spearhead automated testing strategies across all client and internal web applications, mobile apps, and distributed backend microservices.',
    responsibilities: [
      'Build and maintain robust end-to-end automated test suites using Playwright, TypeScript, and Cypress.',
      'Integrate automated regression and smoke test gates into GitHub Actions and GitLab CI/CD pipelines.',
      'Conduct rigorous load, stress, and chaos testing using k6, JMeter, and Grafana dashboards.',
      'Champion a test-driven development culture, establishing high standards for unit and integration test coverage.'
    ],
    requirements: [
      '5+ years in software quality engineering with extensive automation development.',
      'Proficiency in TypeScript/JavaScript, Python, or Go for test framework development.',
      'Hands-on experience with containerized test execution in Docker and Kubernetes.',
      'Obsessive attention to detail regarding edge cases, network flakiness, and UI regressions.'
    ]
  },
  {
    id: 'devops-sre',
    title: 'Senior DevOps & Site Reliability Engineer (Kubernetes / IaC)',
    department: 'Infrastructure',
    location: 'Hybrid (Bengaluru / Pune)',
    type: 'Full-time',
    salary: '₹26 - ₹38 LPA + Equity',
    description: 'Design and manage immutable, multi-cloud Kubernetes clusters with automated GitOps workflows, automated failovers, and real-time distributed telemetry.',
    responsibilities: [
      'Provision and manage multi-region AWS and Azure infrastructure using modular Terraform and Helm.',
      'Maintain production EKS/GKE clusters with automated horizontal pod autoscaling and Istio service mesh.',
      'Implement comprehensive Prometheus, Grafana, and OpenTelemetry monitoring and alerting runbooks.',
      'Drive FinOps audits, reducing cloud waste through spot instances, ARM processors, and right-sizing.'
    ],
    requirements: [
      '4+ years supporting high-traffic, 24/7 mission-critical cloud infrastructure.',
      'Expertise in Kubernetes administration (CKA certification preferred).',
      'Proficiency with Terraform, Docker, Linux internals, networking, and bash scripting.',
      'Proven experience participating in on-call rotations and resolving high-severity production incidents.'
    ]
  }
];

export const culturePerks = [
  { icon: 'Globe', title: 'Work From Anywhere', desc: 'Remote-first culture with generous home office infrastructure stipends and high-speed fiber subsidies.' },
  { icon: 'Zap', title: 'Bleeding-Edge Tech Stack', desc: 'Work with the latest AI foundation models, Rust, Three.js, and high-concurrency cloud clusters.' },
  { icon: 'TrendingUp', title: 'Generous Equity & Bonuses', desc: 'Every full-time team member receives company equity options and biannual performance bonuses.' },
  { icon: 'HeartPulse', title: 'Comprehensive Health Cover', desc: 'Premium medical insurance (₹10 Lakhs cashless cover) for you, your spouse, children, and parents.' },
  { icon: 'BookOpen', title: 'Continuous Upskilling Budget', desc: '₹2,50,000 annual budget for global certifications (AWS, OSCP, CKA), conferences, and masterclasses.' },
  { icon: 'Coffee', title: 'Annual Team Summits', desc: 'All-expenses-paid annual leadership and engineering summits in Goa, Dubai, Bali, and Bengaluru.' }
];
