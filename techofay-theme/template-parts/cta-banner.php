<?php
/**
 * Template part: High-Conversion CTA Banner
 * Exactly matches client/src/components/home/CtaBanner.jsx 1-to-1
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$cta_title    = get_field( 'cta_banner_title' ) ?: 'Ready to Transform Your <span class="text-[#2B6EFA]">Enterprise Growth?</span>';
$cta_desc     = get_field( 'cta_banner_desc' ) ?: 'Whether you need high-conversion websites, custom AI applications, multi-channel SEO & digital marketing, branding, or smart NFC cards — our senior team delivers guaranteed client growth backed by our 100% money-back guarantee.';
$cta_btn_text = get_field( 'cta_banner_button_text' ) ?: 'Start Your Growth Project';
$cta_btn_url  = get_field( 'cta_banner_button_url' ) ?: home_url( '/contact' );
?>

<section class="relative py-20 bg-[rgba(255,255,255,0.05)] overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="relative rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden border border-[rgba(0,212,255,0.3)] shadow-[0_12px_40px_rgba(0,0,0,0.7)] bg-[#0A1628]">
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <!-- Left Content Column -->
                <div class="lg:col-span-7 text-left space-y-6">
                    <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(43,110,250,0.2)] border border-[rgba(0,212,255,0.3)] text-[#2B6EFA] text-xs font-semibold uppercase tracking-wider">
                        <svg class="w-3.5 h-3.5 text-[#2B6EFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                        Direct Strategic Partnership
                    </div>

                    <h2 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] tracking-tight leading-tight">
                        <?php echo wp_kses_post( $cta_title ); ?>
                    </h2>

                    <p class="text-sm sm:text-base text-[#c4d7f5] leading-relaxed max-w-xl">
                        <?php echo esc_html( $cta_desc ); ?>
                    </p>

                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                        <a
                            href="<?php echo esc_url( $cta_btn_url ); ?>"
                            class="px-8 py-3.5 rounded-lg font-bold text-sm text-[#1c1400] font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] transition-colors shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
                        >
                            <span><?php echo esc_html( $cta_btn_text ); ?></span>
                            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>

                        <a
                            href="<?php echo esc_url( home_url( '/contact' ) ); ?>"
                            class="px-8 py-3.5 rounded-lg font-semibold text-sm text-[#2B6EFA] bg-[#050B1F] border border-[rgba(43,110,250,0.3)] hover:border-[#2B6EFA] hover:bg-[#070E24] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <svg class="w-4 h-4 text-[#2B6EFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                            <span>Schedule a Consultation Call</span>
                        </a>
                    </div>

                    <div class="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#8B9AB5]">
                        <span class="flex items-center gap-1.5">
                            <svg class="w-4 h-4 text-[#2B6EFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                            100% Money-Back Guarantee
                        </span>
                        <span>&bull;</span>
                        <span>24-Hour Response SLA</span>
                        <span>&bull;</span>
                        <span>Dedicated Account Managers</span>
                    </div>
                </div>

                <!-- Right Visual / 3D Simulation Showcase -->
                <div class="lg:col-span-5 flex items-center justify-center relative min-h-[260px] sm:min-h-[300px]">
                    <div class="w-full max-w-[340px] aspect-square rounded-2xl bg-[#050B1F]/80 border border-[rgba(0,212,255,0.3)] relative overflow-hidden shadow-inner flex flex-col items-center justify-center p-4 group">
                        <!-- Corner accents -->
                        <div class="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#2B6EFA]"></div>
                        <div class="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-[#2B6EFA]"></div>
                        <div class="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-[#2B6EFA]"></div>
                        <div class="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#2B6EFA]"></div>

                        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,110,250,0.18)_0%,transparent_70%)] pointer-events-none"></div>

                        <!-- 3D Gyroscope Rings Simulation -->
                        <div class="relative w-36 h-36 flex items-center justify-center">
                            <div class="absolute inset-0 rounded-full border-2 border-dashed border-[#2B6EFA] animate-spin" style="animation-duration: 12s;"></div>
                            <div class="absolute inset-2 rounded-full border-2 border-dotted border-[#00D4FF] animate-spin" style="animation-duration: 8s; animation-direction: reverse;"></div>
                            <div class="w-12 h-12 rounded-xl bg-[rgba(0,212,255,0.3)] border border-[#2B6EFA] flex items-center justify-center rotate-45 shadow-[0_0_20px_rgba(43,110,250,0.5)]">
                                <span class="w-4 h-4 rounded-full bg-[#2B6EFA] animate-ping"></span>
                            </div>
                        </div>

                        <div class="mt-4 text-center pointer-events-none z-10">
                            <span class="text-[10px] font-mono font-bold text-[#2B6EFA] uppercase tracking-wider block">Enterprise Gyroscope Core</span>
                            <span class="text-[9px] font-mono text-[#8B9AB5] tracking-wide">360° Scalable Architecture Engine</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
