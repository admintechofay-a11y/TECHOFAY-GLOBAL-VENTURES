<?php
/**
 * Template part: Process Timeline
 * Exactly matches client/src/components/home/ProcessTimeline.jsx 1-to-1
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$steps = array(
    array(
        'step'         => '01',
        'title'        => 'Discovery',
        'subtitle'     => 'Technical Audit & Growth Strategy',
        'deliverables' => array( 'Client persona & market audit', 'Stakeholder alignment', 'Technical architecture review', 'Feasibility & ROI roadmap' ),
        'duration'     => 'Week 1 - 2',
        'focus'        => 'Deep exploration of existing systems, lead generation bottlenecks, and strategic enterprise objectives.',
        'icon'         => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>',
    ),
    array(
        'step'         => '02',
        'title'        => 'Strategy',
        'subtitle'     => 'Architectural Blueprint & Growth Plan',
        'deliverables' => array( 'System design document', 'Branding & UI/UX wireframes', 'Milestone Gantt timeline', 'Guaranteed milestone KPIs' ),
        'duration'     => 'Week 2 - 3',
        'focus'        => 'Crafting the definitive technical and digital roadmap, selecting modern tooling, and setting client growth targets.',
        'icon'         => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>',
    ),
    array(
        'step'         => '03',
        'title'        => 'Build',
        'subtitle'     => 'Agile High-Velocity Engineering',
        'deliverables' => array( 'Bi-weekly staged releases', 'Clean decoupled code', 'Component design system', 'CI/CD pipeline automation' ),
        'duration'     => 'Sprints (2-6 Weeks)',
        'focus'        => 'Rapid execution using modern stacks, automated test suites, and transparent sprint reviews.',
        'icon'         => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>',
    ),
    array(
        'step'         => '04',
        'title'        => 'Test',
        'subtitle'     => 'Automated QA & Security Hardening',
        'deliverables' => array( 'Cross-device responsiveness', 'Conversion funnel load testing', 'Penetration testing sign-off', 'Zero-defect certification' ),
        'duration'     => 'Continuous CI/CD',
        'focus'        => 'Rigorous regression testing, security scanning, and user journey optimization prior to launch.',
        'icon'         => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    ),
    array(
        'step'         => '05',
        'title'        => 'Deploy',
        'subtitle'     => 'Zero-Downtime Launch & Campaign Kickoff',
        'deliverables' => array( 'Cloud ingress deployment', 'Campaign tracking telemetry', 'Domain & SEO configuration', 'Comprehensive documentation' ),
        'duration'     => 'Scheduled Window',
        'focus'        => 'Executing smooth deployments backed by real-time analytics and immediate campaign onboarding.',
        'icon'         => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
    ),
    array(
        'step'         => '06',
        'title'        => 'Scale',
        'subtitle'     => 'Continuous Telemetry & Compounding Growth',
        'deliverables' => array( '24/7 proactive monitoring', 'Performance marketing tuning', 'Quarterly roadmap reviews', 'Conversion rate optimization' ),
        'duration'     => 'Ongoing Partnership',
        'focus'        => 'Optimizing capacity, fine-tuning marketing and AI models, and guaranteeing client growth milestones.',
        'icon'         => '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>',
    ),
);
?>

<section class="relative py-24 sm:py-32 bg-[#1A1A1A] overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(245,158,11,0.15)] border border-[rgba(245,158,11,0.25)] text-[#B45309] text-xs font-semibold uppercase tracking-wider mb-4">
                Proven Delivery Methodology
            </div>
            <h2 class="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#FFFBEB] tracking-tight mb-4">
                How We <span class="text-[#F59E0B]">Work & Deliver</span>
            </h2>
            <p class="text-sm sm:text-base text-[#D97706]">
                A disciplined, six-stage lifecycle engineered to take projects from high-level vision to bulletproof, globally scalable production systems.
            </p>
        </div>

        <!-- Horizontal Process Steps Bar -->
        <div class="relative mb-10">
            <!-- Background Connecting Track -->
            <div class="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-[#E5E7EB] -translate-y-1/2 pointer-events-none z-0">
                <div id="timeline-progress-bar" class="h-full bg-[#F59E0B] transition-all duration-500 w-0"></div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
                <?php foreach ( $steps as $idx => $s ) : ?>
                    <button
                        type="button"
                        class="timeline-step-tab text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between cursor-pointer hover:scale-[1.02] <?php echo $idx === 0 ? 'bg-[rgba(245,158,11,0.06)] border-[#F59E0B] shadow-[0_4px_12px_rgba(22,163,74,0.12)]' : 'bg-[#1A1A1A] border-[rgba(245,158,11,0.15)] hover:border-[rgba(245,158,11,0.25)]'; ?>"
                        data-step-index="<?php echo $idx; ?>"
                    >
                        <div class="flex items-center justify-between w-full mb-3">
                            <span class="step-label font-mono font-bold text-xs flex items-center gap-1.5 <?php echo $idx === 0 ? 'text-[#F59E0B]' : 'text-[#D97706]'; ?>">
                                <?php if ( $idx === 0 ) : ?><span class="ping-dot w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-ping"></span><?php endif; ?>
                                STEP <?php echo esc_html( $s['step'] ); ?>
                            </span>
                            <span class="step-icon transition-transform <?php echo $idx === 0 ? 'text-[#F59E0B] scale-110' : 'text-[#D97706]'; ?>">
                                <?php echo $s['icon']; ?>
                            </span>
                        </div>
                        <div>
                            <div class="step-title font-heading font-bold text-sm <?php echo $idx === 0 ? 'text-[#FFFBEB]' : 'text-[#FDE68A]'; ?>">
                                <?php echo esc_html( $s['title'] ); ?>
                            </div>
                            <div class="text-[10px] text-[#D97706] truncate mt-0.5">
                                <?php echo esc_html( $s['duration'] ); ?>
                            </div>
                        </div>
                    </button>
                <?php endforeach; ?>
            </div>
        </div>

        <!-- Active Step Detailed Card View -->
        <div class="bg-[#1A1A1A] rounded-2xl p-6 sm:p-10 border border-[rgba(245,158,11,0.15)] shadow-[0_8px_24px_rgba(22,163,74,0.06)]">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div class="lg:col-span-7 space-y-4">
                    <div class="inline-flex items-center gap-2 text-xs font-mono text-[#F59E0B] font-semibold">
                        <span id="detail-phase-header">PHASE 01 OF 06</span>
                        <span>&bull;</span>
                        <span id="detail-phase-duration">TIMELINE: Week 1 - 2</span>
                    </div>
                    <h3 class="font-heading font-bold text-2xl sm:text-3xl text-[#FFFBEB]">
                        <span id="detail-title">Discovery</span>: <span id="detail-subtitle" class="text-[#F59E0B]">Technical Audit & Growth Strategy</span>
                    </h3>
                    <p id="detail-focus" class="text-sm text-[#FDE68A] leading-relaxed">
                        Deep exploration of existing systems, lead generation bottlenecks, and strategic enterprise objectives.
                    </p>

                    <div class="pt-2">
                        <div class="text-xs font-heading font-semibold uppercase text-[#FFFBEB] tracking-wider mb-3">
                            Core Phase Deliverables:
                        </div>
                        <div id="detail-deliverables" class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            <div class="flex items-center gap-2 text-xs text-[#FDE68A]">
                                <svg class="w-3.5 h-3.5 text-[#F59E0B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                                <span>Client persona & market audit</span>
                            </div>
                            <div class="flex items-center gap-2 text-xs text-[#FDE68A]">
                                <svg class="w-3.5 h-3.5 text-[#F59E0B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                                <span>Stakeholder alignment</span>
                            </div>
                            <div class="flex items-center gap-2 text-xs text-[#FDE68A]">
                                <svg class="w-3.5 h-3.5 text-[#F59E0B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                                <span>Technical architecture review</span>
                            </div>
                            <div class="flex items-center gap-2 text-xs text-[#FDE68A]">
                                <svg class="w-3.5 h-3.5 text-[#F59E0B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                                <span>Feasibility & ROI roadmap</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-xl bg-[#161616] border border-[rgba(245,158,11,0.15)] text-center">
                    <div class="w-16 h-16 rounded-full bg-[rgba(245,158,11,0.15)] flex items-center justify-center text-[#F59E0B] mb-4">
                        <svg class="w-8 h-8 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <div class="font-heading font-bold text-lg text-[#FFFBEB] mb-1">
                        Zero Friction Handoff
                    </div>
                    <p class="text-xs text-[#D97706] max-w-xs">
                        Every stage generates code artifacts, verification logs, and documentation committed straight to your repositories.
                    </p>
                </div>

            </div>
        </div>

    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const stepsData = <?php echo json_encode( $steps ); ?>;
    const tabs = document.querySelectorAll('.timeline-step-tab');
    const progressBar = document.getElementById('timeline-progress-bar');
    const detailPhaseHeader = document.getElementById('detail-phase-header');
    const detailPhaseDuration = document.getElementById('detail-phase-duration');
    const detailTitle = document.getElementById('detail-title');
    const detailSubtitle = document.getElementById('detail-subtitle');
    const detailFocus = document.getElementById('detail-focus');
    const detailDeliverables = document.getElementById('detail-deliverables');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            const s = stepsData[index];
            if (!s) return;

            // Update Progress bar
            if (progressBar) {
                progressBar.style.width = ((index / (stepsData.length - 1)) * 100) + '%';
            }

            // Update Tab styles
            tabs.forEach((t, i) => {
                const label = t.querySelector('.step-label');
                const icon = t.querySelector('.step-icon');
                const title = t.querySelector('.step-title');
                const oldPing = t.querySelector('.ping-dot');
                if (oldPing) oldPing.remove();

                if (i === index) {
                    t.className = 'timeline-step-tab text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between cursor-pointer hover:scale-[1.02] bg-[rgba(245,158,11,0.06)] border-[#F59E0B] shadow-[0_4px_12px_rgba(22,163,74,0.12)]';
                    if (label) {
                        label.className = 'step-label font-mono font-bold text-xs flex items-center gap-1.5 text-[#F59E0B]';
                        label.insertAdjacentHTML('afterbegin', '<span class="ping-dot w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-ping"></span>');
                    }
                    if (icon) icon.className = 'step-icon transition-transform text-[#F59E0B] scale-110';
                    if (title) title.className = 'step-title font-heading font-bold text-sm text-[#FFFBEB]';
                } else if (i < index) {
                    t.className = 'timeline-step-tab text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between cursor-pointer hover:scale-[1.02] bg-[#161616] border-[rgba(245,158,11,0.25)]';
                    if (label) label.className = 'step-label font-mono font-bold text-xs flex items-center gap-1.5 text-[#D97706]';
                    if (icon) icon.className = 'step-icon transition-transform text-[#D97706]';
                    if (title) title.className = 'step-title font-heading font-bold text-sm text-[#FDE68A]';
                } else {
                    t.className = 'timeline-step-tab text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between cursor-pointer hover:scale-[1.02] bg-[#1A1A1A] border-[rgba(245,158,11,0.15)] hover:border-[rgba(245,158,11,0.25)]';
                    if (label) label.className = 'step-label font-mono font-bold text-xs flex items-center gap-1.5 text-[#D97706]';
                    if (icon) icon.className = 'step-icon transition-transform text-[#D97706]';
                    if (title) title.className = 'step-title font-heading font-bold text-sm text-[#FDE68A]';
                }
            });

            // Update Details
            if (detailPhaseHeader) detailPhaseHeader.textContent = 'PHASE ' + s.step + ' OF 06';
            if (detailPhaseDuration) detailPhaseDuration.textContent = 'TIMELINE: ' + s.duration;
            if (detailTitle) detailTitle.textContent = s.title;
            if (detailSubtitle) detailSubtitle.textContent = s.subtitle;
            if (detailFocus) detailFocus.textContent = s.focus;

            if (detailDeliverables) {
                detailDeliverables.innerHTML = s.deliverables.map(item => `
                    <div class="flex items-center gap-2 text-xs text-[#FDE68A]">
                        <svg class="w-3.5 h-3.5 text-[#F59E0B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                        <span>${item}</span>
                    </div>
                `).join('');
            }
        });
    });
});
</script>
