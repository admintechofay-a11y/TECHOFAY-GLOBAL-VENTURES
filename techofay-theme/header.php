<?php
/**
 * The header for our theme
 * Matches client/src/components/common/Navbar.jsx 1-to-1
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

    <!-- Top Corporate Announcement Bar (Exact match to Navbar.jsx) -->
    <div class="bg-[#F0FDF4] border-b border-[#BBF7D0] text-[#166534] text-[11px] py-1.5 px-4 font-medium">
        <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div class="flex items-center gap-2 truncate">
                <span class="px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#166534] font-semibold text-[10px] uppercase tracking-wider shrink-0 border border-[#BBF7D0]">
                    100% Money-Back Guarantee
                </span>
                <span class="truncate text-[#166534]">
                    Complete Digital Growth: Website &bull; SEO &bull; Social Media &bull; Digital Marketing &bull; Branding &bull; NFC Cards &bull; Custom AI
                </span>
            </div>
            <div class="hidden md:flex items-center gap-3 text-[#166534] shrink-0 text-[11px]">
                <span>HQ: <strong class="text-[#111827]">Vadodara, Gujarat</strong></span>
                <span>&bull;</span>
                <a href="tel:+919359339000" class="text-[#16A34A] hover:text-[#166534] font-mono font-bold">
                    📞 +91-9359339000
                </a>
            </div>
        </div>
    </div>

    <!-- Main Navbar (Exact match to Navbar.jsx) -->
    <header class="bg-white border-b border-[#E5E7EB] shadow-[0_1px_0_#E5E7EB] sticky top-0 z-50 transition-all duration-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-[72px]">
            
            <!-- Brand Logo: TECHOFAY in #111827 bold with green dot -->
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2.5 group">
                <div class="w-9 h-9 rounded-lg bg-[#16A34A] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
                    <span class="font-heading font-extrabold text-lg text-white">
                        T
                    </span>
                </div>
                <div class="flex flex-col">
                    <span class="font-heading font-extrabold text-base tracking-tight text-[#111827] flex items-center">
                        TECHOFAY
                        <span class="inline-block w-2 h-2 rounded-full bg-[#16A34A] ml-1"></span>
                    </span>
                    <span class="text-[9px] tracking-[0.22em] text-[#6B7280] font-semibold uppercase -mt-0.5">
                        GLOBAL VENTURES
                    </span>
                </div>
            </a>

            <!-- Desktop Navigation Links: #374151, hover #16A34A -->
            <nav class="hidden lg:flex items-center gap-1 xl:gap-2">
                <a
                    href="<?php echo esc_url( home_url( '/' ) ); ?>"
                    class="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors <?php echo is_front_page() ? 'text-[#16A34A] bg-[#DCFCE7]/60 font-semibold' : 'text-[#374151] hover:text-[#16A34A] hover:bg-[#F8FAF8]'; ?>"
                >
                    Home
                </a>

                <!-- Services Dropdown -->
                <div class="relative group">
                    <a
                        href="<?php echo esc_url( home_url( '/services' ) ); ?>"
                        class="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 <?php echo is_post_type_archive( 'techofay_service' ) || is_singular( 'techofay_service' ) ? 'text-[#16A34A] bg-[#DCFCE7]/60 font-semibold' : 'text-[#374151] hover:text-[#16A34A] hover:bg-[#F8FAF8]'; ?>"
                    >
                        <span>Services</span>
                        <svg class="w-3.5 h-3.5 text-[#6B7280] group-hover:rotate-180 group-hover:text-[#16A34A] transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </a>
                    <div class="absolute top-full left-0 w-72 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div class="bg-white rounded-xl p-2 shadow-xl border border-[#E5E7EB]">
                            <div class="px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#6B7280] uppercase border-b border-[#E5E7EB] mb-1">
                                Enterprise Verticals
                            </div>
                            <a href="<?php echo esc_url( home_url( '/service/cybersecurity' ) ); ?>" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#374151] hover:text-[#16A34A] hover:bg-[#F0FDF4] transition-colors">
                                <span class="text-base">🛡️</span>
                                <span>Cybersecurity & Zero Trust</span>
                            </a>
                            <a href="<?php echo esc_url( home_url( '/service/development' ) ); ?>" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#374151] hover:text-[#16A34A] hover:bg-[#F0FDF4] transition-colors">
                                <span class="text-base">💻</span>
                                <span>Development & QA Testing</span>
                            </a>
                            <a href="<?php echo esc_url( home_url( '/service/ai-data-analytics' ) ); ?>" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#374151] hover:text-[#16A34A] hover:bg-[#F0FDF4] transition-colors">
                                <span class="text-base">🤖</span>
                                <span>AI & Intelligent Automation</span>
                            </a>
                            <a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#374151] hover:text-[#16A34A] hover:bg-[#F0FDF4] transition-colors">
                                <span class="text-base">📦</span>
                                <span>Techofay Software Products</span>
                            </a>
                            <a href="<?php echo esc_url( home_url( '/service/growth-marketing' ) ); ?>" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#374151] hover:text-[#16A34A] hover:bg-[#F0FDF4] transition-colors">
                                <span class="text-base">📣</span>
                                <span>Growth & Marketing</span>
                            </a>
                            <a href="<?php echo esc_url( home_url( '/service/cloud-infrastructure' ) ); ?>" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#374151] hover:text-[#16A34A] hover:bg-[#F0FDF4] transition-colors">
                                <span class="text-base">⚙️</span>
                                <span>Cloud & Infrastructure</span>
                            </a>
                        </div>
                    </div>
                </div>

                <a
                    href="<?php echo esc_url( home_url( '/products' ) ); ?>"
                    class="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors <?php echo is_post_type_archive( 'techofay_product' ) || is_singular( 'techofay_product' ) ? 'text-[#16A34A] bg-[#DCFCE7]/60 font-semibold' : 'text-[#374151] hover:text-[#16A34A] hover:bg-[#F8FAF8]'; ?>"
                >
                    Products
                </a>

                <a
                    href="<?php echo esc_url( home_url( '/about' ) ); ?>"
                    class="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors <?php echo is_page( 'about' ) ? 'text-[#16A34A] bg-[#DCFCE7]/60 font-semibold' : 'text-[#374151] hover:text-[#16A34A] hover:bg-[#F8FAF8]'; ?>"
                >
                    About
                </a>

                <a
                    href="<?php echo esc_url( home_url( '/careers' ) ); ?>"
                    class="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors <?php echo is_page( 'careers' ) || is_post_type_archive( 'job_opening' ) ? 'text-[#16A34A] bg-[#DCFCE7]/60 font-semibold' : 'text-[#374151] hover:text-[#16A34A] hover:bg-[#F8FAF8]'; ?>"
                >
                    Careers
                </a>

                <a
                    href="<?php echo esc_url( home_url( '/blog' ) ); ?>"
                    class="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors <?php echo is_home() || is_singular( 'post' ) ? 'text-[#16A34A] bg-[#DCFCE7]/60 font-semibold' : 'text-[#374151] hover:text-[#16A34A] hover:bg-[#F8FAF8]'; ?>"
                >
                    Blog
                </a>

                <a
                    href="<?php echo esc_url( home_url( '/contact' ) ); ?>"
                    class="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors <?php echo is_page( 'contact' ) ? 'text-[#16A34A] bg-[#DCFCE7]/60 font-semibold' : 'text-[#374151] hover:text-[#16A34A] hover:bg-[#F8FAF8]'; ?>"
                >
                    Contact
                </a>
            </nav>

            <!-- Right CTA & Telemetry -->
            <div class="flex items-center gap-3">
                <!-- Live Telemetry Pill -->
                <div class="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[11px] font-mono text-[#374151]">
                    <span class="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse"></span>
                    <span class="text-[#6B7280]">Node:</span>
                    <span class="text-[#16A34A] font-semibold">14ms</span>
                </div>

                <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#16A34A] hover:bg-[#166534] shadow-sm transition-all">
                    <span>Get Free Consultation</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>

                <!-- Mobile Hamburger Button -->
                <button id="mobile-menu-toggle" type="button" class="lg:hidden p-2 rounded-lg text-[#374151] hover:text-[#16A34A] hover:bg-[#F0FDF4] transition-colors focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path class="menu-open-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        <path class="menu-close-icon hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Slide-Down Menu -->
        <div id="mobile-menu" class="hidden lg:hidden border-t border-[#E5E7EB] bg-white px-4 pt-4 pb-6 space-y-2">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="block px-3 py-2 rounded-lg text-sm font-semibold text-[#111827] hover:text-[#16A34A] hover:bg-[#F0FDF4]">Home</a>
            <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="block px-3 py-2 rounded-lg text-sm font-medium text-[#374151] hover:text-[#16A34A] hover:bg-[#F0FDF4]">Services</a>
            <a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="block px-3 py-2 rounded-lg text-sm font-medium text-[#374151] hover:text-[#16A34A] hover:bg-[#F0FDF4]">Products</a>
            <a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="block px-3 py-2 rounded-lg text-sm font-medium text-[#374151] hover:text-[#16A34A] hover:bg-[#F0FDF4]">About</a>
            <a href="<?php echo esc_url( home_url( '/careers' ) ); ?>" class="block px-3 py-2 rounded-lg text-sm font-medium text-[#374151] hover:text-[#16A34A] hover:bg-[#F0FDF4]">Careers</a>
            <a href="<?php echo esc_url( home_url( '/blog' ) ); ?>" class="block px-3 py-2 rounded-lg text-sm font-medium text-[#374151] hover:text-[#16A34A] hover:bg-[#F0FDF4]">Blog</a>
            <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="block px-3 py-2 rounded-lg text-sm font-medium text-[#374151] hover:text-[#16A34A] hover:bg-[#F0FDF4]">Contact</a>
            <div class="pt-3 border-t border-[#E5E7EB]">
                <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="w-full py-3 rounded-lg text-xs font-bold text-center text-white bg-[#16A34A] hover:bg-[#166534] flex items-center justify-center gap-1.5">
                    <span>Get Free Consultation</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
            </div>
        </div>
    </header>

    <div id="content" class="site-content flex-1">
