<?php
/**
 * The template for displaying single services
 * In 100% White & Forest Green Theme
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();

$badge    = get_field( 'service_badge' ) ?: 'Enterprise Vertical';
$tagline  = get_field( 'service_tagline' ) ?: 'Mission-Critical Engineering & Digital Growth Architecture';
$modules  = get_field( 'service_modules' );
$tools    = get_field( 'service_tools' );
$stats    = get_field( 'service_stats' );
$process  = get_field( 'service_process' );
?>

<main id="primary" class="site-main min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#070E24]">
    <!-- Breadcrumb -->
    <nav class="flex items-center gap-2 text-xs font-mono text-[#8B9AB5] mb-8" aria-label="Breadcrumb">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:text-[#2B6EFA] transition-colors">Home</a>
        <span>/</span>
        <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="hover:text-[#2B6EFA] transition-colors">Services</a>
        <span>/</span>
        <span class="text-[#FFFFFF] font-semibold"><?php the_title(); ?></span>
    </nav>

    <!-- Hero Header -->
    <div class="mb-14 space-y-5">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(43,110,250,0.2)] border border-[rgba(0,212,255,0.3)] text-xs font-semibold text-[#1E50C8]">
            <span><?php echo esc_html( $badge ); ?></span>
        </div>
        <h1 class="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight">
            <?php the_title(); ?>
        </h1>
        <p class="text-base sm:text-lg text-[#4B5563] font-normal max-w-3xl leading-relaxed">
            <?php echo esc_html( $tagline ); ?>
        </p>
    </div>

    <!-- Stats Row if available -->
    <?php if ( ! empty( $stats ) && is_array( $stats ) ) : ?>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            <?php foreach ( $stats as $stat ) : ?>
                <div class="bg-[#0A1628] rounded-2xl p-6 text-center border border-[rgba(43,110,250,0.2)] shadow-sm">
                    <div class="font-heading font-extrabold text-3xl sm:text-4xl text-[#2B6EFA] mb-1">
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
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
        <div class="lg:col-span-8 space-y-8">
            <div class="bg-[#0A1628] rounded-3xl p-8 sm:p-10 border border-[rgba(43,110,250,0.2)] shadow-sm space-y-6">
                <h2 class="font-heading font-bold text-2xl text-[#FFFFFF]">Architectural Scope & Strategy</h2>
                <div class="text-sm sm:text-base text-[#4B5563] leading-relaxed space-y-4">
                    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                        <?php the_content(); ?>
                    <?php endwhile; endif; ?>
                </div>
            </div>

            <!-- Sub-Services / Modules Grid -->
            <?php if ( ! empty( $modules ) && is_array( $modules ) ) : ?>
                <div class="space-y-6">
                    <h2 class="font-heading font-bold text-2xl text-[#FFFFFF]">Core Deliverables & Vertical Modules</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <?php foreach ( $modules as $mod ) : ?>
                            <div class="p-6 rounded-2xl bg-[#0A1628] border border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA] shadow-sm hover:shadow-md transition-all">
                                <h3 class="font-heading font-semibold text-base text-[#FFFFFF] mb-2"><?php echo esc_html( $mod['name'] ); ?></h3>
                                <p class="text-xs text-[#8B9AB5] leading-relaxed"><?php echo esc_html( $mod['desc'] ); ?></p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endif; ?>

            <!-- Process if available -->
            <?php if ( ! empty( $process ) && is_array( $process ) ) : ?>
                <div class="space-y-6 pt-4">
                    <h2 class="font-heading font-bold text-2xl text-[#FFFFFF]">Deployment Lifecycle</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <?php foreach ( $process as $proc ) : ?>
                            <div class="p-5 rounded-2xl bg-[#0A1628] border border-[rgba(43,110,250,0.2)] shadow-sm">
                                <div class="font-mono text-[#2B6EFA] font-bold text-xs mb-1 uppercase tracking-wider"><?php echo esc_html( $proc['step'] ); ?></div>
                                <h4 class="font-semibold text-[#FFFFFF] text-sm mb-1"><?php echo esc_html( $proc['title'] ); ?></h4>
                                <p class="text-xs text-[#8B9AB5] leading-relaxed"><?php echo esc_html( $proc['desc'] ); ?></p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endif; ?>
        </div>

        <!-- Sidebar Actions -->
        <div class="lg:col-span-4 space-y-6">
            <!-- Fast Consultation Card -->
            <div class="bg-[#0A1628] rounded-3xl p-7 border border-[rgba(0,212,255,0.3)] shadow-md space-y-6 sticky top-28">
                <div>
                    <span class="text-[10px] uppercase font-mono tracking-wider text-[#2B6EFA] font-bold">DIRECT ARCHITECTURE BRIEF</span>
                    <h3 class="font-heading font-bold text-xl text-[#FFFFFF] mt-1">Initiate This Solution</h3>
                    <p class="text-xs text-[#8B9AB5] mt-2 leading-relaxed">
                        Speak directly with a lead solution architect within 24 hours. Backed by our 100% money-back client guarantee.
                    </p>
                </div>

                <!-- Tools if available -->
                <?php if ( ! empty( $tools ) && is_array( $tools ) ) : ?>
                    <div class="space-y-2 pt-2 border-t border-[rgba(43,110,250,0.2)]">
                        <span class="text-xs font-semibold text-[#FFFFFF] block">Validated Technology Stack:</span>
                        <div class="flex flex-wrap gap-1.5">
                            <?php foreach ( $tools as $t ) : ?>
                                <span class="text-[10px] px-2.5 py-1 rounded-md bg-[rgba(255,255,255,0.05)] border border-[rgba(0,212,255,0.3)] text-[#1E50C8] font-mono">
                                    <?php echo esc_html( $t['tool_name'] ); ?>
                                </span>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endif; ?>

                <div class="space-y-3 pt-2">
                    <a href="<?php echo esc_url( home_url( '/contact?service=' . urlencode( get_the_title() ) ) ); ?>" class="w-full py-3.5 rounded-xl font-bold text-xs text-center text-[#1c1400] font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2">
                        <span>Schedule Technical Briefing</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                    <a href="tel:+919359339000" class="w-full py-3 rounded-xl font-semibold text-xs text-center text-[#4B5563] hover:text-[#FFFFFF] bg-[#070E24] hover:bg-[#F3F4F6] border border-[rgba(43,110,250,0.2)] transition-all flex items-center justify-center gap-2">
                        <span>Direct Hotline: +91-9359339000</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</main>

<?php
get_footer();
