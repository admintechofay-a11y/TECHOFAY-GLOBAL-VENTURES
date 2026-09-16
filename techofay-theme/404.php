<?php
/**
 * The template for displaying 404 pages (not found)
 * In 100% White & Forest Green Theme
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<main id="primary" class="site-main min-h-[75vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center bg-[#1A1A1A]">
    <div class="bg-[#161616] rounded-3xl p-10 sm:p-16 border border-[rgba(245,158,11,0.15)] shadow-sm max-w-2xl w-full space-y-6">
        <div class="font-mono text-6xl sm:text-7xl font-extrabold text-[#F59E0B] animate-pulse">
            404
        </div>

        <h1 class="font-heading font-extrabold text-2xl sm:text-3xl text-[#FFFBEB] tracking-tight">
            Page Not Found
        </h1>

        <p class="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-md mx-auto">
            The page or digital solution you requested does not exist or has been relocated within our corporate portal.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="px-6 py-3 rounded-xl text-xs font-bold text-[#1c1400] font-semibold bg-[#F59E0B] hover:bg-[#B45309] shadow-sm hover:shadow-md transition-all">
                Return to Home
            </a>
            <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="px-6 py-3 rounded-xl text-xs font-semibold text-[#FFFBEB] bg-[#1A1A1A] border border-[rgba(245,158,11,0.15)] hover:bg-[#F3F4F6] transition-all">
                Explore Services
            </a>
            <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="px-6 py-3 rounded-xl text-xs font-semibold text-[#B45309] bg-[rgba(245,158,11,0.15)] border border-[rgba(245,158,11,0.25)] hover:bg-[rgba(245,158,11,0.25)] transition-all">
                Contact Our Team
            </a>
        </div>
    </div>
</main>

<?php
get_footer();
