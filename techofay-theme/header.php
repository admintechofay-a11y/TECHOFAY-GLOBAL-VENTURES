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
<html <?php language_attributes(); ?> class="scroll-smooth">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <meta name="theme-color" content="#16A34A">
    <!-- Tailwind CSS CDN for instant rendering -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'brand-green': '#16A34A',
                        'brand-dark': '#166534',
                        'brand-light': '#DCFCE7',
                        'brand-alt': '#F0FDF4',
                        'border-accent': '#BBF7D0',
                    }
                }
            }
        }
    </script>
    <?php wp_head(); ?>
</head>

<body <?php body_class( 'bg-white text-[#374151] font-sans antialiased selection:bg-[#16A34A] selection:text-white min-h-screen flex flex-col' ); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site flex-1 flex flex-col">
    <a class="skip-link screen-reader-text sr-only focus:not-sr-only focus:p-4 focus:bg-[#16A34A] focus:text-white focus:absolute focus:z-50" href="#primary">
        <?php esc_html_e( 'Skip to content', 'techofay' ); ?>
    </a>

    <!-- Top Announcement Bar (White & Forest Green) -->
    <div class="bg-[#F0FDF4] border-b border-[#DCFCE7] text-xs text-[#166534] py-2 px-4 sm:px-6 lg:px-8 hidden md:block">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <div class="flex items-center gap-6">
                <span class="inline-flex items-center gap-2 text-[#16A34A]">
                    <span class="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse"></span>
                    <strong class="text-[#166534] font-medium">100% Money-Back Guarantee</strong> &mdash; If you don't get clients, we refund you!
                </span>
                <span class="text-[#BBF7D0]">|</span>
                <span class="flex items-center gap-1.5 text-[#374151]">
                    <span>HQ: Vadodara</span> &bull; <strong class="text-[#166534]">Bangalore (ETV Marathahalli)</strong> &bull; <span>Chennai</span> &bull; <span>Ganjdundwara</span> &bull; <span>Edinburgh (UK)</span>
                </span>
            </div>
            <div class="flex items-center gap-5">
                <a href="tel:+919359339000" class="text-[#166534] hover:text-[#16A34A] transition-colors flex items-center gap-1.5 font-medium">
                    <svg class="w-3.5 h-3.5 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    <span>+91-9359339000</span>
                </a>
                <a href="mailto:info@techofay.com" class="text-[#166534] hover:text-[#16A34A] transition-colors flex items-center gap-1.5 font-medium">
                    <svg class="w-3.5 h-3.5 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    <span>info@techofay.com</span>
                </a>
            </div>
        </div>
    </div>

    <!-- Main Navigation Bar -->
    <header id="masthead" class="site-header sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                
                <!-- Logo -->
                <div class="site-branding flex items-center gap-3">
                    <?php if ( has_custom_logo() ) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2 group">
                            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#16A34A] to-[#15803D] flex items-center justify-center font-heading font-extrabold text-lg text-white shadow-sm">
                                T
                            </div>
                            <div class="flex flex-col">
                                <span class="font-heading font-extrabold text-xl tracking-tight text-[#111827] group-hover:text-[#16A34A] transition-colors">
                                    TECHOFAY<span class="text-[#16A34A]">.</span>
                                </span>
                                <span class="text-[9px] tracking-widest uppercase font-mono text-[#6B7280] -mt-1">
                                    GLOBAL VENTURES
                                </span>
                            </div>
                        </a>
                    <?php endif; ?>
                </div>

                <!-- Desktop Navigation Menu -->
                <nav id="site-navigation" class="main-navigation hidden lg:flex items-center gap-7" aria-label="<?php esc_attr_e( 'Main Menu', 'techofay' ); ?>">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="text-sm font-medium text-[#374151] hover:text-[#16A34A] transition-colors <?php echo is_front_page() ? 'text-[#16A34A] font-bold' : ''; ?>">
                        <?php esc_html_e( 'Home', 'techofay' ); ?>
                    </a>

                    <!-- Services Dropdown -->
                    <div class="relative group">
                        <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="text-sm font-medium text-[#374151] group-hover:text-[#16A34A] transition-colors inline-flex items-center gap-1 <?php echo is_post_type_archive( 'techofay_service' ) || is_singular( 'techofay_service' ) ? 'text-[#16A34A] font-bold' : ''; ?>">
                            <span><?php esc_html_e( 'Services', 'techofay' ); ?></span>
                            <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                        </a>
                        <div class="absolute top-full -left-4 w-72 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                            <div class="p-3 rounded-2xl shadow-xl border border-[#E5E7EB] bg-white space-y-1">
                                <a href="<?php echo esc_url( home_url( '/service/website-development' ) ); ?>" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F0FDF4] transition-colors">
                                    <div class="w-8 h-8 rounded-lg bg-[#DCFCE7] flex items-center justify-center text-[#16A34A]">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                                    </div>
                                    <div>
                                        <div class="text-xs font-semibold text-[#111827]">Website Development</div>
                                        <div class="text-[10px] text-[#6B7280]">Full-stack web solutions</div>
                                    </div>
                                </a>
                                <a href="<?php echo esc_url( home_url( '/service/custom-ai-development' ) ); ?>" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F0FDF4] transition-colors">
                                    <div class="w-8 h-8 rounded-lg bg-[#DCFCE7] flex items-center justify-center text-[#16A34A]">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                                    </div>
                                    <div>
                                        <div class="text-xs font-semibold text-[#111827]">Custom AI Development</div>
                                        <div class="text-[10px] text-[#6B7280]">Autonomous AI Agents & ML</div>
                                    </div>
                                </a>
                                <a href="<?php echo esc_url( home_url( '/service/seo-digital-marketing' ) ); ?>" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F0FDF4] transition-colors">
                                    <div class="w-8 h-8 rounded-lg bg-[#DCFCE7] flex items-center justify-center text-[#16A34A]">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>
                                    </div>
                                    <div>
                                        <div class="text-xs font-semibold text-[#111827]">SEO & Digital Marketing</div>
                                        <div class="text-[10px] text-[#6B7280]">Organic growth & client acquisition</div>
                                    </div>
                                </a>
                                <div class="pt-1 border-t border-[#E5E7EB]">
                                    <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="block text-center py-1.5 text-[11px] font-semibold text-[#16A34A] hover:underline">
                                        View All 6 Verticals &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Products Dropdown -->
                    <div class="relative group">
                        <a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="text-sm font-medium text-[#374151] group-hover:text-[#16A34A] transition-colors inline-flex items-center gap-1 <?php echo is_post_type_archive( 'techofay_product' ) || is_singular( 'techofay_product' ) ? 'text-[#16A34A] font-bold' : ''; ?>">
                            <span><?php esc_html_e( 'Products', 'techofay' ); ?></span>
                            <span class="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#DCFCE7] text-[#166534] border border-[#BBF7D0]">SaaS</span>
                            <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                        </a>
                        <div class="absolute top-full -left-4 w-72 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                            <div class="p-3 rounded-2xl shadow-xl border border-[#E5E7EB] bg-white space-y-1">
                                <a href="<?php echo esc_url( home_url( '/product/techofay-erp' ) ); ?>" class="block p-2.5 rounded-xl hover:bg-[#F0FDF4] transition-colors">
                                    <div class="text-xs font-semibold text-[#111827]">Techofay ERP</div>
                                    <div class="text-[10px] text-[#6B7280]">Complete enterprise resource planning</div>
                                </a>
                                <a href="<?php echo esc_url( home_url( '/product/smart-business-card' ) ); ?>" class="block p-2.5 rounded-xl hover:bg-[#F0FDF4] transition-colors">
                                    <div class="text-xs font-semibold text-[#111827]">Smart Business Card</div>
                                    <div class="text-[10px] text-[#6B7280]">Contactless NFC digital cards</div>
                                </a>
                                <a href="<?php echo esc_url( home_url( '/product/ai-chatbot-assistant' ) ); ?>" class="block p-2.5 rounded-xl hover:bg-[#F0FDF4] transition-colors">
                                    <div class="text-xs font-semibold text-[#111827]">AI Chatbot Assistant</div>
                                    <div class="text-[10px] text-[#6B7280]">24/7 lead conversion engine</div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="text-sm font-medium text-[#374151] hover:text-[#16A34A] transition-colors <?php echo is_page( 'about' ) ? 'text-[#16A34A] font-bold' : ''; ?>">
                        <?php esc_html_e( 'About Us', 'techofay' ); ?>
                    </a>

                    <a href="<?php echo esc_url( home_url( '/careers' ) ); ?>" class="text-sm font-medium text-[#374151] hover:text-[#16A34A] transition-colors <?php echo is_page( 'careers' ) || is_post_type_archive( 'job_opening' ) ? 'text-[#16A34A] font-bold' : ''; ?>">
                        <?php esc_html_e( 'Careers', 'techofay' ); ?>
                    </a>

                    <a href="<?php echo esc_url( home_url( '/blog' ) ); ?>" class="text-sm font-medium text-[#374151] hover:text-[#16A34A] transition-colors <?php echo is_home() || is_singular( 'post' ) ? 'text-[#16A34A] font-bold' : ''; ?>">
                        <?php esc_html_e( 'Blog', 'techofay' ); ?>
                    </a>

                    <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="text-sm font-medium text-[#374151] hover:text-[#16A34A] transition-colors <?php echo is_page( 'contact' ) ? 'text-[#16A34A] font-bold' : ''; ?>">
                        <?php esc_html_e( 'Contact', 'techofay' ); ?>
                    </a>
                </nav>

                <!-- Header Actions (CTA & Mobile Menu Button) -->
                <div class="flex items-center gap-4">
                    <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#16A34A] hover:bg-[#166534] shadow-sm transition-all duration-200">
                        <span><?php esc_html_e( 'Get Free Consultation', 'techofay' ); ?></span>
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>

                    <!-- Mobile Hamburger Button -->
                    <button id="mobile-menu-toggle" type="button" class="lg:hidden p-2 rounded-xl text-[#374151] hover:text-[#16A34A] hover:bg-[#F0FDF4] transition-colors focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
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
        <div id="mobile-menu" class="hidden lg:hidden border-t border-[#E5E7EB] bg-white px-4 pt-4 pb-6 space-y-3">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="block py-2 text-sm font-semibold text-[#111827] hover:text-[#16A34A]">Home</a>
            <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="block py-2 text-sm font-semibold text-[#374151] hover:text-[#16A34A]">Services (6 Verticals)</a>
            <a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="block py-2 text-sm font-semibold text-[#374151] hover:text-[#16A34A]">Products (5 SaaS Suites)</a>
            <a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="block py-2 text-sm font-semibold text-[#374151] hover:text-[#16A34A]">About Us</a>
            <a href="<?php echo esc_url( home_url( '/careers' ) ); ?>" class="block py-2 text-sm font-semibold text-[#374151] hover:text-[#16A34A]">Careers</a>
            <a href="<?php echo esc_url( home_url( '/blog' ) ); ?>" class="block py-2 text-sm font-semibold text-[#374151] hover:text-[#16A34A]">Blog</a>
            <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="block py-2 text-sm font-semibold text-[#374151] hover:text-[#16A34A]">Contact</a>
            <div class="pt-3 border-t border-[#E5E7EB]">
                <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="w-full py-3 rounded-xl text-xs font-bold text-center text-white bg-[#16A34A] hover:bg-[#166534] flex items-center justify-center gap-2">
                    <span>Get Free Consultation</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
            </div>
        </div>
    </header>

    <div id="content" class="site-content flex-1">
