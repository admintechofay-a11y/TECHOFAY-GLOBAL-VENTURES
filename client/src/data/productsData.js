export const productsData = [
  {
    id: 'erp-management',
    name: 'ERP Management Software',
    category: 'Enterprise ERP',
    tagline: 'Unified Enterprise Resource Planning, Supply Chain, Finance & HRMS',
    badge: 'Flagship Enterprise ERP',
    description: 'A modular, high-assurance enterprise resource planning suite that synchronizes financial accounting, multi-warehouse inventory, procurement workflows, end-to-end HRMS payroll, and sales pipelines into an intelligent, real-time command center.',
    icon: 'Layers',
    features: [
      'Multi-entity financial accounting, ledger reconciliation & automated balance sheets',
      'Real-time inventory management, multi-warehouse tracking & reorder triggers',
      'End-to-end HRMS, biometric attendance integration, payroll processing & tax deductions',
      'Automated procurement lifecycle, vendor evaluation scorecards & purchase order routing',
      'Enterprise CRM, quote-to-cash pipelines, automated billing & GST/VAT invoicing',
      'Manufacturing Resource Planning (MRP), bill of materials (BOM) & production stages',
      'Executive BI dashboard with real-time P&L, cash flow projection & forecasting',
      'Role-based granular access control (RBAC), multi-factor auth & immutable audit logs'
    ],
    pricing: {
      starter: { 
        price: '₹24,999', 
        billing: '/mo for growing businesses & SMEs', 
        features: [
          'Up to 25 core users', 
          'Core Accounting & Ledger with GST compliance', 
          'Standard Inventory Management (2 warehouses)', 
          'Basic HRMS & Payroll (50 staff members)', 
          'Standard Email & Ticket SLA Support'
        ] 
      },
      pro: { 
        price: '₹64,999', 
        billing: '/mo for scaling mid-market enterprises', 
        features: [
          'Up to 150 core users', 
          'Advanced Multi-Warehouse Supply Chain & MRP', 
          'Full HRMS & Automated Payroll (500 staff)', 
          'Automated Procurement & CRM Pipeline', 
          'Custom BI Analytics Dashboards',
          '24/7 Priority SLA Support'
        ] 
      },
      enterprise: { 
        price: 'Custom', 
        billing: 'starting at ₹1,99,999 / enterprise deployment', 
        features: [
          'Unlimited enterprise users & entities', 
          'Multi-Entity Global Consolidations', 
          'Custom Manufacturing MRP Integration', 
          'Dedicated Private Cloud or On-Premise', 
          '15-Minute Critical Response SLA',
          'Custom API & Legacy ERP Migration'
        ] 
      }
    },
    metric: '99.98% Operational Accuracy',
    badgeColor: 'blue'
  },
  {
    id: 'hospital-management-system',
    name: 'Hospital Management System (HMS)',
    category: 'Healthcare',
    tagline: 'Comprehensive Digital Healthcare, EMR, OPD/IPD, Lab & Pharmacy Cloud',
    badge: 'Clinical Healthcare Suite',
    description: 'An enterprise healthcare management platform engineered to digitize hospital operations end-to-end. Bridges patient registrations, OPD/IPD workflows, electronic medical records (EMR), laboratory diagnostics (LIS), pharmacy dispensing, and insurance claims with strict data governance.',
    icon: 'Activity',
    features: [
      'Comprehensive Electronic Medical Records (EMR) with ICD-10 coding & digital prescriptions',
      'End-to-end OPD and IPD workflows, automated bed allocation & discharge summaries',
      'Integrated Laboratory Information System (LIS) with barcode specimen tracking & auto-reports',
      'Complete Hospital Pharmacy POS, batch-expiry alerts, narcotics control & inventory',
      'Automated TPA insurance processing, cashless mediclaim workflows & itemized billing',
      'Operation Theatre (OT) scheduling, surgeon logs, PACU monitoring & equipment utilization',
      'Doctor appointment scheduling, mobile patient portal & secure HD telemedicine video calls',
      'Strict HIPAA compliance, audit trails, digital prescriptions & nurse station vitals log'
    ],
    pricing: {
      starter: { 
        price: '₹18,999', 
        billing: '/mo for clinics & day-care centers', 
        features: [
          'Up to 10 doctor accounts', 
          'OPD Registration & Token Queue', 
          'Digital EMR & Prescriptions', 
          'Clinic Pharmacy Billing', 
          'Patient SMS/WhatsApp Reminders'
        ] 
      },
      pro: { 
        price: '₹49,999', 
        billing: '/mo for hospitals up to 100 beds', 
        features: [
          'Up to 50 doctor & nurse accounts', 
          'Full OPD & IPD Bed Allocation', 
          'Integrated Lab (LIS) & Pharmacy POS', 
          'TPA Insurance & Cashless Billing', 
          'Operation Theatre (OT) Scheduling',
          '24/7 Healthcare Technical Support'
        ] 
      },
      enterprise: { 
        price: 'Custom', 
        billing: 'starting at ₹1,49,999 / medical chains', 
        features: [
          'Unlimited hospital beds & departments', 
          'PACS / DICOM Imaging Integration', 
          'Multi-Branch Centralized Database', 
          'Custom HL7 / FHIR Integration', 
          'Dedicated Healthcare Account Lead',
          'NABH & JCI Compliance Certification'
        ] 
      }
    },
    metric: '100% HIPAA & HL7 Compliant',
    badgeColor: 'rose'
  },
  {
    id: 'school-management-software',
    name: 'School Management Software',
    category: 'Education',
    tagline: 'Complete School ERP, Academic LMS, Student Lifecycle & Campus Operations',
    badge: 'Campus Intelligence System',
    description: 'An all-in-one educational ERP unifying academic scheduling, student admissions, online fee collection, automated gradebooks, parent communication portals, library operations, and biometric campus security for modern schools and colleges.',
    icon: 'GraduationCap',
    features: [
      'Comprehensive student lifecycle: online admissions, inquiry tracking, enrollment & alumni records',
      'Digital fee management: online payment gateways, automated receipts, fee concessions & defaulter alerts',
      'Dynamic timetable generation with automated teacher substitution & room conflict detection',
      'Examination management: admit cards, question banks, online assessments & automated report cards',
      'Native iOS & Android Parent & Student mobile apps with real-time push notifications',
      'RFID & GPS school bus fleet tracking with live route maps and pickup alerts for parents',
      'Digital campus library cataloging with RFID book issue/return & online digital repository',
      'Biometric teacher & staff attendance, leave management workflows & payroll generation'
    ],
    pricing: {
      starter: { 
        price: '₹8,999', 
        billing: '/mo for schools up to 500 students', 
        features: [
          'Up to 500 students', 
          'Student & Staff Profile Management', 
          'Digital Fee Collection & Receipts', 
          'Academic Timetable Generator', 
          'Standard Parent SMS/WhatsApp Alerts'
        ] 
      },
      pro: { 
        price: '₹24,999', 
        billing: '/mo for schools up to 2,500 students', 
        features: [
          'Up to 2,500 students', 
          'Parent & Student Mobile Apps', 
          'Automated Exam & Report Cards', 
          'GPS School Bus Tracking', 
          'Library & Inventory Management',
          'Priority Teacher Support'
        ] 
      },
      enterprise: { 
        price: 'Custom', 
        billing: 'starting at ₹79,999 / institution group', 
        features: [
          'Unlimited students & branches', 
          'Multi-Campus Centralized Finance', 
          'Custom University Grading Schemas', 
          'LMS & Online Video Classroom Sync', 
          'Custom White-Label Mobile App',
          'Dedicated Implementation Specialist'
        ] 
      }
    },
    metric: '450,000+ Students Managed',
    badgeColor: 'violet'
  },
  {
    id: 'hotel-management-software',
    name: 'Hotel Management Software (HMS)',
    category: 'Hospitality',
    tagline: 'Property Management (PMS), OTA Channel Manager, POS & Guest Concierge',
    badge: 'Hospitality PMS & Channels',
    description: 'A modern cloud property management system (PMS) designed for boutique hotels, luxury resorts, and hotel chains. Consolidates front-desk reservations, 2-way OTA channel sync, F&B point-of-sale, housekeeping dispatch, and automated night audits.',
    icon: 'Building2',
    features: [
      'Visual interactive front-desk calendar grid for quick reservations, walk-ins & express check-out',
      'Real-time 2-way Channel Manager syncing rates and availability with Booking.com, Agoda, Expedia & MakeMyTrip',
      'Integrated Restaurant, Room Service, Banquet & Bar Point of Sale (POS) with Kitchen Order Ticketing (KOT)',
      'Housekeeping mobile dashboard with real-time room cleaning status & maintenance alerts',
      'Banquet, conference hall & event booking management with customizable catering packages',
      'Guest CRM capturing guest preferences, history, VIP tags & automated satisfaction surveys',
      'Automated Night Audit engine with daily revenue reconciliation, ADR & RevPAR analytics',
      'Keycard door lock encoder integration, digital folio invoicing & contactless QR-code guest ordering'
    ],
    pricing: {
      starter: { 
        price: '₹12,999', 
        billing: '/mo for boutique stays (up to 30 rooms)', 
        features: [
          'Up to 30 rooms managed', 
          'Front-Desk Reservation Grid', 
          'Direct Booking Engine Widget', 
          'Basic Restaurant POS (1 terminal)', 
          'Standard Folio & Invoicing'
        ] 
      },
      pro: { 
        price: '₹34,999', 
        billing: '/mo for hotels & resorts (up to 120 rooms)', 
        features: [
          'Up to 120 rooms managed', 
          '2-Way OTA Channel Manager Sync', 
          'Full Restaurant, Bar & Room Service POS', 
          'Housekeeping Staff Mobile App', 
          'Keycard Door Lock Integration',
          'Automated Daily Night Audit'
        ] 
      },
      enterprise: { 
        price: 'Custom', 
        billing: 'starting at ₹1,19,999 / resort chains', 
        features: [
          'Unlimited rooms & multi-properties', 
          'Centralized Reservation System (CRS)', 
          'Enterprise Guest Loyalty Program', 
          'Custom ERP & Accounting Sync', 
          '24/7 Dedicated Hospitality SLA Hotline',
          'On-site Training & Setup'
        ] 
      }
    },
    metric: '99.95% Booking Channel Uptime',
    badgeColor: 'emerald'
  },
  {
    id: 'transport-fleet-management',
    name: 'Transport & Fleet Management Software',
    category: 'Logistics & Fleet',
    tagline: 'Live GPS Telematics, AI Dynamic Routing, Fuel Audits & Dispatch Automation',
    badge: 'Fleet Logistics Telematics',
    description: 'A heavy-duty transport and fleet telemetry platform empowering logistics carriers, transit operators, and supply chain networks with real-time GPS tracking, automated dispatch scheduling, fuel theft detection, driver safety scorecards, and maintenance lifecycle logs.',
    icon: 'Truck',
    features: [
      'Live real-time GPS vehicle tracking with custom geofences, speed alerts & route replay history',
      'AI-powered dynamic route optimization reducing travel time, toll expenses, and fuel consumption',
      'High-precision fuel telemetry sensor integration for fuel theft alerts & consumption anomaly curves',
      'Driver behavior telematics: harsh acceleration, hard braking, sharp turns & safety scoring',
      'Preventive maintenance scheduler, automated tyre rotation tracking & digital inspection checklists',
      'Automated dispatch scheduling, consignment manifests, electronic Proof of Delivery (e-POD)',
      'Vehicle documentation vault: automated renewal reminders for insurance, fitness & pollution permits',
      'Multi-depot logistics hub management with shipper tracking portal and SMS milestone updates'
    ],
    pricing: {
      starter: { 
        price: '₹11,999', 
        billing: '/mo for small fleets (up to 15 vehicles)', 
        features: [
          'Up to 15 active vehicles', 
          'Live GPS Tracking & Geofences', 
          'Trip History & Playback (30 days)', 
          'Speed & Idle Time Alerts', 
          'Basic Vehicle Document Reminders'
        ] 
      },
      pro: { 
        price: '₹29,999', 
        billing: '/mo for commercial fleets (up to 75 vehicles)', 
        features: [
          'Up to 75 active vehicles', 
          'AI Route Optimization Engine', 
          'Fuel Sensor Telemetry & Theft Detection', 
          'Driver Safety Behavior Scorecards', 
          'Preventive Maintenance Scheduling',
          'Electronic Proof of Delivery (e-POD)'
        ] 
      },
      enterprise: { 
        price: 'Custom', 
        billing: 'starting at ₹99,999 / enterprise fleet', 
        features: [
          'Unlimited vehicles & heavy assets', 
          'Multi-Depot Dispatch Orchestrator', 
          'CAN-bus & OBD-II Engine Diagnostics', 
          'Custom Transport ERP Integration', 
          'Real-time Shipper Milestone API',
          '24/7 Dedicated Logistics Hotline'
        ] 
      }
    },
    metric: '35% Average Fuel Cost Reduction',
    badgeColor: 'cyan'
  }
];
