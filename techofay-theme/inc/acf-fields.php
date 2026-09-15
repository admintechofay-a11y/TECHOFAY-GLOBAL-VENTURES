<?php
/**
 * Advanced Custom Fields (ACF) Programmatic Definitions
 *
 * Automatically registers all ACF field groups so content is immediately editable
 * without requiring manual JSON imports, while also supporting ACF JSON sync.
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Configure ACF JSON save point to theme folder
 */
function techofay_acf_json_save_point( $path ) {
    $path = TECHOFAY_DIR . '/acf-json';
    return $path;
}
add_filter( 'acf/settings/save_json', 'techofay_acf_json_save_point' );

/**
 * Configure ACF JSON load point from theme folder
 */
function techofay_acf_json_load_point( $paths ) {
    unset( $paths[0] );
    $paths[] = TECHOFAY_DIR . '/acf-json';
    return $paths;
}
add_filter( 'acf/settings/load_json', 'techofay_acf_json_load_point' );

/**
 * Register ACF Options Page for Global Settings
 */
function techofay_register_acf_options_page() {
    if ( function_exists( 'acf_add_options_page' ) ) {
        acf_add_options_page( array(
            'page_title'    => __( 'Theme Settings', 'techofay' ),
            'menu_title'    => __( 'Theme Settings', 'techofay' ),
            'menu_slug'     => 'techofay-theme-settings',
            'capability'    => 'edit_posts',
            'redirect'      => false,
            'icon_url'      => 'dashicons-admin-generic',
            'position'      => 59,
        ) );
    }
}
add_action( 'acf/init', 'techofay_register_acf_options_page' );

/**
 * Register Local Field Groups
 */
function techofay_register_acf_field_groups() {
    if ( ! function_exists( 'acf_add_local_field_group' ) ) {
        return;
    }

    // ==========================================
    // 1. FRONT PAGE / HOMEPAGE HERO & SECTIONS
    // ==========================================
    acf_add_local_field_group( array(
        'key' => 'group_techofay_frontpage',
        'title' => __( 'Homepage Content & Sections', 'techofay' ),
        'fields' => array(
            // Hero Tab
            array(
                'key' => 'field_tab_hero',
                'label' => __( 'Hero Section', 'techofay' ),
                'type' => 'tab',
            ),
            array(
                'key' => 'field_hero_badge_text',
                'label' => __( 'Hero Badge Text', 'techofay' ),
                'name' => 'hero_badge_text',
                'type' => 'text',
                'default_value' => 'Trusted by 500+ Global Enterprises & Scale-Ups',
            ),
            array(
                'key' => 'field_hero_h1_line1',
                'label' => __( 'Hero H1 Line 1', 'techofay' ),
                'name' => 'hero_h1_line1',
                'type' => 'text',
                'default_value' => 'Engineering the',
            ),
            array(
                'key' => 'field_hero_h1_accent_word',
                'label' => __( 'Hero Accent Highlight Word', 'techofay' ),
                'name' => 'hero_h1_accent_word',
                'type' => 'text',
                'default_value' => 'Future',
            ),
            array(
                'key' => 'field_hero_h1_line2',
                'label' => __( 'Hero H1 Line 2', 'techofay' ),
                'name' => 'hero_h1_line2',
                'type' => 'text',
                'default_value' => 'One Solution at a Time.',
            ),
            array(
                'key' => 'field_hero_subtext',
                'label' => __( 'Hero Subtext', 'techofay' ),
                'name' => 'hero_subtext',
                'type' => 'textarea',
                'rows' => 3,
                'default_value' => 'TECHOFAY GLOBAL VENTURES empowers enterprise transformation with complete digital growth solutions — Websites, SEO, Social Media, Digital Marketing, Branding, Smart NFC Cards, Mobile Apps, and Custom AI Development.',
            ),
            array(
                'key' => 'field_hero_guarantee_text',
                'label' => __( 'Guarantee Badge Text', 'techofay' ),
                'name' => 'hero_guarantee_text',
                'type' => 'text',
                'default_value' => '100% Money-Back Guarantee — If you don’t get clients, we refund you!',
            ),
            array(
                'key' => 'field_hero_cta_primary_text',
                'label' => __( 'Primary CTA Text', 'techofay' ),
                'name' => 'hero_cta_primary_text',
                'type' => 'text',
                'default_value' => 'Explore Our Services',
            ),
            array(
                'key' => 'field_hero_cta_primary_url',
                'label' => __( 'Primary CTA URL', 'techofay' ),
                'name' => 'hero_cta_primary_url',
                'type' => 'text',
                'default_value' => '/services',
            ),
            array(
                'key' => 'field_hero_cta_secondary_text',
                'label' => __( 'Secondary CTA Text', 'techofay' ),
                'name' => 'hero_cta_secondary_text',
                'type' => 'text',
                'default_value' => 'Watch Architecture Demo',
            ),

            // Stats Tab
            array(
                'key' => 'field_tab_stats',
                'label' => __( 'Stats Bar', 'techofay' ),
                'type' => 'tab',
            ),
            array(
                'key' => 'field_stat_1_number',
                'label' => __( 'Stat 1 Number', 'techofay' ),
                'name' => 'stat_1_number',
                'type' => 'text',
                'default_value' => '500+',
            ),
            array(
                'key' => 'field_stat_1_label',
                'label' => __( 'Stat 1 Label', 'techofay' ),
                'name' => 'stat_1_label',
                'type' => 'text',
                'default_value' => 'Global Enterprises Scaled',
            ),
            array(
                'key' => 'field_stat_2_number',
                'label' => __( 'Stat 2 Number', 'techofay' ),
                'name' => 'stat_2_number',
                'type' => 'text',
                'default_value' => '99.98%',
            ),
            array(
                'key' => 'field_stat_2_label',
                'label' => __( 'Stat 2 Label', 'techofay' ),
                'name' => 'stat_2_label',
                'type' => 'text',
                'default_value' => 'System Uptime SLA',
            ),
            array(
                'key' => 'field_stat_3_number',
                'label' => __( 'Stat 3 Number', 'techofay' ),
                'name' => 'stat_3_number',
                'type' => 'text',
                'default_value' => '120+',
            ),
            array(
                'key' => 'field_stat_3_label',
                'label' => __( 'Stat 3 Label', 'techofay' ),
                'name' => 'stat_3_label',
                'type' => 'text',
                'default_value' => 'AI & Cloud Patents/IP',
            ),
            array(
                'key' => 'field_stat_4_number',
                'label' => __( 'Stat 4 Number', 'techofay' ),
                'name' => 'stat_4_number',
                'type' => 'text',
                'default_value' => '5',
            ),
            array(
                'key' => 'field_stat_4_label',
                'label' => __( 'Stat 4 Label', 'techofay' ),
                'name' => 'stat_4_label',
                'type' => 'text',
                'default_value' => 'Global Branch Hubs',
            ),

            // Why Us Tab
            array(
                'key' => 'field_tab_why',
                'label' => __( 'Why Choose Us', 'techofay' ),
                'type' => 'tab',
            ),
            array(
                'key' => 'field_why_heading',
                'label' => __( 'Why Us Heading', 'techofay' ),
                'name' => 'why_heading',
                'type' => 'text',
                'default_value' => 'Why Forward-Thinking Enterprises Partner with TECHOFAY',
            ),
            array(
                'key' => 'field_why_subtext',
                'label' => __( 'Why Us Subtext', 'techofay' ),
                'name' => 'why_subtext',
                'type' => 'textarea',
                'rows' => 2,
                'default_value' => 'We replace fragile legacy silos with resilient, sovereign, and scalable digital architectures.',
            ),
            array(
                'key' => 'field_why_features',
                'label' => __( 'Why Us Feature Pillars', 'techofay' ),
                'name' => 'why_features',
                'type' => 'repeater',
                'layout' => 'table',
                'sub_fields' => array(
                    array(
                        'key' => 'field_why_feat_icon',
                        'label' => __( 'Icon Name', 'techofay' ),
                        'name' => 'icon',
                        'type' => 'text',
                        'default_value' => 'ShieldCheck',
                    ),
                    array(
                        'key' => 'field_why_feat_title',
                        'label' => __( 'Title', 'techofay' ),
                        'name' => 'title',
                        'type' => 'text',
                    ),
                    array(
                        'key' => 'field_why_feat_desc',
                        'label' => __( 'Description', 'techofay' ),
                        'name' => 'description',
                        'type' => 'textarea',
                        'rows' => 2,
                    ),
                ),
            ),

            // Process Tab
            array(
                'key' => 'field_tab_process',
                'label' => __( 'Process Timeline', 'techofay' ),
                'type' => 'tab',
            ),
            array(
                'key' => 'field_process_heading',
                'label' => __( 'Process Heading', 'techofay' ),
                'name' => 'process_heading',
                'type' => 'text',
                'default_value' => 'Our Battle-Tested Engineering Lifecycle',
            ),
            array(
                'key' => 'field_process_steps',
                'label' => __( 'Process Steps', 'techofay' ),
                'name' => 'process_steps',
                'type' => 'repeater',
                'layout' => 'table',
                'sub_fields' => array(
                    array(
                        'key' => 'field_proc_step_num',
                        'label' => __( 'Step Number', 'techofay' ),
                        'name' => 'step_number',
                        'type' => 'text',
                        'default_value' => '01',
                    ),
                    array(
                        'key' => 'field_proc_step_title',
                        'label' => __( 'Step Title', 'techofay' ),
                        'name' => 'step_title',
                        'type' => 'text',
                    ),
                    array(
                        'key' => 'field_proc_step_desc',
                        'label' => __( 'Step Description', 'techofay' ),
                        'name' => 'step_description',
                        'type' => 'textarea',
                        'rows' => 2,
                    ),
                ),
            ),

            // CTA Banner Tab
            array(
                'key' => 'field_tab_cta',
                'label' => __( 'CTA Banner', 'techofay' ),
                'type' => 'tab',
            ),
            array(
                'key' => 'field_cta_heading',
                'label' => __( 'CTA Heading', 'techofay' ),
                'name' => 'cta_heading',
                'type' => 'text',
                'default_value' => 'Ready to Accelerate Your Enterprise Digital Sovereignty?',
            ),
            array(
                'key' => 'field_cta_subtext',
                'label' => __( 'CTA Subtext', 'techofay' ),
                'name' => 'cta_subtext',
                'type' => 'textarea',
                'rows' => 2,
                'default_value' => 'Speak directly with our senior solutions engineers. Custom architectures, guaranteed delivery schedules, and 100% money-back guarantee.',
            ),
            array(
                'key' => 'field_cta_primary_text',
                'label' => __( 'CTA Button Text', 'techofay' ),
                'name' => 'cta_primary_text',
                'type' => 'text',
                'default_value' => 'Get Free Consultation',
            ),
            array(
                'key' => 'field_cta_primary_url',
                'label' => __( 'CTA Button URL', 'techofay' ),
                'name' => 'cta_primary_url',
                'type' => 'text',
                'default_value' => '/contact',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'page_type',
                    'operator' => '==',
                    'value' => 'front_page',
                ),
            ),
            array(
                array(
                    'param' => 'page',
                    'operator' => '==',
                    'value' => '6',
                ),
            ),
        ),
    ) );

    // ==========================================
    // 2. SERVICES FIELDS
    // ==========================================
    acf_add_local_field_group( array(
        'key' => 'group_techofay_service_meta',
        'title' => __( 'Service Details & Modules', 'techofay' ),
        'fields' => array(
            array(
                'key' => 'field_svc_icon',
                'label' => __( 'Icon Identifier', 'techofay' ),
                'name' => 'service_icon',
                'type' => 'text',
                'instructions' => __( 'e.g. ShieldCheck, Code2, Cloud, Database, Palette, TrendingUp', 'techofay' ),
                'default_value' => 'ShieldCheck',
            ),
            array(
                'key' => 'field_svc_badge',
                'label' => __( 'Service Badge', 'techofay' ),
                'name' => 'service_badge',
                'type' => 'text',
                'default_value' => 'Enterprise Solution',
            ),
            array(
                'key' => 'field_svc_tagline',
                'label' => __( 'Hero Tagline', 'techofay' ),
                'name' => 'service_tagline',
                'type' => 'text',
            ),
            array(
                'key' => 'field_svc_modules',
                'label' => __( 'Sub-Services & Modules', 'techofay' ),
                'name' => 'service_modules',
                'type' => 'repeater',
                'layout' => 'block',
                'sub_fields' => array(
                    array(
                        'key' => 'field_svc_mod_name',
                        'label' => __( 'Module Name', 'techofay' ),
                        'name' => 'name',
                        'type' => 'text',
                    ),
                    array(
                        'key' => 'field_svc_mod_desc',
                        'label' => __( 'Module Description', 'techofay' ),
                        'name' => 'desc',
                        'type' => 'textarea',
                        'rows' => 2,
                    ),
                ),
            ),
            array(
                'key' => 'field_svc_tools',
                'label' => __( 'Technologies & Tools', 'techofay' ),
                'name' => 'service_tools',
                'type' => 'repeater',
                'layout' => 'table',
                'sub_fields' => array(
                    array(
                        'key' => 'field_svc_tool_name',
                        'label' => __( 'Tool / Tech Name', 'techofay' ),
                        'name' => 'tool_name',
                        'type' => 'text',
                    ),
                ),
            ),
            array(
                'key' => 'field_svc_stats',
                'label' => __( 'Key Metrics & Stats', 'techofay' ),
                'name' => 'service_stats',
                'type' => 'repeater',
                'layout' => 'table',
                'sub_fields' => array(
                    array(
                        'key' => 'field_svc_stat_label',
                        'label' => __( 'Stat Label', 'techofay' ),
                        'name' => 'label',
                        'type' => 'text',
                    ),
                    array(
                        'key' => 'field_svc_stat_val',
                        'label' => __( 'Stat Value', 'techofay' ),
                        'name' => 'value',
                        'type' => 'text',
                    ),
                ),
            ),
            array(
                'key' => 'field_svc_process',
                'label' => __( 'Service Delivery Process', 'techofay' ),
                'name' => 'service_process',
                'type' => 'repeater',
                'layout' => 'block',
                'sub_fields' => array(
                    array(
                        'key' => 'field_svc_proc_step',
                        'label' => __( 'Step Code (e.g. 01)', 'techofay' ),
                        'name' => 'step',
                        'type' => 'text',
                    ),
                    array(
                        'key' => 'field_svc_proc_title',
                        'label' => __( 'Title', 'techofay' ),
                        'name' => 'title',
                        'type' => 'text',
                    ),
                    array(
                        'key' => 'field_svc_proc_desc',
                        'label' => __( 'Description', 'techofay' ),
                        'name' => 'desc',
                        'type' => 'textarea',
                        'rows' => 2,
                    ),
                ),
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'techofay_service',
                ),
            ),
        ),
    ) );

    // ==========================================
    // 3. PRODUCTS (SaaS) FIELDS & PRICING
    // ==========================================
    acf_add_local_field_group( array(
        'key' => 'group_techofay_product_meta',
        'title' => __( 'SaaS Product Architecture & Pricing', 'techofay' ),
        'fields' => array(
            array(
                'key' => 'field_prd_tagline',
                'label' => __( 'Tagline', 'techofay' ),
                'name' => 'product_tagline',
                'type' => 'text',
            ),
            array(
                'key' => 'field_prd_badge',
                'label' => __( 'Product Category Badge', 'techofay' ),
                'name' => 'product_badge',
                'type' => 'text',
            ),
            array(
                'key' => 'field_prd_metric',
                'label' => __( 'High-Assurance Metric (e.g. 99.98% Accuracy)', 'techofay' ),
                'name' => 'product_metric',
                'type' => 'text',
            ),
            array(
                'key' => 'field_prd_icon',
                'label' => __( 'Icon Identifier', 'techofay' ),
                'name' => 'product_icon',
                'type' => 'text',
                'default_value' => 'Layers',
            ),
            array(
                'key' => 'field_prd_features',
                'label' => __( 'Core Enterprise Features', 'techofay' ),
                'name' => 'product_features',
                'type' => 'repeater',
                'layout' => 'table',
                'sub_fields' => array(
                    array(
                        'key' => 'field_prd_feat_item',
                        'label' => __( 'Feature Bullet', 'techofay' ),
                        'name' => 'feature_text',
                        'type' => 'text',
                    ),
                ),
            ),
            // Pricing Tier: Starter
            array(
                'key' => 'field_tab_price_starter',
                'label' => __( 'Pricing: Starter Tier', 'techofay' ),
                'type' => 'tab',
            ),
            array(
                'key' => 'field_pricing_starter_price',
                'label' => __( 'Starter Price (e.g. ₹24,999)', 'techofay' ),
                'name' => 'pricing_starter_price',
                'type' => 'text',
                'default_value' => '₹24,999',
            ),
            array(
                'key' => 'field_pricing_starter_billing',
                'label' => __( 'Starter Billing Note', 'techofay' ),
                'name' => 'pricing_starter_billing',
                'type' => 'text',
                'default_value' => '/mo for growing businesses & SMEs',
            ),
            array(
                'key' => 'field_pricing_starter_features',
                'label' => __( 'Starter Features (one per line)', 'techofay' ),
                'name' => 'pricing_starter_features',
                'type' => 'textarea',
                'rows' => 5,
            ),
            // Pricing Tier: Pro
            array(
                'key' => 'field_tab_price_pro',
                'label' => __( 'Pricing: Pro Tier', 'techofay' ),
                'type' => 'tab',
            ),
            array(
                'key' => 'field_pricing_pro_price',
                'label' => __( 'Pro Price (e.g. ₹64,999)', 'techofay' ),
                'name' => 'pricing_pro_price',
                'type' => 'text',
                'default_value' => '₹64,999',
            ),
            array(
                'key' => 'field_pricing_pro_billing',
                'label' => __( 'Pro Billing Note', 'techofay' ),
                'name' => 'pricing_pro_billing',
                'type' => 'text',
                'default_value' => '/mo for scaling mid-market enterprises',
            ),
            array(
                'key' => 'field_pricing_pro_features',
                'label' => __( 'Pro Features (one per line)', 'techofay' ),
                'name' => 'pricing_pro_features',
                'type' => 'textarea',
                'rows' => 5,
            ),
            // Pricing Tier: Enterprise
            array(
                'key' => 'field_tab_price_enterprise',
                'label' => __( 'Pricing: Enterprise Tier', 'techofay' ),
                'type' => 'tab',
            ),
            array(
                'key' => 'field_pricing_enterprise_price',
                'label' => __( 'Enterprise Price', 'techofay' ),
                'name' => 'pricing_enterprise_price',
                'type' => 'text',
                'default_value' => 'Custom',
            ),
            array(
                'key' => 'field_pricing_enterprise_billing',
                'label' => __( 'Enterprise Billing Note', 'techofay' ),
                'name' => 'pricing_enterprise_billing',
                'type' => 'text',
                'default_value' => 'starting at ₹1,99,999 / enterprise deployment',
            ),
            array(
                'key' => 'field_pricing_enterprise_features',
                'label' => __( 'Enterprise Features (one per line)', 'techofay' ),
                'name' => 'pricing_enterprise_features',
                'type' => 'textarea',
                'rows' => 5,
            ),
            // FAQs Tab
            array(
                'key' => 'field_tab_faqs',
                'label' => __( 'Product FAQs', 'techofay' ),
                'type' => 'tab',
            ),
            array(
                'key' => 'field_prd_faqs',
                'label' => __( 'Frequently Asked Questions', 'techofay' ),
                'name' => 'product_faqs',
                'type' => 'repeater',
                'layout' => 'block',
                'sub_fields' => array(
                    array(
                        'key' => 'field_prd_faq_q',
                        'label' => __( 'Question', 'techofay' ),
                        'name' => 'question',
                        'type' => 'text',
                    ),
                    array(
                        'key' => 'field_prd_faq_a',
                        'label' => __( 'Answer', 'techofay' ),
                        'name' => 'answer',
                        'type' => 'textarea',
                        'rows' => 3,
                    ),
                ),
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'techofay_product',
                ),
            ),
        ),
    ) );

    // ==========================================
    // 4. TESTIMONIALS
    // ==========================================
    acf_add_local_field_group( array(
        'key' => 'group_techofay_testimonial_meta',
        'title' => __( 'Client Review Details', 'techofay' ),
        'fields' => array(
            array(
                'key' => 'field_test_role',
                'label' => __( 'Client Role / Title', 'techofay' ),
                'name' => 'client_role',
                'type' => 'text',
                'default_value' => 'CTO / VP of Engineering',
            ),
            array(
                'key' => 'field_test_company',
                'label' => __( 'Company Name', 'techofay' ),
                'name' => 'client_company',
                'type' => 'text',
            ),
            array(
                'key' => 'field_test_rating',
                'label' => __( 'Star Rating (1 - 5)', 'techofay' ),
                'name' => 'star_rating',
                'type' => 'number',
                'default_value' => 5,
                'min' => 1,
                'max' => 5,
            ),
            array(
                'key' => 'field_test_related_product',
                'label' => __( 'Related Service / Product', 'techofay' ),
                'name' => 'related_product',
                'type' => 'text',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'testimonial',
                ),
            ),
        ),
    ) );

    // ==========================================
    // 5. TEAM MEMBERS
    // ==========================================
    acf_add_local_field_group( array(
        'key' => 'group_techofay_team_meta',
        'title' => __( 'Team Member Profile', 'techofay' ),
        'fields' => array(
            array(
                'key' => 'field_team_role',
                'label' => __( 'Designation / Role', 'techofay' ),
                'name' => 'member_role',
                'type' => 'text',
            ),
            array(
                'key' => 'field_team_dept',
                'label' => __( 'Department', 'techofay' ),
                'name' => 'member_department',
                'type' => 'text',
                'default_value' => 'Executive Leadership',
            ),
            array(
                'key' => 'field_team_linkedin',
                'label' => __( 'LinkedIn Profile URL', 'techofay' ),
                'name' => 'linkedin_url',
                'type' => 'url',
            ),
            array(
                'key' => 'field_team_twitter',
                'label' => __( 'Twitter / X Profile URL', 'techofay' ),
                'name' => 'twitter_url',
                'type' => 'url',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'team_member',
                ),
            ),
        ),
    ) );

    // ==========================================
    // 6. JOB OPENINGS
    // ==========================================
    acf_add_local_field_group( array(
        'key' => 'group_techofay_job_meta',
        'title' => __( 'Career Position Details', 'techofay' ),
        'fields' => array(
            array(
                'key' => 'field_job_dept',
                'label' => __( 'Department', 'techofay' ),
                'name' => 'job_department',
                'type' => 'text',
                'default_value' => 'Engineering',
            ),
            array(
                'key' => 'field_job_location',
                'label' => __( 'Job Location', 'techofay' ),
                'name' => 'job_location',
                'type' => 'text',
                'default_value' => 'Bangalore (ETV Marathahalli) / Hybrid',
            ),
            array(
                'key' => 'field_job_type',
                'label' => __( 'Employment Type', 'techofay' ),
                'name' => 'job_type',
                'type' => 'select',
                'choices' => array(
                    'Full-time' => 'Full-time',
                    'Remote'    => 'Remote',
                    'Hybrid'    => 'Hybrid',
                    'Contract'  => 'Contract',
                ),
                'default_value' => 'Full-time',
            ),
            array(
                'key' => 'field_job_salary',
                'label' => __( 'Salary Compensation Range', 'techofay' ),
                'name' => 'salary_range',
                'type' => 'text',
                'default_value' => '₹18,00,000 - ₹32,00,000 + Equity',
            ),
            array(
                'key' => 'field_job_experience',
                'label' => __( 'Experience Required', 'techofay' ),
                'name' => 'experience_required',
                'type' => 'text',
                'default_value' => '4+ Years',
            ),
            array(
                'key' => 'field_job_is_active',
                'label' => __( 'Position Open / Active', 'techofay' ),
                'name' => 'is_active',
                'type' => 'true_false',
                'default_value' => 1,
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'job_opening',
                ),
            ),
        ),
    ) );
}
add_action( 'acf/init', 'techofay_register_acf_field_groups' );
