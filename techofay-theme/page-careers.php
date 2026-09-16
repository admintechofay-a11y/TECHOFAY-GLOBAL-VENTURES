<?php
/**
 * Template Name: Careers Page
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();

$jobs_query = new WP_Query( array(
    'post_type'      => 'job_opening',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
) );

$fallback_jobs = array(
    array(
        'title'      => 'Principal Cloud Solutions Architect',
        'dept'       => 'Cloud Infrastructure',
        'location'   => 'Bangalore (ETV Marathahalli) / Hybrid',
        'type'       => 'Full-time',
        'salary'     => '₹28,00,000 - ₹45,00,000 + Equity',
        'experience' => '7+ Years',
        'desc'       => 'Architect hyperscale Kubernetes clusters across AWS and GCP, design multi-region disaster recovery, and mentor senior systems engineers.',
    ),
    array(
        'title'      => 'Senior Zero Trust Security Engineer',
        'dept'       => 'Cybersecurity',
        'location'   => 'Remote (India / Global)',
        'type'       => 'Full-time',
        'salary'     => '₹24,00,000 - ₹38,00,000',
        'experience' => '5+ Years',
        'desc'       => 'Lead adversarial penetration testing drills, design least-privilege IAM micro-segmentation, and manage automated SIEM threat ingestion.',
    ),
    array(
        'title'      => 'Full-Stack Distributed Systems Engineer',
        'dept'       => 'Engineering',
        'location'   => 'Bangalore / Hybrid',
        'type'       => 'Full-time',
        'salary'     => '₹20,00,000 - ₹32,00,000',
        'experience' => '4+ Years',
        'desc'       => 'Engineer high-throughput transactional APIs in Node.js, Go, and React for our flagship SaaS suites (ERP and Hospital HMS).',
    ),
    array(
        'title'      => 'Senior AI / Machine Learning Researcher',
        'dept'       => 'Applied AI',
        'location'   => 'Bangalore / Remote',
        'type'       => 'Full-time',
        'salary'     => '₹25,00,000 - ₹40,00,000',
        'experience' => '4+ Years',
        'desc'       => 'Fine-tune open-source LLMs, build high-speed RAG enterprise pipelines, and optimize neural vector embeddings for logistics telemetry.',
    ),
);
?>

<main id="primary" class="site-main pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF]">
            <span>JOIN TECHOFAY</span>
        </div>
        <h1 class="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Build the Future of Sovereign Cloud & AI
        </h1>
        <p class="text-base text-[#8B9AB5] leading-relaxed">
            Join elite engineers, researchers, and systems architects solving high-concurrency challenges for the world's most critical enterprises.
        </p>
    </div>

    <!-- Perks / Why Work Here -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <div class="glass-card rounded-2xl p-6 border border-white/10">
            <div class="font-heading font-bold text-lg text-white mb-2">Tier-1 Equity & Compensation</div>
            <p class="text-xs text-[#8B9AB5] leading-relaxed">
                Top 5% market salaries, generous ESOP grants, performance bonuses, and semi-annual compensation reviews.
            </p>
        </div>
        <div class="glass-card rounded-2xl p-6 border border-white/10">
            <div class="font-heading font-bold text-lg text-white mb-2">Remote-First Flexibility</div>
            <p class="text-xs text-[#8B9AB5] leading-relaxed">
                Work from our state-of-the-art hubs in Bangalore (ETV Marathahalli) and Vadodara, or work 100% remotely.
            </p>
        </div>
        <div class="glass-card rounded-2xl p-6 border border-white/10">
            <div class="font-heading font-bold text-lg text-white mb-2">Hardware & Learning Stipend</div>
            <p class="text-xs text-[#8B9AB5] leading-relaxed">
                Top-spec M-series MacBook Pro or Linux workstation, 4K monitors, and an annual $2,000 personal learning budget.
            </p>
        </div>
    </div>

    <!-- Open Positions Section -->
    <div class="mb-24 space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
                <span class="text-xs font-mono uppercase text-[#00D4FF] font-semibold">CURRENT OPPORTUNITIES</span>
                <h2 class="font-heading font-extrabold text-3xl text-white mt-1">Open Engineering Positions</h2>
            </div>
            <span class="text-xs text-[#8B9AB5]">Showing verified open roles across APAC & EMEA</span>
        </div>

        <div class="space-y-4">
            <?php if ( $jobs_query->have_posts() ) : ?>
                <?php while ( $jobs_query->have_posts() ) : $jobs_query->the_post(); ?>
                    <?php
                    $dept       = get_field( 'job_department' ) ?: 'Engineering';
                    $location   = get_field( 'job_location' ) ?: 'Bangalore / Remote';
                    $type       = get_field( 'job_type' ) ?: 'Full-time';
                    $salary     = get_field( 'salary_range' ) ?: 'Competitive + Equity';
                    $experience = get_field( 'experience_required' ) ?: '4+ Years';
                    ?>
                    <div class="glass-card rounded-2xl p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#00D4FF]/50 transition-all">
                        <div class="space-y-2">
                            <div class="flex flex-wrap items-center gap-2">
                                <span class="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30"><?php echo esc_html( $dept ); ?></span>
                                <span class="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#0A1628]/5 text-[#8B9AB5] border border-white/10"><?php echo esc_html( $type ); ?></span>
                                <span class="text-xs text-[#8B9AB5]"><?php echo esc_html( $location ); ?></span>
                            </div>
                            <h3 class="font-heading font-bold text-xl text-white"><?php the_title(); ?></h3>
                            <div class="text-xs text-[#8B9AB5]">
                                <span>Exp: <?php echo esc_html( $experience ); ?></span> &bull; <span>Compensation: <strong class="text-white"><?php echo esc_html( $salary ); ?></strong></span>
                            </div>
                        </div>

                        <div>
                            <button onclick="openCareerModal('<?php echo esc_js( get_the_title() ); ?>')" class="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all cursor-pointer">
                                Apply Now &rarr;
                            </button>
                        </div>
                    </div>
                <?php endwhile; wp_reset_postdata(); ?>
            <?php else : ?>
                <?php foreach ( $fallback_jobs as $job ) : ?>
                    <div class="glass-card rounded-2xl p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#00D4FF]/50 transition-all">
                        <div class="space-y-2">
                            <div class="flex flex-wrap items-center gap-2">
                                <span class="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30"><?php echo esc_html( $job['dept'] ); ?></span>
                                <span class="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#0A1628]/5 text-[#8B9AB5] border border-white/10"><?php echo esc_html( $job['type'] ); ?></span>
                                <span class="text-xs text-[#8B9AB5]"><?php echo esc_html( $job['location'] ); ?></span>
                            </div>
                            <h3 class="font-heading font-bold text-xl text-white"><?php echo esc_html( $job['title'] ); ?></h3>
                            <p class="text-xs text-[#8B9AB5] max-w-2xl"><?php echo esc_html( $job['desc'] ); ?></p>
                            <div class="text-xs text-[#8B9AB5] pt-1">
                                <span>Exp: <?php echo esc_html( $job['experience'] ); ?></span> &bull; <span>Compensation: <strong class="text-white"><?php echo esc_html( $job['salary'] ); ?></strong></span>
                            </div>
                        </div>

                        <div class="shrink-0">
                            <button onclick="openCareerModal('<?php echo esc_js( $job['title'] ); ?>')" class="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all cursor-pointer">
                                Apply Now &rarr;
                            </button>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>

    <!-- Career Application Modal -->
    <div id="career-modal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 opacity-0 invisible transition-all duration-300">
        <div class="glass-panel max-w-lg w-full rounded-3xl p-8 border border-[rgba(43,110,250,0.4)] bg-[#050B1F] relative space-y-6">
            <button onclick="closeCareerModal()" class="absolute top-6 right-6 text-[#8B9AB5] hover:text-white">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <div>
                <span class="text-[10px] font-mono text-[#00D4FF] uppercase">JOB APPLICATION</span>
                <h3 class="font-heading font-bold text-2xl text-white mt-1">Join Our Technical Ranks</h3>
                <p id="modal-job-title" class="text-xs text-[#00D4FF] font-semibold mt-1">Role: General Application</p>
            </div>

            <form id="career-form" class="space-y-4">
                <input type="hidden" name="applied_job" id="form-applied-job" value="" />
                <div>
                    <label class="block text-xs font-semibold text-[#8B9AB5] mb-1 uppercase">Full Name *</label>
                    <input type="text" name="applicant_name" required class="w-full px-4 py-2.5 rounded-xl bg-[#0A1628]/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00D4FF]" placeholder="Alex Mercer" />
                </div>
                <div>
                    <label class="block text-xs font-semibold text-[#8B9AB5] mb-1 uppercase">Email Address *</label>
                    <input type="email" name="applicant_email" required class="w-full px-4 py-2.5 rounded-xl bg-[#0A1628]/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00D4FF]" placeholder="alex@domain.com" />
                </div>
                <div>
                    <label class="block text-xs font-semibold text-[#8B9AB5] mb-1 uppercase">Phone Number *</label>
                    <input type="tel" name="applicant_phone" required class="w-full px-4 py-2.5 rounded-xl bg-[#0A1628]/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00D4FF]" placeholder="+91 98765 43210" />
                </div>
                <div>
                    <label class="block text-xs font-semibold text-[#8B9AB5] mb-1 uppercase">LinkedIn / GitHub Profile</label>
                    <input type="url" name="linkedin_url" class="w-full px-4 py-2.5 rounded-xl bg-[#0A1628]/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00D4FF]" placeholder="https://linkedin.com/in/alex" />
                </div>
                <div>
                    <label class="block text-xs font-semibold text-[#8B9AB5] mb-1 uppercase">Resume Link (Google Drive / Dropbox)</label>
                    <input type="url" name="resume_url" class="w-full px-4 py-2.5 rounded-xl bg-[#0A1628]/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00D4FF]" placeholder="https://drive.google.com/..." />
                </div>

                <div id="career-form-msg" class="text-xs hidden p-3 rounded-xl"></div>

                <button type="submit" id="career-submit-btn" class="w-full py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all cursor-pointer">
                    Submit Application
                </button>
            </form>
        </div>
    </div>
</main>

<script>
function openCareerModal(jobTitle) {
    document.getElementById('modal-job-title').innerText = 'Applying for: ' + jobTitle;
    document.getElementById('form-applied-job').value = jobTitle;
    const modal = document.getElementById('career-modal');
    modal.classList.remove('opacity-0', 'invisible');
    modal.classList.add('opacity-100', 'visible');
}

function closeCareerModal() {
    const modal = document.getElementById('career-modal');
    modal.classList.remove('opacity-100', 'visible');
    modal.classList.add('opacity-0', 'invisible');
}
</script>

<?php
get_footer();
