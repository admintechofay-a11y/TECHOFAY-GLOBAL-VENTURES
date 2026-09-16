<?php
/**
 * Template Name: Contact Us Page
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();

$preselected_service = isset( $_GET['service'] ) ? sanitize_text_field( $_GET['service'] ) : '';
$preselected_product = isset( $_GET['product'] ) ? sanitize_text_field( $_GET['product'] ) : '';
?>

<main id="primary" class="site-main pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF]">
            <span>COMMENCE CONSULTATION</span>
        </div>
        <h1 class="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Connect with Solutions Architecture
        </h1>
        <p class="text-base text-[#8B9AB5] leading-relaxed">
            Direct access to senior engineers. NDA-protected discovery, guaranteed timelines, and 100% money-back client acquisition guarantee.
        </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left Column: Contact Channels & Hubs -->
        <div class="lg:col-span-5 space-y-8">
            <div class="glass-panel rounded-3xl p-8 border border-[rgba(43,110,250,0.3)] space-y-6">
                <span class="text-xs font-mono uppercase text-[#00D4FF] font-semibold">DIRECT CHANNELS</span>
                <h2 class="font-heading font-bold text-2xl text-white">Global Command Channels</h2>

                <div class="space-y-4 text-xs sm:text-sm">
                    <div class="p-4 rounded-2xl bg-[#1A1A1A]/5 border border-white/10 flex items-start gap-4">
                        <div class="w-10 h-10 rounded-xl bg-[#2B6EFA]/15 border border-[#2B6EFA]/30 flex items-center justify-center text-[#00D4FF] shrink-0">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                        </div>
                        <div>
                            <span class="text-[#8B9AB5] text-xs block">Global Client Hotline</span>
                            <a href="tel:+919359339000" class="text-white font-mono font-bold hover:text-[#00D4FF] transition-colors">+91-9359339000</a>
                        </div>
                    </div>

                    <div class="p-4 rounded-2xl bg-[#1A1A1A]/5 border border-white/10 flex items-start gap-4">
                        <div class="w-10 h-10 rounded-xl bg-[#2B6EFA]/15 border border-[#2B6EFA]/30 flex items-center justify-center text-[#00D4FF] shrink-0">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        </div>
                        <div>
                            <span class="text-[#8B9AB5] text-xs block">Official Email Dispatch</span>
                            <a href="mailto:info@techofay.com" class="text-white font-semibold hover:text-[#00D4FF] transition-colors block">info@techofay.com</a>
                            <a href="mailto:director@techofay.com" class="text-[#00D4FF] text-xs hover:underline block mt-0.5">director@techofay.com</a>
                        </div>
                    </div>

                    <div class="p-4 rounded-2xl bg-[#1A1A1A]/5 border border-white/10 flex items-start gap-4">
                        <div class="w-10 h-10 rounded-xl bg-[#2B6EFA]/15 border border-[#2B6EFA]/30 flex items-center justify-center text-[#00D4FF] shrink-0">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                        </div>
                        <div>
                            <span class="text-[#8B9AB5] text-xs block">Official Web Domains</span>
                            <span class="text-white font-mono">www.techofay.com &bull; www.techofay.in</span>
                        </div>
                    </div>
                </div>

                <!-- 100% Money-Back Badge -->
                <div class="p-4 rounded-2xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs text-[#00D4FF]">
                    <span class="font-bold block mb-1">100% Money-Back Guarantee</span>
                    <span>If our digital solutions do not acquire real paying clients for your business, we refund 100% of your investment.</span>
                </div>
            </div>

            <!-- Global Branch Locations Card -->
            <div class="glass-panel rounded-3xl p-8 border border-white/10 space-y-4">
                <span class="text-xs font-mono uppercase text-[#00D4FF] font-semibold">BRANCH PRESENCE</span>
                <div class="space-y-3 text-xs">
                    <div class="pb-2 border-b border-white/5">
                        <strong class="text-white block">Global Headquarters:</strong>
                        <span class="text-[#8B9AB5]">Vadodara, Gujarat, India</span>
                    </div>
                    <div class="pb-2 border-b border-white/5">
                        <strong class="text-white block">Bangalore Technical Hub:</strong>
                        <span class="text-[#8B9AB5]">ETV Marathahalli, Bangalore, Karnataka, India</span>
                    </div>
                    <div class="pb-2 border-b border-white/5">
                        <strong class="text-white block">Chennai Branch:</strong>
                        <span class="text-[#8B9AB5]">Chennai, Tamil Nadu, India</span>
                    </div>
                    <div class="pb-2 border-b border-white/5">
                        <strong class="text-white block">Northern Regional Hub:</strong>
                        <span class="text-[#8B9AB5]">Ganjdundwara, Uttar Pradesh, India</span>
                    </div>
                    <div>
                        <strong class="text-white block">European Operations:</strong>
                        <span class="text-[#8B9AB5]">Edinburgh, Scotland, United Kingdom</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Column: Interactive Contact Form -->
        <div class="lg:col-span-7">
            <div class="glass-panel rounded-3xl p-8 sm:p-10 border border-[#00D4FF]/30 bg-[#0A1628]/95 shadow-2xl relative">
                <div class="mb-8">
                    <span class="text-[10px] font-mono uppercase text-[#00D4FF] font-semibold">PROJECT INQUIRY FORM</span>
                    <h2 class="font-heading font-bold text-2xl text-white mt-1">Request Strategic Briefing</h2>
                    <p class="text-xs text-[#8B9AB5] mt-1">Complete this form to receive technical scope documentation and cost estimates.</p>
                </div>

                <form id="techofay-contact-form" class="space-y-5">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-[#8B9AB5] mb-1.5 uppercase">Full Name *</label>
                            <input type="text" name="fullName" required class="w-full px-4 py-3 rounded-xl bg-[#1A1A1A]/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00D4FF]" placeholder="Marcus Vance" />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-[#8B9AB5] mb-1.5 uppercase">Corporate Email *</label>
                            <input type="email" name="email" required class="w-full px-4 py-3 rounded-xl bg-[#1A1A1A]/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00D4FF]" placeholder="marcus@enterprise.com" />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-[#8B9AB5] mb-1.5 uppercase">Direct Phone *</label>
                            <input type="tel" name="phone" required class="w-full px-4 py-3 rounded-xl bg-[#1A1A1A]/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00D4FF]" placeholder="+91 93593 39000" />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-[#8B9AB5] mb-1.5 uppercase">Company Name</label>
                            <input type="text" name="companyName" class="w-full px-4 py-3 rounded-xl bg-[#1A1A1A]/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00D4FF]" placeholder="Vance Global Inc." />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-[#8B9AB5] mb-1.5 uppercase">Service / Product Interest *</label>
                            <select name="service" required class="w-full px-4 py-3 rounded-xl bg-[#050B1F] border border-white/10 text-white text-xs focus:outline-none focus:border-[#00D4FF]">
                                <option value="Cybersecurity & Zero Trust" <?php selected( $preselected_service, 'Cybersecurity & Zero Trust' ); ?>>Cybersecurity & Zero Trust</option>
                                <option value="Engineering & QA Testing" <?php selected( $preselected_service, 'Engineering & QA Testing' ); ?>>Engineering & QA Testing</option>
                                <option value="Cloud & Infrastructure" <?php selected( $preselected_service, 'Cloud & Infrastructure' ); ?>>Cloud & DevOps Infrastructure</option>
                                <option value="Data & Applied AI" <?php selected( $preselected_service, 'Data & Applied AI' ); ?>>Data & Applied AI</option>
                                <option value="Product Design & UX" <?php selected( $preselected_service, 'Product Design & UX' ); ?>>Product Design & UX</option>
                                <option value="Digital Growth & Marketing" <?php selected( $preselected_service, 'Digital Growth & Marketing' ); ?>>Digital Growth & Marketing</option>
                                <option value="ERP Management Software" <?php selected( $preselected_product, 'ERP Management Software' ); ?>>ERP Management Software (SaaS)</option>
                                <option value="Hospital Management System" <?php selected( $preselected_product, 'Hospital Management System' ); ?>>Hospital Management (HMS SaaS)</option>
                                <option value="School Management Software" <?php selected( $preselected_product, 'School Management Software' ); ?>>School Management ERP (SaaS)</option>
                                <option value="Hotel PMS" <?php selected( $preselected_product, 'Hotel PMS' ); ?>>Hotel PMS Cloud (SaaS)</option>
                                <option value="Fleet360 Logistics" <?php selected( $preselected_product, 'Fleet360 Logistics' ); ?>>Fleet360 Logistics (SaaS)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-[#8B9AB5] mb-1.5 uppercase">Target Budget Range</label>
                            <select name="budget" class="w-full px-4 py-3 rounded-xl bg-[#050B1F] border border-white/10 text-white text-xs focus:outline-none focus:border-[#00D4FF]">
                                <option value="₹5L - ₹15L">₹5,00,000 - ₹15,00,000</option>
                                <option value="₹15L - ₹50L" selected>₹15,00,000 - ₹50,00,000</option>
                                <option value="₹50L - ₹1.5Cr">₹50,00,000 - ₹1.5 Crore</option>
                                <option value="₹1.5Cr+">₹1.5 Crore+ (Enterprise Sovereign)</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label class="block text-xs font-semibold text-[#8B9AB5] mb-1.5 uppercase">Project Scope / Technical Requirements *</label>
                        <textarea name="message" required rows="4" class="w-full px-4 py-3 rounded-xl bg-[#1A1A1A]/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00D4FF]" placeholder="Brief description of current infrastructure, user concurrency expectations, key compliance certifications required, or desired deployment timeline..."></textarea>
                    </div>

                    <!-- Feedback Alert Message -->
                    <div id="contact-form-feedback" class="hidden p-4 rounded-xl text-xs"></div>

                    <div>
                        <button type="submit" id="contact-submit-btn" class="w-full py-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#2B6EFA] via-[#00D4FF] to-[#2B6EFA] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_0_25px_rgba(0,212,255,0.4)] flex items-center justify-center gap-2 cursor-pointer">
                            <span>Transmit Inquiry & Schedule Briefing</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </div>
</main>

<?php
get_footer();
