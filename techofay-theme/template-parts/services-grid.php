<?php
/**
 * Template part: Services Grid
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$services_query = new WP_Query( array(
    'post_type'      => 'techofay_service',
    'posts_per_page' => 6,
    'post_status'    => 'publish',
) );

// Fallback services if none entered in WP admin yet
$fallback_services = array(
    array(
        'slug'  => 'cybersecurity',
        'title' => 'Cybersecurity & Zero Trust',
        'desc'  => 'Military-grade defense architectures, SOC-as-a-Service, automated penetration testing, and compliance certification for global enterprises.',
        'badge' => 'Enterprise Defense',
        'icon'  => '<svg class="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
        'tools' => array( 'CrowdStrike', 'Splunk', 'Nessus', 'Zero Trust' ),
    ),
    array(
        'slug'  => 'development',
        'title' => 'Engineering & QA Testing',
        'desc'  => 'Full-cycle modern software engineering, cloud-native microservices, mobile apps, and automated QA pipelines built for scale.',
        'badge' => 'High-Velocity Dev',
        'icon'  => '<svg class="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>',
        'tools' => array( 'React', 'Node.js', 'Go', 'Kubernetes' ),
    ),
    array(
        'slug'  => 'cloud-infrastructure',
        'title' => 'Cloud & DevOps Architecture',
        'desc'  => 'High-throughput multi-cloud engineering across AWS, Azure, and GCP. Automated CI/CD, Kubernetes orchestration, and FinOps.',
        'badge' => 'Cloud Sovereignty',
        'icon'  => '<svg class="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"/></svg>',
        'tools' => array( 'AWS', 'GCP', 'Terraform', 'Docker' ),
    ),
    array(
        'slug'  => 'ai-data-analytics',
        'title' => 'Data & Applied AI Solutions',
        'desc'  => 'Predictive intelligence pipelines, custom LLM fine-tuning, RAG enterprise knowledge agents, and BigQuery data warehousing.',
        'badge' => 'Autonomous Intelligence',
        'icon'  => '<svg class="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>',
        'tools' => array( 'PyTorch', 'OpenAI', 'LangChain', 'Snowflake' ),
    ),
    array(
        'slug'  => 'ui-ux-design',
        'title' => 'Product Design & UX Systems',
        'desc'  => 'Conversion-focused digital product design, enterprise design systems, usability research, and interactive micro-animations.',
        'badge' => 'Human-Centric UX',
        'icon'  => '<svg class="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>',
        'tools' => array( 'Figma', 'Prototyping', 'Design Systems', 'Micro-UX' ),
    ),
    array(
        'slug'  => 'growth-marketing',
        'title' => 'Digital Growth & Acquisition',
        'desc'  => 'Performance marketing, international SEO, AI-driven conversion rate optimization, and brand amplification backed by revenue ROI.',
        'badge' => 'Guaranteed Pipeline',
        'icon'  => '<svg class="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>',
        'tools' => array( 'Global SEO', 'PPC Growth', 'Brand Equity', 'Analytics' ),
    ),
);
?>

<section class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
    <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF]">
            <span>CORE CAPABILITIES</span>
        </div>
        <h2 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Six Sovereign Enterprise Verticals
        </h2>
        <p class="text-sm sm:text-base text-[#8B9AB5] leading-relaxed">
            From zero-trust network hardening to high-concurrency microservices and autonomous machine learning pipelines.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <?php if ( $services_query->have_posts() ) : ?>
            <?php while ( $services_query->have_posts() ) : $services_query->the_post(); ?>
                <?php
                $badge = get_field( 'service_badge' ) ?: 'Enterprise Solution';
                $tools = get_field( 'service_tools' );
                ?>
                <div class="glass-card rounded-2xl p-7 flex flex-col justify-between group transition-all duration-300 hover:border-[#00D4FF]/50 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,212,255,0.12)]">
                    <div>
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-12 h-12 rounded-xl bg-[#2B6EFA]/10 border border-[#2B6EFA]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg class="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                            </div>
                            <span class="text-[10px] uppercase tracking-wider font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#00D4FF]">
                                <?php echo esc_html( $badge ); ?>
                            </span>
                        </div>

                        <h3 class="font-heading font-bold text-xl text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h3>

                        <p class="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed mb-6">
                            <?php echo wp_trim_words( get_the_excerpt(), 22 ); ?>
                        </p>
                    </div>

                    <div>
                        <a href="<?php the_permalink(); ?>" class="inline-flex items-center gap-2 text-xs font-bold text-[#00D4FF] hover:text-white transition-colors">
                            <span>Explore Architecture</span>
                            <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                    </div>
                </div>
            <?php endwhile; wp_reset_postdata(); ?>
        <?php else : ?>
            <?php foreach ( $fallback_services as $svc ) : ?>
                <div class="glass-card rounded-2xl p-7 flex flex-col justify-between group transition-all duration-300 hover:border-[#00D4FF]/50 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,212,255,0.12)]">
                    <div>
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-12 h-12 rounded-xl bg-[#2B6EFA]/10 border border-[#2B6EFA]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <?php echo $svc['icon']; ?>
                            </div>
                            <span class="text-[10px] uppercase tracking-wider font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#00D4FF]">
                                <?php echo esc_html( $svc['badge'] ); ?>
                            </span>
                        </div>

                        <h3 class="font-heading font-bold text-xl text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                            <a href="<?php echo esc_url( home_url( '/service/' . $svc['slug'] ) ); ?>"><?php echo esc_html( $svc['title'] ); ?></a>
                        </h3>

                        <p class="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed mb-6">
                            <?php echo esc_html( $svc['desc'] ); ?>
                        </p>

                        <div class="flex flex-wrap gap-2 mb-6">
                            <?php foreach ( $svc['tools'] as $tool ) : ?>
                                <span class="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/70 font-mono">
                                    <?php echo esc_html( $tool ); ?>
                                </span>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <div>
                        <a href="<?php echo esc_url( home_url( '/service/' . $svc['slug'] ) ); ?>" class="inline-flex items-center gap-2 text-xs font-bold text-[#00D4FF] hover:text-white transition-colors">
                            <span>Explore Architecture</span>
                            <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>

    <!-- Bottom Services CTA -->
    <div class="mt-14 text-center">
        <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-xs font-bold text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-[#00D4FF]/40 transition-all">
            <span>View Complete Engineering Capabilities & Tools Matrix</span>
            <svg class="w-3.5 h-3.5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
    </div>
</section>
