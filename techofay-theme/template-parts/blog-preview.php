<?php
/**
 * Template part: Latest Blog Articles Preview
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$blog_query = new WP_Query( array(
    'post_type'      => 'post',
    'posts_per_page' => 3,
    'post_status'    => 'publish',
) );

$fallback_articles = array(
    array(
        'title'    => 'Building Zero Trust Cloud Architectures for High-Concurrency Fintech',
        'date'     => 'May 12, 2025',
        'category' => 'Cybersecurity',
        'desc'     => 'How state-of-the-art micro-segmentation and identity-aware proxies eliminate lateral attack vectors in modern financial microservices.',
    ),
    array(
        'title'    => 'The Shift from Monolithic ERPs to Event-Driven Microservices',
        'date'     => 'April 28, 2025',
        'category' => 'Engineering',
        'desc'     => 'Deconstructing monolithic bottlenecks with Apache Kafka, Kubernetes orchestrations, and high-throughput real-time ledgers.',
    ),
    array(
        'title'    => 'Autonomous AI Agents in Enterprise Supply Chain Operations',
        'date'     => 'April 14, 2025',
        'category' => 'Applied AI',
        'desc'     => 'How domain-specific LLM fine-tuning and predictive inventory models reduce multi-warehouse fulfillment delays by 35%.',
    ),
);
?>

<section class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
    <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
        <div class="space-y-3 max-w-2xl">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF]">
                <span>INSIGHTS & ENGINEERING</span>
            </div>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Latest Technical Thought Leadership
            </h2>
            <p class="text-sm text-[#8B9AB5]">
                Field reports, whitepapers, and engineering guides from TECHOFAY architects.
            </p>
        </div>
        <a href="<?php echo esc_url( home_url( '/blog' ) ); ?>" class="inline-flex items-center gap-2 text-xs font-bold text-[#00D4FF] hover:text-white transition-colors">
            <span>Explore All Publications</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <?php if ( $blog_query->have_posts() ) : ?>
            <?php while ( $blog_query->have_posts() ) : $blog_query->the_post(); ?>
                <article class="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-[#00D4FF]/50 transition-all hover:-translate-y-1">
                    <div>
                        <div class="text-xs font-mono text-[#00D4FF] mb-2">
                            <?php echo get_the_date( 'M j, Y' ); ?>
                        </div>
                        <h3 class="font-heading font-bold text-lg text-white mb-3 hover:text-[#00D4FF] transition-colors">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h3>
                        <p class="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed line-clamp-3 mb-6">
                            <?php echo get_the_excerpt(); ?>
                        </p>
                    </div>
                    <a href="<?php the_permalink(); ?>" class="inline-flex items-center gap-2 text-xs font-semibold text-[#00D4FF] hover:text-white transition-colors">
                        <span>Read Technical Whitepaper</span>
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                </article>
            <?php endwhile; wp_reset_postdata(); ?>
        <?php else : ?>
            <?php foreach ( $fallback_articles as $post ) : ?>
                <article class="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-[#00D4FF]/50 transition-all hover:-translate-y-1">
                    <div>
                        <div class="flex items-center justify-between text-xs font-mono mb-3">
                            <span class="text-[#00D4FF]"><?php echo esc_html( $post['category'] ); ?></span>
                            <span class="text-[#8B9AB5]"><?php echo esc_html( $post['date'] ); ?></span>
                        </div>
                        <h3 class="font-heading font-bold text-lg text-white mb-3 hover:text-[#00D4FF] transition-colors">
                            <a href="<?php echo esc_url( home_url( '/blog' ) ); ?>"><?php echo esc_html( $post['title'] ); ?></a>
                        </h3>
                        <p class="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed mb-6">
                            <?php echo esc_html( $post['desc'] ); ?>
                        </p>
                    </div>
                    <a href="<?php echo esc_url( home_url( '/blog' ) ); ?>" class="inline-flex items-center gap-2 text-xs font-semibold text-[#00D4FF] hover:text-white transition-colors">
                        <span>Read Technical Whitepaper</span>
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                </article>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>
</section>
