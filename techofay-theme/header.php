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
    <meta name="theme-color" content="#050B1F">
    <!-- Tailwind CSS CDN for instant rendering -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'brand-blue': '#2B6EFA',
                        'brand-cyan': '#00D4FF',
                        'brand-violet': '#7B2FBE',
                        'navy-base': '#050B1F',
                        'navy-panel': '#0A1628',
                        'navy-alt': '#070E24',
                        'navy-base': '#050B1F',
                        'navy-panel': '#0A1628',
                        'navy-alt': '#070E24',
                        'brand-blue': '#2B6EFA',
                        'brand-cyan': '#00D4FF',
                        'brand-violet': '#7B2FBE',
                    }
                }
            }
        }
    </script>
    <?php wp_head(); ?>
    <link rel="icon" type="image/png" href="<?php echo esc_url( get_template_directory_uri() . '/assets/images/favicon.png' ); ?>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet">
</head>

<body <?php body_class( 'bg-[#050B1F] text-[#FFFFFF] font-sans antialiased selection:bg-[#2B6EFA] selection:text-white min-h-screen flex flex-col' ); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site flex-1 flex flex-col">
    <a class="skip-link screen-reader-text sr-only focus:not-sr-only focus:p-4 focus:bg-[#2B6EFA] focus:text-white focus:absolute focus:z-50" href="#primary">
        <?php esc_html_e( 'Skip to content', 'techofay' ); ?>
    </a>

    <!-- Top Corporate Announcement Bar (Exact match to Navbar.jsx) -->
    <div class="bg-[rgba(255,255,255,0.05)] border-b border-[rgba(0,212,255,0.3)] text-[#1E50C8] text-[11px] py-1.5 px-4 font-medium">
        <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div class="flex items-center gap-2 truncate">
                <span class="px-2 py-0.5 rounded-full bg-[rgba(43,110,250,0.2)] text-[#1E50C8] font-semibold text-[10px] uppercase tracking-wider shrink-0 border border-[rgba(0,212,255,0.3)]">
                    100% Money-Back Guarantee
                </span>
                <span class="truncate text-[#1E50C8]">
                    Complete Digital Growth: Website &bull; SEO &bull; Social Media &bull; Digital Marketing &bull; Branding &bull; NFC Cards &bull; Custom AI
                </span>
            </div>
            <div class="hidden md:flex items-center gap-3 text-[#1E50C8] shrink-0 text-[11px]">
                <span>HQ: <strong class="text-[#FFFFFF]">Vadodara, Gujarat</strong></span>
                <span>&bull;</span>
                <a href="tel:+919359339000" class="text-[#2B6EFA] hover:text-[#1E50C8] font-mono font-bold">
                    📞 +91-9359339000
                </a>
            </div>
        </div>
    </div>

    <!-- Main Navbar (Exact match to Navbar.jsx) -->
    <header class="bg-[#0A1628] border-b border-[rgba(43,110,250,0.2)] shadow-[0_1px_0_#E5E7EB] sticky top-0 z-50 transition-all duration-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-[72px]">
            
            <!-- Brand Logo: TECHOFAY in #111827 bold with green dot -->
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2.5 group">
                <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/logo.png' ); ?>" alt="TECHOFAY GLOBAL VENTURES" class="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105" />
            </a>

            <!-- Desktop Navigation Links: #374151, hover #2B6EFA -->
            <nav class="hidden lg:flex items-center gap-1 xl:gap-2">
                <a
                    href="<?php echo esc_url( home_url( '/' ) ); ?>"
                    class="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors <?php echo is_front_page() ? 'text-[#2B6EFA] bg-[rgba(43,110,250,0.2)]/60 font-semibold' : 'text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[#070E24]'; ?>"
                >
                    Home
                </a>

                <!-- Services Dropdown -->
                <div class="relative group">
                    <a
                        href="<?php echo esc_url( home_url( '/services' ) ); ?>"
                        class="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 <?php echo is_post_type_archive( 'techofay_service' ) || is_singular( 'techofay_service' ) ? 'text-[#2B6EFA] bg-[rgba(43,110,250,0.2)]/60 font-semibold' : 'text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[#070E24]'; ?>"
                    >
                        <span>Services</span>
                        <svg class="w-3.5 h-3.5 text-[#8B9AB5] group-hover:rotate-180 group-hover:text-[#2B6EFA] transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </a>
                    <div class="absolute top-full left-0 w-72 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div class="bg-[#0A1628] rounded-xl p-2 shadow-xl border border-[rgba(43,110,250,0.2)]">
                            <div class="px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#8B9AB5] uppercase border-b border-[rgba(43,110,250,0.2)] mb-1">
                                Enterprise Verticals
                            </div>
                            <a href="<?php echo esc_url( home_url( '/service/cybersecurity' ) ); ?>" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                                <span class="text-base">🛡️</span>
                                <span>Cybersecurity & Zero Trust</span>
                            </a>
                            <a href="<?php echo esc_url( home_url( '/service/development' ) ); ?>" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                                <span class="text-base">💻</span>
                                <span>Development & QA Testing</span>
                            </a>
                            <a href="<?php echo esc_url( home_url( '/service/ai-data-analytics' ) ); ?>" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                                <span class="text-base">🤖</span>
                                <span>AI & Intelligent Automation</span>
                            </a>
                            <a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                                <span class="text-base">📦</span>
                                <span>Techofay Software Products</span>
                            </a>
                            <a href="<?php echo esc_url( home_url( '/service/growth-marketing' ) ); ?>" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                                <span class="text-base">📣</span>
                                <span>Growth & Marketing</span>
                            </a>
                            <a href="<?php echo esc_url( home_url( '/service/cloud-infrastructure' ) ); ?>" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                                <span class="text-base">⚙️</span>
                                <span>Cloud & Infrastructure</span>
                            </a>
                        </div>
                    </div>
                </div>

                <a
                    href="<?php echo esc_url( home_url( '/products' ) ); ?>"
                    class="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors <?php echo is_post_type_archive( 'techofay_product' ) || is_singular( 'techofay_product' ) ? 'text-[#2B6EFA] bg-[rgba(43,110,250,0.2)]/60 font-semibold' : 'text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[#070E24]'; ?>"
                >
                    Products
                </a>

                <a
                    href="<?php echo esc_url( home_url( '/about' ) ); ?>"
                    class="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors <?php echo is_page( 'about' ) ? 'text-[#2B6EFA] bg-[rgba(43,110,250,0.2)]/60 font-semibold' : 'text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[#070E24]'; ?>"
                >
                    About
                </a>

                <a
                    href="<?php echo esc_url( home_url( '/careers' ) ); ?>"
                    class="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors <?php echo is_page( 'careers' ) || is_post_type_archive( 'job_opening' ) ? 'text-[#2B6EFA] bg-[rgba(43,110,250,0.2)]/60 font-semibold' : 'text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[#070E24]'; ?>"
                >
                    Careers
                </a>

                <a
                    href="<?php echo esc_url( home_url( '/blog' ) ); ?>"
                    class="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors <?php echo is_home() || is_singular( 'post' ) ? 'text-[#2B6EFA] bg-[rgba(43,110,250,0.2)]/60 font-semibold' : 'text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[#070E24]'; ?>"
                >
                    Blog
                </a>

                <a
                    href="<?php echo esc_url( home_url( '/contact' ) ); ?>"
                    class="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors <?php echo is_page( 'contact' ) ? 'text-[#2B6EFA] bg-[rgba(43,110,250,0.2)]/60 font-semibold' : 'text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[#070E24]'; ?>"
                >
                    Contact
                </a>
            </nav>

            <!-- Right CTA & Telemetry -->
            <div class="flex items-center gap-3">
                <!-- Live Telemetry Pill -->
                <div class="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(0,212,255,0.3)] text-[11px] font-mono text-[#c4d7f5]">
                    <span class="w-2 h-2 rounded-full bg-[#2B6EFA] animate-pulse"></span>
                    <span class="text-[#8B9AB5]">Node:</span>
                    <span class="text-[#2B6EFA] font-semibold">14ms</span>
                </div>

                <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-bold text-[#1c1400] font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] shadow-sm transition-all">
                    <span>Get Free Consultation</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>

                <!-- Mobile Hamburger Button -->
                <button id="mobile-menu-toggle" type="button" class="lg:hidden p-2 rounded-lg text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)] transition-colors focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path class="menu-open-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        <path class="menu-close-icon hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Slide-Down Menu -->
        <div id="mobile-menu" class="hidden lg:hidden border-t border-[rgba(43,110,250,0.2)] bg-[#0A1628] px-4 pt-4 pb-6 space-y-2">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="block px-3 py-2 rounded-lg text-sm font-semibold text-[#FFFFFF] hover:text-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)]">Home</a>
            <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="block px-3 py-2 rounded-lg text-sm font-medium text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)]">Services</a>
            <a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="block px-3 py-2 rounded-lg text-sm font-medium text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)]">Products</a>
            <a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="block px-3 py-2 rounded-lg text-sm font-medium text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)]">About</a>
            <a href="<?php echo esc_url( home_url( '/careers' ) ); ?>" class="block px-3 py-2 rounded-lg text-sm font-medium text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)]">Careers</a>
            <a href="<?php echo esc_url( home_url( '/blog' ) ); ?>" class="block px-3 py-2 rounded-lg text-sm font-medium text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)]">Blog</a>
            <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="block px-3 py-2 rounded-lg text-sm font-medium text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)]">Contact</a>
            <div class="pt-3 border-t border-[rgba(43,110,250,0.2)]">
                <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="w-full py-3 rounded-lg text-xs font-bold text-center text-[#1c1400] font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] flex items-center justify-center gap-1.5">
                    <span>Get Free Consultation</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
            </div>
        </div>
    </header>

    <div id="content" class="site-content flex-1">
