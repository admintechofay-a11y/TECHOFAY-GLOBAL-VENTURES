<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<main id="primary" class="site-main min-h-[80vh] flex items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
    <div class="glass-panel rounded-3xl p-10 sm:p-16 border border-[rgba(43,110,250,0.3)] bg-[#0A1628]/95 max-w-2xl w-full space-y-6">
        <div class="font-mono text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2B6EFA] via-[#00D4FF] to-[#2B6EFA] animate-pulse">
            404
        </div>

        <h1 class="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Architectural Node Not Found
        </h1>

        <p class="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed max-w-md mx-auto">
            The endpoint or telemetry route you requested does not exist or has been relocated within our sovereign cloud clusters.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all">
                Return to Command Center (Home)
            </a>
            <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                Explore Services
            </a>
            <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="px-6 py-3 rounded-xl text-xs font-semibold text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/30 hover:bg-[#00D4FF]/20 transition-all">
                Contact Engineers
            </a>
        </div>
    </div>
</main>

<?php
get_footer();
