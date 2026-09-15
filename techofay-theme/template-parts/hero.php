<?php
/**
 * Template part: Hero Section
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Retrieve ACF values with fallback defaults
$hero_badge     = get_field( 'hero_badge_text' ) ?: 'Trusted by 500+ Global Enterprises & Scale-Ups';
$h1_line1       = get_field( 'hero_h1_line1' ) ?: 'Engineering the';
$h1_accent      = get_field( 'hero_h1_accent_word' ) ?: 'Future';
$h1_line2       = get_field( 'hero_h1_line2' ) ?: 'One Solution at a Time.';
$hero_subtext   = get_field( 'hero_subtext' ) ?: 'TECHOFAY GLOBAL VENTURES empowers enterprise transformation with complete digital growth solutions — Websites, SEO, Social Media, Digital Marketing, Branding, Smart NFC Cards, Mobile Apps, and Custom AI Development.';
$guarantee_text = get_field( 'hero_guarantee_text' ) ?: '100% Money-Back Guarantee — If you don’t get clients, we refund you!';
$cta_p_text     = get_field( 'hero_cta_primary_text' ) ?: 'Explore Our Services';
$cta_p_url      = get_field( 'hero_cta_primary_url' ) ?: home_url( '/services' );
$cta_s_text     = get_field( 'hero_cta_secondary_text' ) ?: 'Request Technical Consultation';
?>

<section class="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#050B1F]">
    <!-- Ambient glowing backgrounds -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#2B6EFA]/15 via-[#00D4FF]/10 to-[#7B2FBE]/10 rounded-full blur-3xl pointer-events-none"></div>

    <!-- Three.js 3D Particles WebGL Canvas Container -->
    <div id="three-hero-canvas" class="absolute inset-0 z-0 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <!-- Left Column: Copy & CTAs -->
            <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                <!-- Trust Badge -->
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1628]/90 border border-[#00D4FF]/30 shadow-[0_0_15px_rgba(0,212,255,0.15)] animate-float-slow">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00D4FF]"></span>
                    </span>
                    <span class="text-xs font-semibold tracking-wide text-[#00D4FF]">
                        <?php echo esc_html( $hero_badge ); ?>
                    </span>
                </div>

                <!-- Main Headline -->
                <h1 class="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[56px] text-white tracking-tight leading-[1.12]">
                    <?php echo esc_html( $h1_line1 ); ?> 
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#2B6EFA] via-[#00D4FF] to-[#2B6EFA] animate-gradient-x">
                        <?php echo esc_html( $h1_accent ); ?>
                    </span>,<br />
                    <?php echo esc_html( $h1_line2 ); ?>
                </h1>

                <!-- Subtext -->
                <p class="text-base sm:text-lg text-[#8B9AB5] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                    <?php echo esc_html( $hero_subtext ); ?>
                </p>

                <!-- 100% Money-Back Guarantee Badge -->
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] text-xs font-semibold">
                    <span class="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse"></span>
                    <span><?php echo esc_html( $guarantee_text ); ?></span>
                </div>

                <!-- Action CTAs -->
                <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                    <a href="<?php echo esc_url( $cta_p_url ); ?>" class="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer">
                        <span><?php echo esc_html( $cta_p_text ); ?></span>
                        <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>

                    <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-[#00D4FF]/40 transition-all flex items-center justify-center gap-2 group cursor-pointer">
                        <svg class="w-4 h-4 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                        <span><?php echo esc_html( $cta_s_text ); ?></span>
                    </a>
                </div>

                <!-- Certifications Row -->
                <div class="pt-6 border-t border-white/10">
                    <div class="text-[11px] uppercase tracking-widest text-[#8B9AB5] font-semibold mb-3">
                        Enterprise Sovereign Standards
                    </div>
                    <div class="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7">
                        <div class="flex items-center gap-2 text-xs font-medium text-white/80">
                            <svg class="w-4 h-4 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                            <span>ISO 27001 Certified</span>
                        </div>
                        <div class="flex items-center gap-2 text-xs font-medium text-white/80">
                            <svg class="w-4 h-4 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
                            <span>SOC2 Type II Compliant</span>
                        </div>
                        <div class="flex items-center gap-2 text-xs font-medium text-white/80">
                            <svg class="w-4 h-4 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                            <span>Zero Trust Architecture</span>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Right Column: 3D Interactive WebGL Globe -->
            <div class="lg:col-span-5 relative flex items-center justify-center">
                <div class="relative w-full max-w-lg aspect-square">
                    <!-- Rotating 3D WebGL Globe Container -->
                    <div id="tech-globe-container" class="w-full h-full relative z-10"></div>

                    <!-- Ambient Ring Glows -->
                    <div class="absolute inset-0 rounded-full border border-[#00D4FF]/20 animate-spin-slow pointer-events-none"></div>
                    <div class="absolute inset-8 rounded-full border border-[#2B6EFA]/30 border-dashed animate-reverse-spin pointer-events-none"></div>
                </div>
            </div>

        </div>
    </div>
</section>
