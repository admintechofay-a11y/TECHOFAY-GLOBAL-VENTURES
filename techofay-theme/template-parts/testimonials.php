<?php
/**
 * Template part: Testimonials Section
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$testimonials_query = new WP_Query( array(
    'post_type'      => 'testimonial',
    'posts_per_page' => 3,
    'post_status'    => 'publish',
) );

$fallback_testimonials = array(
    array(
        'name'    => 'Vikramaditya Singhania',
        'role'    => 'Group Chief Technology Officer',
        'company' => 'Indus Global Logistics',
        'text'    => 'TECHOFAY transformed our distributed supply chain with their ERP suite. We reduced inventory latency by 42% and their 100% money-back guarantee gave our executive board total confidence.',
        'rating'  => 5,
    ),
    array(
        'name'    => 'Dr. Rachel MacIntyre',
        'role'    => 'Director of Digital Health Operations',
        'company' => 'Edinburgh Health Trust (UK)',
        'text'    => 'The Hospital Management System (HMS) delivered by TECHOFAY is exceptional. HIPAA-compliant EMR workflows, zero-downtime pharmacy synchronization, and world-class 24/7 technical support.',
        'rating'  => 5,
    ),
    array(
        'name'    => 'Rajeshwar Kulkarni',
        'role'    => 'Managing Director',
        'company' => 'Apex Educational Consortium',
        'text'    => 'Managing 18,000 students across 14 campuses was chaotic until TECHOFAY deployed their School Management ERP. Automated fees, biometric attendance, and seamless parent communications.',
        'rating'  => 5,
    ),
);
?>

<section class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
    <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF]">
            <span>CLIENT ENDORSEMENTS</span>
        </div>
        <h2 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Trusted by Enterprise Leaders Worldwide
        </h2>
        <p class="text-sm sm:text-base text-[#8B9AB5] leading-relaxed">
            Real impact metrics and commercial acceleration delivered for global brands.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <?php if ( $testimonials_query->have_posts() ) : ?>
            <?php while ( $testimonials_query->have_posts() ) : $testimonials_query->the_post(); ?>
                <?php
                $role    = get_field( 'client_role' ) ?: 'Executive';
                $company = get_field( 'client_company' ) ?: 'Enterprise Client';
                $rating  = get_field( 'star_rating' ) ?: 5;
                ?>
                <div class="glass-card rounded-2xl p-8 flex flex-col justify-between hover:border-[#00D4FF]/50 transition-all hover:-translate-y-1">
                    <div>
                        <!-- Stars -->
                        <div class="flex items-center gap-1 text-[#00D4FF] mb-6">
                            <?php for ( $i = 0; $i < $rating; $i++ ) : ?>
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            <?php endfor; ?>
                        </div>

                        <p class="text-xs sm:text-sm text-white/90 leading-relaxed italic mb-6">
                            &ldquo;<?php echo get_the_content(); ?>&rdquo;
                        </p>
                    </div>

                    <div class="pt-4 border-t border-white/10 flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#2B6EFA] to-[#00D4FF] flex items-center justify-center font-bold text-xs text-white">
                            <?php echo esc_html( substr( get_the_title(), 0, 1 ) ); ?>
                        </div>
                        <div>
                            <div class="font-heading font-bold text-sm text-white"><?php the_title(); ?></div>
                            <div class="text-[11px] text-[#8B9AB5]"><?php echo esc_html( $role ); ?>, <span class="text-[#00D4FF]"><?php echo esc_html( $company ); ?></span></div>
                        </div>
                    </div>
                </div>
            <?php endwhile; wp_reset_postdata(); ?>
        <?php else : ?>
            <?php foreach ( $fallback_testimonials as $item ) : ?>
                <div class="glass-card rounded-2xl p-8 flex flex-col justify-between hover:border-[#00D4FF]/50 transition-all hover:-translate-y-1">
                    <div>
                        <!-- Stars -->
                        <div class="flex items-center gap-1 text-[#00D4FF] mb-6">
                            <?php for ( $i = 0; $i < $item['rating']; $i++ ) : ?>
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            <?php endfor; ?>
                        </div>

                        <p class="text-xs sm:text-sm text-white/90 leading-relaxed italic mb-6">
                            &ldquo;<?php echo esc_html( $item['text'] ); ?>&rdquo;
                        </p>
                    </div>

                    <div class="pt-4 border-t border-white/10 flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#2B6EFA] to-[#00D4FF] flex items-center justify-center font-bold text-xs text-white">
                            <?php echo esc_html( substr( $item['name'], 0, 1 ) ); ?>
                        </div>
                        <div>
                            <div class="font-heading font-bold text-sm text-white"><?php echo esc_html( $item['name'] ); ?></div>
                            <div class="text-[11px] text-[#8B9AB5]"><?php echo esc_html( $item['role'] ); ?>, <span class="text-[#00D4FF]"><?php echo esc_html( $item['company'] ); ?></span></div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>
</section>
