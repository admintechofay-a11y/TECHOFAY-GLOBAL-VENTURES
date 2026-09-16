<?php
/**
 * Template part: Testimonials
 * Exactly matches client/src/components/home/Testimonials.jsx 1-to-1
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$testimonials = array(
    array(
        'name'     => 'Alexander Wright',
        'role'     => 'Chief Technology Officer',
        'company'  => 'Apex Global Financial Group',
        'avatar'   => 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
        'stars'    => 5,
        'quote'    => 'Techofay re-engineered our high-frequency trading gateway and Zero Trust network segmentation in under 90 days. Our latency plummeted by 42% while passing our SOC 2 Type II audit with zero findings. Their engineering depth is world-class.',
        'vertical' => 'Cybersecurity & Infrastructure',
    ),
    array(
        'name'     => 'Dr. Sarah Lin-Reynolds',
        'role'     => 'Head of Clinical AI',
        'company'  => 'NeuraHealth Therapeutics',
        'avatar'   => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80',
        'stars'    => 5,
        'quote'    => 'Deploying custom AI automation into hospital workflows was seamless with Techofay. Their deterministic guardrails and vector pipelines achieved 99.4% diagnostic accuracy with zero hallucinations. Truly transformational.',
        'vertical' => 'Custom AI & Automation',
    ),
    array(
        'name'     => 'Marcus Sterling',
        'role'     => 'VP of Product & Growth',
        'company'  => 'ScaleCommerce Cloud',
        'avatar'   => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
        'stars'    => 5,
        'quote'    => 'Techofay delivered our complete digital growth solution: new high-converting web application, multi-channel SEO, and performance marketing. Their 100% money-back guarantee gave us complete confidence, and we 3x our enterprise inbound pipeline.',
        'vertical' => 'Digital Growth & Development',
    ),
);
?>

<section class="relative py-24 sm:py-32 bg-[#1A1A1A] border-b border-[rgba(245,158,11,0.15)] overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
                <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(245,158,11,0.15)] border border-[rgba(245,158,11,0.25)] text-[#B45309] text-xs font-semibold uppercase tracking-wider mb-4">
                    Client Validation
                </div>
                <h2 class="font-heading font-extrabold text-2xl sm:text-4xl text-[#FFFBEB] tracking-tight">
                    Trusted by <span class="text-[#F59E0B]">Industry Leaders</span>
                </h2>
            </div>

            <div class="flex items-center gap-2 mt-4 md:mt-0">
                <button
                    type="button"
                    id="prev-testimonial"
                    class="p-3 rounded-xl bg-[#1A1A1A] border border-[rgba(245,158,11,0.15)] text-[#FDE68A] hover:text-[#F59E0B] hover:border-[#F59E0B] transition-all shadow-xs cursor-pointer"
                    aria-label="Previous Testimonial"
                >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button
                    type="button"
                    id="next-testimonial"
                    class="p-3 rounded-xl bg-[#1A1A1A] border border-[rgba(245,158,11,0.15)] text-[#FDE68A] hover:text-[#F59E0B] hover:border-[#F59E0B] transition-all shadow-xs cursor-pointer"
                    aria-label="Next Testimonial"
                >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </button>
            </div>
        </div>

        <!-- Testimonials 3-Card Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <?php foreach ( $testimonials as $idx => $t ) : ?>
                <div
                    class="testimonial-card rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 border <?php echo $idx === 0 ? 'border-[#F59E0B] bg-[#161616] shadow-[0_8px_24px_rgba(22,163,74,0.1)] scale-[1.02]' : 'bg-[#1A1A1A] border-[rgba(245,158,11,0.15)] hover:border-[rgba(245,158,11,0.25)]'; ?>"
                    data-index="<?php echo $idx; ?>"
                >
                    <div>
                        <!-- Rating & Quote Icon -->
                        <div class="flex items-center justify-between mb-6">
                            <div class="flex items-center gap-1 text-[#F59E0B]">
                                <?php for ( $i = 0; $i < $t['stars']; $i++ ) : ?>
                                    <svg class="w-4 h-4 fill-current text-[#F59E0B]" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                <?php endfor; ?>
                            </div>
                            <svg class="w-8 h-8 text-[rgba(245,158,11,0.25)]" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                        </div>

                        <p class="text-sm text-[#FDE68A] leading-relaxed italic mb-8">
                            "<?php echo esc_html( $t['quote'] ); ?>"
                        </p>
                    </div>

                    <!-- Author Details -->
                    <div class="pt-6 border-t border-[rgba(245,158,11,0.15)] flex items-center gap-4">
                        <img
                            src="<?php echo esc_url( $t['avatar'] ); ?>"
                            alt="<?php echo esc_attr( $t['name'] ); ?>"
                            class="w-12 h-12 rounded-full object-cover border-2 border-[#F59E0B]"
                        />
                        <div>
                            <div class="font-heading font-bold text-sm text-[#FFFBEB] flex items-center gap-1.5">
                                <?php echo esc_html( $t['name'] ); ?>
                                <svg class="w-3.5 h-3.5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div class="text-xs text-[#D97706]">
                                <?php echo esc_html( $t['role'] ); ?> &bull; <span class="text-[#F59E0B] font-medium"><?php echo esc_html( $t['company'] ); ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.testimonial-card');
    let currentIdx = 0;

    function updateHighlight(index) {
        cards.forEach((c, i) => {
            if (i === index) {
                c.className = 'testimonial-card rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 border border-[#F59E0B] bg-[#161616] shadow-[0_8px_24px_rgba(22,163,74,0.1)] scale-[1.02]';
            } else {
                c.className = 'testimonial-card rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 border bg-[#1A1A1A] border-[rgba(245,158,11,0.15)] hover:border-[rgba(245,158,11,0.25)]';
            }
        });
    }

    document.getElementById('prev-testimonial')?.addEventListener('click', () => {
        currentIdx = (currentIdx === 0) ? cards.length - 1 : currentIdx - 1;
        updateHighlight(currentIdx);
    });

    document.getElementById('next-testimonial')?.addEventListener('click', () => {
        currentIdx = (currentIdx === cards.length - 1) ? 0 : currentIdx + 1;
        updateHighlight(currentIdx);
    });
});
</script>
