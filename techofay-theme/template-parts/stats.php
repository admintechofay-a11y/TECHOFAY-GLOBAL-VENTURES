<?php
/**
 * Template part: Stats Counter Bar
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$s1_num = get_field( 'stat_1_number' ) ?: '500+';
$s1_lbl = get_field( 'stat_1_label' ) ?: 'Global Enterprises Scaled';

$s2_num = get_field( 'stat_2_number' ) ?: '99.98%';
$s2_lbl = get_field( 'stat_2_label' ) ?: 'System Uptime SLA';

$s3_num = get_field( 'stat_3_number' ) ?: '120+';
$s3_lbl = get_field( 'stat_3_label' ) ?: 'AI & Cloud Patents/IP';

$s4_num = get_field( 'stat_4_number' ) ?: '5';
$s4_lbl = get_field( 'stat_4_label' ) ?: 'Global Branch Hubs';

$stats = array(
    array( 'num' => $s1_num, 'label' => $s1_lbl ),
    array( 'num' => $s2_num, 'label' => $s2_lbl ),
    array( 'num' => $s3_num, 'label' => $s3_lbl ),
    array( 'num' => $s4_num, 'label' => $s4_lbl ),
);
?>

<section class="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="glass-panel rounded-2xl p-6 sm:p-8 border border-[rgba(43,110,250,0.3)] bg-[#0A1628]/95 backdrop-blur-xl shadow-2xl">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <?php foreach ( $stats as $index => $stat ) : ?>
                <div class="text-center pt-4 sm:pt-0 <?php echo $index > 0 ? 'sm:pl-6' : ''; ?>">
                    <div class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00D4FF] to-white tracking-tight mb-2">
                        <?php echo esc_html( $stat['num'] ); ?>
                    </div>
                    <div class="text-xs sm:text-sm font-medium text-[#8B9AB5]">
                        <?php echo esc_html( $stat['label'] ); ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
