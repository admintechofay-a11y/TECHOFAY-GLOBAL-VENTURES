<?php
/**
 * Template part: Services Grid (Verticals Overview)
 * Exactly matches client/src/components/home/VerticalsOverview.jsx 1-to-1
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$services = array(
    array(
        'id'        => 'cybersecurity',
        'title'     => 'Cybersecurity & Zero Trust',
        'shortDesc' => 'Military-grade defense architectures, 24/7 SOC telemetry, automated penetration testing, and regulatory compliance.',
        'badge'     => 'Enterprise Defense',
        'stat'      => '4.8M+ Threats Blocked',
        'icon'      => '<svg class="w-6 h-6 text-[#2B6EFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
        'subItems'  => array( 'SOC-as-a-Service', 'Zero-Trust Architecture', 'Penetration Testing' ),
        'tools'     => array( 'CrowdStrike', 'Splunk', 'Nessus', 'Wazuh' ),
    ),
    array(
        'id'        => 'development',
        'title'     => 'Development & QA Testing',
        'shortDesc' => 'Custom full-stack web applications, cross-platform mobile apps, automated QA pipelines, and high-velocity microservices.',
        'badge'     => 'High-Velocity Dev',
        'stat'      => '99.98% Clean QA',
        'icon'      => '<svg class="w-6 h-6 text-[#2B6EFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>',
        'subItems'  => array( 'Custom Web Applications', 'Mobile App Development', 'Automated QA Testing' ),
        'tools'     => array( 'React', 'Node.js', 'Go', 'Kubernetes' ),
    ),
    array(
        'id'        => 'ai-automation',
        'title'     => 'AI & Intelligent Automation',
        'shortDesc' => 'Domain-specific enterprise LLM fine-tuning, deterministic RAG pipelines, autonomous workflows, and predictive analytics.',
        'badge'     => 'Autonomous AI',
        'stat'      => '120k+ Tasks/Day',
        'icon'      => '<svg class="w-6 h-6 text-[#2B6EFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
        'subItems'  => array( 'Custom LLM Engineering', 'Autonomous AI Agents', 'Enterprise RAG Systems' ),
        'tools'     => array( 'PyTorch', 'OpenAI', 'LangChain', 'Pinecone' ),
    ),
    array(
        'id'        => 'saas-products',
        'title'     => 'Techofay Software Products',
        'shortDesc' => 'Turnkey enterprise SaaS platforms for Schools, Hospitals, Hotels, Logistics Fleets, and Core Multi-Entity ERP operations.',
        'badge'     => 'Turnkey SaaS Suites',
        'stat'      => '5 Flagship Platforms',
        'icon'      => '<svg class="w-6 h-6 text-[#2B6EFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>',
        'subItems'  => array( 'School ERP System', 'Hospital Management (HMS)', 'Hotel Management (PMS)' ),
        'tools'     => array( 'Enterprise ERP', 'Multi-tenant', 'Zero-Downtime', 'Cloud Native' ),
    ),
    array(
        'id'        => 'marketing',
        'title'     => 'Growth & Marketing',
        'shortDesc' => 'Revenue-focused international SEO, paid acquisition campaigns, corporate branding identity, and Smart NFC business cards.',
        'badge'     => '100% Guaranteed ROI',
        'stat'      => '3.8x Client Pipeline',
        'icon'      => '<svg class="w-6 h-6 text-[#2B6EFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>',
        'subItems'  => array( 'SEO & Organic Growth', 'Digital Marketing & Ads', 'Smart NFC Business Cards' ),
        'tools'     => array( 'Global SEO', 'Google Ads', 'NFC Tech', 'Brand Strategy' ),
    ),
    array(
        'id'        => 'infrastructure',
        'title'     => 'Cloud & Infrastructure',
        'shortDesc' => 'Multi-cloud architectures across AWS and GCP, Terraform automation, container orchestration, and disaster recovery.',
        'badge'     => 'Cloud Sovereignty',
        'stat'      => '99.999% SLA Uptime',
        'icon'      => '<svg class="w-6 h-6 text-[#2B6EFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>',
        'subItems'  => array( 'AWS & GCP Architectures', 'Kubernetes Orchestration', 'Terraform Automation' ),
        'tools'     => array( 'AWS', 'GCP', 'Terraform', 'Docker' ),
    ),
);
?>

<section class="relative py-24 sm:py-32 bg-[#0A1628] overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(43,110,250,0.2)] border border-[rgba(0,212,255,0.3)] text-[#1E50C8] text-xs font-semibold uppercase tracking-wider mb-4">
                <svg class="w-3.5 h-3.5 text-[#2B6EFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                Core Enterprise Verticals
            </div>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-[#FFFFFF] tracking-tight mb-4">
                End-to-End Technology <span class="text-[#2B6EFA]">Capabilities</span>
            </h2>
            <p class="text-sm sm:text-base text-[#c4d7f5] leading-relaxed">
                From high-assurance cybersecurity and custom AI development to high-conversion digital marketing, branding, smart NFC cards, and scalable cloud applications — we deliver full-spectrum digital dominance.
            </p>
        </div>

        <!-- 6 Service Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <?php foreach ( $services as $vertical ) : ?>
                <div class="group relative bg-[#0A1628] border border-[rgba(43,110,250,0.2)] rounded-[12px] p-7 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#2B6EFA] hover:shadow-[0_8px_24px_rgba(22,163,74,0.08)]">
                    <!-- 3px Solid Forest Green Top Accent Bar -->
                    <div class="absolute top-0 left-0 right-0 h-[3px] bg-[#2B6EFA]"></div>

                    <div>
                        <!-- Top Badge & Icon -->
                        <div class="flex items-center justify-between mb-6">
                            <!-- Icon container: rgba(43,110,250,0.2) bg circle, #2B6EFA icon -->
                            <div class="w-12 h-12 rounded-full bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA] group-hover:scale-105 transition-transform duration-300">
                                <?php echo $vertical['icon']; ?>
                            </div>
                            <span class="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-md bg-[#070E24] border border-[rgba(43,110,250,0.2)] text-[#c4d7f5]">
                                <?php echo esc_html( $vertical['badge'] ); ?>
                            </span>
                        </div>

                        <!-- Title -->
                        <h3 class="font-heading font-bold text-lg sm:text-xl text-[#FFFFFF] mb-3 group-hover:text-[#2B6EFA] transition-colors">
                            <a href="<?php echo esc_url( home_url( '/services' ) ); ?>"><?php echo esc_html( $vertical['title'] ); ?></a>
                        </h3>

                        <!-- 2-line Description -->
                        <p class="text-xs sm:text-sm text-[#c4d7f5] leading-relaxed line-clamp-2 mb-6">
                            <?php echo esc_html( $vertical['shortDesc'] ); ?>
                        </p>

                        <!-- Key Services List -->
                        <div class="space-y-2 mb-6">
                            <?php foreach ( $vertical['subItems'] as $item ) : ?>
                                <div class="flex items-center gap-2.5 text-xs text-[#c4d7f5]">
                                    <span class="w-1.5 h-1.5 rounded-full bg-[#2B6EFA] shrink-0"></span>
                                    <span class="truncate"><?php echo esc_html( $item ); ?></span>
                                </div>
                            <?php endforeach; ?>
                        </div>

                        <!-- Tools snippet preview -->
                        <div class="flex flex-wrap gap-1.5 mb-6 pt-3 border-t border-[rgba(43,110,250,0.2)]">
                            <?php foreach ( array_slice( $vertical['tools'], 0, 3 ) as $tool ) : ?>
                                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#070E24] text-[#8B9AB5] border border-[rgba(43,110,250,0.2)]">
                                    <?php echo esc_html( $tool ); ?>
                                </span>
                            <?php endforeach; ?>
                            <?php if ( count( $vertical['tools'] ) > 3 ) : ?>
                                <span class="text-[10px] font-mono px-1.5 py-0.5 text-[#9CA3AF]">
                                    +<?php echo count( $vertical['tools'] ) - 3; ?> more
                                </span>
                            <?php endif; ?>
                        </div>
                    </div>

                    <!-- Bottom CTA Link -->
                    <div class="pt-4 border-t border-[rgba(43,110,250,0.2)] flex items-center justify-between">
                        <a
                            href="<?php echo esc_url( home_url( '/services' ) ); ?>"
                            class="inline-flex items-center gap-2 text-xs font-semibold text-[#2B6EFA] hover:text-[#1E50C8] transition-colors group/link"
                        >
                            <span>Learn Detailed Scope</span>
                            <svg class="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                        <span class="text-[11px] font-mono font-semibold text-[#2B6EFA]">
                            <?php echo esc_html( $vertical['stat'] ); ?>
                        </span>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <!-- Bottom Explorer Action -->
        <div class="mt-14 text-center">
            <a
                href="<?php echo esc_url( home_url( '/services' ) ); ?>"
                class="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm text-[#2B6EFA] bg-[#0A1628] border border-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)] transition-colors shadow-xs"
            >
                <span>Explore All 40+ Growth Capabilities</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
        </div>
    </div>
</section>
