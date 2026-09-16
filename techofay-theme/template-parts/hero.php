<?php
/**
 * Template part: Hero Section (White & Forest Green)
 * Exactly matches client/src/components/home/Hero.jsx 1-to-1
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Retrieve ACF values with fallback defaults matching Hero.jsx
$hero_badge     = trim( get_field( 'hero_badge_text' ) ?: 'Trusted by 500+ Global Enterprises & Scale-Ups' );
$h1_line1       = trim( get_field( 'hero_h1_line1' ) ?: 'Engineering the' );
$h1_accent      = trim( get_field( 'hero_h1_accent_word' ) ?: 'Future' );
$h1_line2       = trim( get_field( 'hero_h1_line2' ) ?: 'One Solution at a Time.' );
$hero_subtext   = trim( get_field( 'hero_subtext' ) ?: 'TECHOFAY GLOBAL VENTURES empowers enterprise transformation with complete digital growth solutions — Websites, SEO, Social Media, Digital Marketing, Branding, Smart NFC Cards, Mobile Apps, and Custom AI Development.' );
$guarantee_text = trim( get_field( 'hero_guarantee_text' ) ?: '100% Money-Back Guarantee — If you don’t get clients, we refund you!' );
$cta_p_text     = trim( get_field( 'hero_cta_primary_text' ) ?: 'Explore Our Services' );
$cta_p_url      = get_field( 'hero_cta_primary_url' ) ?: home_url( '/services' );
?>

<section class="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#0A1628]">
    <!-- Subtle green gradient mesh on right side -->
    <div 
        class="absolute top-0 right-0 w-full lg:w-3/5 h-full pointer-events-none opacity-60"
        style="background: radial-gradient(circle at 80% 30%, rgba(220, 252, 231, 0.7) 0%, rgba(240, 253, 244, 0.5) 45%, rgba(255, 255, 255, 0) 75%);"
    ></div>

    <!-- 3D Subtle Green Particle Field (opacity 0.3) -->
    <div id="three-hero-canvas" class="absolute inset-0 pointer-events-none z-0 overflow-hidden"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <!-- Left Column: Copy & CTAs -->
            <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                <!-- Top Enterprise Badge -->
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(0,212,255,0.3)] shadow-xs animate-float-slow">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2B6EFA] opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-[#2B6EFA]"></span>
                    </span>
                    <span class="text-xs font-semibold tracking-wide text-[#1E50C8]">
                        <?php echo esc_html( $hero_badge ); ?>
                    </span>
                </div>

                <!-- Main Headline H1=56px, #111827 with one word highlighted in #2B6EFA -->
                <h1 class="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[56px] text-[#FFFFFF] tracking-tight leading-[1.12]">
                    <?php echo esc_html( $h1_line1 ); ?> <span class="text-[#2B6EFA]"><?php echo esc_html( $h1_accent ); ?></span>,<br />
                    <?php echo esc_html( $h1_line2 ); ?>
                </h1>

                <!-- Subtext: #6B7280 -->
                <p class="text-base sm:text-lg text-[#8B9AB5] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                    <strong class="text-[#FFFFFF] font-semibold">TECHOFAY GLOBAL VENTURES</strong> empowers enterprise transformation with complete digital growth solutions — Websites, SEO, Social Media, Digital Marketing, Branding, Smart NFC Cards, Mobile Apps, and Custom AI Development.
                </p>

                <!-- 100% Money-Back Guarantee Badge -->
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[rgba(43,110,250,0.2)] border border-[rgba(0,212,255,0.3)] text-[#1E50C8] text-xs font-semibold">
                    <span class="w-2 h-2 rounded-full bg-[#2B6EFA] animate-pulse"></span>
                    <span><?php echo esc_html( $guarantee_text ); ?></span>
                </div>

                <!-- CTAs: Primary = #2B6EFA button, Secondary = white bg + green border + green text -->
                <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                    <a
                        href="<?php echo esc_url( $cta_p_url ); ?>"
                        class="w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold text-sm text-[#1c1400] font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] transition-colors shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
                    >
                        <span><?php echo esc_html( $cta_p_text ); ?></span>
                        <svg class="w-4 h-4 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>

                    <button
                        type="button"
                        id="hero-watch-demo-btn"
                        class="w-full sm:w-auto px-7 py-3.5 rounded-lg font-semibold text-sm text-[#2B6EFA] bg-[#0A1628] border border-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)] transition-colors flex items-center justify-center gap-2 group cursor-pointer"
                    >
                        <div class="w-6 h-6 rounded-full bg-[rgba(43,110,250,0.2)] flex items-center justify-center">
                            <svg class="w-3 h-3 text-[#2B6EFA] fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                        <span>Watch Architecture Demo</span>
                    </button>
                </div>

                <!-- Trust Logos Row (Exact match to Hero.jsx) -->
                <div class="pt-6 border-t border-[rgba(43,110,250,0.2)]">
                    <div class="text-[11px] uppercase tracking-widest text-[#8B9AB5] font-semibold mb-3">
                        Enterprise Standards & Certifications
                    </div>
                    <div class="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7">
                        <div class="flex items-center gap-2 text-xs font-medium text-[#c4d7f5]">
                            <svg class="w-4 h-4 text-[#2B6EFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                            <span>ISO 27001 Certified</span>
                        </div>
                        <div class="flex items-center gap-2 text-xs font-medium text-[#c4d7f5]">
                            <svg class="w-4 h-4 text-[#2B6EFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
                            <span>AWS Premier Partner</span>
                        </div>
                        <div class="flex items-center gap-2 text-xs font-medium text-[#c4d7f5]">
                            <svg class="w-4 h-4 text-[#2B6EFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            <span>Google Cloud Partner</span>
                        </div>
                        <div class="flex items-center gap-2 text-xs font-medium text-[#c4d7f5]">
                            <svg class="w-4 h-4 text-[#2B6EFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                            <span>SOC 2 Type II</span>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Right Column: Three.js Interactive 3D Cyber Globe with Floating Telemetric Cards -->
            <div class="lg:col-span-5 flex items-center justify-center relative">
                <div class="relative w-full h-[380px] sm:h-[450px] lg:h-[500px] flex items-center justify-center">
                    <!-- Background glow halo -->
                    <div class="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-green-300/30 via-emerald-200/40 to-teal-300/30 blur-3xl pointer-events-none"></div>
                    <div id="tech-globe-container" class="w-full h-full cursor-grab active:cursor-grabbing"></div>
                </div>

                <!-- Floating Live Telemetric Card 1 (Top-Right) -->
                <div class="hidden sm:flex absolute -top-4 -right-4 bg-[#0A1628] px-4 py-3 rounded-xl border border-[rgba(43,110,250,0.2)] shadow-[0_8px_24px_rgba(22,163,74,0.08)] animate-float-slow items-center gap-2.5 z-20">
                    <div class="w-2.5 h-2.5 rounded-full bg-[#2B6EFA] animate-ping"></div>
                    <div>
                        <div class="text-[11px] font-bold text-[#FFFFFF]">SOC TELEMETRY: ACTIVE</div>
                        <div class="text-[10px] text-[#2B6EFA] font-medium">4.8M+ Threats Blocked Daily</div>
                    </div>
                </div>

                <!-- Floating Live Telemetric Card 2 (Bottom-Left) -->
                <div class="hidden sm:flex absolute -bottom-4 -left-4 bg-[#0A1628] px-4 py-3 rounded-xl border border-[rgba(43,110,250,0.2)] shadow-[0_8px_24px_rgba(22,163,74,0.08)] animate-float-slow items-center gap-2.5 z-20" style="animation-delay: 1.8s;">
                    <div class="w-7 h-7 rounded-full bg-[rgba(43,110,250,0.2)] flex items-center justify-center">
                        <svg class="w-4 h-4 text-[#2B6EFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <div>
                        <div class="text-[11px] font-bold text-[#FFFFFF]">ZERO TRUST CORE</div>
                        <div class="text-[10px] text-[#2B6EFA] font-medium">99.999% SLA Uptime</div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- Demo Architecture Modal (Triggered by Watch Architecture Demo) -->
    <div id="hero-demo-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div class="bg-[#0A1628] rounded-2xl max-w-2xl w-full border border-[rgba(43,110,250,0.2)] shadow-2xl overflow-hidden animate-scale-up">
            <div class="p-6 border-b border-[rgba(43,110,250,0.2)] flex items-center justify-between">
                <div>
                    <h3 class="font-heading font-bold text-lg text-[#FFFFFF]">TECHOFAY Enterprise Architecture Overview</h3>
                    <p class="text-xs text-[#8B9AB5]">Watch how our autonomous Zero Trust and AI systems integrate with your stack.</p>
                </div>
                <button type="button" id="close-demo-modal" class="p-2 rounded-lg text-[#8B9AB5] hover:text-[#FFFFFF] hover:bg-[#070E24] transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
            </div>
            <div class="p-6 space-y-4">
                <div class="relative aspect-video rounded-xl bg-[#070E24] border border-[rgba(43,110,250,0.2)] overflow-hidden flex items-center justify-center p-6 text-center">
                    <div class="space-y-3">
                        <div class="w-16 h-16 rounded-full bg-[rgba(43,110,250,0.2)] flex items-center justify-center mx-auto">
                            <svg class="w-7 h-7 text-[#2B6EFA] fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                        <h4 class="font-heading text-[#FFFFFF] text-base font-semibold">
                            Enterprise Demonstration Stream
                        </h4>
                        <p class="text-xs text-[#8B9AB5] max-w-md mx-auto">
                            Discover the real-time telemetric defense grid, automated microservices deployment pipelines, and AI agent reasoning loops deployed for our global enterprise clientele.
                        </p>
                    </div>
                </div>
                <div class="flex justify-end pt-2">
                    <a
                        href="<?php echo esc_url( home_url( '/contact' ) ); ?>"
                        class="px-6 py-2.5 rounded-lg text-xs font-semibold text-[#1c1400] font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] transition-colors shadow-sm"
                    >
                        Book a Live Architectural Walkthrough
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const demoBtn = document.getElementById('hero-watch-demo-btn');
    const demoModal = document.getElementById('hero-demo-modal');
    const closeBtn = document.getElementById('close-demo-modal');

    if (demoBtn && demoModal) {
        demoBtn.addEventListener('click', function() {
            demoModal.classList.remove('hidden');
        });
    }

    if (closeBtn && demoModal) {
        closeBtn.addEventListener('click', function() {
            demoModal.classList.add('hidden');
        });
        demoModal.addEventListener('click', function(e) {
            if (e.target === demoModal) {
                demoModal.classList.add('hidden');
            }
        });
    }
});
</script>
