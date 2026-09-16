<?php
/**
 * The template for displaying the footer
 * Exactly matches client/src/components/common/Footer.jsx and WhatsAppFloat.jsx 1-to-1
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
    </div><!-- #content -->

    <!-- Corporate Enterprise Footer (Matches Footer.jsx) -->
    <footer id="colophon" class="relative bg-[#111111] border-t border-[rgba(245,158,11,0.15)] text-[#F9FAFB] overflow-hidden pt-16 pb-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <!-- Top Section: Brand + Newsletter -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-[rgba(245,158,11,0.15)]">
                <div class="lg:col-span-6 space-y-4">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2">
                        <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/logo.png' ); ?>" alt="TECHOFAY GLOBAL VENTURES" class="h-8 sm:h-9 w-auto object-contain" />
                    </a>
                    <p class="text-sm leading-relaxed max-w-md text-[#9CA3AF]">
                        "Engineering the Future, One Solution at a Time." High-assurance Cybersecurity, Autonomous AI Agents, Scalable SaaS Platforms, and Multi-Cloud Infrastructure for enterprises worldwide.
                    </p>
                    <!-- Trust Badges Row -->
                    <div class="flex flex-wrap items-center gap-2 pt-2">
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1A1A1A] border border-[rgba(245,158,11,0.2)] text-[11px] font-medium text-[#E5E7EB]">
                            <svg class="w-3.5 h-3.5 text-[#FCD34D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                            ISO 27001:2022
                        </span>
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1A1A1A] border border-[rgba(245,158,11,0.2)] text-[11px] font-medium text-[#E5E7EB]">
                            <svg class="w-3.5 h-3.5 text-[#FCD34D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                            SOC 2 Type II
                        </span>
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1A1A1A] border border-[rgba(245,158,11,0.2)] text-[11px] font-medium text-[#E5E7EB]">
                            <svg class="w-3.5 h-3.5 text-[#FCD34D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
                            AWS Partner
                        </span>
                    </div>
                </div>

                <div class="lg:col-span-6 flex flex-col justify-center">
                    <h3 class="font-heading text-white text-base font-semibold mb-2">
                        Subscribe to Techofay Enterprise Intel
                    </h3>
                    <p class="text-xs text-[#9CA3AF] mb-4">
                        Bi-weekly engineering briefs on zero-day cybersecurity, autonomous AI agent architectures, and digital growth acceleration.
                    </p>
                    <form id="footer-newsletter-form" class="flex gap-2 max-w-md">
                        <input
                            type="email"
                            required
                            placeholder="Enter corporate email..."
                            class="flex-1 px-4 py-2.5 rounded-lg bg-[#1A1A1A] border border-[rgba(245,158,11,0.2)] text-white text-sm focus:outline-none focus:border-[#FCD34D] focus:ring-1 focus:ring-[#FCD34D] placeholder:text-[#D97706]"
                        />
                        <button
                            type="submit"
                            class="px-5 py-2.5 rounded-lg font-medium text-sm text-[#1c1400] font-semibold bg-[#F59E0B] hover:bg-[#B45309] transition-all flex items-center gap-2"
                        >
                            <span>Subscribe</span>
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </button>
                    </form>
                </div>
            </div>

            <!-- Middle Section: 5 Column Links -->
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 py-12">
                <!-- Col 1: Company -->
                <div>
                    <h4 class="font-heading text-xs font-bold uppercase tracking-wider text-[#FCD34D] mb-4">
                        Company
                    </h4>
                    <ul class="space-y-2.5 text-xs text-[#9CA3AF]">
                        <li><a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">About Us</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/about#leadership' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Executive Leadership</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/careers' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Careers & Culture <span class="ml-1 text-[10px] text-[#FCD34D] bg-[#F59E0B]/20 px-1.5 py-0.5 rounded">Hiring</span></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/about#offices' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Global Offices</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Press & Media</a></li>
                    </ul>
                </div>

                <!-- Col 2: Services & Solutions -->
                <div>
                    <h4 class="font-heading text-xs font-bold uppercase tracking-wider text-[#FCD34D] mb-4">
                        Growth Solutions
                    </h4>
                    <ul class="space-y-2.5 text-xs text-[#9CA3AF]">
                        <li><a href="<?php echo esc_url( home_url( '/service/development' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Website & App Development</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/service/ai-data-analytics' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Custom AI Development</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/service/growth-marketing' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">SEO & Social Media Marketing</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/service/growth-marketing' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Digital Marketing & Branding</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Smart NFC Business Cards</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/service/cybersecurity' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Cybersecurity & Cloud DevOps</a></li>
                    </ul>
                </div>

                <!-- Col 3: Techofay Software Products -->
                <div>
                    <h4 class="font-heading text-xs font-bold uppercase tracking-wider text-[#FCD34D] mb-4">
                        Software Products
                    </h4>
                    <ul class="space-y-2.5 text-xs text-[#9CA3AF]">
                        <li><a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">ERP Management Software</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Hospital Management (HMS)</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">School Management Software</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Hotel Management (HMS)</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Transport & Fleet Software</a></li>
                    </ul>
                </div>

                <!-- Col 4: Resources -->
                <div>
                    <h4 class="font-heading text-xs font-bold uppercase tracking-wider text-[#FCD34D] mb-4">
                        Resources
                    </h4>
                    <ul class="space-y-2.5 text-xs text-[#9CA3AF]">
                        <li><a href="<?php echo esc_url( home_url( '/blog' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Engineering Insights</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/blog' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Case Studies</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/service/cybersecurity' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Zero Trust Whitepapers</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Developer API Docs</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/wp-admin' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Client Portal Login</a></li>
                    </ul>
                </div>

                <!-- Col 5: Global Presence & Direct Contact -->
                <div>
                    <h4 class="font-heading text-xs font-bold uppercase tracking-wider text-[#FCD34D] mb-4">
                        Global Presence
                    </h4>
                    <div class="text-xs leading-relaxed text-[#9CA3AF] mb-3 space-y-1.5">
                        <div>
                            <span class="text-[#FCD34D] font-semibold">Headquarters:</span> Vadodara, Gujarat, India
                        </div>
                        <div>
                            <span class="text-white font-medium">Branches:</span>{' '}
                            <span class="text-[#D1D5DB]">Ganjdundwara &bull; Chennai &bull; ETV Marathahalli Bangalore &bull; Edinburgh (UK)</span>
                        </div>
                    </div>
                    <div class="text-xs text-[#9CA3AF] mb-3 space-y-1">
                        <div>
                            Direct: <a href="tel:+919359339000" class="text-white hover:text-[#FCD34D] font-mono transition-colors">+91-9359339000</a>
                        </div>
                        <div>
                            Email: <a href="mailto:info@techofay.com" class="text-white hover:text-[#FCD34D] transition-colors">info@techofay.com</a> &bull; <a href="mailto:director@techofay.com" class="text-white hover:text-[#FCD34D] transition-colors">director@techofay.com</a>
                        </div>
                        <div class="text-[11px] pt-0.5">
                            Web: <a href="https://www.techofay.com" target="_blank" rel="noreferrer" class="text-[#FCD34D] hover:underline">www.techofay.com</a> &bull; <a href="https://www.techofay.in" target="_blank" rel="noreferrer" class="text-[#FCD34D] hover:underline">www.techofay.in</a>
                        </div>
                    </div>
                    <div class="text-[11px] font-mono text-[#FCD34D] flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-[#FCD34D] animate-pulse"></span>
                        <span>100% Client Money-Back Guarantee</span>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar: Socials + Copyright + Legal -->
            <div class="pt-8 border-t border-[rgba(245,158,11,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div class="flex items-center gap-4">
                    <a href="https://linkedin.com/company/techofay" target="_blank" rel="noreferrer" class="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#9CA3AF] hover:bg-[#F59E0B]/20 hover:text-[#FCD34D] transition-all" aria-label="LinkedIn">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63z"/></svg>
                    </a>
                    <a href="https://twitter.com/techofay" target="_blank" rel="noreferrer" class="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#9CA3AF] hover:bg-[#F59E0B]/20 hover:text-[#FCD34D] transition-all" aria-label="Twitter">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://github.com/admintechofay-a11y" target="_blank" rel="noreferrer" class="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#9CA3AF] hover:bg-[#F59E0B]/20 hover:text-[#FCD34D] transition-all" aria-label="GitHub">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 14.42 22 12A10 10 0 0 0 12 2z"/></svg>
                    </a>
                </div>

                <div class="text-center sm:text-right text-[#9CA3AF]">
                    &copy; <?php echo date( 'Y' ); ?> TECHOFAY GLOBAL VENTURES. All Rights Reserved.
                </div>

                <div class="flex items-center gap-4 text-[#9CA3AF]">
                    <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Privacy Policy</a>
                    <span>&bull;</span>
                    <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Terms of Service</a>
                    <span>&bull;</span>
                    <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="hover:text-[#FCD34D] transition-colors">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Interactive Floating WhatsApp / Quick Connect Desk (Matches WhatsAppFloat.jsx 1-to-1) -->
    <div id="quick-connect-widget" class="fixed bottom-6 right-6 z-50">
        <!-- Expandable Quick-Chat Drawer -->
        <div id="quick-chat-drawer" class="hidden mb-3 w-80 sm:w-96 bg-[#070E24] border border-[rgba(37,211,102,0.4)] rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-2xl text-left animate-scale-up">
            <!-- Header -->
            <div class="p-4 bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-full bg-[#1A1A1A]/20 flex items-center justify-center font-bold text-sm">
                        💬
                    </div>
                    <div>
                        <div class="font-heading font-bold text-xs tracking-wider flex items-center gap-1.5">
                            <span>TECHOFAY DIRECT DESK</span>
                            <span class="w-2 h-2 rounded-full bg-[#1A1A1A] animate-pulse"></span>
                        </div>
                        <div class="text-[10px] text-white/90">
                            Instant response &bull; India Solutions Team
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    id="close-chat-btn"
                    class="p-1.5 rounded-full hover:bg-black/20 text-white transition-colors"
                >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
            </div>

            <!-- Body with 6 Quick Topics -->
            <div class="p-4 space-y-3 bg-[#070E24]/95">
                <div class="p-3 rounded-2xl bg-[#0B1530] border border-white/5 text-xs text-[#cad7ec] leading-relaxed">
                    👋 Namaste! Welcome to <strong>Techofay Global Ventures</strong>. Choose your software system for immediate WhatsApp assistance:
                </div>

                <div class="space-y-1.5">
                    <span class="text-[10px] font-mono text-[#8B9AB5] uppercase tracking-wider block">
                        Select Software Vertical:
                    </span>
                    <a
                        href="https://wa.me/919359339000?text=Hello%20Techofay%20Team%2C%20I%20want%20complete%20digital%20growth%20solutions%20(Website%2C%20SEO%2C%20Digital%20Marketing)%20for%20my%20business."
                        target="_blank"
                        rel="noopener noreferrer"
                        class="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1530] hover:bg-[#25D366]/10 border border-white/5 hover:border-[#25D366]/40 text-left text-xs text-[#cad7ec] hover:text-white transition-all flex items-center justify-between group"
                    >
                        <span>Complete Digital Growth</span>
                        <svg class="w-3.5 h-3.5 text-[#8B9AB5] group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                    <a
                        href="https://wa.me/919359339000?text=Hello%20Techofay%20Team%2C%20I%20am%20interested%20in%20Custom%20Artificial%20Intelligence%20(AI)%20Development%20for%20my%20business."
                        target="_blank"
                        rel="noopener noreferrer"
                        class="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1530] hover:bg-[#25D366]/10 border border-white/5 hover:border-[#25D366]/40 text-left text-xs text-[#cad7ec] hover:text-white transition-all flex items-center justify-between group"
                    >
                        <span>Custom AI Development</span>
                        <svg class="w-3.5 h-3.5 text-[#8B9AB5] group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                    <a
                        href="https://wa.me/919359339000?text=Hello%20Techofay%20Team%2C%20I%20need%20a%20high-performance%20website%20and%20mobile%20application%20built%20for%20our%20business."
                        target="_blank"
                        rel="noopener noreferrer"
                        class="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1530] hover:bg-[#25D366]/10 border border-white/5 hover:border-[#25D366]/40 text-left text-xs text-[#cad7ec] hover:text-white transition-all flex items-center justify-between group"
                    >
                        <span>Website & App Development</span>
                        <svg class="w-3.5 h-3.5 text-[#8B9AB5] group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                    <a
                        href="https://wa.me/919359339000?text=Hello%20Techofay%20Team%2C%20I%20want%20to%20scale%20our%20lead%20generation%20with%20SEO%2C%20Branding%20%26%20Social%20Media%20marketing."
                        target="_blank"
                        rel="noopener noreferrer"
                        class="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1530] hover:bg-[#25D366]/10 border border-white/5 hover:border-[#25D366]/40 text-left text-xs text-[#cad7ec] hover:text-white transition-all flex items-center justify-between group"
                    >
                        <span>SEO & Social Media Marketing</span>
                        <svg class="w-3.5 h-3.5 text-[#8B9AB5] group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                    <a
                        href="https://wa.me/919359339000?text=Hello%20Techofay%20Team%2C%20I%20would%20like%20to%20order%20Smart%20NFC%20Business%20Cards%20for%20our%20executive%20team."
                        target="_blank"
                        rel="noopener noreferrer"
                        class="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1530] hover:bg-[#25D366]/10 border border-white/5 hover:border-[#25D366]/40 text-left text-xs text-[#cad7ec] hover:text-white transition-all flex items-center justify-between group"
                    >
                        <span>Smart NFC Business Cards</span>
                        <svg class="w-3.5 h-3.5 text-[#8B9AB5] group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                    <a
                        href="https://wa.me/919359339000?text=Hello%20Techofay%20Team%2C%20I%20would%20like%20to%20inquire%20about%20Enterprise%20ERP%2C%20HMS%2C%20and%20School%20Software%20pricing%20%26%20demo."
                        target="_blank"
                        rel="noopener noreferrer"
                        class="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1530] hover:bg-[#25D366]/10 border border-white/5 hover:border-[#25D366]/40 text-left text-xs text-[#cad7ec] hover:text-white transition-all flex items-center justify-between group"
                    >
                        <span>ERP & Enterprise Software</span>
                        <svg class="w-3.5 h-3.5 text-[#8B9AB5] group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                </div>

                <div class="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#8B9AB5] font-mono">
                    <span class="flex items-center gap-1 text-emerald-400">
                        <svg class="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                        Encrypted & Official
                    </span>
                    <span>Available 24/7</span>
                </div>
            </div>
        </div>

        <!-- Floating Action Launcher Button (💬 Quick Connect) -->
        <button
            type="button"
            id="launcher-chat-btn"
            class="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white font-medium text-xs shadow-[0_4px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_40px_rgba(37,211,102,0.7)] hover:scale-105 transition-all duration-300 group cursor-pointer"
            title="Chat on WhatsApp with Techofay Enterprise Team"
        >
            <div class="relative">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                <span id="launcher-ping" class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#1A1A1A] rounded-full animate-ping"></span>
            </div>
            <span id="launcher-label" class="font-heading font-bold text-xs tracking-wider">
                Quick Connect
            </span>
        </button>
    </div>

    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const launcher = document.getElementById('launcher-chat-btn');
        const drawer = document.getElementById('quick-chat-drawer');
        const closeBtn = document.getElementById('close-chat-btn');
        const label = document.getElementById('launcher-label');
        const ping = document.getElementById('launcher-ping');
        let isOpen = false;

        function toggleChat() {
            isOpen = !isOpen;
            if (isOpen) {
                drawer.classList.remove('hidden');
                if (label) label.textContent = 'Close Chat';
                if (ping) ping.classList.add('hidden');
            } else {
                drawer.classList.add('hidden');
                if (label) label.textContent = 'Quick Connect';
                if (ping) ping.classList.remove('hidden');
            }
        }

        if (launcher) launcher.addEventListener('click', toggleChat);
        if (closeBtn) closeBtn.addEventListener('click', toggleChat);
    });
    </script>

</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
