<?php
/**
 * The template for displaying archive pages
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<main id="primary" class="site-main min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF]">
            <span>ENGINEERING ARCHIVES</span>
        </div>
        <h1 class="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            <?php the_archive_title(); ?>
        </h1>
        <div class="text-sm text-[#8B9AB5] leading-relaxed">
            <?php the_archive_description(); ?>
        </div>
    </div>

    <?php if ( have_posts() ) : ?>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <?php while ( have_posts() ) : the_post(); ?>
                <article class="glass-card rounded-2xl p-7 flex flex-col justify-between hover:border-[#00D4FF]/50 transition-all duration-300 hover:-translate-y-1">
                    <div>
                        <?php if ( has_post_thumbnail() ) : ?>
                            <div class="rounded-xl overflow-hidden aspect-video w-full mb-5 bg-navy-800">
                                <?php the_post_thumbnail( 'medium_large', array( 'class' => 'w-full h-full object-cover hover:scale-105 transition-transform duration-500' ) ); ?>
                            </div>
                        <?php endif; ?>

                        <div class="text-xs font-mono text-[#00D4FF] mb-2">
                            <?php echo get_the_date( 'M j, Y' ); ?>
                        </div>

                        <h2 class="font-heading font-bold text-xl text-white mb-3 hover:text-[#00D4FF] transition-colors">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h2>

                        <p class="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed line-clamp-3 mb-6">
                            <?php the_excerpt(); ?>
                        </p>
                    </div>

                    <div>
                        <a href="<?php the_permalink(); ?>" class="inline-flex items-center gap-2 text-xs font-semibold text-[#00D4FF] hover:text-white transition-colors">
                            <span>Read Article</span>
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                    </div>
                </article>
            <?php endwhile; ?>
        </div>

        <!-- Pagination -->
        <div class="flex justify-center">
            <?php the_posts_pagination( array(
                'prev_text' => '&larr; Previous',
                'next_text' => 'Next &rarr;',
            ) ); ?>
        </div>
    <?php else : ?>
        <div class="text-center py-16">
            <h2 class="text-xl font-bold text-white mb-2">No Articles Found</h2>
            <p class="text-xs text-[#8B9AB5] mb-6">There are no publications matching this query at present.</p>
            <a href="<?php echo esc_url( home_url( '/blog' ) ); ?>" class="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF]">
                Back to Blog
            </a>
        </div>
    <?php endif; ?>
</main>

<?php
get_footer();
