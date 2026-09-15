<?php
/**
 * Template Name: Products Directory
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();

$products_query = new WP_Query( array(
    'post_type'      => 'techofay_product',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
) );

$fallback_products = array(
    array(
        'slug'    => 'erp-management',
        'name'    => 'ERP Management Software',
        'badge'   => 'Flagship Enterprise ERP',
        'metric'  => '99.98% Operational Accuracy',
        'tagline' => 'Unified Enterprise Resource Planning, Supply Chain, Finance & HRMS',
        'desc'    => 'A modular enterprise resource planning suite synchronizing financial accounting, multi-warehouse inventory, procurement, end-to-end HRMS payroll, and CRM into an intelligent command center.',
        'price'   => '₹24,999',
        'features'=> array( 'Multi-entity ledger & GST compliance', 'Multi-warehouse inventory tracking', 'Biometric HRMS & automated payroll', 'Executive BI forecasting dashboard' ),
    ),
    array(
        'slug'    => 'hospital-management-system',
        'name'    => 'Hospital Management System (HMS)',
        'badge'   => 'Clinical Healthcare Suite',
        'metric'  => '100% HIPAA & HL7 Compliant',
        'tagline' => 'Comprehensive Digital Healthcare, EMR, OPD/IPD, Lab & Pharmacy Cloud',
        'desc'    => 'An enterprise clinical platform engineered to digitize hospital operations end-to-end. Bridges patient registrations, OPD/IPD workflows, electronic medical records (EMR), and TPA insurance.',
        'price'   => '₹18,999',
        'features'=> array( 'Digital EMR with ICD-10 coding', 'Full OPD & IPD bed allocation queues', 'Laboratory LIS with barcode tracking', 'Integrated hospital pharmacy POS' ),
    ),
    array(
        'slug'    => 'school-management-software',
        'name'    => 'School Management Software',
        'badge'   => 'K-12 & Higher Ed Campus Cloud',
        'metric'  => 'Zero Fee Leakage Guarantee',
        'tagline' => 'All-in-One K-12 & University Administration, LMS, Fees & Transport ERP',
        'desc'    => 'An enterprise education suite designed for institutions managing multi-branch campuses. Automates admissions, fee collection, online examinations, live bus GPS tracking, and parent portals.',
        'price'   => '₹14,999',
        'features'=> array( 'Online admissions & student records', 'Automated fee collection & payment gateway', 'Interactive LMS & exam management', 'Live school bus GPS telemetry' ),
    ),
    array(
        'slug'    => 'hotel-pms',
        'name'    => 'Hotel PMS Cloud Software',
        'badge'   => 'Hospitality Command Suite',
        'metric'  => '35% Direct Booking Increase',
        'tagline' => 'Cloud-Native Hospitality ERP, Channel Manager, Multi-Outlet POS & Guest CRM',
        'desc'    => 'An all-in-one hospitality property management platform for boutique hotels, resorts, and chains. Features automated two-way OTA sync, contactless check-in, restaurant POS, and banquets.',
        'price'   => '₹16,999',
        'features'=> array( 'Real-time 2-way OTA channel manager', 'Front desk & room allocation grid', 'Multi-outlet restaurant & bar POS', 'Housekeeping & maintenance workflows' ),
    ),
    array(
        'slug'    => 'fleet360',
        'name'    => 'Fleet360 Logistics & Tracking',
        'badge'   => 'IoT Telematics Platform',
        'metric'  => '22% Fuel Cost Reduction',
        'tagline' => 'Autonomous IoT Fleet Telematics, AI Route Optimization & Cold-Chain Logistics',
        'desc'    => 'Enterprise fleet management software connecting GPS trackers, OBD-II telemetry, temperature sensors, and driver cameras to monitor commercial fleets in real time.',
        'price'   => '₹12,999',
        'features'=> array( 'Live sub-second GPS tracking', 'Fuel theft & drain detection sensors', 'AI driver behavior & fatigue scorecards', 'Automated route optimization' ),
    ),
);
?>

<main id="primary" class="site-main pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF]">
            <span>FLAGSHIP SAAS SUITES</span>
        </div>
        <h1 class="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Enterprise SaaS Platforms
        </h1>
        <p class="text-base text-[#8B9AB5] leading-relaxed">
            Five production-proven platforms engineered for operational sovereignty, zero data leaks, and rapid cloud deployment.
        </p>
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <?php if ( $products_query->have_posts() ) : ?>
            <?php while ( $products_query->have_posts() ) : $products_query->the_post(); ?>
                <?php
                $badge   = get_field( 'product_badge' ) ?: 'Enterprise SaaS';
                $metric  = get_field( 'product_metric' ) ?: '99.98% High Assurance';
                $tagline = get_field( 'product_tagline' );
                $price   = get_field( 'pricing_starter_price' ) ?: '₹24,999';
                ?>
                <article class="glass-card rounded-2xl p-8 flex flex-col justify-between group hover:border-[#00D4FF]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,212,255,0.12)]">
                    <div>
                        <div class="flex items-center justify-between mb-5">
                            <span class="text-[10px] uppercase font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#00D4FF]">
                                <?php echo esc_html( $badge ); ?>
                            </span>
                            <span class="text-xs font-mono text-emerald-400 font-medium">
                                <?php echo esc_html( $metric ); ?>
                            </span>
                        </div>

                        <h2 class="font-heading font-bold text-xl text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h2>

                        <?php if ( $tagline ) : ?>
                            <div class="text-xs font-medium text-[#8B9AB5] mb-4">
                                <?php echo esc_html( $tagline ); ?>
                            </div>
                        <?php endif; ?>

                        <p class="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed mb-6">
                            <?php echo wp_trim_words( get_the_excerpt(), 22 ); ?>
                        </p>
                    </div>

                    <div class="pt-5 border-t border-white/10 flex items-center justify-between">
                        <div>
                            <span class="text-[10px] text-[#8B9AB5] uppercase block">Starting at</span>
                            <span class="font-heading font-bold text-lg text-white"><?php echo esc_html( $price ); ?></span>
                            <span class="text-[10px] text-[#8B9AB5]">/mo</span>
                        </div>
                        <a href="<?php the_permalink(); ?>" class="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] hover:shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all">
                            View Pricing &rarr;
                        </a>
                    </div>
                </article>
            <?php endwhile; wp_reset_postdata(); ?>
        <?php else : ?>
            <?php foreach ( $fallback_products as $prd ) : ?>
                <article class="glass-card rounded-2xl p-8 flex flex-col justify-between group hover:border-[#00D4FF]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,212,255,0.12)]">
                    <div>
                        <div class="flex items-center justify-between mb-5">
                            <span class="text-[10px] uppercase font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#00D4FF]">
                                <?php echo esc_html( $prd['badge'] ); ?>
                            </span>
                            <span class="text-xs font-mono text-emerald-400 font-medium">
                                <?php echo esc_html( $prd['metric'] ); ?>
                            </span>
                        </div>

                        <h2 class="font-heading font-bold text-xl text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                            <a href="<?php echo esc_url( home_url( '/product/' . $prd['slug'] ) ); ?>"><?php echo esc_html( $prd['name'] ); ?></a>
                        </h2>

                        <div class="text-xs font-medium text-[#8B9AB5] mb-4">
                            <?php echo esc_html( $prd['tagline'] ); ?>
                        </div>

                        <p class="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed mb-6">
                            <?php echo esc_html( $prd['desc'] ); ?>
                        </p>

                        <ul class="space-y-2 mb-6">
                            <?php foreach ( $prd['features'] as $f ) : ?>
                                <li class="flex items-center gap-2 text-xs text-white/80">
                                    <svg class="w-3.5 h-3.5 text-[#00D4FF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                                    <span><?php echo esc_html( $f ); ?></span>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>

                    <div class="pt-5 border-t border-white/10 flex items-center justify-between">
                        <div>
                            <span class="text-[10px] text-[#8B9AB5] uppercase block">Starting at</span>
                            <span class="font-heading font-bold text-lg text-white"><?php echo esc_html( $prd['price'] ); ?></span>
                            <span class="text-[10px] text-[#8B9AB5]">/mo</span>
                        </div>
                        <a href="<?php echo esc_url( home_url( '/product/' . $prd['slug'] ) ); ?>" class="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] hover:shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all">
                            View Pricing &rarr;
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
