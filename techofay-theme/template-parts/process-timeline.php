<?php
/**
 * Template part: Process Timeline Section
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$process_heading = get_field( 'process_heading' ) ?: 'Battle-Tested Engineering Lifecycle';
$process_steps   = get_field( 'process_steps' );

$default_steps = array(
    array(
        'step'  => '01',
        'title' => 'Architecture Blueprint & Threat Modeling',
        'desc'  => 'Comprehensive discovery mapping data flows, security perimeters, user stories, and commercial SLAs before writing a single line of code.',
    ),
    array(
        'step'  => '02',
        'title' => 'Sprint 0 & Sovereign Scaffolding',
        'desc'  => 'Rapid deployment of containerized sandbox environments, design systems, immutable database schemas, and automated test harnesses.',
    ),
    array(
        'step'  => '03',
        'title' => 'Continuous CI/CD Delivery & Hardening',
        'desc'  => 'Iterative 2-week deployment sprints accompanied by automated regression suites, static analysis (SAST), and penetration testing.',
    ),
    array(
        'step'  => '04',
        'title' => 'Autonomous Telemetry & 24/7 Operations',
        'desc'  => 'Multi-cloud rollout with real-time SIEM monitoring, automated traffic scaling, 99.98% SLA enforcement, and dedicated solutions engineering.',
    ),
);
?>

<section class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
    <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF]">
            <span>METHODOLOGY</span>
        </div>
        <h2 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            <?php echo esc_html( $process_heading ); ?>
        </h2>
        <p class="text-sm sm:text-base text-[#8B9AB5] leading-relaxed">
            A deterministic four-phase methodology that eliminates architectural ambiguity and guarantees on-time delivery.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        <?php if ( ! empty( $process_steps ) && is_array( $process_steps ) ) : ?>
            <?php foreach ( $process_steps as $step ) : ?>
                <div class="glass-card rounded-2xl p-6 relative group hover:border-[#00D4FF]/50 transition-all hover:-translate-y-1">
                    <div class="font-mono text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] mb-4">
                        <?php echo esc_html( $step['step_number'] ); ?>
                    </div>
                    <h3 class="font-heading font-bold text-lg text-white mb-2"><?php echo esc_html( $step['step_title'] ); ?></h3>
                    <p class="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed"><?php echo esc_html( $step['step_description'] ); ?></p>
                </div>
            <?php endforeach; ?>
        <?php else : ?>
            <?php foreach ( $default_steps as $step ) : ?>
                <div class="glass-card rounded-2xl p-6 relative group hover:border-[#00D4FF]/50 transition-all hover:-translate-y-1">
                    <div class="flex items-center justify-between mb-4">
                        <span class="font-mono text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF]">
                            <?php echo esc_html( $step['step'] ); ?>
                        </span>
                        <div class="w-2 h-2 rounded-full bg-[#00D4FF] group-hover:animate-ping"></div>
                    </div>
                    <h3 class="font-heading font-bold text-base sm:text-lg text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                        <?php echo esc_html( $step['title'] ); ?>
                    </h3>
                    <p class="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed">
                        <?php echo esc_html( $step['desc'] ); ?>
                    </p>
                </div>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>
</section>
