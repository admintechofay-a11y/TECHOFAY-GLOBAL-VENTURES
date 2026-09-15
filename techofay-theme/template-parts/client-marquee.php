<?php
/**
 * Template part: Client Marquee
 * Exactly matches client/src/components/home/ClientMarquee.jsx 1-to-1
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$clients = array(
    array( 'name' => 'Apex Capital Partners', 'category' => 'Fintech / Banking', 'icon' => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>' ),
    array( 'name' => 'NeuraHealth BioTech', 'category' => 'HealthTech AI', 'icon' => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>' ),
    array( 'name' => 'Orbital Logistics Global', 'category' => 'Supply Chain', 'icon' => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>' ),
    array( 'name' => 'Vanguard Cyber Defense', 'category' => 'Enterprise Security', 'icon' => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' ),
    array( 'name' => 'ScaleCommerce Cloud', 'category' => 'E-Commerce Scale', 'icon' => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"/></svg>' ),
    array( 'name' => 'Quantum Leap Labs', 'category' => 'AI & Automation', 'icon' => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' ),
    array( 'name' => 'Aegis Security Infrastructure', 'category' => 'Zero Trust', 'icon' => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>' ),
    array( 'name' => 'Strata Cloud Systems', 'category' => 'Enterprise SaaS', 'icon' => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>' ),
);

$marqueeItems = array_merge( $clients, $clients );
?>

<section class="py-14 bg-[#F0FDF4] border-y border-[#BBF7D0] overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span class="text-[11px] font-heading font-bold uppercase tracking-widest text-[#166534]">
            POWERING MISSION-CRITICAL SYSTEMS & GROWTH FOR GLOBAL ENTERPRISES
        </span>
    </div>

    <div class="relative w-full overflow-hidden">
        <!-- Left & Right gradient fades -->
        <div class="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#F0FDF4] to-transparent z-10 pointer-events-none"></div>
        <div class="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#F0FDF4] to-transparent z-10 pointer-events-none"></div>

        <div class="animate-marquee gap-6 py-2">
            <?php foreach ( $marqueeItems as $item ) : ?>
                <div class="flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#16A34A] hover:shadow-[0_8px_24px_rgba(22,163,74,0.08)] transition-all shrink-0 cursor-default group">
                    <div class="w-8 h-8 rounded-lg bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] group-hover:scale-105 transition-transform">
                        <?php echo $item['icon']; ?>
                    </div>
                    <div>
                        <div class="font-heading font-semibold text-xs text-[#111827] group-hover:text-[#16A34A] transition-colors">
                            <?php echo esc_html( $item['name'] ); ?>
                        </div>
                        <div class="text-[10px] text-[#6B7280] font-mono">
                            <?php echo esc_html( $item['category'] ); ?>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
