<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 *
 * @package Techofay_Theme
 */

get_header();
?>

<main id="primary" class="site-main min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <?php if ( have_posts() ) : ?>
        <header class="page-header mb-12 text-center">
            <h1 class="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-4">
                <?php single_post_title(); ?>
            </h1>
            <p class="text-text-muted text-base max-w-2xl mx-auto">
                <?php esc_html_e( 'Latest insights, case studies, and engineering updates from TECHOFAY.', 'techofay' ); ?>
            </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php
            while ( have_posts() ) :
                the_post();
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class( 'glass-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-brand-cyan/40 hover:-translate-y-1' ); ?>>
                    <?php if ( has_post_thumbnail() ) : ?>
                        <div class="aspect-video w-full rounded-xl overflow-hidden mb-5 bg-navy-800">
                            <?php the_post_thumbnail( 'medium_large', array( 'class' => 'w-full h-full object-cover transition-transform duration-500 hover:scale-105' ) ); ?>
                        </div>
                    <?php endif; ?>

                    <div>
                        <div class="text-xs font-mono text-brand-cyan mb-2">
                            <?php echo get_the_date( 'M j, Y' ); ?>
                        </div>
                        <h2 class="font-heading font-bold text-xl text-white mb-3 hover:text-brand-cyan transition-colors">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h2>
                        <div class="text-sm text-text-secondary line-clamp-3 mb-6">
                            <?php the_excerpt(); ?>
                        </div>
                    </div>

                    <a href="<?php the_permalink(); ?>" class="inline-flex items-center gap-2 text-xs font-semibold text-brand-cyan hover:text-white transition-colors">
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

    <?php else : ?>
        <div class="text-center py-20">
            <h2 class="text-2xl font-bold text-white mb-3"><?php esc_html_e( 'No posts found', 'techofay' ); ?></h2>
            <p class="text-text-muted mb-6"><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for.', 'techofay' ); ?></p>
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn-primary inline-flex items-center gap-2">
                <span><?php esc_html_e( 'Return to Homepage', 'techofay' ); ?></span>
            </a>
        </div>
    <?php endif; ?>
</main>

<?php
get_footer();
