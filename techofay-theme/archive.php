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

<main id="primary" class="site-main min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#F8FAF8]">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-xs font-semibold text-[#166534]">
            <span><?php esc_html_e( 'ARTICLES & INSIGHTS', 'techofay' ); ?></span>
        </div>
        <h1 class="font-heading font-extrabold text-3xl sm:text-5xl text-[#111827] tracking-tight">
            <?php the_archive_title(); ?>
        </h1>
        <div class="text-sm text-[#6B7280] leading-relaxed">
            <?php the_archive_description(); ?>
        </div>
    </div>

    <?php if ( have_posts() ) : ?>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <?php while ( have_posts() ) : the_post(); ?>
                <article class="bg-white rounded-2xl p-7 flex flex-col justify-between border border-[#E5E7EB] hover:border-[#16A34A] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div>
                        <?php if ( has_post_thumbnail() ) : ?>
                            <div class="rounded-xl overflow-hidden aspect-video w-full mb-5 bg-[#F8FAF8]">
                                <?php the_post_thumbnail( 'medium_large', array( 'class' => 'w-full h-full object-cover hover:scale-105 transition-transform duration-500' ) ); ?>
                            </div>
                        <?php endif; ?>

                        <div class="text-xs font-mono text-[#16A34A] font-semibold mb-2">
                            <?php echo get_the_date( 'M j, Y' ); ?>
                        </div>

                        <h2 class="font-heading font-bold text-xl text-[#111827] mb-3 hover:text-[#16A34A] transition-colors">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h2>

                        <p class="text-xs sm:text-sm text-[#4B5563] leading-relaxed line-clamp-3 mb-6">
                            <?php the_excerpt(); ?>
                        </p>
                    </div>

                    <div class="pt-4 border-t border-[#E5E7EB]">
                        <a href="<?php the_permalink(); ?>" class="inline-flex items-center gap-2 text-xs font-bold text-[#16A34A] hover:text-[#166534] transition-colors">
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
        <div class="text-center py-20 bg-white rounded-2xl border border-[#E5E7EB] p-12">
            <h2 class="text-xl font-bold text-[#111827] mb-3">No content published yet</h2>
            <p class="text-sm text-[#6B7280]">Stay tuned as our team publishes updates and insights.</p>
        </div>
    <?php endif; ?>
</main>

<?php
get_footer();
