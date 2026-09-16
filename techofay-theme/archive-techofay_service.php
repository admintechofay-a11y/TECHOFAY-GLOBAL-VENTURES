<?php
/**
 * The template for displaying Techofay Services Archive & Directory
 * Matches client/src/pages/Services.jsx 1-to-1 in White & Forest Green
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();

// Fetch all services from custom post type
$services_query = new WP_Query( array(
    'post_type'      => 'techofay_service',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
) );

$fallback_services = array(
    array(
        'slug'     => 'cybersecurity',
        'title'    => 'Cybersecurity & Zero Trust',
        'desc'     => 'Military-grade defense architectures, SOC-as-a-Service, automated penetration testing, and compliance certification for global enterprises.',
        'badge'    => 'Enterprise Defense',
        'tagline'  => 'Uncompromising Cybersecurity for Mission-Critical Infrastructure',
        'tools'    => array( 'CrowdStrike', 'Splunk', 'Nessus', 'Metasploit', 'Wireshark', 'Wazuh', 'Palo Alto Networks' ),
        'metric'   => '4.8M+ Threats Blocked Daily',
        'category' => 'cybersecurity'
    ),
    array(
        'slug'     => 'development',
        'title'    => 'Engineering & QA Testing',
        'desc'     => 'Full-cycle modern software engineering, cloud-native microservices, mobile apps, and automated QA pipelines built for scale.',
        'badge'    => 'High-Velocity Dev',
        'tagline'  => 'Resilient, Scalable Software Architectures Engineered for Billions',
        'tools'    => array( 'React', 'TypeScript', 'Node.js', 'Go', 'Python', 'Kubernetes', 'Playwright' ),
        'metric'   => '99.99% Production Uptime',
        'category' => 'development'
    ),
    array(
        'slug'     => 'cloud-infrastructure',
        'title'    => 'Cloud & DevOps Architecture',
        'desc'     => 'Multi-cloud infrastructure design across AWS, Azure, and GCP. High-throughput Kubernetes orchestration, GitOps automation, and FinOps.',
        'badge'    => 'Cloud Sovereignty',
        'tagline'  => 'Hyperscale Infrastructure Engineered for Infinite Scalability',
        'tools'    => array( 'AWS', 'GCP', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'ArgoCD' ),
        'metric'   => '100% Automated CI/CD',
        'category' => 'cloud'
    ),
    array(
        'slug'     => 'ai-data-analytics',
        'title'    => 'Data & Applied AI Solutions',
        'desc'     => 'End-to-end data pipelines, custom LLM fine-tuning, RAG enterprise knowledge agents, and BigQuery high-concurrency warehousing.',
        'badge'    => 'Autonomous Intelligence',
        'tagline'  => 'Transforming Unstructured Big Data into Autonomous Value Engines',
        'tools'    => array( 'PyTorch', 'OpenAI', 'LangChain', 'Snowflake', 'dbt', 'Databricks' ),
        'metric'   => '120+ AI Models Deployed',
        'category' => 'ai'
    ),
    array(
        'slug'     => 'ui-ux-design',
        'title'    => 'Product Design & UX Systems',
        'desc'     => 'Human-centric digital product design, enterprise design tokens, interactive micro-animations, and conversion rate optimization.',
        'badge'    => 'Human-Centric UX',
        'tagline'  => 'Interfaces Engineered for Cognitive Ease and Commercial Velocity',
        'tools'    => array( 'Figma', 'Prototyping', 'Design Systems', 'Micro-UX', 'UserTesting' ),
        'metric'   => '3.8x Avg Conversion Uplift',
        'category' => 'design'
    ),
    array(
        'slug'     => 'growth-marketing',
        'title'    => 'Digital Growth & Acquisition',
        'desc'     => 'Data-backed enterprise marketing, international SEO, AI-driven lead acquisition funnels, and branding backed by a 100% money-back guarantee.',
        'badge'    => 'Guaranteed Pipeline',
        'tagline'  => 'Deterministic Revenue Pipelines Backed by Money-Back Guarantee',
        'tools'    => array( 'International SEO', 'PPC Scale', 'Brand Identity', 'NFC Smart Cards', 'Social Media' ),
        'metric'   => '100% Money-Back Guarantee',
        'category' => 'growth'
    ),
);
?>

<main id="primary" class="site-main min-h-screen pt-24 pb-20 bg-[#070E24]">
    <!-- Header Banner -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 relative">
        <div class="text-center max-w-3xl mx-auto space-y-4">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(43,110,250,0.2)] border border-[rgba(0,212,255,0.3)] text-[#1E50C8] text-xs font-semibold uppercase tracking-wider">
                <svg class="w-3.5 h-3.5 text-[#2B6EFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                Comprehensive Growth Solutions
            </div>
            <h1 class="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight">
                Our Enterprise <span class="text-[#2B6EFA]">Service Verticals</span>
            </h1>
            <p class="text-sm sm:text-base text-[#8B9AB5] leading-relaxed">
                Engineered to deliver unmatched security, velocity, and scalable client growth across six specialized technical pillars. Explore our capabilities below.
            </p>
        </div>

        <!-- Filter & Search Bar -->
        <div class="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0A1628] p-3 rounded-2xl border border-[rgba(43,110,250,0.2)] shadow-sm">
            <!-- Filter Pills -->
            <div class="flex flex-wrap items-center gap-2 w-full md:w-auto" id="service-filter-tabs">
                <button type="button" data-filter="all" class="filter-tab-btn px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer bg-[#2B6EFA] text-[#1c1400] font-semibold shadow-sm">
                    All Verticals (6)
                </button>
                <button type="button" data-filter="cybersecurity" class="filter-tab-btn px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer text-[#c4d7f5] hover:text-[#2B6EFA] bg-[#070E24] border border-[rgba(43,110,250,0.2)]">
                    Cybersecurity
                </button>
                <button type="button" data-filter="development" class="filter-tab-btn px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer text-[#c4d7f5] hover:text-[#2B6EFA] bg-[#070E24] border border-[rgba(43,110,250,0.2)]">
                    Engineering
                </button>
                <button type="button" data-filter="cloud" class="filter-tab-btn px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer text-[#c4d7f5] hover:text-[#2B6EFA] bg-[#070E24] border border-[rgba(43,110,250,0.2)]">
                    Cloud & DevOps
                </button>
                <button type="button" data-filter="ai" class="filter-tab-btn px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer text-[#c4d7f5] hover:text-[#2B6EFA] bg-[#070E24] border border-[rgba(43,110,250,0.2)]">
                    Applied AI
                </button>
                <button type="button" data-filter="design" class="filter-tab-btn px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer text-[#c4d7f5] hover:text-[#2B6EFA] bg-[#070E24] border border-[rgba(43,110,250,0.2)]">
                    UI/UX
                </button>
                <button type="button" data-filter="growth" class="filter-tab-btn px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer text-[#c4d7f5] hover:text-[#2B6EFA] bg-[#070E24] border border-[rgba(43,110,250,0.2)]">
                    Growth & SEO
                </button>
            </div>

            <!-- Search Input -->
            <div class="relative w-full md:w-72">
                <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B9AB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <input
                    type="text"
                    id="service-search-input"
                    placeholder="Search services, tools, AI, SEO..."
                    class="w-full pl-10 pr-4 py-2 rounded-lg bg-[#070E24] border border-[rgba(43,110,250,0.2)] text-xs text-[#FFFFFF] placeholder:text-[#8B9AB5] focus:outline-none focus:border-[#2B6EFA] focus:ring-1 focus:ring-[#2B6EFA]"
                />
            </div>
        </div>
    </div>

    <!-- Services Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" id="services-cards-container">
            <?php if ( $services_query->have_posts() ) : ?>
                <?php while ( $services_query->have_posts() ) : $services_query->the_post(); ?>
                    <?php
                    $badge   = get_field( 'service_badge' ) ?: 'Enterprise Vertical';
                    $tagline = get_field( 'service_tagline' ) ?: 'Mission-Critical Engineering & Architecture';
                    $tools   = get_field( 'service_tools' ) ?: array( 'Architecture', 'Cloud', 'Automation' );
                    $metric  = get_field( 'service_metric' ) ?: 'Enterprise Grade SLA';
                    $post_slug = get_post_field( 'post_name', get_the_ID() );
                    ?>
                    <article class="service-card bg-[#0A1628] rounded-2xl p-8 flex flex-col justify-between border border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5" data-title="<?php the_title_attribute(); ?>" data-desc="<?php echo esc_attr( get_the_excerpt() ); ?>" data-category="<?php echo esc_attr( $post_slug ); ?>">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <div class="w-12 h-12 rounded-xl bg-[rgba(43,110,250,0.2)] border border-[rgba(0,212,255,0.3)] flex items-center justify-center text-[#2B6EFA]">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                                </div>
                                <span class="text-[10px] uppercase font-mono px-2.5 py-1 rounded-md bg-[rgba(43,110,250,0.2)] border border-[rgba(0,212,255,0.3)] text-[#1E50C8] font-semibold">
                                    <?php echo esc_html( $badge ); ?>
                                </span>
                            </div>

                            <h2 class="font-heading font-bold text-xl text-[#FFFFFF] mb-2 hover:text-[#2B6EFA] transition-colors">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h2>

                            <?php if ( $tagline ) : ?>
                                <div class="text-xs font-semibold text-[#2B6EFA] mb-3">
                                    <?php echo esc_html( $tagline ); ?>
                                </div>
                            <?php endif; ?>

                            <p class="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                                <?php echo wp_trim_words( get_the_excerpt(), 25 ); ?>
                            </p>

                            <?php if ( is_array( $tools ) && ! empty( $tools ) ) : ?>
                                <div class="flex flex-wrap gap-1.5 mb-6">
                                    <?php foreach ( $tools as $tool ) : ?>
                                        <span class="text-[10px] px-2.5 py-1 rounded-md bg-[#070E24] text-[#c4d7f5] border border-[rgba(43,110,250,0.2)] font-mono">
                                            <?php echo esc_html( $tool ); ?>
                                        </span>
                                    <?php endforeach; ?>
                                </div>
                            <?php endif; ?>
                        </div>

                        <div class="pt-5 border-t border-[rgba(43,110,250,0.2)] flex items-center justify-between">
                            <span class="text-xs font-mono font-bold text-[#2B6EFA]"><?php echo esc_html( $metric ); ?></span>
                            <a href="<?php the_permalink(); ?>" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#2B6EFA] hover:text-[#1E50C8] transition-colors">
                                <span>Deep Dive</span>
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                            </a>
                        </div>
                    </article>
                <?php endwhile; wp_reset_postdata(); ?>
            <?php else : ?>
                <?php foreach ( $fallback_services as $svc ) : ?>
                    <article class="service-card bg-[#0A1628] rounded-2xl p-8 flex flex-col justify-between border border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5" data-title="<?php echo esc_attr( $svc['title'] ); ?>" data-desc="<?php echo esc_attr( $svc['desc'] ); ?>" data-category="<?php echo esc_attr( $svc['category'] ); ?>">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <div class="w-12 h-12 rounded-xl bg-[rgba(43,110,250,0.2)] border border-[rgba(0,212,255,0.3)] flex items-center justify-center text-[#2B6EFA]">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                                </div>
                                <span class="text-[10px] uppercase font-mono px-2.5 py-1 rounded-md bg-[rgba(43,110,250,0.2)] border border-[rgba(0,212,255,0.3)] text-[#1E50C8] font-semibold">
                                    <?php echo esc_html( $svc['badge'] ); ?>
                                </span>
                            </div>

                            <h2 class="font-heading font-bold text-xl text-[#FFFFFF] mb-2 hover:text-[#2B6EFA] transition-colors">
                                <a href="<?php echo esc_url( home_url( '/service/' . $svc['slug'] ) ); ?>"><?php echo esc_html( $svc['title'] ); ?></a>
                            </h2>

                            <div class="text-xs font-semibold text-[#2B6EFA] mb-3">
                                <?php echo esc_html( $svc['tagline'] ); ?>
                            </div>

                            <p class="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                                <?php echo esc_html( $svc['desc'] ); ?>
                            </p>

                            <div class="flex flex-wrap gap-1.5 mb-6">
                                <?php foreach ( $svc['tools'] as $tool ) : ?>
                                    <span class="text-[10px] px-2.5 py-1 rounded-md bg-[#070E24] text-[#c4d7f5] border border-[rgba(43,110,250,0.2)] font-mono">
                                        <?php echo esc_html( $tool ); ?>
                                    </span>
                                <?php endforeach; ?>
                            </div>
                        </div>

                        <div class="pt-5 border-t border-[rgba(43,110,250,0.2)] flex items-center justify-between">
                            <span class="text-xs font-mono font-bold text-[#2B6EFA]"><?php echo esc_html( $svc['metric'] ); ?></span>
                            <a href="<?php echo esc_url( home_url( '/service/' . $svc['slug'] ) ); ?>" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#2B6EFA] hover:text-[#1E50C8] transition-colors">
                                <span>Deep Dive</span>
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                            </a>
                        </div>
                    </article>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>

    <!-- CTA Section -->
    <?php get_template_part( 'template-parts/cta-banner' ); ?>
</main>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.filter-tab-btn');
    const searchInput = document.getElementById('service-search-input');
    const cards = document.querySelectorAll('.service-card');
    let currentFilter = 'all';

    function filterCards() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

        cards.forEach(card => {
            const title = (card.getAttribute('data-title') || '').toLowerCase();
            const desc = (card.getAttribute('data-desc') || '').toLowerCase();
            const cat = (card.getAttribute('data-category') || '').toLowerCase();

            const matchesCategory = (currentFilter === 'all') || cat.includes(currentFilter);
            const matchesQuery = !query || title.includes(query) || desc.includes(query);

            if (matchesCategory && matchesQuery) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => {
                t.classList.remove('bg-[#2B6EFA]', 'text-white', 'shadow-sm');
                t.classList.add('text-[#c4d7f5]', 'bg-[#070E24]', 'border', 'border-[rgba(43,110,250,0.2)]');
            });
            this.classList.remove('text-[#c4d7f5]', 'bg-[#070E24]', 'border', 'border-[rgba(43,110,250,0.2)]');
            this.classList.add('bg-[#2B6EFA]', 'text-white', 'shadow-sm');

            currentFilter = this.getAttribute('data-filter') || 'all';
            filterCards();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', filterCards);
    }
});
</script>

<?php
get_footer();
