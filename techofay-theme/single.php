<?php
/**
 * The template for displaying all single blog posts
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<main id="primary" class="site-main min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
    <?php while ( have_posts() ) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class( 'space-y-8' ); ?>>
            
            <!-- Breadcrumbs & Meta -->
            <div class="space-y-4">
                <nav class="flex items-center gap-2 text-xs font-mono text-[#8B9AB5]" aria-label="Breadcrumb">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:text-[#00D4FF]">Home</a>
                    <span>/</span>
                    <a href="<?php echo esc_url( home_url( '/blog' ) ); ?>" class="hover:text-[#00D4FF]">Blog</a>
                    <span>/</span>
                    <span class="text-white truncate max-w-xs"><?php the_title(); ?></span>
                </nav>

                <div class="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8B9AB5]">
                    <span class="px-2.5 py-1 rounded bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30">
                        <?php
                        $categories = get_the_category();
                        echo ! empty( $categories ) ? esc_html( $categories[0]->name ) : 'Engineering';
                        ?>
                    </span>
                    <span>&bull;</span>
                    <span><?php echo get_the_date( 'F j, Y' ); ?></span>
                    <span>&bull;</span>
                    <span>By <?php the_author(); ?></span>
                </div>

                <h1 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                    <?php the_title(); ?>
                </h1>
            </div>

            <!-- Featured Image -->
            <?php if ( has_post_thumbnail() ) : ?>
                <div class="rounded-3xl overflow-hidden aspect-video w-full border border-white/10 bg-navy-800 shadow-2xl">
                    <?php the_post_thumbnail( 'full', array( 'class' => 'w-full h-full object-cover' ) ); ?>
                </div>
            <?php endif; ?>

            <!-- Post Content -->
            <div class="glass-panel rounded-3xl p-8 sm:p-12 border border-[rgba(43,110,250,0.25)] text-sm sm:text-base text-[#8B9AB5] leading-relaxed space-y-6 prose prose-invert max-w-none prose-headings:font-heading prose-headings:text-white prose-a:text-[#00D4FF]">
                <?php the_content(); ?>
            </div>

            <!-- Author Card -->
            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#2B6EFA] to-[#00D4FF] flex items-center justify-center font-bold text-sm text-white shrink-0">
                    <?php echo esc_html( substr( get_the_author(), 0, 1 ) ); ?>
                </div>
                <div>
                    <div class="font-heading font-bold text-sm text-white">Written by <?php the_author(); ?></div>
                    <div class="text-xs text-[#8B9AB5]">Solutions Engineering & Sovereign Architecture Team at TECHOFAY GLOBAL VENTURES.</div>
                </div>
            </div>

            <!-- Navigation Links -->
            <div class="pt-8 border-t border-white/10 flex items-center justify-between gap-4 text-xs font-semibold">
                <div class="max-w-[45%]">
                    <?php previous_post_link( '<div class="text-[#8B9AB5] text-[10px] uppercase font-mono">&larr; Previous Article</div><div class="text-white hover:text-[#00D4FF] truncate">%link</div>' ); ?>
                </div>
                <div class="max-w-[45%] text-right">
                    <?php next_post_link( '<div class="text-[#8B9AB5] text-[10px] uppercase font-mono">Next Article &rarr;</div><div class="text-white hover:text-[#00D4FF] truncate">%link</div>' ); ?>
                </div>
            </div>

        </article>
    <?php endwhile; ?>
</main>

<?php
get_footer();
