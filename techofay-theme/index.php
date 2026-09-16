<?php
/**
 * The main template file
 * In 100% White & Forest Green Theme
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<main id="primary" class="site-main min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#161616]">
    <?php if ( have_posts() ) : ?>
        <header class="page-header mb-14 text-center max-w-3xl mx-auto space-y-3">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(245,158,11,0.15)] border border-[rgba(245,158,11,0.25)] text-xs font-semibold text-[#B45309]">
                <span>PUBLICATIONS & INSIGHTS</span>
            </div>
            <h1 class="font-heading font-extrabold text-3xl sm:text-5xl text-[#FFFBEB] tracking-tight">
                <?php single_post_title(); ?>
            </h1>
            <p class="text-sm text-[#D97706]">
                <?php esc_html_e( 'Latest insights, case studies, and engineering updates from TECHOFAY GLOBAL VENTURES.', 'techofay' ); ?>
            </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php
            while ( have_posts() ) :
                the_post();
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class( 'bg-[#1A1A1A] rounded-2xl p-7 flex flex-col justify-between border border-[rgba(245,158,11,0.15)] hover:border-[#F59E0B] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1' ); ?>>
                    <?php if ( has_post_thumbnail() ) : ?>
                        <div class="aspect-video w-full rounded-xl overflow-hidden mb-5 bg-[#161616]">
                            <?php the_post_thumbnail( 'medium_large', array( 'class' => 'w-full h-full object-cover transition-transform duration-500 hover:scale-105' ) ); ?>
                        </div>
                    <?php endif; ?>

                    <div>
                        <div class="text-xs font-mono text-[#F59E0B] font-semibold mb-2">
                            <?php echo get_the_date( 'M j, Y' ); ?>
                        </div>
                        <h2 class="font-heading font-bold text-xl text-[#FFFBEB] mb-3 hover:text-[#F59E0B] transition-colors">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h2>
                        <div class="text-sm text-[#4B5563] line-clamp-3 mb-6">
                            <?php the_excerpt(); ?>
                        </div>
                    </div>

                    <a href="<?php the_permalink(); ?>" class="inline-flex items-center gap-2 text-xs font-bold text-[#F59E0B] hover:text-[#B45309] transition-colors">
                        <span><?php esc_html_e( 'Read Article', 'techofay' ); ?></span>
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                </article>
                <?php
            endwhile;
            ?>
        </div>

        <div class="mt-12 flex justify-center">
            <?php the_posts_pagination( array(
                'prev_text' => '&larr; Previous',
                'next_text' => 'Next &rarr;',
            ) ); ?>
        </div>
    <?php endif; ?>
</main>

<?php
get_footer();
