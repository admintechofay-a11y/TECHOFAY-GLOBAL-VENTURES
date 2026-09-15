# TECHOFAY GLOBAL VENTURES — WordPress Theme Setup & Deployment Guide

Welcome to the **TECHOFAY GLOBAL VENTURES** custom WordPress theme (`techofay-theme`). This theme converts the entire MERN stack website into an enterprise WordPress installation that allows non-technical team members to edit all content, services, SaaS products, jobs, and case studies directly from the WordPress Admin Dashboard while retaining the 3D Three.js particle hero, WebGL globe, GSAP scroll triggers, and dark navy + electric blue aesthetic.

---

## System Requirements

- **WordPress Version**: 6.0 or higher (Tested up to WordPress 6.7)
- **PHP Version**: 7.4, 8.0, 8.1, or 8.2+
- **Database**: MySQL 5.7+ or MariaDB 10.3+
- **Recommended Hosting**: 
  - *Option A*: Hostinger Business / Cloud Startup (easiest for team)
  - *Option B*: Cloudways DigitalOcean (optimal performance & staging)
  - *Option C*: WP Engine / Kinsta (managed enterprise)

---

## Phase 1 Quickstart Installation

### Step 1: Install Required Plugins
Log in to your WordPress Admin (`https://yourdomain.com/wp-admin`) and navigate to **Plugins &rarr; Add New**. Search and install:
1. **Advanced Custom Fields (ACF PRO)** (Required for custom page editing)
2. **WP Mail SMTP** (Required for contact form delivery)
3. **Yoast SEO** (For meta titles, descriptions & OpenGraph cards)
4. **W3 Total Cache** (For page caching and asset compression)
5. **Wordfence Security** (Firewall & login protection)
6. **UpdraftPlus** (Daily cloud backups to Google Drive)
7. **Custom Post Type UI** (Optional visual editor for CPTs)

*Or install all in 1 command using WP-CLI:*
```bash
wp plugin install advanced-custom-fields custom-post-type-ui wp-mail-smtp wordpress-seo w3-total-cache wordfence updraftplus --activate
```

---

### Step 2: Activate the Techofay Theme
1. Copy the `techofay-theme` folder into your WordPress installation directory:
   `/wp-content/themes/techofay-theme/`
2. In your WordPress Admin, go to **Appearance &rarr; Themes**.
3. Locate **Techofay Global Ventures** and click **Activate**.

---

### Step 3: Configure Permalinks
1. Go to **Settings &rarr; Permalinks**.
2. Under *Common Settings*, select **Post name** (`/%postname%/`).
3. Click **Save Changes**. (This enables clean URLs like `/services/cybersecurity` and `/products/erp-management`).

---

### Step 4: Set Up Home & Blog Pages
1. Go to **Pages &rarr; Add New**:
   - Title: `Home` &rarr; Publish.
   - Title: `Blog` &rarr; Publish.
2. Go to **Settings &rarr; Reading**:
   - Under *Your homepage displays*, choose **A static page**.
   - *Homepage*: Select **Home**.
   - *Posts page*: Select **Blog**.
   - Click **Save Changes**.

---

### Step 5: ACF Custom Field Sync
- Because the theme defines all custom fields programmatically in `inc/acf-fields.php`, all fields will appear **automatically** on your pages and custom post types!
- If you have ACF PRO active and wish to edit fields visually, go to **Custom Fields &rarr; Field Groups**. You will see a **Sync available** notice pointing to the theme's `acf-json/` folder. Click **Sync** to import them into your database.

---

### Step 6: Custom Post Types Registered Out-of-the-Box
The theme registers the following CPTs natively in PHP:
1. **Services** (`techofay_service`): Cybersecurity, Engineering & QA, Cloud & Infra, AI & Analytics, UI/UX, Growth Marketing.
2. **Products** (`techofay_product`): ERP Management, Hospital HMS, School Management, Hotel PMS, Fleet360.
3. **Testimonials** (`testimonial`): Client reviews, company names, star ratings.
4. **Team Members** (`team_member`): Leadership profiles, roles, social links.
5. **Careers & Jobs** (`job_opening`): Open positions, requirements, salary compensation.
6. **Client Logos** (`client_logo`): Brand partners for the home marquee.
7. **Inquiries** (`contact_inquiry`): Form leads received from the website.
8. **Career Applications** (`career_application`): Candidate submissions and resumes.

---

## What Your Non-Technical Team Can Edit (No Code Required)

| Section / Content | Where to Edit in WordPress Admin |
| :--- | :--- |
| **Homepage Hero & Headlines** | Pages &rarr; Home &rarr; Homepage Content & Sections |
| **Stats Numbers (500+, 99.98%)** | Pages &rarr; Home &rarr; Stats Bar |
| **Why Choose Us Pillars** | Pages &rarr; Home &rarr; Why Choose Us |
| **Services & Offerings** | Services &rarr; Add New / Edit Service |
| **SaaS Products & Pricing Tiers** | Products (SaaS) &rarr; Add New / Edit Product |
| **Customer Testimonials** | Testimonials &rarr; Add New |
| **Leadership Profiles** | Team Members &rarr; Add New |
| **Open Job Positions** | Careers & Jobs &rarr; Add New |
| **Blog Articles & Guides** | Posts &rarr; Add New |
| **View Leads & Inquiries** | Techofay Dashboard &rarr; Inquiries |
| **Review Job Applicants** | Techofay Dashboard &rarr; Career Applications |

---

## File Structure of `techofay-theme/`

```
techofay-theme/
├── style.css                      # WordPress theme header declaration
├── index.php                      # Fallback template
├── functions.php                  # Theme setup, enqueues, hooks
├── plugins-list.txt               # Bulk plugin install command
├── README-setup.md                # This setup guide
├── acf-json/                      # ACF PRO sync JSON files
│   └── group_techofay_frontpage.json
└── inc/
    ├── custom-post-types.php      # Native CPT registration
    ├── acf-fields.php             # ACF field definitions in PHP
    └── cptui-export.json          # Importable configuration for CPT UI
```

*Proceed to Phase 2 for full template assembly (header, footer, front-page, services, products, about, careers, contact).*
