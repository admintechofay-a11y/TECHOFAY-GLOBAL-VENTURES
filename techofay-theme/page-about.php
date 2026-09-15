<?php
/**
 * Template Name: About Us Page
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();

$team_query = new WP_Query( array(
    'post_type'      => 'team_member',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
) );

$fallback_team = array(
    array(
        'name' => 'Aniket Maurya',
        'role' => 'Founder & Chief Solutions Architect',
        'dept' => 'Executive Leadership',
        'bio'  => 'Over 12 years directing mission-critical enterprise engineering, cloud modernization, and zero-trust perimeter architectures across APAC and EMEA.',
    ),
    array(
        'name' => 'Dr. Priya Sundaram',
        'role' => 'Vice President of Applied AI & Analytics',
        'dept' => 'AI Research & Ops',
        'bio'  => 'Specializing in sovereign enterprise LLMs, real-time telemetry processing, and neural network optimization for large-scale logistics.',
    ),
    array(
        'name' => 'Alasdair MacLeod',
        'role' => 'Managing Director, UK & European Operations',
        'dept' => 'Global Governance',
        'bio'  => 'Spearheading regulatory posture, GDPR/ISO certifications, and enterprise client partnerships across the United Kingdom and Europe.',
    ),
);
?>

<main id="primary" class="site-main pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF]">
            <span>ABOUT TECHOFAY</span>
        </div>
        <h1 class="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Engineering Global Digital Sovereignty
        </h1>
        <p class="text-base text-[#8B9AB5] leading-relaxed">
            Founded on the conviction that enterprise software must be fast, unbreachable, and commercially deterministic.
        </p>
    </div>

    <!-- Mission & Vision Dual Card -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <div class="glass-panel rounded-3xl p-8 sm:p-10 border border-[rgba(43,110,250,0.3)] space-y-4">
            <span class="text-xs font-mono uppercase text-[#00D4FF] font-semibold">OUR MISSION</span>
            <h2 class="font-heading font-bold text-2xl text-white">Eliminating Enterprise Complexity</h2>
            <p class="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed">
                To replace fragile legacy software and disjointed IT vendors with resilient, unified architectures. We back our client acquisition pipelines with a 100% money-back guarantee, setting an unprecedented standard of commercial accountability.
            </p>
        </div>

        <div class="glass-panel rounded-3xl p-8 sm:p-10 border border-[rgba(43,110,250,0.3)] space-y-4">
            <span class="text-xs font-mono uppercase text-[#00D4FF] font-semibold">OUR VISION</span>
            <h2 class="font-heading font-bold text-2xl text-white">Sovereign Enterprise Infrastructure</h2>
            <p class="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed">
                A world where forward-thinking organizations maintain total control over their data perimeters, cloud spend, and autonomous AI agents without platform lock-in or multi-million dollar vendor bloat.
            </p>
        </div>
    </div>

    <!-- Global Presence & Branch Hubs -->
    <div class="glass-panel rounded-3xl p-8 sm:p-12 border border-[rgba(43,110,250,0.3)] mb-24 space-y-8">
        <div>
            <span class="text-xs font-mono uppercase text-[#00D4FF] font-semibold">GLOBAL DEPLOYMENT FOOTPRINT</span>
            <h2 class="font-heading font-bold text-2xl sm:text-3xl text-white mt-1">Five Decentralized Strategic Hubs</h2>
            <p class="text-xs sm:text-sm text-[#8B9AB5] mt-2 max-w-2xl">
                Our cross-border engineering teams deliver round-the-clock software development, emergency threat mitigation, and SLA enforcement.
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="p-6 rounded-2xl bg-white/5 border border-[#00D4FF]/40 border-l-4 border-l-[#00D4FF]">
                <span class="text-[10px] font-mono text-[#00D4FF] uppercase block mb-1">GLOBAL HEADQUARTERS</span>
                <h3 class="font-heading font-bold text-lg text-white">Vadodara, Gujarat</h3>
                <p class="text-xs text-[#8B9AB5] mt-2">Executive operations, global delivery command center, core engineering labs.</p>
            </div>
            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 border-l-4 border-l-[#2B6EFA]">
                <span class="text-[10px] font-mono text-[#2B6EFA] uppercase block mb-1">TECH CAPABILITY HUB</span>
                <h3 class="font-heading font-bold text-lg text-white">Bangalore (ETV Marathahalli)</h3>
                <p class="text-xs text-[#8B9AB5] mt-2">Silicon Valley of India — Advanced cloud orchestration, AI R&D, and SaaS development.</p>
            </div>
            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 border-l-4 border-l-[#2B6EFA]">
                <span class="text-[10px] font-mono text-[#2B6EFA] uppercase block mb-1">SOUTHERN BRANCH</span>
                <h3 class="font-heading font-bold text-lg text-white">Chennai, Tamil Nadu</h3>
                <p class="text-xs text-[#8B9AB5] mt-2">Enterprise client support, QA automated testing harnesses, telecom integrations.</p>
            </div>
            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 border-l-4 border-l-[#2B6EFA]">
                <span class="text-[10px] font-mono text-[#2B6EFA] uppercase block mb-1">NORTHERN REGIONAL HUB</span>
                <h3 class="font-heading font-bold text-lg text-white">Ganjdundwara, Uttar Pradesh</h3>
                <p class="text-xs text-[#8B9AB5] mt-2">Regional technical dispatch, public sector software deployments, infrastructure support.</p>
            </div>
            <div class="p-6 rounded-2xl bg-white/5 border border-[#00D4FF]/40 border-l-4 border-l-[#00D4FF]">
                <span class="text-[10px] font-mono text-[#00D4FF] uppercase block mb-1">EUROPEAN OPERATIONS</span>
                <h3 class="font-heading font-bold text-lg text-white">Edinburgh, Scotland (UK)</h3>
                <p class="text-xs text-[#8B9AB5] mt-2">UK & European enterprise governance, GDPR compliance, financial services consulting.</p>
            </div>
        </div>
    </div>

    <!-- Leadership Team -->
    <div class="mb-24 space-y-12">
        <div class="text-center max-w-2xl mx-auto space-y-3">
            <span class="text-xs font-mono uppercase text-[#00D4FF] font-semibold">LEADERSHIP SQUAD</span>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Solutions Architects & Engineering Directors
            </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <?php if ( $team_query->have_posts() ) : ?>
                <?php while ( $team_query->have_posts() ) : $team_query->the_post(); ?>
                    <?php
                    $role = get_field( 'member_role' ) ?: 'Executive Lead';
                    $dept = get_field( 'member_department' ) ?: 'Engineering';
                    ?>
                    <div class="glass-card rounded-2xl p-7 flex flex-col justify-between hover:border-[#00D4FF]/50 transition-all">
                        <div>
                            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2B6EFA] to-[#00D4FF] flex items-center justify-center font-heading font-bold text-xl text-white mb-6">
                                <?php echo esc_html( substr( get_the_title(), 0, 1 ) ); ?>
                            </div>
                            <span class="text-[10px] uppercase font-mono text-[#00D4FF] block mb-1"><?php echo esc_html( $dept ); ?></span>
                            <h3 class="font-heading font-bold text-xl text-white mb-1"><?php the_title(); ?></h3>
                            <div class="text-xs text-[#8B9AB5] font-medium mb-4"><?php echo esc_html( $role ); ?></div>
                            <p class="text-xs text-[#8B9AB5] leading-relaxed line-clamp-4">
                                <?php echo get_the_content(); ?>
                            </p>
                        </div>
                    </div>
                <?php endwhile; wp_reset_postdata(); ?>
            <?php else : ?>
                <?php foreach ( $fallback_team as $member ) : ?>
                    <div class="glass-card rounded-2xl p-7 flex flex-col justify-between hover:border-[#00D4FF]/50 transition-all">
                        <div>
                            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2B6EFA] to-[#00D4FF] flex items-center justify-center font-heading font-bold text-xl text-white mb-6">
                                <?php echo esc_html( substr( $member['name'], 0, 1 ) ); ?>
                            </div>
                            <span class="text-[10px] uppercase font-mono text-[#00D4FF] block mb-1"><?php echo esc_html( $member['dept'] ); ?></span>
                            <h3 class="font-heading font-bold text-xl text-white mb-1"><?php echo esc_html( $member['name'] ); ?></h3>
                            <div class="text-xs text-[#8B9AB5] font-medium mb-4"><?php echo esc_html( $member['role'] ); ?></div>
                            <p class="text-xs text-[#8B9AB5] leading-relaxed">
                                <?php echo esc_html( $member['bio'] ); ?>
                            </p>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>

    <!-- CTA Section -->
    <?php get_template_part( 'template-parts/cta-banner' ); ?>
</main>

<?php
get_footer();
