<?php
/**
 * Automated Content Seeder for Techofay Global Ventures
 *
 * Populates all 8 core pages, 6 services, 5 SaaS products, testimonials, and team
 * with a single click from the WordPress Admin Dashboard.
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Handle 1-Click Demo / Default Content Seeding
 */
function techofay_handle_seed_content() {
    if ( ! current_user_can( 'manage_options' ) ) {
        wp_die( 'Unauthorized' );
    }

    check_admin_referer( 'techofay_seed_nonce' );

    // 1. Create Core Pages
    $pages = array(
        'Home'     => array( 'template' => '', 'type' => 'front_page' ),
        'Services' => array( 'template' => 'page-services.php', 'type' => 'page' ),
        'Products' => array( 'template' => 'page-products.php', 'type' => 'page' ),
        'About Us' => array( 'template' => 'page-about.php', 'type' => 'page' ),
        'Careers'  => array( 'template' => 'page-careers.php', 'type' => 'page' ),
        'Contact'  => array( 'template' => 'page-contact.php', 'type' => 'page' ),
        'Blog'     => array( 'template' => '', 'type' => 'blog' ),
    );

    $home_id = 0;
    $blog_id = 0;

    foreach ( $pages as $title => $data ) {
        $existing = get_page_by_path( sanitize_title( $title ) );
        if ( ! $existing ) {
            $page_id = wp_insert_post( array(
                'post_title'   => $title,
                'post_type'    => 'page',
                'post_status'  => 'publish',
            ) );
            if ( ! empty( $data['template'] ) ) {
                update_post_meta( $page_id, '_wp_page_template', $data['template'] );
            }
        } else {
            $page_id = $existing->ID;
        }

        if ( $data['type'] === 'front_page' ) $home_id = $page_id;
        if ( $data['type'] === 'blog' ) $blog_id = $page_id;
    }

    // Set Front Page and Blog Page in Reading Settings
    if ( $home_id && $blog_id ) {
        update_option( 'show_on_front', 'page' );
        update_option( 'page_on_front', $home_id );
        update_option( 'page_for_posts', $blog_id );
    }

    // 2. Seed 6 Services
    $services_data = array(
        array(
            'title'   => 'Cybersecurity & Zero Trust',
            'slug'    => 'cybersecurity',
            'badge'   => 'Enterprise Defense',
            'tagline' => 'Uncompromising Cybersecurity for Mission-Critical Infrastructure',
            'content' => 'Techofay Global Ventures delivers comprehensive Zero Trust architectures, continuous red/blue teaming, and 24/7 autonomous SOC monitoring to safeguard enterprise assets across multi-cloud environments.',
            'modules' => array(
                array( 'name' => 'Penetration Testing & VAPT', 'desc' => 'Vulnerability assessments and manual penetration testing for web, mobile, and networks.' ),
                array( 'name' => 'SOC-as-a-Service (24/7/365)', 'desc' => 'Real-time telemetry ingestion, threat hunting, and automated mitigation via AI SIEM.' ),
                array( 'name' => 'Cloud Security & Compliance', 'desc' => 'Audit readiness for ISO 27001, SOC2 Type II, HIPAA, PCI-DSS, and GDPR.' ),
                array( 'name' => 'Zero Trust Architecture', 'desc' => 'Micro-segmentation, identity-aware proxies, and granular least-privilege access.' ),
            ),
        ),
        array(
            'title'   => 'Engineering & QA Testing',
            'slug'    => 'development',
            'badge'   => 'High-Velocity Dev',
            'tagline' => 'Resilient, Scalable Software Architectures Engineered for Billions',
            'content' => 'From enterprise web applications to mission-critical distributed APIs, our senior engineering teams utilize modern frameworks, clean architecture, and automated CI/CD testing pipelines to ensure zero downtime.',
            'modules' => array(
                array( 'name' => 'Custom Web SPAs & Portals', 'desc' => 'High-performance applications built with React, TypeScript, and modern micro-frontends.' ),
                array( 'name' => 'Distributed Microservices', 'desc' => 'High-throughput APIs designed in Node.js, Go, Rust, and Python handling millions of requests.' ),
                array( 'name' => 'Automated QA & Playwright', 'desc' => 'End-to-end regression suites integrated directly into CI/CD build runners.' ),
            ),
        ),
        array(
            'title'   => 'Cloud & DevOps Architecture',
            'slug'    => 'cloud-infrastructure',
            'badge'   => 'Cloud Sovereignty',
            'tagline' => 'Hyperscale Multi-Cloud Infrastructure Built for Infinite Scalability',
            'content' => 'Architecting sovereign, high-availability multi-cloud networks across AWS, Google Cloud, and Microsoft Azure with automated GitOps and Kubernetes orchestration.',
            'modules' => array(
                array( 'name' => 'Kubernetes & Container Mesh', 'desc' => 'Automated pod autoscaling, service mesh traffic management, and self-healing clusters.' ),
                array( 'name' => 'Infrastructure as Code (IaC)', 'desc' => 'Immutable cloud resource provisioning using Terraform, Pulumi, and Ansible.' ),
            ),
        ),
        array(
            'title'   => 'Data & Applied AI Solutions',
            'slug'    => 'ai-data-analytics',
            'badge'   => 'Autonomous Intelligence',
            'tagline' => 'Transforming Unstructured Big Data into Autonomous Value Engines',
            'content' => 'Deploying fine-tuned domain-specific large language models, retrieval-augmented generation (RAG) knowledge agents, and BigQuery telemetry pipelines.',
            'modules' => array(
                array( 'name' => 'Custom LLM Fine-Tuning', 'desc' => 'Domain-adapted generative models running on sovereign enterprise VPC hardware.' ),
                array( 'name' => 'Predictive Telemetry Pipelines', 'desc' => 'Real-time time-series anomaly detection and demand forecasting models.' ),
            ),
        ),
        array(
            'title'   => 'Product Design & UX Systems',
            'slug'    => 'ui-ux-design',
            'badge'   => 'Human-Centric UX',
            'tagline' => 'Interfaces Engineered for Cognitive Ease and Commercial Velocity',
            'content' => 'Crafting frictionless digital interactions, design system component libraries, and interactive wireframes grounded in cognitive psychology.',
            'modules' => array(
                array( 'name' => 'Enterprise Design Tokens', 'desc' => 'Multi-brand scalable design systems in Figma translated into React components.' ),
                array( 'name' => 'Conversion Optimization (CRO)', 'desc' => 'Multivariate checkout and funnel testing producing measurable revenue uplift.' ),
            ),
        ),
        array(
            'title'   => 'Digital Growth & Acquisition',
            'slug'    => 'growth-marketing',
            'badge'   => 'Guaranteed Pipeline',
            'tagline' => 'Deterministic Revenue Pipelines Backed by Money-Back Guarantee',
            'content' => 'Performance marketing, international SEO, AI-driven lead acquisition funnels, and branding backed by our 100% money-back guarantee.',
            'modules' => array(
                array( 'name' => 'International Enterprise SEO', 'desc' => 'Technical search architecture, programmatic indexing, and authority building.' ),
                array( 'name' => 'Smart NFC Cards & Branding', 'desc' => 'Next-gen contactless networking and corporate digital brand identity suites.' ),
            ),
        ),
    );

    foreach ( $services_data as $svc ) {
        $existing = get_page_by_path( $svc['slug'], OBJECT, 'techofay_service' );
        if ( ! $existing ) {
            $post_id = wp_insert_post( array(
                'post_title'   => $svc['title'],
                'post_name'    => $svc['slug'],
                'post_type'    => 'techofay_service',
                'post_status'  => 'publish',
                'post_content' => $svc['content'],
            ) );
            update_post_meta( $post_id, 'service_badge', $svc['badge'] );
            update_post_meta( $post_id, 'service_tagline', $svc['tagline'] );
            update_post_meta( $post_id, 'service_modules', $svc['modules'] );
        }
    }

    // 3. Seed 5 SaaS Products
    $products_data = array(
        array(
            'name'    => 'ERP Management Software',
            'slug'    => 'erp-management',
            'badge'   => 'Flagship Enterprise ERP',
            'metric'  => '99.98% Operational Accuracy',
            'tagline' => 'Unified Enterprise Resource Planning, Supply Chain, Finance & HRMS',
            'desc'    => 'A modular enterprise resource planning suite synchronizing financial accounting, multi-warehouse inventory, procurement workflows, end-to-end HRMS payroll, and sales pipelines into an intelligent command center.',
            'price_s' => '₹24,999',
            'price_p' => '₹64,999',
            'features'=> array( 'Multi-entity ledger & GST compliance', 'Multi-warehouse inventory tracking', 'Biometric HRMS & automated payroll', 'Executive BI forecasting dashboard' ),
        ),
        array(
            'name'    => 'Hospital Management System (HMS)',
            'slug'    => 'hospital-management-system',
            'badge'   => 'Clinical Healthcare Suite',
            'metric'  => '100% HIPAA & HL7 Compliant',
            'tagline' => 'Comprehensive Digital Healthcare, EMR, OPD/IPD, Lab & Pharmacy Cloud',
            'desc'    => 'An enterprise clinical platform engineered to digitize hospital operations end-to-end. Bridges patient registrations, OPD/IPD workflows, electronic medical records (EMR), and TPA insurance.',
            'price_s' => '₹18,999',
            'price_p' => '₹49,999',
            'features'=> array( 'Digital EMR with ICD-10 coding', 'Full OPD & IPD bed allocation queues', 'Laboratory LIS with barcode tracking', 'Integrated hospital pharmacy POS' ),
        ),
        array(
            'name'    => 'School Management Software',
            'slug'    => 'school-management-software',
            'badge'   => 'Campus Cloud ERP',
            'metric'  => 'Zero Fee Leakage Guarantee',
            'tagline' => 'All-in-One K-12 & University Administration, LMS, Fees & Transport ERP',
            'desc'    => 'An enterprise education suite designed for institutions managing multi-branch campuses. Automates admissions, fee collection, online examinations, live bus GPS tracking, and parent portals.',
            'price_s' => '₹14,999',
            'price_p' => '₹39,999',
            'features'=> array( 'Online admissions & student records', 'Automated fee collection & payment gateway', 'Interactive LMS & exam management', 'Live school bus GPS telemetry' ),
        ),
        array(
            'name'    => 'Hotel PMS Cloud Software',
            'slug'    => 'hotel-pms',
            'badge'   => 'Hospitality Command Suite',
            'metric'  => '35% Direct Booking Increase',
            'tagline' => 'Cloud-Native Hospitality ERP, Channel Manager, Multi-Outlet POS & Guest CRM',
            'desc'    => 'An all-in-one hospitality property management platform for boutique hotels, resorts, and chains. Features automated two-way OTA sync, contactless check-in, restaurant POS, and banquets.',
            'price_s' => '₹16,999',
            'price_p' => '₹44,999',
            'features'=> array( 'Real-time 2-way OTA channel manager', 'Front desk & room allocation grid', 'Multi-outlet restaurant & bar POS', 'Housekeeping & maintenance workflows' ),
        ),
        array(
            'name'    => 'Fleet360 Logistics & Tracking',
            'slug'    => 'fleet360',
            'badge'   => 'IoT Telematics Platform',
            'metric'  => '22% Fuel Cost Reduction',
            'tagline' => 'Autonomous IoT Fleet Telematics, AI Route Optimization & Cold-Chain Logistics',
            'desc'    => 'Enterprise fleet management software connecting GPS trackers, OBD-II telemetry, temperature sensors, and driver cameras to monitor commercial fleets in real time.',
            'price_s' => '₹12,999',
            'price_p' => '₹34,999',
            'features'=> array( 'Live sub-second GPS tracking', 'Fuel theft & drain detection sensors', 'AI driver behavior & fatigue scorecards', 'Automated route optimization' ),
        ),
    );

    foreach ( $products_data as $prd ) {
        $existing = get_page_by_path( $prd['slug'], OBJECT, 'techofay_product' );
        if ( ! $existing ) {
            $post_id = wp_insert_post( array(
                'post_title'   => $prd['name'],
                'post_name'    => $prd['slug'],
                'post_type'    => 'techofay_product',
                'post_status'  => 'publish',
                'post_content' => $prd['desc'],
            ) );
            update_post_meta( $post_id, 'product_badge', $prd['badge'] );
            update_post_meta( $post_id, 'product_metric', $prd['metric'] );
            update_post_meta( $post_id, 'product_tagline', $prd['tagline'] );
            update_post_meta( $post_id, 'pricing_starter_price', $prd['price_s'] );
            update_post_meta( $post_id, 'pricing_pro_price', $prd['price_p'] );
            update_post_meta( $post_id, 'pricing_enterprise_price', 'Custom' );
        }
    }

    // Redirect with success flag
    wp_safe_redirect( admin_url( 'admin.php?page=techofay-dashboard&seeded=1' ) );
    exit;
}
add_action( 'admin_post_techofay_seed_content', 'techofay_handle_seed_content' );
