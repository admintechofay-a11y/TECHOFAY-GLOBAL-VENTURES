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

$cta_title    = get_field( 'cta_banner_title' ) ?: 'Ready to Transform Your <span class="text-[#16A34A]">Enterprise Growth?</span>';
$cta_desc     = get_field( 'cta_banner_desc' ) ?: 'Whether you need high-conversion websites, custom AI applications, multi-channel SEO & digital marketing, branding, or smart NFC cards — our senior team delivers guaranteed client growth backed by our 100% money-back guarantee.';
$cta_btn_text = get_field( 'cta_banner_button_text' ) ?: 'Start Your Growth Project';
$cta_btn_url  = get_field( 'cta_banner_button_url' ) ?: home_url( '/contact' );
?>

<section class="relative py-20 bg-[#F0FDF4] overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-[#BBF7D0] shadow-sm bg-white">
            
            <div class="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] text-xs font-semibold uppercase tracking-wider">
                    <svg class="w-3.5 h-3.5 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Direct Strategic Partnership
                </div>

                <h2 class="font-heading font-extrabold text-3xl sm:text-5xl text-[#111827] tracking-tight leading-tight">
                    <?php echo wp_kses_post( $cta_title ); ?>
                </h2>

                <p class="text-sm sm:text-base text-[#374151] leading-relaxed max-w-2xl mx-auto">
                    <?php echo esc_html( $cta_desc ); ?>
                </p>

                <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <a
                        href="<?php echo esc_url( $cta_btn_url ); ?>"
                        class="w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold text-sm text-white bg-[#16A34A] hover:bg-[#166534] transition-colors shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
                    >
                        <span><?php echo esc_html( $cta_btn_text ); ?></span>
                        <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>

                    <a
                        href="<?php echo esc_url( home_url( '/contact' ) ); ?>"
                        class="w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold text-sm text-[#16A34A] bg-white border border-[#16A34A] hover:bg-[#F0FDF4] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <svg class="w-4 h-4 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                        <span>Schedule a Consultation Call</span>
                    </a>
                </div>

                <div class="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#6B7280]">
                    <span class="flex items-center gap-1.5">
                        <svg class="w-4 h-4 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                        100% Money-Back Guarantee
                    </span>
                    <span>&bull;</span>
                    <span>24-Hour Architecture Response</span>
                    <span>&bull;</span>
                    <span>Dedicated Account Managers</span>
                </div>
            </div>

        </div>
    </div>
</section>
