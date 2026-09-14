export const servicesData = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Zero Trust',
    shortDesc: 'Military-grade defense architectures, SOC-as-a-Service, automated penetration testing, and compliance certification for global enterprises.',
    icon: 'ShieldCheck',
    badge: 'Enterprise Defense',
    heroTagline: 'Uncompromising Cybersecurity for Mission-Critical Infrastructure',
    overview: 'In an era of sophisticated state-sponsored attacks and automated threat actors, traditional perimeter defenses are obsolete. Techofay Global Ventures delivers comprehensive Zero Trust architectures, continuous red/blue teaming, and 24/7 autonomous SOC monitoring to safeguard enterprise assets across multi-cloud environments.',
    servicesOffered: [
      { name: 'Penetration Testing & VAPT', desc: 'Thorough vulnerability assessment and manual penetration testing for web apps, mobile apps, and cloud networks.' },
      { name: 'SOC-as-a-Service (24/7/365)', desc: 'Real-time telemetry ingestion, threat hunting, and automated incident mitigation powered by AI-driven SIEM.' },
      { name: 'Cloud Security & Compliance', desc: 'Audit readiness and continuous posture management for ISO 27001, SOC2 Type II, HIPAA, PCI-DSS, and GDPR.' },
      { name: 'Zero Trust Architecture Design', desc: 'Micro-segmentation, identity-aware proxies, and granular least-privilege access across distributed teams.' },
      { name: 'Endpoint Detection & Response (EDR)', desc: 'Next-gen behavioral telemetry and automated containment across all employee endpoints and server workloads.' },
      { name: 'Incident Response & Digital Forensics', desc: 'Rapid containment squad with SLA-backed 15-minute emergency mobilization for ransomware and breach incidents.' },
      { name: 'Red Team / Blue Team Adversarial Drills', desc: 'Full-spectrum simulated attack campaigns testing physical, human, and digital organizational defenses.' },
      { name: 'Security Awareness & Phishing Simulations', desc: 'Gamified employee training and automated simulated spear-phishing campaigns with detailed risk scoring.' }
    ],
    tools: ['CrowdStrike', 'Splunk', 'Nessus', 'Metasploit', 'Wireshark', 'Burp Suite Pro', 'Wazuh', 'Palo Alto Networks', 'Tenable.io'],
    stats: [
      { label: 'Threats Blocked Daily', value: '4.8M+' },
      { label: 'Average SLA Response', value: '< 15 mins' },
      { label: 'Compliance Pass Rate', value: '100%' },
      { label: 'Audits Conducted', value: '350+' }
    ],
    process: [
      { step: '01', title: 'Reconnaissance & Threat Modeling', desc: 'Comprehensive mapping of attack surfaces, cloud assets, and dark web exposure.' },
      { step: '02', title: 'Adversarial Vulnerability Assessment', desc: 'Deep automated scanning coupled with expert manual exploitation techniques.' },
      { step: '03', title: 'Remediation & Hardening', desc: 'Patch prioritization, configuration hardening, and Zero Trust microsegmentation.' },
      { step: '04', title: 'Continuous Autonomous Monitoring', desc: '24/7 telemetry ingestion and behavioral anomaly detection across endpoints.' }
    ]
  },
  {
    id: 'development',
    title: 'Engineering & QA Testing',
    shortDesc: 'Full-cycle modern software engineering, cloud-native microservices, mobile apps, and automated QA pipelines built for scale.',
    icon: 'Code2',
    badge: 'High-Velocity Dev',
    heroTagline: 'Resilient, Scalable Software Architectures Engineered for Billions',
    overview: 'We build ultra-fast, maintainable, and high-concurrency software products. From enterprise web applications to mission-critical distributed APIs, our senior engineering teams utilize modern frameworks, clean architecture, and automated CI/CD testing pipelines to ensure zero downtime.',
    servicesOffered: [
      { name: 'Custom Enterprise Web Applications', desc: 'High-performance SPAs and server-rendered portals built with React, Vue, Next.js, and TypeScript.' },
      { name: 'Cross-Platform Mobile Development', desc: 'Fluid, native-grade iOS and Android mobile solutions built with React Native and Flutter.' },
      { name: 'Distributed Backend & Microservices', desc: 'High-throughput APIs designed in Node.js, Go, Rust, and Python handling millions of concurrent requests.' },
      { name: 'Enterprise Headless CMS & E-Commerce', desc: 'Scalable commerce and content architectures leveraging Shopify Plus, WooCommerce, Strapi, and Contentful.' },
      { name: 'Automated End-to-End QA Testing', desc: 'Full test suites using Playwright, Cypress, and Selenium with automated regression runs in CI/CD.' },
      { name: 'Performance & Load Testing', desc: 'Rigorous stress, spike, and soak testing using k6 and JMeter to ensure peak traffic reliability.' },
      { name: 'DevOps & GitOps Pipeline Automation', desc: 'Automated build, test, containerize, and deploy workflows using GitHub Actions, Docker, and Kubernetes.' },
      { name: 'Architecture Audits & Technical Refactoring', desc: 'Deconstruction of legacy monoliths into decoupled, maintainable service-oriented architectures.' }
    ],
    tools: ['React', 'TypeScript', 'Node.js', 'Go', 'Python', 'Flutter', 'Docker', 'Kubernetes', 'Playwright', 'PostgreSQL', 'Redis'],
    stats: [
      { label: 'Uptime Reliability', value: '99.99%' },
      { label: 'Production Releases', value: '1,200+' },
      { label: 'Code Test Coverage', value: '> 90%' },
      { label: 'Global Active Users Served', value: '45M+' }
    ],
    process: [
      { step: '01', title: 'System Architecture Design', desc: 'Domain-driven design, data modeling, API contract definition, and capacity planning.' },
      { step: '02', title: 'Agile Sprint Implementation', desc: 'Bi-weekly sprint cycles with continuous integration and real-time client demo staging.' },
      { step: '03', title: 'Automated QA & Chaos Testing', desc: 'Rigorous automated unit, integration, end-to-end, and performance validation.' },
      { step: '04', title: 'Zero-Downtime Deployment', desc: 'Blue/green or canary production releases with automated rollback triggers.' }
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Intelligent Automation',
    shortDesc: 'Custom LLM agents, predictive machine learning models, computer vision systems, and autonomous workflow bots.',
    icon: 'Bot',
    badge: 'Next-Gen Cognitive Tech',
    heroTagline: 'Empower Your Enterprise with Autonomous Intelligence',
    overview: 'Techofay Global Ventures converts raw data into actionable enterprise intelligence. We engineer production-grade AI agents, fine-tune domain-specific foundation models, and automate complex knowledge-work processes with deterministic guardrails and strict security standards.',
    servicesOffered: [
      { name: 'Custom Enterprise LLM & Agentic Systems', desc: 'Autonomous multi-agent workflows with tool use, vector memory, and retrieval-augmented generation (RAG).' },
      { name: 'Proprietary ML Model Training & Fine-Tuning', desc: 'Domain-specific fine-tuning on PyTorch and Hugging Face with optimized inference latency.' },
      { name: 'Intelligent Process Automation (IPA)', desc: 'Autonomous processing of invoices, legal agreements, and logistics documents using NLP and OCR.' },
      { name: 'Robotic Process Automation (RPA)', desc: 'Seamless integration with UiPath, Automation Anywhere, and custom event-driven workers.' },
      { name: 'Computer Vision & Visual Telemetry', desc: 'Real-time defect detection, object tracking, and facial verification using YOLO and OpenCV.' },
      { name: 'Predictive Analytics & Forecasting Engines', desc: 'Time-series forecasting for supply chains, inventory demand, and financial risk mitigation.' },
      { name: 'Conversational AI & Multilingual Voice Agents', desc: 'Hyper-realistic human-like voice and chat agents with context retention and CRM sync.' },
      { name: 'Enterprise AI Governance & Safety', desc: 'Strict safety filters, hallucination detection, prompt injection defense, and PII masking.' }
    ],
    tools: ['PyTorch', 'TensorFlow', 'LangChain', 'OpenAI', 'Anthropic Claude', 'Hugging Face', 'Pinecone', 'Weaviate', 'n8n', 'Make.com'],
    stats: [
      { label: 'Process Efficiency Gain', value: '450%' },
      { label: 'Tokens Processed Monthly', value: '12B+' },
      { label: 'Data Accuracy Rate', value: '99.4%' },
      { label: 'Custom Models Deployed', value: '180+' }
    ],
    process: [
      { step: '01', title: 'Feasibility & Data Pipeline Audit', desc: 'Evaluating dataset readiness, privacy requirements, and ROI potential.' },
      { step: '02', title: 'Model Prototyping & RAG Scaffolding', desc: 'Building vector indices, embedding strategies, and prompt evaluation benchmarks.' },
      { step: '03', title: 'Deterministic Guardrail Integration', desc: 'Enforcing strict validation schemas, latency caps, and hallucination checks.' },
      { step: '04', title: 'Production Orchestration & Monitoring', desc: 'Continuous telemetry on token costs, latency distribution, and semantic drift.' }
    ]
  },
  {
    id: 'saas-products',
    title: 'Techofay Software Products',
    shortDesc: 'Suite of 5 industry-grade enterprise software solutions: ERP, Hospital Management, School Management, Hotel PMS, and Fleet Telematics.',
    icon: 'Boxes',
    badge: 'Enterprise Software',
    heroTagline: 'Battle-Tested Software Platforms Ready to Power Your Business',
    overview: 'Accelerate your digital transformation with Techofay’s pre-built, scalable enterprise software solutions. Engineered with multi-tenant cloud architecture, automated telemetry, and industry compliance, our products integrate seamlessly into existing operations with turnkey deployment.',
    servicesOffered: [
      { name: 'ERP Management Software', desc: 'Unified enterprise resource planning covering accounting, supply chain, procurement, and end-to-end HRMS.' },
      { name: 'Hospital Management System (HMS)', desc: 'HIPAA and HL7-compliant digital healthcare operating system for EMR, OPD/IPD, pharmacy, and billing.' },
      { name: 'School Management Software', desc: 'Comprehensive campus automation platform for admissions, fee collection, exams, parent app, and bus tracking.' },
      { name: 'Hotel Management Software (HMS)', desc: 'All-in-one cloud PMS with 2-way OTA channel manager, interactive front-desk grid, and restaurant POS.' },
      { name: 'Transport & Fleet Management Software', desc: 'Heavy-duty fleet telematics with live GPS tracking, AI route optimization, and fuel audit telemetry.' }
    ],
    tools: ['Enterprise ERP', 'HL7 & HIPAA EMR', 'EdTech Mobile Apps', 'OTA Channel Manager', 'GPS Fleet Telematics', 'PostgreSQL', 'Redis', 'Multi-Tenant Cloud'],
    stats: [
      { label: 'Active Enterprise Users', value: '250K+' },
      { label: 'Daily Transactions', value: '15M+' },
      { label: 'Platform Availability SLA', value: '99.98%' },
      { label: 'Industry Verticals Served', value: '5 Core' }
    ],
    process: [
      { step: '01', title: 'Product Demonstration & Pilot', desc: 'Personalized walkthrough and free 14-day enterprise trial on sandbox tenant.' },
      { step: '02', title: 'Enterprise Single Sign-On Setup', desc: 'Integration with Okta, Azure AD, or Google Workspace with role-based permissions.' },
      { step: '03', title: 'Data Migration & Webhooks', desc: 'Automated data ingestion from legacy systems and API webhook connectivity.' },
      { step: '04', title: '24/7 Dedicated Account Support', desc: 'SLA-backed technical assistance and quarterly feature roadmap reviews.' }
    ]
  },
  {
    id: 'marketing',
    title: 'Growth & Performance Marketing',
    shortDesc: 'Data-driven B2B growth engines, technical SEO, high-converting paid acquisition, and brand narrative engineering.',
    icon: 'Megaphone',
    badge: 'Predictable Growth',
    heroTagline: 'Engineering Predictable Revenue Pipelines for High-Growth Tech',
    overview: 'Tech marketing requires deep technical comprehension. Our performance marketing division pairs software engineers with growth strategists to execute programmatic SEO, account-based marketing (ABM), and high-ROI multi-channel acquisition campaigns for enterprise B2B tech companies.',
    servicesOffered: [
      { name: 'Programmatic & Technical SEO', desc: 'Core Web Vitals optimization, semantic schema architecture, and programmatic content engines.' },
      { name: 'Paid Performance Acquisition (PPC)', desc: 'Precision audience targeting on Google Search, LinkedIn Ads, YouTube, and Meta Ads.' },
      { name: 'Account-Based Marketing (ABM)', desc: 'Hyper-targeted outreach campaigns to Fortune 1000 decision-makers and C-suite executives.' },
      { name: 'Content Marketing & Technical Whitepapers', desc: 'Deep-dive technical case studies, industry benchmarks, and developer-focused docs.' },
      { name: 'Conversion Rate Optimization (CRO)', desc: 'Multi-variant landing page testing, scroll heatmaps, and funnel drop-off diagnostics.' },
      { name: 'Email Marketing & Retention Sequences', desc: 'Automated behavioral lifecycle emails, onboarding sequences, and churn prevention.' },
      { name: 'Brand Identity & Visual Storytelling', desc: 'Modern corporate re-branding, 3D motion design, and executive pitch deck styling.' },
      { name: 'Attribution & Marketing Analytics', desc: 'Multi-touch revenue attribution modeling connecting marketing spend to CRM pipeline.' }
    ],
    tools: ['Google Analytics 4', 'SEMrush', 'HubSpot', 'Segment', 'Clearbit', 'Mixpanel', 'Meta Ads Manager', 'LinkedIn Campaign Manager'],
    stats: [
      { label: 'Average Client ROI', value: '340%' },
      { label: 'Qualified Pipeline Driven', value: '₹950+ Cr' },
      { label: 'First-Page Rankings', value: '25,000+' },
      { label: 'CAC Reduction', value: '-38%' }
    ],
    process: [
      { step: '01', title: 'Market Positioning & Competitor Audit', desc: 'Keyword gap analysis, ICP profiling, and reverse-engineering top market leaders.' },
      { step: '02', title: 'Growth Engine Infrastructure Setup', desc: 'Tracking pixels, event schemas, CRM synchronization, and landing page systems.' },
      { step: '03', title: 'Rapid Experimentation & Creative Testing', desc: 'Deploying high-velocity ad creative and landing page variants across channels.' },
      { step: '04', title: 'Scale & Predictable Compounding', desc: 'Doubling down on highest-converting channels with automated budget rebalancing.' }
    ]
  },
  {
    id: 'infrastructure',
    title: 'Cloud & DevOps Infrastructure',
    shortDesc: 'Automated Kubernetes clusters, multi-cloud migration, database performance tuning, and 24/7 reliability engineering.',
    icon: 'Server',
    badge: 'Reliability & Scale',
    heroTagline: 'Unshakeable Cloud Foundations for Global Scale',
    overview: 'Downtime and sluggish latency kill enterprise momentum. Techofay Global Ventures designs, migrates, and manages resilient cloud infrastructure across AWS, Azure, and GCP. We implement GitOps, zero-downtime deployments, and FinOps practices to maximize uptime while slashing cloud waste.',
    servicesOffered: [
      { name: 'Cloud Architecture & Migration', desc: 'Zero-loss lift-and-shift or cloud-native modernization to AWS, Microsoft Azure, or GCP.' },
      { name: 'Kubernetes & Container Orchestration', desc: 'Production-ready EKS/GKE clusters with automated horizontal pod autoscaling and service mesh.' },
      { name: 'Infrastructure as Code (IaC)', desc: 'Repeatable, version-controlled cloud environments engineered with Terraform and Pulumi.' },
      { name: 'FinOps & Cloud Cost Optimization', desc: 'Auditing idle resources, reserved instance planning, and spot fleet optimization saving up to 40%.' },
      { name: 'Database Administration & Tuning', desc: 'High-availability clustering, read-replica scaling, and query tuning for Postgres, Mongo, and Redis.' },
      { name: 'Global CDN & Edge Compute Optimization', desc: 'Sub-30ms global edge caching and Cloudflare Workers deployment for static and dynamic assets.' },
      { name: 'Disaster Recovery & Multi-Region Backup', desc: 'RPO < 5 minutes and RTO < 15 minutes with automated geo-redundant failover routines.' },
      { name: '24/7 Site Reliability Engineering (SRE)', desc: 'Continuous telemetry, synthetic uptime probes, and automated self-healing alert runbooks.' }
    ],
    tools: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Terraform', 'Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'Cloudflare', 'Helm'],
    stats: [
      { label: 'Average Latency', value: '< 28ms' },
      { label: 'Average Cloud Cost Saved', value: '38%' },
      { label: 'Cluster Uptime Achieved', value: '99.999%' },
      { label: 'Migrations Completed', value: '140+' }
    ],
    process: [
      { step: '01', title: 'Infrastructure & Cost Audit', desc: 'Analyzing architecture bottlenecks, security misconfigurations, and cloud spend.' },
      { step: '02', title: 'IaC Blueprinting & Staging', desc: 'Codifying infrastructure in modular Terraform with automated security scanning.' },
      { step: '03', title: 'Zero-Downtime Data Migration', desc: 'Live data replication and DNS traffic switching with zero packet drops.' },
      { step: '04', title: 'Observability & Automated SRE', desc: 'Deploying Prometheus, Grafana, and automated anomaly alerting runbooks.' }
    ]
  }
];
