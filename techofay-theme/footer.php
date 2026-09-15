<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content up till </html>
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
    </div><!-- #content -->

    <!-- Footer -->
    <footer id="colophon" class="site-footer bg-[#050B1F] border-t border-[rgba(43,110,250,0.25)] relative overflow-hidden pt-20 pb-12 text-[#8B9AB5]">
        <!-- Subtle background glow -->
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-gradient-to-t from-[#2B6EFA]/10 to-transparent blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
                
                <!-- Col 1: Brand & Description -->
                <div class="lg:col-span-4 space-y-6">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2 group inline-block">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2B6EFA] to-[#00D4FF] p-0.5">
                            <div class="w-full h-full bg-[#050B1F] rounded-[10px] flex items-center justify-center font-heading font-extrabold text-lg text-[#00D4FF]">
                                T
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-heading font-extrabold text-xl tracking-tight text-white group-hover:text-[#00D4FF] transition-colors">
                                TECHOFAY<span class="text-[#00D4FF]">.</span>
                            </span>
                            <span class="text-[9px] tracking-widest uppercase font-mono text-[#8B9AB5] -mt-1">
                                GLOBAL VENTURES
                            </span>
                        </div>
                    </a>

                    <p class="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed max-w-sm">
                        Engineering sovereign digital infrastructure, Zero Trust enterprise cybersecurity, high-throughput cloud architectures, and autonomous AI systems for Fortune 500s and high-growth enterprises worldwide.
                    </p>

                    <!-- Guarantee Badge -->
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs text-[#00D4FF]">
                        <span class="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse"></span>
                        <span class="font-semibold">100% Money-Back Client Acquisition Guarantee</span>
                    </div>

                    <!-- Social Channels -->
                    <div class="flex items-center gap-3 pt-2">
                        <a href="https://linkedin.com/company/techofay" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#2B6EFA]/20 border border-white/10 hover:border-[#2B6EFA] flex items-center justify-center text-[#8B9AB5] hover:text-[#00D4FF] transition-all" aria-label="LinkedIn">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63z"/></svg>
                        </a>
                        <a href="https://twitter.com/techofay" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#2B6EFA]/20 border border-white/10 hover:border-[#2B6EFA] flex items-center justify-center text-[#8B9AB5] hover:text-[#00D4FF] transition-all" aria-label="Twitter / X">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                        <a href="https://github.com/admintechofay-a11y" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#2B6EFA]/20 border border-white/10 hover:border-[#2B6EFA] flex items-center justify-center text-[#8B9AB5] hover:text-[#00D4FF] transition-all" aria-label="GitHub">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 14.42 22 12A10 10 0 0 0 12 2z"/></svg>
                        </a>
                    </div>
                </div>

                <!-- Col 2: Enterprise Verticals -->
                <div class="lg:col-span-3 space-y-4">
                    <h3 class="font-heading font-bold text-sm tracking-wider text-white uppercase">
                        Services & Verticals
                    </h3>
                    <ul class="space-y-2 text-xs sm:text-sm">
                        <li><a href="<?php echo esc_url( home_url( '/service/cybersecurity' ) ); ?>" class="hover:text-[#00D4FF] transition-colors">Cybersecurity & Zero Trust</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/service/development' ) ); ?>" class="hover:text-[#00D4FF] transition-colors">Engineering & QA Testing</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/service/cloud-infrastructure' ) ); ?>" class="hover:text-[#00D4FF] transition-colors">Cloud & DevOps Architecture</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/service/ai-data-analytics' ) ); ?>" class="hover:text-[#00D4FF] transition-colors">Data & Applied AI</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/service/ui-ux-design' ) ); ?>" class="hover:text-[#00D4FF] transition-colors">Product Design & UX</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/service/growth-marketing' ) ); ?>" class="hover:text-[#00D4FF] transition-colors">Digital Growth & SEO</a></li>
                    </ul>
                </div>

                <!-- Col 3: SaaS Platforms -->
                <div class="lg:col-span-2 space-y-4">
                    <h3 class="font-heading font-bold text-sm tracking-wider text-white uppercase">
                        SaaS Products
                    </h3>
                    <ul class="space-y-2 text-xs sm:text-sm">
                        <li><a href="<?php echo esc_url( home_url( '/product/erp-management' ) ); ?>" class="hover:text-[#00D4FF] transition-colors">ERP Management</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/product/hospital-management-system' ) ); ?>" class="hover:text-[#00D4FF] transition-colors">Hospital HMS Cloud</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/product/school-management-software' ) ); ?>" class="hover:text-[#00D4FF] transition-colors">School Management ERP</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/product/hotel-pms' ) ); ?>" class="hover:text-[#00D4FF] transition-colors">Hotel PMS Cloud</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/product/fleet360' ) ); ?>" class="hover:text-[#00D4FF] transition-colors">Fleet360 Logistics</a></li>
                    </ul>
                </div>

                <!-- Col 4: Global Hubs & Contact -->
                <div class="lg:col-span-3 space-y-4">
                    <h3 class="font-heading font-bold text-sm tracking-wider text-white uppercase">
                        Global Hubs & Contact
                    </h3>
                    <div class="space-y-3 text-xs">
                        <div>
                            <span class="text-[#00D4FF] font-semibold block">Headquarters:</span>
                            <span class="text-white">Vadodara, Gujarat, India</span>
                        </div>
                        <div>
                            <span class="text-[#00D4FF] font-semibold block">Branch Operations:</span>
                            <span>Bangalore (ETV Marathahalli) &bull; Chennai &bull; Ganjdundwara &bull; Edinburgh (UK)</span>
                        </div>
                        <div class="pt-2 border-t border-white/10 space-y-1.5">
                            <div class="flex items-center gap-2">
                                <span class="text-white font-medium">Hotline:</span>
                                <a href="tel:+919359339000" class="text-[#00D4FF] hover:underline font-mono">+91-9359339000</a>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-white font-medium">Email:</span>
                                <a href="mailto:info@techofay.com" class="text-[#8B9AB5] hover:text-white">info@techofay.com</a>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-white font-medium">Executive:</span>
                                <a href="mailto:director@techofay.com" class="text-[#8B9AB5] hover:text-white">director@techofay.com</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Bottom Bar -->
            <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B9AB5]">
                <div>
                    &copy; <?php echo date( 'Y' ); ?> <strong>TECHOFAY GLOBAL VENTURES</strong>. All rights reserved.
                </div>
                <div class="flex items-center gap-6">
                    <a href="<?php echo esc_url( home_url( '/privacy-policy' ) ); ?>" class="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="<?php echo esc_url( home_url( '/terms-of-service' ) ); ?>" class="hover:text-white transition-colors">Terms of Service</a>
                    <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="hover:text-white transition-colors">Security & ISO 27001</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Back to Top Button -->
    <button id="back-to-top" class="fixed bottom-6 right-6 w-11 h-11 rounded-xl bg-[#050B1F]/90 border border-[#00D4FF]/40 text-[#00D4FF] flex items-center justify-center shadow-lg opacity-0 invisible hover:bg-[#00D4FF] hover:text-black transition-all duration-300 z-40 cursor-pointer" aria-label="<?php esc_attr_e( 'Back to top', 'techofay' ); ?>">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
    </button>

</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
