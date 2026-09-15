<?php
/**
 * The template for displaying single SaaS products
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

<main id="primary" class="site-main min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <!-- Breadcrumbs -->
    <nav class="flex items-center gap-2 text-xs font-mono text-[#8B9AB5] mb-8" aria-label="Breadcrumb">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:text-[#00D4FF]">Home</a>
        <span>/</span>
        <a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="hover:text-[#00D4FF]">Products</a>
        <span>/</span>
        <span class="text-white"><?php the_title(); ?></span>
    </nav>

    <!-- Product Header -->
    <div class="mb-16 space-y-6">
        <div class="flex flex-wrap items-center gap-3">
            <span class="px-3.5 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF]">
                <?php echo esc_html( $badge ); ?>
            </span>
            <span class="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-semibold">
                <?php echo esc_html( $metric ); ?>
            </span>
        </div>
        <h1 class="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            <?php the_title(); ?>
        </h1>
        <p class="text-lg sm:text-xl text-[#8B9AB5] font-normal max-w-3xl leading-relaxed">
            <?php echo esc_html( $tagline ); ?>
        </p>
    </div>

    <!-- Description & Architecture Highlights -->
    <div class="glass-panel rounded-3xl p-8 sm:p-12 border border-[rgba(43,110,250,0.3)] mb-20 space-y-6">
        <h2 class="font-heading font-bold text-2xl text-white">Platform Scope & Core Architecture</h2>
        <div class="text-sm sm:text-base text-[#8B9AB5] leading-relaxed space-y-4">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                <?php the_content(); ?>
            <?php endwhile; endif; ?>
        </div>

        <?php if ( ! empty( $features ) && is_array( $features ) ) : ?>
            <div class="pt-6 border-t border-white/10 space-y-4">
                <h3 class="font-heading font-semibold text-lg text-white">Included Sovereign Features:</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <?php foreach ( $features as $feat ) : ?>
                        <div class="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                            <svg class="w-4 h-4 text-[#00D4FF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                            <span><?php echo esc_html( $feat['feature_text'] ); ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        <?php endif; ?>
    </div>

    <!-- 3-Tier Enterprise Pricing Grid -->
    <div class="mb-24 space-y-12">
        <div class="text-center max-w-2xl mx-auto space-y-3">
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Transparent Enterprise Licensing
            </h2>
            <p class="text-sm text-[#8B9AB5]">
                Full platform access, automatic security patches, and 100% money-back deployment satisfaction.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            <!-- 1. Starter Tier -->
            <div class="glass-card rounded-3xl p-8 flex flex-col justify-between border border-white/10 hover:border-[#00D4FF]/40 transition-all">
                <div class="space-y-6">
                    <div>
                        <span class="text-xs font-mono uppercase text-[#00D4FF] font-semibold">STARTER TIER</span>
                        <div class="flex items-baseline gap-1 mt-3">
                            <span class="font-heading font-extrabold text-4xl text-white"><?php echo esc_html( $starter_p ); ?></span>
                        </div>
                        <div class="text-xs text-[#8B9AB5] mt-1"><?php echo esc_html( $starter_b ); ?></div>
                    </div>

                    <div class="pt-6 border-t border-white/10 space-y-3">
                        <?php
                        $s_lines = explode( "\n", trim( $starter_f ) );
                        foreach ( $s_lines as $line ) : if ( trim( $line ) ) :
                        ?>
                            <div class="flex items-start gap-2.5 text-xs text-white/80">
                                <svg class="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                                <span><?php echo esc_html( trim( $line ) ); ?></span>
                            </div>
                        <?php endif; endforeach; ?>
                    </div>
                </div>

                <div class="pt-8">
                    <a href="<?php echo esc_url( home_url( '/contact?plan=starter&product=' . urlencode( get_the_title() ) ) ); ?>" class="w-full py-3 rounded-xl text-xs font-bold text-center text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all block">
                        Select Starter Plan
                    </a>
                </div>
            </div>

            <!-- 2. Pro Tier (Highlighted) -->
            <div class="glass-panel rounded-3xl p-8 sm:p-9 flex flex-col justify-between border-2 border-[#00D4FF] shadow-[0_0_40px_rgba(0,212,255,0.25)] relative bg-[#0A1628]/95 transform lg:-translate-y-2">
                <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#00D4FF] to-white shadow-md">
                    Most Popular &bull; High Scale
                </div>

                <div class="space-y-6 pt-2">
                    <div>
                        <span class="text-xs font-mono uppercase text-[#00D4FF] font-semibold">ENTERPRISE PRO</span>
                        <div class="flex items-baseline gap-1 mt-3">
                            <span class="font-heading font-extrabold text-4xl text-white"><?php echo esc_html( $pro_p ); ?></span>
                        </div>
                        <div class="text-xs text-[#8B9AB5] mt-1"><?php echo esc_html( $pro_b ); ?></div>
                    </div>

                    <div class="pt-6 border-t border-white/10 space-y-3">
                        <?php
                        $p_lines = explode( "\n", trim( $pro_f ) );
                        foreach ( $p_lines as $line ) : if ( trim( $line ) ) :
                        ?>
                            <div class="flex items-start gap-2.5 text-xs text-white">
                                <svg class="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                                <span><?php echo esc_html( trim( $line ) ); ?></span>
                            </div>
                        <?php endif; endforeach; ?>
                    </div>
                </div>

                <div class="pt-8">
                    <a href="<?php echo esc_url( home_url( '/contact?plan=pro&product=' . urlencode( get_the_title() ) ) ); ?>" class="w-full py-3.5 rounded-xl text-xs font-bold text-center text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] transition-all block">
                        Deploy Pro Platform
                    </a>
                </div>
            </div>

            <!-- 3. Enterprise Custom Tier -->
            <div class="glass-card rounded-3xl p-8 flex flex-col justify-between border border-white/10 hover:border-[#00D4FF]/40 transition-all">
                <div class="space-y-6">
                    <div>
                        <span class="text-xs font-mono uppercase text-[#00D4FF] font-semibold">CUSTOM DEPLOYMENT</span>
                        <div class="flex items-baseline gap-1 mt-3">
                            <span class="font-heading font-extrabold text-4xl text-white"><?php echo esc_html( $ent_p ); ?></span>
                        </div>
                        <div class="text-xs text-[#8B9AB5] mt-1"><?php echo esc_html( $ent_b ); ?></div>
                    </div>

                    <div class="pt-6 border-t border-white/10 space-y-3">
                        <?php
                        $e_lines = explode( "\n", trim( $ent_f ) );
                        foreach ( $e_lines as $line ) : if ( trim( $line ) ) :
                        ?>
                            <div class="flex items-start gap-2.5 text-xs text-white/80">
                                <svg class="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                                <span><?php echo esc_html( trim( $line ) ); ?></span>
                            </div>
                        <?php endif; endforeach; ?>
                    </div>
                </div>

                <div class="pt-8">
                    <a href="<?php echo esc_url( home_url( '/contact?plan=enterprise&product=' . urlencode( get_the_title() ) ) ); ?>" class="w-full py-3 rounded-xl text-xs font-bold text-center text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all block">
                        Request Enterprise Architecture
                    </a>
                </div>
            </div>

        </div>
    </div>

    <!-- Product FAQs if available -->
    <?php if ( ! empty( $faqs ) && is_array( $faqs ) ) : ?>
        <div class="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 mb-20 space-y-6">
            <h2 class="font-heading font-bold text-2xl text-white">Frequently Answered Questions</h2>
            <div class="space-y-4">
                <?php foreach ( $faqs as $faq ) : ?>
                    <details class="group rounded-2xl bg-white/5 border border-white/10 p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                        <summary class="flex items-center justify-between font-semibold text-sm text-white">
                            <span><?php echo esc_html( $faq['question'] ); ?></span>
                            <span class="ml-4 shrink-0 transition-transform group-open:rotate-180 text-[#00D4FF]">&darr;</span>
                        </summary>
                        <p class="mt-3 text-xs sm:text-sm text-[#8B9AB5] leading-relaxed">
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
