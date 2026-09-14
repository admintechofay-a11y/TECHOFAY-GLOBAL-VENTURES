# 🚀 0-Cost Real-Time Production Deployment Guide
## TECHOFAY GLOBAL VENTURES

This guide explains how to deploy the entire **TECHOFAY GLOBAL VENTURES** platform (Frontend, Backend API, Real-Time WebSockets, and Database) live on the internet at **₹0 / $0 permanent monthly cost**.

---

### 🏗️ The 100% Zero-Cost Architecture Overview

| Component | Free Provider | Free Tier Specification | Cost |
| :--- | :--- | :--- | :--- |
| **Frontend** | **Vercel** | 100GB/mo Bandwidth, Global Edge CDN, Automated SSL, Instant Git Deployments | **₹0 / mo** |
| **Backend & WebSockets** | **Render.com** | 512MB RAM, Node.js runtime, Native Socket.io WebSockets, Free SSL URL | **₹0 / mo** |
| **Database** | **MongoDB Atlas** | M0 Free Cluster (512MB Storage, Automated Backups, AWS Mumbai Region) | **₹0 / mo** |
| **Security & DNS** | **Cloudflare** | Free DDoS Mitigation, Universal SSL, Edge Caching, Free DNS Management | **₹0 / mo** |
| **Transactional Email** | **Resend / Brevo** | 3,000 free transactional emails / month with custom domain sending | **₹0 / mo** |
| **TOTAL RUNNING COST** | | **Enterprise Grade Reliability** | **₹0 / MONTH** |

---

### 📋 Pre-Requisite
Push this project to a private or public repository on [GitHub](https://github.com).

```bash
git init
git add .
git commit -m "Production release: Techofay Global Ventures"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/techofay-platform.git
git push -u origin main
```

---

### Step 1: Deploy MongoDB Database (Forever Free M0)

1. Sign up at [mongodb.com/atlas](https://www.mongodb.com/atlas).
2. Click **Create Deployment** and select the **M0 Free** cluster.
3. Choose the Cloud Provider **AWS** and Region **ap-south-1 (Mumbai)** for lowest latency in India.
4. Under **Database Access**, create a user (e.g. `techofay_admin` with a strong password).
5. Under **Network Access**, click **Add IP Address** and choose **Allow Access from Anywhere (`0.0.0.0/0`)**.
6. Click **Connect** &rarr; **Drivers (Node.js)** and copy your Connection String:
   ```text
   mongodb+srv://techofay_admin:<password>@cluster0.xxxxx.mongodb.net/techofay_db?retryWrites=true&w=majority
   ```

---

### Step 2: Deploy Backend & WebSockets on Render.com (₹0)

1. Sign up for free at [render.com](https://render.com).
2. Click **New +** &rarr; **Web Service**.
3. Connect your GitHub repository.
4. Configure settings:
   - **Name:** `techofay-api`
   - **Root Directory:** `server`
   - **Environment:** `Node`
   - **Region:** `Singapore` (Closest low-latency free region to India)
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Instance Type:** `Free`
5. Click **Advanced** &rarr; **Add Environment Variables**:
   - `NODE_ENV`: `production`
   - `PORT`: `5000`
   - `MONGO_URI`: *(Paste your MongoDB Atlas Connection String from Step 1)*
   - `JWT_SECRET`: *(Generate any 32-character random string)*
   - `ADMIN_EMAIL`: `admin@techofay.com`
   - `ADMIN_PASSWORD`: `Techofay@2025!`
6. Click **Deploy Web Service**.
7. Once deployed, copy your free backend URL:
   ```text
   https://techofay-api.onrender.com
   ```

---

### Step 3: Deploy Frontend on Vercel (₹0)

1. Sign up for free at [vercel.com](https://vercel.com).
2. Click **Add New...** &rarr; **Project**.
3. Import your GitHub repository.
4. In the Project Setup:
   - **Framework Preset:** `Vite`
   - **Root Directory:** Click Edit and select `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Expand **Environment Variables** and add:
   - **Name:** `VITE_API_URL`
   - **Value:** `https://techofay-api.onrender.com` *(Your Render URL from Step 2)*
6. Click **Deploy**.
7. In ~30 seconds, your site is live with a free URL:
   ```text
   https://techofay-platform.vercel.app
   ```

---

### Step 4: Add Your Custom Domain (Optional & ₹0)

If you purchase a domain like `techofay.com` or `techofay.in` (from Namecheap, Hostinger, or GoDaddy):
1. In Vercel, go to **Settings &rarr; Domains** and add `techofay.com`.
2. Vercel will give you two DNS records (an `A` record pointing to `76.76.21.21` and a `CNAME` for `www`).
3. Add these records in your DNS manager or use [Cloudflare](https://cloudflare.com) for free Edge DDoS defense and CDN caching.
4. Vercel will automatically provision a free SSL Certificate (HTTPS) in 60 seconds!

---

### 🛡️ Production Verification Checklist

1. **Live Website**: Open the Vercel URL and check that the live telemetry pill shows `🟢 Mumbai ap-south-1 Live`.
2. **Indian Rupee (₹ INR) Pricing**:
   - Navigate to `/products`.
   - Verify the 5 Techofay products display Indian Rupees (₹24,999/mo, ₹18,999/mo, etc.).
   - Test the **Interactive ROI Forecaster** with the rupee sliders.
3. **Instant Demo Pass**:
   - Click **Book Demo** on any product.
   - Fill out the form and submit.
   - Verify you instantly receive a digital **Demo Pass (`TF-IN-XXXXXX`)** with assigned architect and time slot.
4. **Real-Time Admin Hub**:
   - Navigate to `/admin/login`.
   - Sign in with `admin@techofay.com` / `Techofay@2025!`.
   - In a separate browser tab, submit a contact message or demo request.
   - Notice the **Admin Portal plays a gentle notification chime, increments the notification bell badge, and displays the new lead in real-time without reloading the page**!
5. **WhatsApp Quick Connect**:
   - Tap the floating green badge at the bottom right.
   - Tap any software vertical to launch a direct pre-populated WhatsApp chat.
