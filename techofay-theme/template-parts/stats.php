<?php
/**
 * Template part: Stats Counter Bar
 * Exactly matches client/src/components/home/StatsCounter.jsx 1-to-1
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$stats = array(
    array(
        'value'    => '500+',
        'label'    => 'Global Enterprise Clients',
        'sublabel' => 'Across North America, EMEA & APAC',
        'icon'     => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>',
    ),
    array(
        'value'    => '6',
        'label'    => 'Specialized Verticals',
        'sublabel' => 'Full-spectrum deep tech delivery',
        'icon'     => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>',
    ),
    array(
        'value'    => '12+',
        'label'    => 'Global Operating Markets',
        'sublabel' => 'Active international engineering nodes',
        'icon'     => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    ),
    array(
        'value'    => '98%',
        'label'    => 'Client Retention Rate',
        'sublabel' => 'Multi-year enterprise contracts',
        'icon'     => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>',
    ),
);
?>

<section class="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="rounded-2xl p-6 sm:p-8 bg-[rgba(255,255,255,0.05)] border border-[rgba(0,212,255,0.3)] shadow-sm relative overflow-hidden group">
        <!-- Top subtle green accent line -->
        <div class="absolute top-0 left-0 right-0 h-[2px] bg-[#2B6EFA] opacity-70"></div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(0,212,255,0.3)]">
            <?php foreach ( $stats as $idx => $stat ) : ?>
                <div class="pt-4 sm:pt-0 <?php echo $idx !== 0 ? 'sm:pl-6 lg:pl-8' : ''; ?> group/stat hover:translate-y-[-2px] transition-transform">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="w-9 h-9 rounded-lg bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA] transition-all">
                            <?php echo $stat['icon']; ?>
                        </div>
                        <div class="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#2B6EFA] flex items-center gap-1.5">
                            <span><?php echo esc_html( $stat['value'] ); ?></span>
                            <span class="w-1.5 h-1.5 rounded-full bg-[#2B6EFA] animate-ping"></span>
                        </div>
                    </div>
                    <div class="font-semibold text-xs sm:text-sm text-[#FFFFFF] group-hover/stat:text-[#2B6EFA] transition-colors">
                        <?php echo esc_html( $stat['label'] ); ?>
                    </div>
                    <div class="text-[11px] text-[#8B9AB5] mt-0.5">
                        <?php echo esc_html( $stat['sublabel'] ); ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
