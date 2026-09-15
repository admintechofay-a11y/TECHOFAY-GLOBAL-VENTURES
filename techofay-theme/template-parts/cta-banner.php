<?php
/**
 * Template part: CTA Conversion Banner
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$cta_heading = get_field( 'cta_heading' ) ?: 'Ready to Accelerate Your Enterprise Digital Sovereignty?';
$cta_subtext = get_field( 'cta_subtext' ) ?: 'Speak directly with our senior solutions engineers. Custom architectures, guaranteed delivery schedules, and 100% money-back guarantee.';
$cta_btn     = get_field( 'cta_primary_text' ) ?: 'Get Free Consultation';
$cta_url     = get_field( 'cta_primary_url' ) ?: home_url( '/contact' );
?>

<section class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
    <div class="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#050B1F] to-[#0A1628] border border-[#00D4FF]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-center">
        <!-- Ambient lighting layers -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#00D4FF]/20 via-[#2B6EFA]/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#2B6EFA]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-3xl mx-auto space-y-6">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF]">
                <span class="w-2 h-2 rounded-full bg-[#00D4FF] animate-ping"></span>
                <span>RISK-FREE TRANSFORMATION</span>
            </div>

            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                <?php echo esc_html( $cta_heading ); ?>
            </h2>

            <p class="text-sm sm:text-base text-[#8B9AB5] leading-relaxed max-w-2xl mx-auto">
                <?php echo esc_html( $cta_subtext ); ?>
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a href="<?php echo esc_url( $cta_url ); ?>" class="w-full sm:w-auto px-9 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2B6EFA] via-[#00D4FF] to-[#2B6EFA] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_0_30px_rgba(0,212,255,0.5)] flex items-center justify-center gap-2 cursor-pointer">
                    <span><?php echo esc_html( $cta_btn ); ?></span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>

                <a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-[#00D4FF]/40 transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <span>Explore 5 SaaS Products</span>
                </a>
            </div>

            <!-- Hotline Bar -->
            <div class="pt-6 border-t border-white/10 text-xs text-[#8B9AB5] flex items-center justify-center gap-2">
                <span>Direct Executive Advisory:</span>
                <a href="tel:+919359339000" class="text-white hover:text-[#00D4FF] font-mono font-semibold">+91-9359339000</a>
                <span>&bull;</span>
                <a href="mailto:director@techofay.com" class="text-[#00D4FF] hover:underline">director@techofay.com</a>
            </div>
        </div>
    </div>
</section>
