<?php
/**
 * The header for our theme
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?><!doctype html>
<html <?php language_attributes(); ?> class="dark scroll-smooth">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <meta name="theme-color" content="#050B1F">
    <?php wp_head(); ?>
</head>

<body <?php body_class( 'bg-[#050B1F] text-white font-sans antialiased selection:bg-[#2B6EFA] selection:text-white min-h-screen flex flex-col' ); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site flex-1 flex flex-col">
    <a class="skip-link screen-reader-text sr-only focus:not-sr-only focus:p-4 focus:bg-blue-600 focus:text-white focus:absolute focus:z-50" href="#primary">
        <?php esc_html_e( 'Skip to content', 'techofay' ); ?>
    </a>

    <!-- Top Announcement Bar -->
    <div class="bg-[#0A1628] border-b border-[rgba(43,110,250,0.2)] text-xs text-[#8B9AB5] py-2 px-4 sm:px-6 lg:px-8 hidden md:block">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <div class="flex items-center gap-6">
                <span class="inline-flex items-center gap-2 text-[#00D4FF]">
                    <span class="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse"></span>
                    <strong class="text-white font-medium">100% Money-Back Guarantee</strong> &mdash; If you don't get clients, we refund you!
                </span>
                <span class="text-[rgba(255,255,255,0.15)]">|</span>
                <span class="flex items-center gap-1.5">
                    <span>HQ: Vadodara</span> &bull; <span>Bangalore</span> &bull; <span>Chennai</span> &bull; <span>Ganjdundwara</span> &bull; <span>Edinburgh (UK)</span>
                </span>
            </div>
            <div class="flex items-center gap-5">
                <a href="tel:+919359339000" class="hover:text-white transition-colors flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    <span>+91-9359339000</span>
                </a>
                <a href="mailto:info@techofay.com" class="hover:text-white transition-colors flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-[#2B6EFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    <span>info@techofay.com</span>
                </a>
            </div>
        </div>
    </div>

    <!-- Main Navigation Bar -->
    <header id="masthead" class="site-header sticky top-0 z-50 bg-[#050B1F]/90 backdrop-blur-md border-b border-[rgba(43,110,250,0.2)] transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                
                <!-- Logo -->
                <div class="site-branding flex items-center gap-3">
                    <?php if ( has_custom_logo() ) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2 group">
                            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2B6EFA] to-[#00D4FF] p-0.5 shadow-[0_0_20px_rgba(0,212,255,0.4)]">
                                <div class="w-full h-full bg-[#050B1F] rounded-[10px] flex items-center justify-center font-heading font-extrabold text-lg text-[#00D4FF]">
                                    T
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <span class="font-heading font-extrabold text-xl tracking-tight text-white group-hover:text-[#00D4FF] transition-colors">
                                    TECHOFAY<span class="text-[#00D4FF]">.</span>
                                </span>
                                <span class="text-[9px] tracking-widest uppercase font-mono text-[#8B9AB5] -mt-1">
                                    GLOBAL VENTURES
                                </span>
                            </div>
                        </a>
                    <?php endif; ?>
                </div>

                <!-- Desktop Navigation Menu -->
                <nav id="site-navigation" class="main-navigation hidden lg:flex items-center gap-7" aria-label="<?php esc_attr_e( 'Main Menu', 'techofay' ); ?>">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="text-sm font-medium text-[#8B9AB5] hover:text-[#00D4FF] transition-colors <?php echo is_front_page() ? 'text-[#00D4FF] font-semibold' : ''; ?>">
                        <?php esc_html_e( 'Home', 'techofay' ); ?>
                    </a>

                    <!-- Services Dropdown -->
                    <div class="relative group">
                        <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="text-sm font-medium text-[#8B9AB5] group-hover:text-[#00D4FF] transition-colors inline-flex items-center gap-1 <?php echo is_post_type_archive( 'techofay_service' ) || is_singular( 'techofay_service' ) ? 'text-[#00D4FF] font-semibold' : ''; ?>">
                            <span><?php esc_html_e( 'Services', 'techofay' ); ?></span>
                            <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                        </a>
                        <div class="absolute top-full -left-4 w-72 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                            <div class="glass-panel p-3 rounded-2xl shadow-2xl border border-[rgba(43,110,250,0.3)] bg-[#050B1F]/95 backdrop-blur-xl space-y-1">
                                <a href="<?php echo esc_url( home_url( '/service/cybersecurity' ) ); ?>" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                                    <div class="w-8 h-8 rounded-lg bg-[#2B6EFA]/10 border border-[#2B6EFA]/30 flex items-center justify-center text-[#00D4FF]">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                                    </div>
                                    <div>
                                        <div class="text-xs font-semibold text-white">Cybersecurity & Zero Trust</div>
                                        <div class="text-[10px] text-[#8B9AB5]">Military-grade defense</div>
                                    </div>
                                </a>
                                <a href="<?php echo esc_url( home_url( '/service/development' ) ); ?>" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                                    <div class="w-8 h-8 rounded-lg bg-[#2B6EFA]/10 border border-[#2B6EFA]/30 flex items-center justify-center text-[#00D4FF]">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                                    </div>
                                    <div>
                                        <div class="text-xs font-semibold text-white">Engineering & QA Testing</div>
                                        <div class="text-[10px] text-[#8B9AB5]">High-concurrency microservices</div>
                                    </div>
                                </a>
                                <a href="<?php echo esc_url( home_url( '/service/cloud-infrastructure' ) ); ?>" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                                    <div class="w-8 h-8 rounded-lg bg-[#2B6EFA]/10 border border-[#2B6EFA]/30 flex items-center justify-center text-[#00D4FF]">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
                                    </div>
                                    <div>
                                        <div class="text-xs font-semibold text-white">Cloud & DevOps Architecture</div>
                                        <div class="text-[10px] text-[#8B9AB5]">Multi-cloud Kubernetes</div>
                                    </div>
                                </a>
                                <a href="<?php echo esc_url( home_url( '/service/ai-data-analytics' ) ); ?>" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                                    <div class="w-8 h-8 rounded-lg bg-[#2B6EFA]/10 border border-[#2B6EFA]/30 flex items-center justify-center text-[#00D4FF]">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>
                                    </div>
                                    <div>
                                        <div class="text-xs font-semibold text-white">Applied AI & Machine Learning</div>
                                        <div class="text-[10px] text-[#8B9AB5]">Custom LLMs & Neural Ops</div>
                                    </div>
                                </a>
                                <div class="pt-1 border-t border-white/5">
                                    <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="block text-center py-1.5 text-[11px] font-semibold text-[#00D4FF] hover:underline">
                                        View All 6 Verticals &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Products Dropdown -->
                    <div class="relative group">
                        <a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="text-sm font-medium text-[#8B9AB5] group-hover:text-[#00D4FF] transition-colors inline-flex items-center gap-1 <?php echo is_post_type_archive( 'techofay_product' ) || is_singular( 'techofay_product' ) ? 'text-[#00D4FF] font-semibold' : ''; ?>">
                            <span><?php esc_html_e( 'Products', 'techofay' ); ?></span>
                            <span class="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30">SaaS</span>
                            <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                        </a>
                        <div class="absolute top-full -left-4 w-72 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                            <div class="glass-panel p-3 rounded-2xl shadow-2xl border border-[rgba(43,110,250,0.3)] bg-[#050B1F]/95 backdrop-blur-xl space-y-1">
                                <a href="<?php echo esc_url( home_url( '/product/erp-management' ) ); ?>" class="block p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                                    <div class="text-xs font-semibold text-white">ERP Management Software</div>
                                    <div class="text-[10px] text-[#8B9AB5]">Supply chain, Finance & HRMS</div>
                                </a>
                                <a href="<?php echo esc_url( home_url( '/product/hospital-management-system' ) ); ?>" class="block p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                                    <div class="text-xs font-semibold text-white">Hospital Management (HMS)</div>
                                    <div class="text-[10px] text-[#8B9AB5]">EMR, OPD/IPD, Lab & Pharmacy</div>
                                </a>
                                <a href="<?php echo esc_url( home_url( '/product/school-management-software' ) ); ?>" class="block p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                                    <div class="text-xs font-semibold text-white">School Management ERP</div>
                                    <div class="text-[10px] text-[#8B9AB5]">Admissions, LMS, Fees & Transport</div>
                                </a>
                                <a href="<?php echo esc_url( home_url( '/product/hotel-pms' ) ); ?>" class="block p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                                    <div class="text-xs font-semibold text-white">Hotel PMS Cloud</div>
                                    <div class="text-[10px] text-[#8B9AB5]">Channel manager, POS & Housekeeping</div>
                                </a>
                                <a href="<?php echo esc_url( home_url( '/product/fleet360' ) ); ?>" class="block p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                                    <div class="text-xs font-semibold text-white">Fleet360 Logistics</div>
                                    <div class="text-[10px] text-[#8B9AB5]">GPS telemetry, Fuel & Route AI</div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="text-sm font-medium text-[#8B9AB5] hover:text-[#00D4FF] transition-colors <?php echo is_page( 'about' ) ? 'text-[#00D4FF] font-semibold' : ''; ?>">
                        <?php esc_html_e( 'About Us', 'techofay' ); ?>
                    </a>

                    <a href="<?php echo esc_url( home_url( '/careers' ) ); ?>" class="text-sm font-medium text-[#8B9AB5] hover:text-[#00D4FF] transition-colors <?php echo is_page( 'careers' ) || is_post_type_archive( 'job_opening' ) ? 'text-[#00D4FF] font-semibold' : ''; ?>">
                        <?php esc_html_e( 'Careers', 'techofay' ); ?>
                    </a>

                    <a href="<?php echo esc_url( home_url( '/blog' ) ); ?>" class="text-sm font-medium text-[#8B9AB5] hover:text-[#00D4FF] transition-colors <?php echo is_home() || is_singular( 'post' ) ? 'text-[#00D4FF] font-semibold' : ''; ?>">
                        <?php esc_html_e( 'Blog', 'techofay' ); ?>
                    </a>

                    <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="text-sm font-medium text-[#8B9AB5] hover:text-[#00D4FF] transition-colors <?php echo is_page( 'contact' ) ? 'text-[#00D4FF] font-semibold' : ''; ?>">
                        <?php esc_html_e( 'Contact', 'techofay' ); ?>
                    </a>
                </nav>

                <!-- Header Actions (CTA & Mobile Menu Button) -->
                <div class="flex items-center gap-4">
                    <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] transition-all duration-300">
                        <span><?php esc_html_e( 'Get Free Consultation', 'techofay' ); ?></span>
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>

                    <!-- Mobile Hamburger Button -->
                    <button id="mobile-menu-toggle" type="button" class="lg:hidden p-2 rounded-xl text-[#8B9AB5] hover:text-white hover:bg-white/5 transition-colors focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only"><?php esc_html_e( 'Open main menu', 'techofay' ); ?></span>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path class="menu-open-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            <path class="menu-close-icon hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Slide-Down Menu -->
        <div id="mobile-menu" class="hidden lg:hidden border-t border-[rgba(43,110,250,0.2)] bg-[#050B1F]/95 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="block py-2 text-sm font-semibold text-white hover:text-[#00D4FF]">Home</a>
            <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="block py-2 text-sm font-semibold text-[#8B9AB5] hover:text-[#00D4FF]">Services (6 Verticals)</a>
            <a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="block py-2 text-sm font-semibold text-[#8B9AB5] hover:text-[#00D4FF]">Products (5 SaaS Suites)</a>
            <a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="block py-2 text-sm font-semibold text-[#8B9AB5] hover:text-[#00D4FF]">About Us</a>
            <a href="<?php echo esc_url( home_url( '/careers' ) ); ?>" class="block py-2 text-sm font-semibold text-[#8B9AB5] hover:text-[#00D4FF]">Careers</a>
            <a href="<?php echo esc_url( home_url( '/blog' ) ); ?>" class="block py-2 text-sm font-semibold text-[#8B9AB5] hover:text-[#00D4FF]">Blog</a>
            <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="block py-2 text-sm font-semibold text-[#8B9AB5] hover:text-[#00D4FF]">Contact</a>
            <div class="pt-3 border-t border-white/10">
                <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="w-full py-3 rounded-xl text-xs font-bold text-center text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] flex items-center justify-center gap-2">
                    <span>Get Free Consultation</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
            </div>
        </div>
    </header>

    <div id="content" class="site-content flex-1">
