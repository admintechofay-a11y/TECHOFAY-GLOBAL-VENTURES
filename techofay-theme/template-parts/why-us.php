<?php
/**
 * Template part: Why Choose Us Section
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$why_heading = get_field( 'why_heading' ) ?: 'Why Forward-Thinking Enterprises Partner with TECHOFAY';
$why_subtext = get_field( 'why_subtext' ) ?: 'We replace fragile legacy silos with resilient, sovereign, and scalable digital architectures.';
$why_features = get_field( 'why_features' );

$default_pillars = array(
    array(
        'title' => '100% Money-Back Guarantee',
        'desc'  => 'We back our commercial outcomes with an ironclad guarantee: if your digital acquisition pipeline does not produce verified clients, we issue a 100% refund.',
        'badge' => 'Risk Reversal',
        'icon'  => '<svg class="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    ),
    array(
        'title' => 'Military-Grade Sovereign Security',
        'desc'  => 'Zero Trust architectures, continuous automated vulnerability scans, 24/7 SIEM monitoring, and strict ISO 27001 / SOC2 Type II compliance.',
        'badge' => 'Sovereign Defense',
        'icon'  => '<svg class="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    ),
    array(
        'title' => '99.98% High-Assurance Uptime SLA',
        'desc'  => 'Redundant multi-region failover, containerized Kubernetes microservices, automated recovery scripts, and guaranteed 15-minute emergency response.',
        'badge' => 'High Concurrency',
        'icon'  => '<svg class="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
    ),
    array(
        'title' => 'Global Decentralized Engineering Hubs',
        'desc'  => 'Cross-border engineering squads spanning Vadodara (Global HQ), Bangalore (ETV Marathahalli), Chennai, Ganjdundwara, and Edinburgh (UK) delivering 24/7 agile cycles.',
        'badge' => 'Global Footprint',
        'icon'  => '<svg class="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    ),
);
?>

<section class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
    <div class="glass-panel rounded-3xl p-8 sm:p-12 lg:p-16 border border-[rgba(43,110,250,0.3)] bg-[#0A1628]/80 backdrop-blur-2xl relative overflow-hidden">
        <!-- Ambient background accent -->
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-3xl mb-16 space-y-4">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF]">
                <span>DIFFERENTIATION</span>
            </div>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                <?php echo esc_html( $why_heading ); ?>
            </h2>
            <p class="text-sm sm:text-base text-[#8B9AB5] leading-relaxed">
                <?php echo esc_html( $why_subtext ); ?>
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <?php if ( ! empty( $why_features ) && is_array( $why_features ) ) : ?>
                <?php foreach ( $why_features as $item ) : ?>
                    <div class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D4FF]/40 border-l-4 border-l-[#00D4FF] transition-all">
                        <h3 class="font-heading font-bold text-lg text-white mb-2"><?php echo esc_html( $item['title'] ); ?></h3>
                        <p class="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed"><?php echo esc_html( $item['description'] ); ?></p>
                    </div>
                <?php endforeach; ?>
            <?php else : ?>
                <?php foreach ( $default_pillars as $pillar ) : ?>
                    <div class="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00D4FF]/50 border-l-4 border-l-[#00D4FF] transition-all group hover:bg-white/[0.06]">
                        <div class="flex items-center justify-between mb-4">
                            <div class="w-12 h-12 rounded-xl bg-[#2B6EFA]/10 border border-[#2B6EFA]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <?php echo $pillar['icon']; ?>
                            </div>
                            <span class="text-[10px] uppercase tracking-wider font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#00D4FF]">
                                <?php echo esc_html( $pillar['badge'] ); ?>
                            </span>
                        </div>
                        <h3 class="font-heading font-bold text-lg text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                            <?php echo esc_html( $pillar['title'] ); ?>
                        </h3>
                        <p class="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed">
                            <?php echo esc_html( $pillar['desc'] ); ?>
                        </p>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>
</section>
