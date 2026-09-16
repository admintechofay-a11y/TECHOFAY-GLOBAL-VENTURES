<?php
/**
 * Template part: Blog Preview
 * Exactly matches client/src/components/home/BlogPreview.jsx 1-to-1
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

$fallback_posts = array(
    array(
        'title'       => 'Architecting Sovereign Zero Trust for High-Frequency FinTech Gateways',
        'excerpt'     => 'An in-depth breakdown of microsegmentation, sub-millisecond TLS termination, and deterministic packet filtering under 100k req/sec load.',
        'category'    => 'Zero Trust & Security',
        'publishedAt' => 'Mar 12, 2025',
        'readTime'    => '6 min read',
        'author'      => 'Vikramaditya Rathore',
        'thumbnail'   => 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        'avatar'      => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&q=80',
    ),
    array(
        'title'       => 'Autonomous Enterprise AI: Fine-Tuning LLMs with Deterministic Vector Guardrails',
        'excerpt'     => 'How to eliminate hallucinations in production clinical and legal systems using hybrid graph-vector retrieval and strict reasoning bounds.',
        'category'    => 'Applied AI & RAG',
        'publishedAt' => 'Mar 08, 2025',
        'readTime'    => '8 min read',
        'author'      => 'Dr. Ananya Sharma',
        'thumbnail'   => 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
        'avatar'      => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=128&q=80',
    ),
    array(
        'title'       => 'Multi-Cloud FinOps: Slashing Kubernetes Ingress Costs by 42% on AWS & GCP',
        'excerpt'     => 'Practical patterns for cross-cloud traffic steering, spot instance orchestration, and automated resource rightsizing across enterprise clusters.',
        'category'    => 'Cloud & Infrastructure',
        'publishedAt' => 'Mar 02, 2025',
        'readTime'    => '5 min read',
        'author'      => 'Siddharth Nair',
        'thumbnail'   => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
        'avatar'      => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&q=80',
    ),
);
?>

<section class="relative py-24 sm:py-32 bg-[#161616] border-b border-[rgba(245,158,11,0.15)] overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
            <div>
                <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(245,158,11,0.15)] border border-[rgba(245,158,11,0.25)] text-[#B45309] text-xs font-semibold uppercase tracking-wider mb-4">
                    <svg class="w-3.5 h-3.5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                    Engineering Insights & Growth Research
                </div>
                <h2 class="font-heading font-extrabold text-2xl sm:text-4xl text-[#FFFBEB] tracking-tight">
                    Latest from the <span class="text-[#F59E0B]">Techofay Lab</span>
                </h2>
            </div>

            <a
                href="<?php echo esc_url( home_url( '/blog' ) ); ?>"
                class="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#F59E0B] hover:text-[#B45309] transition-colors mt-4 sm:mt-0 group"
            >
                <span>View All Research Publications</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
        </div>

        <!-- 3 Blog Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <?php if ( $blog_query->have_posts() ) : ?>
                <?php while ( $blog_query->have_posts() ) : $blog_query->the_post(); ?>
                    <?php
                    $categories = get_the_category();
                    $cat_name = ! empty( $categories ) ? $categories[0]->name : 'Engineering';
                    $thumb_url = has_post_thumbnail() ? get_the_post_thumbnail_url( get_the_ID(), 'large' ) : 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80';
                    ?>
                    <a
                        href="<?php the_permalink(); ?>"
                        class="group bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[rgba(245,158,11,0.15)] hover:border-[#F59E0B] hover:shadow-[0_8px_24px_rgba(22,163,74,0.08)] transition-all flex flex-col justify-between"
                    >
                        <div>
                            <div class="relative aspect-video w-full overflow-hidden bg-[rgba(245,158,11,0.06)]">
                                <img
                                    src="<?php echo esc_url( $thumb_url ); ?>"
                                    alt="<?php the_title_attribute(); ?>"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-[#1A1A1A]/90 text-[#B45309] border border-[rgba(245,158,11,0.25)] backdrop-blur-md font-semibold">
                                    <?php echo esc_html( $cat_name ); ?>
                                </span>
                            </div>

                            <div class="p-6">
                                <div class="flex items-center gap-4 text-xs text-[#D97706] mb-3">
                                    <span class="flex items-center gap-1.5">
                                        <svg class="w-3.5 h-3.5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                                        <?php echo get_the_date( 'M d, Y' ); ?>
                                    </span>
                                    <span class="flex items-center gap-1.5">
                                        <svg class="w-3.5 h-3.5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        5 min read
                                    </span>
                                </div>

                                <h3 class="font-heading font-bold text-base sm:text-lg text-[#FFFBEB] mb-3 group-hover:text-[#F59E0B] transition-colors line-clamp-2">
                                    <?php the_title(); ?>
                                </h3>

                                <p class="text-xs sm:text-sm text-[#FDE68A] leading-relaxed line-clamp-2">
                                    <?php echo wp_trim_words( get_the_excerpt(), 18 ); ?>
                                </p>
                            </div>
                        </div>

                        <div class="p-6 pt-0 border-t border-[rgba(245,158,11,0.15)] flex items-center justify-between">
                            <div class="flex items-center gap-2.5">
                                <div class="w-7 h-7 rounded-full bg-[rgba(245,158,11,0.15)] text-[#F59E0B] font-bold text-xs flex items-center justify-center border border-[#F59E0B]">
                                    <?php echo substr( get_the_author(), 0, 1 ); ?>
                                </div>
                                <span class="text-xs font-medium text-[#FFFBEB] truncate max-w-[120px]">
                                    <?php the_author(); ?>
                                </span>
                            </div>
                            <span class="text-xs font-semibold text-[#F59E0B] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                Read Article &rarr;
                            </span>
                        </div>
                    </a>
                <?php endwhile; wp_reset_postdata(); ?>
            <?php else : ?>
                <?php foreach ( $fallback_posts as $post ) : ?>
                    <a
                        href="<?php echo esc_url( home_url( '/blog' ) ); ?>"
                        class="group bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[rgba(245,158,11,0.15)] hover:border-[#F59E0B] hover:shadow-[0_8px_24px_rgba(22,163,74,0.08)] transition-all flex flex-col justify-between"
                    >
                        <div>
                            <div class="relative aspect-video w-full overflow-hidden bg-[rgba(245,158,11,0.06)]">
                                <img
                                    src="<?php echo esc_url( $post['thumbnail'] ); ?>"
                                    alt="<?php echo esc_attr( $post['title'] ); ?>"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-[#1A1A1A]/90 text-[#B45309] border border-[rgba(245,158,11,0.25)] backdrop-blur-md font-semibold">
                                    <?php echo esc_html( $post['category'] ); ?>
                                </span>
                            </div>

                            <div class="p-6">
                                <div class="flex items-center gap-4 text-xs text-[#D97706] mb-3">
                                    <span class="flex items-center gap-1.5">
                                        <svg class="w-3.5 h-3.5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                                        <?php echo esc_html( $post['publishedAt'] ); ?>
                                    </span>
                                    <span class="flex items-center gap-1.5">
                                        <svg class="w-3.5 h-3.5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        <?php echo esc_html( $post['readTime'] ); ?>
                                    </span>
                                </div>

                                <h3 class="font-heading font-bold text-base sm:text-lg text-[#FFFBEB] mb-3 group-hover:text-[#F59E0B] transition-colors line-clamp-2">
                                    <?php echo esc_html( $post['title'] ); ?>
                                </h3>

                                <p class="text-xs sm:text-sm text-[#FDE68A] leading-relaxed line-clamp-2">
                                    <?php echo esc_html( $post['excerpt'] ); ?>
                                </p>
                            </div>
                        </div>

                        <div class="p-6 pt-0 border-t border-[rgba(245,158,11,0.15)] flex items-center justify-between">
                            <div class="flex items-center gap-2.5">
                                <img
                                    src="<?php echo esc_url( $post['avatar'] ); ?>"
                                    alt="<?php echo esc_attr( $post['author'] ); ?>"
                                    class="w-7 h-7 rounded-full object-cover border border-[#F59E0B]"
                                />
                                <span class="text-xs font-medium text-[#FFFBEB] truncate max-w-[120px]">
                                    <?php echo esc_html( $post['author'] ); ?>
                                </span>
                            </div>
                            <span class="text-xs font-semibold text-[#F59E0B] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                Read Article &rarr;
                            </span>
                        </div>
                    </a>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>

    </div>
</section>
