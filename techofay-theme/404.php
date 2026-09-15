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

<main id="primary" class="site-main min-h-[75vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center bg-white">
    <div class="bg-[#F8FAF8] rounded-3xl p-10 sm:p-16 border border-[#E5E7EB] shadow-sm max-w-2xl w-full space-y-6">
        <div class="font-mono text-6xl sm:text-7xl font-extrabold text-[#16A34A] animate-pulse">
            404
        </div>

        <h1 class="font-heading font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
            Page Not Found
        </h1>

        <p class="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-md mx-auto">
            The page or digital solution you requested does not exist or has been relocated within our corporate portal.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#16A34A] hover:bg-[#166534] shadow-sm hover:shadow-md transition-all">
                Return to Home
            </a>
            <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="px-6 py-3 rounded-xl text-xs font-semibold text-[#111827] bg-white border border-[#E5E7EB] hover:bg-[#F3F4F6] transition-all">
                Explore Services
            </a>
            <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="px-6 py-3 rounded-xl text-xs font-semibold text-[#166534] bg-[#DCFCE7] border border-[#BBF7D0] hover:bg-[#BBF7D0] transition-all">
                Contact Our Team
            </a>
        </div>
    </div>
</main>

<?php
get_footer();
