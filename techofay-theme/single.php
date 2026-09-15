<?php
/**
 * The template for displaying all single blog posts
 * In 100% White & Forest Green Theme
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<main id="primary" class="site-main min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-[#F8FAF8]">
    <?php while ( have_posts() ) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class( 'space-y-8' ); ?>>
            
            <!-- Breadcrumbs & Meta -->
            <div class="space-y-4">
                <nav class="flex items-center gap-2 text-xs font-mono text-[#6B7280]" aria-label="Breadcrumb">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:text-[#16A34A] transition-colors">Home</a>
                    <span>/</span>
                    <a href="<?php echo esc_url( home_url( '/blog' ) ); ?>" class="hover:text-[#16A34A] transition-colors">Blog</a>
                    <span>/</span>
                    <span class="text-[#111827] font-semibold truncate max-w-xs"><?php the_title(); ?></span>
                </nav>

                <div class="flex flex-wrap items-center gap-3 text-xs font-mono text-[#6B7280]">
                    <span class="px-3 py-1 rounded-full bg-[#DCFCE7] text-[#166534] border border-[#BBF7D0] font-semibold">
                        <?php
                        $categories = get_the_category();
                        echo ! empty( $categories ) ? esc_html( $categories[0]->name ) : 'Technology';
                        ?>
                    </span>
                    <span>&bull;</span>
                    <span><?php echo get_the_date( 'F j, Y' ); ?></span>
                    <span>&bull;</span>
                    <span>By <?php the_author(); ?></span>
                </div>

                <h1 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight leading-tight">
                    <?php the_title(); ?>
                </h1>
            </div>

            <!-- Featured Image -->
            <?php if ( has_post_thumbnail() ) : ?>
                <div class="rounded-3xl overflow-hidden aspect-video w-full border border-[#E5E7EB] bg-white shadow-md">
                    <?php the_post_thumbnail( 'full', array( 'class' => 'w-full h-full object-cover' ) ); ?>
                </div>
            <?php endif; ?>

            <!-- Post Content -->
            <div class="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] shadow-sm text-sm sm:text-base text-[#374151] leading-relaxed space-y-6">
                <?php the_content(); ?>
            </div>

            <!-- Author Card -->
            <div class="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] flex items-center justify-center text-[#166534] font-bold text-base">
                    <?php echo strtoupper( substr( get_the_author(), 0, 1 ) ); ?>
                </div>
                <div>
                    <h3 class="font-bold text-sm text-[#111827]"><?php the_author(); ?></h3>
                    <p class="text-xs text-[#6B7280]">Techofay Global Ventures Engineering & Strategy Team</p>
                </div>
            </div>

            <!-- Navigation Links -->
            <div class="pt-6 border-t border-[#E5E7EB] flex items-center justify-between">
                <div class="text-xs text-[#6B7280]">
                    <?php previous_post_link( '%link', '&larr; %title' ); ?>
                </div>
                <div class="text-xs text-[#6B7280]">
                    <?php next_post_link( '%link', '%title &rarr;' ); ?>
                </div>
            </div>

        </article>
    <?php endwhile; ?>
</main>

<?php
get_footer();
