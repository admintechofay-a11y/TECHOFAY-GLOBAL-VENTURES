<?php
/**
 * The template for displaying single SaaS products
 * In 100% White & Forest Green Theme
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();

$badge      = get_field( 'product_badge' ) ?: 'Enterprise SaaS';
$tagline    = get_field( 'product_tagline' ) ?: 'Autonomous Operations & Cloud Workflow Suite';
$metric     = get_field( 'product_metric' ) ?: '99.98% High Assurance';
$features   = get_field( 'product_features' );
$faqs       = get_field( 'product_faqs' );

// Pricing Tiers
$starter_p  = get_field( 'pricing_starter_price' ) ?: '₹24,999';
$starter_b  = get_field( 'pricing_starter_billing' ) ?: '/mo for growing businesses & SMEs';
$starter_f  = get_field( 'pricing_starter_features' ) ?: "Up to 25 core users\nCore Accounting & Ledger with GST compliance\nStandard Inventory Management\nBasic HRMS & Payroll\nStandard Email & Ticket SLA Support";

$pro_p      = get_field( 'pricing_pro_price' ) ?: '₹64,999';
$pro_b      = get_field( 'pricing_pro_billing' ) ?: '/mo for scaling mid-market enterprises';
$pro_f      = get_field( 'pricing_pro_features' ) ?: "Up to 150 core users\nAdvanced Multi-Warehouse Supply Chain & MRP\nFull HRMS & Automated Payroll (500 staff)\nAutomated Procurement & CRM Pipeline\nCustom BI Analytics Dashboards\n24/7 Priority SLA Support";

$ent_p      = get_field( 'pricing_enterprise_price' ) ?: 'Custom';
$ent_b      = get_field( 'pricing_enterprise_billing' ) ?: 'starting at ₹1,99,999 / enterprise deployment';
$ent_f      = get_field( 'pricing_enterprise_features' ) ?: "Unlimited enterprise users & entities\nMulti-Entity Global Consolidations\nCustom Manufacturing MRP Integration\nDedicated Private Cloud or On-Premise\n15-Minute Critical Response SLA\nCustom API & Legacy ERP Migration";
?>

<main id="primary" class="site-main min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#070E24]">
    <!-- Breadcrumbs -->
    <nav class="flex items-center gap-2 text-xs font-mono text-[#8B9AB5] mb-8" aria-label="Breadcrumb">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:text-[#2B6EFA] transition-colors">Home</a>
        <span>/</span>
        <a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="hover:text-[#2B6EFA] transition-colors">Products</a>
        <span>/</span>
        <span class="text-[#FFFFFF] font-semibold"><?php the_title(); ?></span>
    </nav>

    <!-- Product Header -->
    <div class="mb-14 space-y-5">
        <div class="flex flex-wrap items-center gap-3">
            <span class="px-3.5 py-1.5 rounded-full bg-[rgba(43,110,250,0.2)] border border-[rgba(0,212,255,0.3)] text-xs font-semibold text-[#1E50C8]">
                <?php echo esc_html( $badge ); ?>
            </span>
            <span class="px-3.5 py-1.5 rounded-full bg-[rgba(255,255,255,0.05)] border border-[#86EFAC] text-xs font-mono text-[#1E50C8] font-semibold">
                <?php echo esc_html( $metric ); ?>
            </span>
        </div>
        <h1 class="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight">
            <?php the_title(); ?>
        </h1>
        <p class="text-base sm:text-lg text-[#4B5563] font-normal max-w-3xl leading-relaxed">
            <?php echo esc_html( $tagline ); ?>
        </p>
    </div>

    <!-- Description & Highlights -->
    <div class="bg-[#0A1628] rounded-3xl p-8 sm:p-12 border border-[rgba(43,110,250,0.2)] shadow-sm mb-16 space-y-6">
        <h2 class="font-heading font-bold text-2xl text-[#FFFFFF]">Platform Scope & Core Capabilities</h2>
        <div class="text-sm sm:text-base text-[#4B5563] leading-relaxed space-y-4">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                <?php the_content(); ?>
            <?php endwhile; endif; ?>
        </div>

        <?php if ( ! empty( $features ) && is_array( $features ) ) : ?>
            <div class="pt-6 border-t border-[rgba(43,110,250,0.2)] space-y-4">
                <h3 class="font-heading font-semibold text-base text-[#FFFFFF]">Included Enterprise Modules:</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <?php foreach ( $features as $feat ) : ?>
                        <div class="flex items-center gap-2.5 text-xs sm:text-sm text-[#c4d7f5]">
                            <svg class="w-4 h-4 text-[#2B6EFA] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                            <span><?php echo esc_html( $feat['feature_text'] ); ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        <?php endif; ?>
    </div>

    <!-- 3-Tier Enterprise Pricing Grid -->
    <div class="mb-20 space-y-10">
        <div class="text-center max-w-2xl mx-auto space-y-3">
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-[#FFFFFF] tracking-tight">
                Transparent Enterprise Licensing
            </h2>
            <p class="text-sm text-[#8B9AB5]">
                Full platform access, automatic continuous upgrades, and 100% money-back deployment satisfaction.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            <!-- 1. Starter Tier -->
            <div class="bg-[#0A1628] rounded-3xl p-8 flex flex-col justify-between border border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA] shadow-sm hover:shadow-lg transition-all">
                <div class="space-y-6">
                    <div>
                        <span class="text-xs font-mono uppercase text-[#2B6EFA] font-bold tracking-wider">STARTER TIER</span>
                        <div class="flex items-baseline gap-1 mt-3">
                            <span class="font-heading font-extrabold text-4xl text-[#FFFFFF]"><?php echo esc_html( $starter_p ); ?></span>
                        </div>
                        <div class="text-xs text-[#8B9AB5] mt-1"><?php echo esc_html( $starter_b ); ?></div>
                    </div>

                    <div class="pt-6 border-t border-[rgba(43,110,250,0.2)] space-y-3">
                        <?php
                        $s_lines = explode( "\n", trim( $starter_f ) );
                        foreach ( $s_lines as $line ) : if ( trim( $line ) ) :
                        ?>
                            <div class="flex items-start gap-2.5 text-xs text-[#4B5563]">
                                <svg class="w-4 h-4 text-[#2B6EFA] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                                <span><?php echo esc_html( trim( $line ) ); ?></span>
                            </div>
                        <?php endif; endforeach; ?>
                    </div>
                </div>

                <div class="pt-8">
                    <a href="<?php echo esc_url( home_url( '/contact?plan=starter&product=' . urlencode( get_the_title() ) ) ); ?>" class="w-full py-3 rounded-xl text-xs font-bold text-center text-[#FFFFFF] bg-[#070E24] hover:bg-[rgba(43,110,250,0.2)] border border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA] transition-all block">
                        Select Starter Plan
                    </a>
                </div>
            </div>

            <!-- 2. Pro Tier (Highlighted) -->
            <div class="bg-[#0A1628] rounded-3xl p-8 sm:p-9 flex flex-col justify-between border-2 border-[#2B6EFA] shadow-xl relative transform lg:-translate-y-2">
                <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#1c1400] font-semibold bg-[#2B6EFA] shadow-md">
                    Most Popular &bull; High Scale
                </div>

                <div class="space-y-6 pt-2">
                    <div>
                        <span class="text-xs font-mono uppercase text-[#2B6EFA] font-bold tracking-wider">ENTERPRISE PRO</span>
                        <div class="flex items-baseline gap-1 mt-3">
                            <span class="font-heading font-extrabold text-4xl text-[#FFFFFF]"><?php echo esc_html( $pro_p ); ?></span>
                        </div>
                        <div class="text-xs text-[#8B9AB5] mt-1"><?php echo esc_html( $pro_b ); ?></div>
                    </div>

                    <div class="pt-6 border-t border-[rgba(43,110,250,0.2)] space-y-3">
                        <?php
                        $p_lines = explode( "\n", trim( $pro_f ) );
                        foreach ( $p_lines as $line ) : if ( trim( $line ) ) :
                        ?>
                            <div class="flex items-start gap-2.5 text-xs text-[#1F2937] font-medium">
                                <svg class="w-4 h-4 text-[#2B6EFA] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                                <span><?php echo esc_html( trim( $line ) ); ?></span>
                            </div>
                        <?php endif; endforeach; ?>
                    </div>
                </div>

                <div class="pt-8">
                    <a href="<?php echo esc_url( home_url( '/contact?plan=pro&product=' . urlencode( get_the_title() ) ) ); ?>" class="w-full py-3.5 rounded-xl text-xs font-bold text-center text-[#1c1400] font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] shadow-md transition-all block">
                        Deploy Pro Platform
                    </a>
                </div>
            </div>

            <!-- 3. Enterprise Custom Tier -->
            <div class="bg-[#0A1628] rounded-3xl p-8 flex flex-col justify-between border border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA] shadow-sm hover:shadow-lg transition-all">
                <div class="space-y-6">
                    <div>
                        <span class="text-xs font-mono uppercase text-[#2B6EFA] font-bold tracking-wider">CUSTOM DEPLOYMENT</span>
                        <div class="flex items-baseline gap-1 mt-3">
                            <span class="font-heading font-extrabold text-4xl text-[#FFFFFF]"><?php echo esc_html( $ent_p ); ?></span>
                        </div>
                        <div class="text-xs text-[#8B9AB5] mt-1"><?php echo esc_html( $ent_b ); ?></div>
                    </div>

                    <div class="pt-6 border-t border-[rgba(43,110,250,0.2)] space-y-3">
                        <?php
                        $e_lines = explode( "\n", trim( $ent_f ) );
                        foreach ( $e_lines as $line ) : if ( trim( $line ) ) :
                        ?>
                            <div class="flex items-start gap-2.5 text-xs text-[#4B5563]">
                                <svg class="w-4 h-4 text-[#2B6EFA] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                                <span><?php echo esc_html( trim( $line ) ); ?></span>
                            </div>
                        <?php endif; endforeach; ?>
                    </div>
                </div>

                <div class="pt-8">
                    <a href="<?php echo esc_url( home_url( '/contact?plan=enterprise&product=' . urlencode( get_the_title() ) ) ); ?>" class="w-full py-3 rounded-xl text-xs font-bold text-center text-[#FFFFFF] bg-[#070E24] hover:bg-[rgba(43,110,250,0.2)] border border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA] transition-all block">
                        Request Enterprise Architecture
                    </a>
                </div>
            </div>

        </div>
    </div>

    <!-- Product FAQs if available -->
    <?php if ( ! empty( $faqs ) && is_array( $faqs ) ) : ?>
        <div class="bg-[#0A1628] rounded-3xl p-8 sm:p-12 border border-[rgba(43,110,250,0.2)] shadow-sm mb-16 space-y-6">
            <h2 class="font-heading font-bold text-2xl text-[#FFFFFF]">Frequently Answered Questions</h2>
            <div class="space-y-4">
                <?php foreach ( $faqs as $faq ) : ?>
                    <details class="group rounded-2xl bg-[#070E24] border border-[rgba(43,110,250,0.2)] p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                        <summary class="flex items-center justify-between font-semibold text-sm text-[#FFFFFF]">
                            <span><?php echo esc_html( $faq['question'] ); ?></span>
                            <span class="ml-4 shrink-0 transition-transform group-open:rotate-180 text-[#2B6EFA]">&darr;</span>
                        </summary>
                        <p class="mt-3 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                            <?php echo esc_html( $faq['answer'] ); ?>
                        </p>
                    </details>
                <?php endforeach; ?>
            </div>
        </div>
    <?php endif; ?>

    <!-- Bottom CTA Banner -->
    <?php get_template_part( 'template-parts/cta-banner' ); ?>
</main>

<?php
get_footer();
