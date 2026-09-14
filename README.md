# TECHOFAY GLOBAL VENTURES — Enterprise Web Platform

> *"Engineering the Future, One Solution at a Time"*

A complete, professional-grade full-stack corporate web platform and digital headquarters engineered for **TECHOFAY GLOBAL VENTURES**.

---

## 🌟 Key Highlights & Architectural Features

- **Dark Futuristic Design System**: Deep space navy (`#050B1F`), dark panels (`#0A1628`), electric blue (`#2B6EFA`), neon cyan (`#00D4FF`), and radiant violet (`#7B2FBE`) with Google Fonts **Orbitron** (display) and **Inter** (body).
- **Three.js 3D Visuals**:
  - **Neural Particle Network**: Cursor-interactive floating nodes connected by real-time dynamic distance lines and smooth 3D camera parallax.
  - **Cybernetic Globe**: Real-time rotating 3D sphere with glowing atmosphere, surface nodes, orbiting satellite rings, and interactive mouse drag/tilt.
- **Micro-Animations & Interactions**:
  - Animated statistics counters (500+ Clients, 6 Verticals, 12+ Countries, 98% Retention).
  - Floating glassmorphism cards with neon glowing borders on hover.
  - Infinite client marquee loop.
  - Interactive horizontal 6-step project delivery lifecycle timeline.
- **8 Comprehensive Public & Enterprise Pages**:
  1. **Landing / Home (`/`)**: Hero with 3D canvas, Stats counter, 6 Verticals, Why Choose Us, Process Timeline, Client Marquee, Testimonials, Blog Preview, and CTA Banner.
  2. **Services Overview (`/services`) & 6 Deep-Dive Routes**:
     - Cybersecurity & Zero Trust (`/services/cybersecurity`)
     - Development & QA Testing (`/services/development`)
     - AI & Intelligent Automation (`/services/ai-automation`)
     - Proprietary SaaS Products (`/services/saas-products`)
     - Growth & Performance Marketing (`/services/marketing`)
     - Cloud & Infrastructure SRE (`/services/infrastructure`)
  3. **SaaS Products Catalog (`/products`)**: 8 enterprise platforms (TechShield Pro, AutoBot AI, FlowMaster, RankPilot, DevTrack, SecureVault, DataSense, CloudGuard) with category filters, pricing tiers, and interactive Demo Request modal.
  4. **About Us (`/about`)**: Mission & Vision, Milestones timeline (2018-2025+), Core values, Leadership team with LinkedIn, Certifications, and interactive SVG Global Offices map.
  5. **Careers & Talent (`/careers`)**: Culture and benefits, 6 filterable open positions, and full application modal with resume upload (PDF/DOCX).
  6. **Blog / Research Hub (`/blog` & `/blog/:slug`)**: Search, Category filters, Table of Contents, Author profiles, Social sharing, and Related publications.
  7. **Contact Hub (`/contact`)**: Headquarters coordinates, operating hours, budget/timeline selectors, file attachments, and direct transmission to backend API.
  8. **Cyber 404 Portal (`*`)**: Futuristic error state guiding users back to mission control.
- **Protected Admin Panel (`/admin`)**:
  - **Authentication**: JWT token-based login (`/admin/login`) with bcrypt password hashing.
  - **Default Credentials**: `admin@techofay.com` / `Techofay@2025!`
  - **Dashboard Analytics**: Real-time stats cards, Recharts lead volume line chart, Recharts vertical distribution bar chart.
  - **Inquiries Management**: Search, filter by status and vertical, detail view modal, quick email reply composer, delete, and **Export to CSV**.
  - **Blog Post CRUD**: Create, edit, publish/draft toggle, and delete articles with rich HTML/markdown content.
  - **Applicant Tracking**: Review candidate applications, download/view submitted resumes, and update hiring pipeline status.
  - **Demo Requests**: Pipeline for scheduling product demonstrations.
  - **System Settings**: Update corporate contact info and change admin security password.
- **Full-Stack Node.js & Express API**:
  - Resilient database connection to MongoDB with an automated fallback in-memory store so the platform never crashes even in offline environments.
  - Multer file upload handling for resumes and inquiry RFQ attachments.
  - Nodemailer email notifications and customer auto-confirmation with Ethereal preview URLs.
  - Express rate limiting for anti-spam protection.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18+ recommended, v24 tested)
- MongoDB running locally on `mongodb://localhost:27017` (Optional: in-memory store fallback activates automatically if MongoDB is not present)

### 1. Installation

From the repository root:
```bash
# Install root, backend, and frontend dependencies
npm run install:all
```

Or individually:
```bash
cd server && npm install
cd ../client && npm install
```

### 2. Environment Variables

Check `server/.env`:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/techofay_db
JWT_SECRET=techofay_super_secret_jwt_key_2025_enterprisegrade
ADMIN_EMAIL=admin@techofay.com
ADMIN_PASSWORD=Techofay@2025!
```

### 3. Running Locally in Development

You can run both client and server simultaneously using:
```bash
npm run dev
```

Or in separate terminal tabs:

**Backend Server (Port 5000):**
```bash
cd server
npm run dev
```

**Frontend Client (Port 3000):**
```bash
cd client
npm run dev
```

Open your browser at:
- **Public Website**: [http://localhost:3000](http://localhost:3000)
- **Admin Console**: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
  - Email: `admin@techofay.com`
  - Password: `Techofay@2025!`
- **API Health**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## 📡 API Endpoint Reference

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/auth/login` | Admin login & JWT token issuance | No |
| `GET` | `/api/auth/me` | Verify authenticated session | Yes (Bearer JWT) |
| `PUT` | `/api/auth/password` | Change admin password | Yes (Bearer JWT) |
| `POST` | `/api/contact` | Submit contact inquiry (with attachment) | No (Rate limited) |
| `GET` | `/api/contact` | Fetch inquiries with status/service filters | Yes (Bearer JWT) |
| `PATCH` | `/api/contact/:id` | Update inquiry status & admin notes | Yes (Bearer JWT) |
| `POST` | `/api/contact/:id/reply` | Send email reply to client | Yes (Bearer JWT) |
| `DELETE` | `/api/contact/:id` | Delete inquiry record | Yes (Bearer JWT) |
| `GET` | `/api/contact/export-csv` | Stream CSV export of all inquiries | Yes (Bearer JWT) |
| `GET` | `/api/blog` | List published articles | No |
| `GET` | `/api/blog/:slug` | Retrieve single post & increment view count | No |
| `POST` | `/api/blog` | Create new blog post | Yes (Bearer JWT) |
| `PATCH` | `/api/blog/:id` | Update blog post | Yes (Bearer JWT) |
| `DELETE` | `/api/blog/:id` | Delete blog post | Yes (Bearer JWT) |
| `POST` | `/api/careers/apply` | Submit job application with resume file | No |
| `GET` | `/api/careers/applications`| List applicants with role/status filters | Yes (Bearer JWT) |
| `PATCH`| `/api/careers/applications/:id` | Update candidate status pipeline | Yes (Bearer JWT) |
| `POST` | `/api/demo-request` | Request SaaS platform demo | No |
| `GET` | `/api/demo-request` | List demo requests | Yes (Bearer JWT) |
| `GET` | `/api/settings/metrics` | Aggregate dashboard KPI metrics & Recharts data | Yes (Bearer JWT) |

---

## 🛡️ Security & Production Readiness

- **CORS & Rate Limiting**: Max 10 inquiry submissions/hr per IP to eliminate form abuse.
- **Sanitized Uploads**: Multer disk storage restricted to `.pdf`, `.doc`, `.docx`, and images up to 15MB.
- **Passwords**: Hashed using `bcryptjs` with salt factor 10.
- **GDPR Compliant**: Built-in persistent Cookie Consent banner.
- **Direct Support**: Floating WhatsApp quick-connect widget.

---

&copy; 2025 **TECHOFAY GLOBAL VENTURES**. All Rights Reserved.
