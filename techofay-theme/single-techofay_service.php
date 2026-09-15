<?php
/**
 * The template for displaying all single services
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();

$badge    = get_field( 'service_badge' ) ?: 'Enterprise Vertical';
$tagline  = get_field( 'service_tagline' ) ?: 'Mission-Critical Engineering & Architecture';
$modules  = get_field( 'service_modules' );
$tools    = get_field( 'service_tools' );
$stats    = get_field( 'service_stats' );
$process  = get_field( 'service_process' );
?>

<main id="primary" class="site-main min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <!-- Breadcrumb -->
    <nav class="flex items-center gap-2 text-xs font-mono text-[#8B9AB5] mb-8" aria-label="Breadcrumb">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:text-[#00D4FF]">Home</a>
        <span>/</span>
        <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="hover:text-[#00D4FF]">Services</a>
        <span>/</span>
        <span class="text-white"><?php the_title(); ?></span>
    </nav>

    <!-- Hero Header -->
    <div class="mb-16 space-y-6">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF]">
            <span><?php echo esc_html( $badge ); ?></span>
        </div>
        <h1 class="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            <?php the_title(); ?>
        </h1>
        <p class="text-lg sm:text-xl text-[#00D4FF] font-medium max-w-3xl leading-relaxed">
            <?php echo esc_html( $tagline ); ?>
        </p>
    </div>

    <!-- Stats Row if available -->
    <?php if ( ! empty( $stats ) && is_array( $stats ) ) : ?>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            <?php foreach ( $stats as $stat ) : ?>
                <div class="glass-card rounded-2xl p-6 text-center border border-white/10">
                    <div class="font-heading font-extrabold text-3xl sm:text-4xl text-[#00D4FF] mb-1">
                        <?php echo esc_html( $stat['value'] ); ?>
                    </div>
                    <div class="text-xs text-[#8B9AB5] font-medium">
                        <?php echo esc_html( $stat['label'] ); ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>

    <!-- Main Content & Overview -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <div class="lg:col-span-8 space-y-8">
            <div class="glass-panel rounded-3xl p-8 sm:p-10 border border-[rgba(43,110,250,0.25)] space-y-6">
                <h2 class="font-heading font-bold text-2xl text-white">Architectural Overview</h2>
                <div class="text-sm sm:text-base text-[#8B9AB5] leading-relaxed space-y-4">
                    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                        <?php the_content(); ?>
                    <?php endwhile; endif; ?>
                </div>
            </div>

            <!-- Sub-Services / Modules Grid -->
            <?php if ( ! empty( $modules ) && is_array( $modules ) ) : ?>
                <div class="space-y-6">
                    <h2 class="font-heading font-bold text-2xl text-white">Core Modules & Deliverables</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <?php foreach ( $modules as $mod ) : ?>
                            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D4FF]/40 transition-all">
                                <h3 class="font-heading font-semibold text-base text-white mb-2"><?php echo esc_html( $mod['name'] ); ?></h3>
                                <p class="text-xs text-[#8B9AB5] leading-relaxed"><?php echo esc_html( $mod['desc'] ); ?></p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endif; ?>

            <!-- Process if available -->
            <?php if ( ! empty( $process ) && is_array( $process ) ) : ?>
                <div class="space-y-6 pt-6">
                    <h2 class="font-heading font-bold text-2xl text-white">Delivery Lifecycle</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <?php foreach ( $process as $proc ) : ?>
                            <div class="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                                <div class="font-mono text-[#00D4FF] font-bold text-sm mb-1"><?php echo esc_html( $proc['step'] ); ?></div>
                                <h4 class="font-semibold text-white text-sm mb-1"><?php echo esc_html( $proc['title'] ); ?></h4>
                                <p class="text-xs text-[#8B9AB5]"><?php echo esc_html( $proc['desc'] ); ?></p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endif; ?>
        </div>

        <!-- Sidebar Actions -->
        <div class="lg:col-span-4 space-y-6">
            <!-- Fast Consultation Card -->
            <div class="glass-panel rounded-3xl p-7 border border-[#00D4FF]/30 space-y-6 sticky top-28 bg-[#0A1628]/95">
                <div>
                    <span class="text-[10px] uppercase font-mono tracking-wider text-[#00D4FF] font-semibold">DIRECT CONSULTATION</span>
                    <h3 class="font-heading font-bold text-xl text-white mt-1">Deploy This Architecture</h3>
                    <p class="text-xs text-[#8B9AB5] mt-2">
                        Get matched with a dedicated solutions architect within 24 hours. Backed by our 100% money-back client guarantee.
                    </p>
                </div>

                <!-- Tools if available -->
                <?php if ( ! empty( $tools ) && is_array( $tools ) ) : ?>
                    <div class="space-y-2 pt-2 border-t border-white/10">
                        <span class="text-xs font-semibold text-white block">Validated Tool Stack:</span>
                        <div class="flex flex-wrap gap-1.5">
                            <?php foreach ( $tools as $t ) : ?>
                                <span class="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#00D4FF] font-mono">
                                    <?php echo esc_html( $t['tool_name'] ); ?>
                                </span>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endif; ?>

                <div class="space-y-3 pt-2">
                    <a href="<?php echo esc_url( home_url( '/contact?service=' . urlencode( get_the_title() ) ) ); ?>" class="w-full py-3.5 rounded-xl font-bold text-xs text-center text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] transition-all flex items-center justify-center gap-2">
                        <span>Schedule Technical Briefing</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                    <a href="tel:+919359339000" class="w-full py-3 rounded-xl font-semibold text-xs text-center text-[#8B9AB5] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2">
                        <span>Direct Hotline: +91-9359339000</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</main>

<?php
get_footer();
