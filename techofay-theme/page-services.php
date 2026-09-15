<?php
/**
 * Template Name: Services Directory
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();

$services_query = new WP_Query( array(
    'post_type'      => 'techofay_service',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
) );

// Fallback services if none created in WP admin yet
$fallback_services = array(
    array(
        'slug'     => 'cybersecurity',
        'title'    => 'Cybersecurity & Zero Trust',
        'desc'     => 'Military-grade defense architectures, SOC-as-a-Service, automated penetration testing, and compliance certification for global enterprises.',
        'badge'    => 'Enterprise Defense',
        'tagline'  => 'Uncompromising Cybersecurity for Mission-Critical Infrastructure',
        'tools'    => array( 'CrowdStrike', 'Splunk', 'Nessus', 'Metasploit', 'Wazuh', 'Palo Alto Networks' ),
        'metric'   => '4.8M+ Threats Blocked Daily',
    ),
    array(
        'slug'     => 'development',
        'title'    => 'Engineering & QA Testing',
        'desc'     => 'Full-cycle modern software engineering, cloud-native microservices, mobile apps, and automated QA pipelines built for scale.',
        'badge'    => 'High-Velocity Dev',
        'tagline'  => 'Resilient, Scalable Software Architectures Engineered for Billions',
        'tools'    => array( 'React', 'Node.js', 'Go', 'Python', 'Kubernetes', 'Playwright' ),
        'metric'   => '99.99% Production Uptime',
    ),
    array(
        'slug'     => 'cloud-infrastructure',
        'title'    => 'Cloud & DevOps Architecture',
        'desc'     => 'Multi-cloud infrastructure design across AWS, Azure, and GCP. High-throughput Kubernetes orchestration, GitOps automation, and FinOps.',
        'badge'    => 'Cloud Sovereignty',
        'tagline'  => 'Hyperscale Infrastructure Engineered for Infinite Scalability',
        'tools'    => array( 'AWS', 'GCP', 'Azure', 'Terraform', 'Docker', 'Argocd' ),
        'metric'   => '100% Automated CI/CD',
    ),
    array(
        'slug'     => 'ai-data-analytics',
        'title'    => 'Data & Applied AI Solutions',
        'desc'     => 'End-to-end data pipelines, custom LLM fine-tuning, RAG enterprise knowledge agents, and BigQuery high-concurrency warehousing.',
        'badge'    => 'Autonomous Intelligence',
        'tagline'  => 'Transforming Unstructured Big Data into Autonomous Value Engines',
        'tools'    => array( 'PyTorch', 'OpenAI', 'LangChain', 'Snowflake', 'dbt', 'Databricks' ),
        'metric'   => '120+ AI Models Deployed',
    ),
    array(
        'slug'     => 'ui-ux-design',
        'title'    => 'Product Design & UX Systems',
        'desc'     => 'Human-centric digital product design, enterprise design tokens, interactive micro-animations, and conversion rate optimization.',
        'badge'    => 'Human-Centric UX',
        'tagline'  => 'Interfaces Engineered for Cognitive Ease and Commercial Velocity',
        'tools'    => array( 'Figma', 'Prototyping', 'Design Systems', 'Micro-UX', 'UserTesting' ),
        'metric'   => '3.8x Avg Conversion Uplift',
    ),
    array(
        'slug'     => 'growth-marketing',
        'title'    => 'Digital Growth & Acquisition',
        'desc'     => 'Data-backed enterprise marketing, international SEO, AI-driven lead acquisition funnels, and branding backed by a 100% money-back guarantee.',
        'badge'    => 'Guaranteed Pipeline',
        'tagline'  => 'Deterministic Revenue Pipelines Backed by Money-Back Guarantee',
        'tools'    => array( 'International SEO', 'PPC Scale', 'Brand Identity', 'NFC Smart Cards' ),
        'metric'   => '100% Money-Back Guarantee',
    ),
);
?>

<main id="primary" class="site-main pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF]">
            <span>ENTERPRISE SOLUTIONS</span>
        </div>
        <h1 class="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Six Sovereign Enterprise Verticals
        </h1>
        <p class="text-base text-[#8B9AB5] leading-relaxed">
            Full-cycle engineering, military-grade cybersecurity, and autonomous intelligence built for market leaders.
        </p>
    </div>

    <!-- Services Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <?php if ( $services_query->have_posts() ) : ?>
            <?php while ( $services_query->have_posts() ) : $services_query->the_post(); ?>
                <?php
                $badge   = get_field( 'service_badge' ) ?: 'Enterprise Vertical';
                $tagline = get_field( 'service_tagline' );
                $tools   = get_field( 'service_tools' );
                ?>
                <article class="glass-card rounded-2xl p-8 flex flex-col justify-between group hover:border-[#00D4FF]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,212,255,0.12)]">
                    <div>
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-12 h-12 rounded-xl bg-[#2B6EFA]/10 border border-[#2B6EFA]/30 flex items-center justify-center text-[#00D4FF] group-hover:scale-110 transition-transform">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                            </div>
                            <span class="text-[10px] uppercase font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#00D4FF]">
                                <?php echo esc_html( $badge ); ?>
                            </span>
                        </div>

                        <h2 class="font-heading font-bold text-xl text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h2>

                        <?php if ( $tagline ) : ?>
                            <div class="text-xs font-medium text-[#00D4FF]/80 mb-3">
                                <?php echo esc_html( $tagline ); ?>
                            </div>
                        <?php endif; ?>

                        <p class="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed mb-6">
                            <?php echo wp_trim_words( get_the_excerpt(), 25 ); ?>
                        </p>
                    </div>

                    <div>
                        <a href="<?php the_permalink(); ?>" class="inline-flex items-center gap-2 text-xs font-bold text-[#00D4FF] hover:text-white transition-colors">
                            <span>Deep Dive Architecture</span>
                            <svg class="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                    </div>
                </article>
            <?php endwhile; wp_reset_postdata(); ?>
        <?php else : ?>
            <?php foreach ( $fallback_services as $svc ) : ?>
                <article class="glass-card rounded-2xl p-8 flex flex-col justify-between group hover:border-[#00D4FF]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,212,255,0.12)]">
                    <div>
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-12 h-12 rounded-xl bg-[#2B6EFA]/10 border border-[#2B6EFA]/30 flex items-center justify-center text-[#00D4FF] group-hover:scale-110 transition-transform">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                            </div>
                            <span class="text-[10px] uppercase font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#00D4FF]">
                                <?php echo esc_html( $svc['badge'] ); ?>
                            </span>
                        </div>

                        <h2 class="font-heading font-bold text-xl text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                            <a href="<?php echo esc_url( home_url( '/service/' . $svc['slug'] ) ); ?>"><?php echo esc_html( $svc['title'] ); ?></a>
                        </h2>

                        <div class="text-xs font-medium text-[#00D4FF]/80 mb-3">
                            <?php echo esc_html( $svc['tagline'] ); ?>
                        </div>

                        <p class="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed mb-6">
                            <?php echo esc_html( $svc['desc'] ); ?>
                        </p>

                        <div class="flex flex-wrap gap-1.5 mb-6">
                            <?php foreach ( $svc['tools'] as $tool ) : ?>
                                <span class="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/70 font-mono">
                                    <?php echo esc_html( $tool ); ?>
                                </span>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <div class="pt-4 border-t border-white/10 flex items-center justify-between">
                        <span class="text-xs font-mono text-[#00D4FF]"><?php echo esc_html( $svc['metric'] ); ?></span>
                        <a href="<?php echo esc_url( home_url( '/service/' . $svc['slug'] ) ); ?>" class="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#00D4FF] transition-colors">
                            <span>Explore</span>
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                    </div>
                </article>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>

    <!-- CTA Section -->
    <?php get_template_part( 'template-parts/cta-banner' ); ?>
</main>

<?php
get_footer();
