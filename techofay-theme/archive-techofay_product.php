<?php
/**
 * The template for displaying Techofay Products Archive & SaaS Suites
 * Matches client/src/pages/Products.jsx 1-to-1 in White & Forest Green
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();

$products_query = new WP_Query( array(
    'post_type'      => 'techofay_product',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
) );

$fallback_products = array(
    array(
        'slug'     => 'techofay-erp',
        'name'     => 'Techofay ERP Enterprise',
        'category' => 'Enterprise ERP',
        'badge'    => 'Flagship ERP',
        'desc'     => 'End-to-end multi-entity enterprise resource planning suite with GST accounting, automated supply chain, multi-warehouse inventory, and biometric HRMS.',
        'price'    => '₹49,999',
        'billing'  => '/year for up to 50 active users',
        'metric'   => '99.98% High Assurance',
        'features' => array(
            'Multi-entity automated ledger & GST filing',
            'Advanced procurement & supplier management',
            'Real-time multi-warehouse inventory telemetry',
            'Complete HRMS with payroll & biometric sync',
            'Interactive executive KPI & BI analytics'
        )
    ),
    array(
        'slug'     => 'smart-business-card',
        'name'     => 'Techofay Smart NFC Business Card',
        'category' => 'Enterprise Hardware',
        'badge'    => 'Smart Networking',
        'desc'     => 'Next-generation contactless matte black metal & PVC NFC cards with real-time lead capture dashboard and dynamic profile management.',
        'price'    => '₹999',
        'billing'  => 'one-time investment per executive card',
        'metric'   => '100% Contactless',
        'features' => array(
            'Instant tap-to-share contact details (iOS & Android)',
            'Dynamic lead capture form with instant email alerts',
            'Custom laser-engraved metal or premium matte PVC',
            'No monthly fee for core digital business card',
            'CRM export to HubSpot, Salesforce & Google Sheets'
        )
    ),
    array(
        'slug'     => 'ai-chatbot-assistant',
        'name'     => 'Techofay Autonomous AI Chatbot',
        'category' => 'Applied AI',
        'badge'    => 'AI Lead Conversion',
        'desc'     => 'Intelligent conversational AI assistant trained on your company knowledge base to qualify leads, book calendar slots, and provide 24/7 customer support.',
        'price'    => '₹14,999',
        'billing'  => '/year with unlimited monthly chats',
        'metric'   => '3.4x Lead Capture',
        'features' => array(
            'Custom trained on your website, PDFs & docs',
            'Instant WhatsApp Business & Website integration',
            'Automated calendar booking (Google / Calendly)',
            'Human-agent live chat handoff capabilities',
            'Multi-language support (English, Hindi & Gujarati)'
        )
    ),
    array(
        'slug'     => 'healthsync-clinic',
        'name'     => 'HealthSync Clinic & Hospital Suite',
        'category' => 'Healthcare',
        'badge'    => 'Healthcare ERP',
        'desc'     => 'HIPAA-compliant hospital management suite designed for multi-specialty clinics and hospitals. Complete OPD/IPD, EMR, pharmacy, and diagnostic lab.',
        'price'    => '₹24,999',
        'billing'  => '/year for complete hospital automation',
        'metric'   => '100% HIPAA Ready',
        'features' => array(
            'Digital prescriptions & patient electronic records (EMR)',
            'Integrated pharmacy inventory with barcode billing',
            'Automated WhatsApp appointment reminders',
            'Diagnostic lab reporting with instant PDF download',
            'Doctor schedule management & telemedicine module'
        )
    ),
    array(
        'slug'     => 'edutrack-lms',
        'name'     => 'EduTrack Campus & School ERP',
        'category' => 'Education',
        'badge'    => 'Education Suite',
        'desc'     => 'Modern institute automation system for schools, colleges, and coaching centers. Manages student admissions, online fee collection, attendance, and exams.',
        'price'    => '₹34,999',
        'billing'  => '/year with unlimited student records',
        'metric'   => '50+ Campuses Scaled',
        'features' => array(
            'Online student admissions & digital KYC onboarding',
            'Automated online fee collection with SMS receipts',
            'Parent communication portal with mobile app access',
            'Automated examination grading & report cards',
            'GPS school bus tracking & RFID student attendance'
        )
    )
);
?>

<main id="primary" class="site-main min-h-screen pt-24 pb-20 bg-[#F8FAF8]">
    <!-- Header Banner -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 relative">
        <div class="text-center max-w-3xl mx-auto space-y-4">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] text-xs font-semibold uppercase tracking-wider">
                <span class="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse"></span>
                Flagship SaaS Platforms
            </div>
            <h1 class="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111827] tracking-tight">
                Enterprise <span class="text-[#16A34A]">Software Suites</span>
            </h1>
            <p class="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                Battle-tested, turnkey software solutions engineered for high performance, maximum security, and rapid business ROI.
            </p>
        </div>

        <!-- Filter & Search Bar -->
        <div class="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-3 rounded-2xl border border-[#E5E7EB] shadow-sm">
            <!-- Filter Pills -->
            <div class="flex flex-wrap items-center gap-2 w-full md:w-auto" id="product-filter-tabs">
                <button type="button" data-filter="all" class="prod-filter-btn px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer bg-[#16A34A] text-white shadow-sm">
                    All Products (5)
                </button>
                <button type="button" data-filter="Enterprise ERP" class="prod-filter-btn px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer text-[#374151] hover:text-[#16A34A] bg-[#F8FAF8] border border-[#E5E7EB]">
                    Enterprise ERP
                </button>
                <button type="button" data-filter="Enterprise Hardware" class="prod-filter-btn px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer text-[#374151] hover:text-[#16A34A] bg-[#F8FAF8] border border-[#E5E7EB]">
                    Smart NFC
                </button>
                <button type="button" data-filter="Applied AI" class="prod-filter-btn px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer text-[#374151] hover:text-[#16A34A] bg-[#F8FAF8] border border-[#E5E7EB]">
                    AI Chatbot
                </button>
                <button type="button" data-filter="Healthcare" class="prod-filter-btn px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer text-[#374151] hover:text-[#16A34A] bg-[#F8FAF8] border border-[#E5E7EB]">
                    Healthcare
                </button>
                <button type="button" data-filter="Education" class="prod-filter-btn px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer text-[#374151] hover:text-[#16A34A] bg-[#F8FAF8] border border-[#E5E7EB]">
                    Education
                </button>
            </div>

            <!-- Search Input -->
            <div class="relative w-full md:w-72">
                <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <input
                    type="text"
                    id="product-search-input"
                    placeholder="Search software, features, ERP..."
                    class="w-full pl-10 pr-4 py-2 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-xs text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A]"
                />
            </div>
        </div>
    </div>

    <!-- Products Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20" id="products-cards-container">
            <?php if ( $products_query->have_posts() ) : ?>
                <?php while ( $products_query->have_posts() ) : $products_query->the_post(); ?>
                    <?php
                    $badge    = get_field( 'product_badge' ) ?: 'Enterprise SaaS';
                    $category = get_field( 'product_category' ) ?: 'Enterprise ERP';
                    $price    = get_field( 'pricing_starter_price' ) ?: '₹24,999';
                    $billing  = get_field( 'pricing_starter_billing' ) ?: '/year for full deployment';
                    $metric   = get_field( 'product_metric' ) ?: '99.98% High Assurance';
                    $features = get_field( 'product_features' );
                    if ( ! is_array( $features ) ) {
                        $features = array(
                            'Complete cloud deployment with high availability',
                            'Automated security backups & SSL encryption',
                            'Dedicated executive support & onboarding'
                        );
                    }
                    ?>
                    <article class="product-card bg-white rounded-2xl p-8 flex flex-col justify-between border border-[#E5E7EB] hover:border-[#16A34A] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5" data-title="<?php the_title_attribute(); ?>" data-desc="<?php echo esc_attr( get_the_excerpt() ); ?>" data-category="<?php echo esc_attr( $category ); ?>">
                        <div>
                            <div class="flex items-center justify-between mb-4">
                                <span class="text-[10px] uppercase font-mono px-2.5 py-1 rounded-md bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] font-bold">
                                    <?php echo esc_html( $badge ); ?>
                                </span>
                                <span class="text-xs font-mono font-bold text-[#16A34A]"><?php echo esc_html( $metric ); ?></span>
                            </div>

                            <h2 class="font-heading font-bold text-2xl text-[#111827] mb-3 hover:text-[#16A34A] transition-colors">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h2>

                            <p class="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                                <?php echo wp_trim_words( get_the_excerpt(), 24 ); ?>
                            </p>

                            <!-- Pricing -->
                            <div class="mb-6 p-4 rounded-xl bg-[#F8FAF8] border border-[#E5E7EB]">
                                <div class="text-[10px] uppercase font-mono tracking-wider text-[#6B7280]">Starting Price</div>
                                <div class="flex items-baseline gap-1 mt-1">
                                    <span class="text-2xl font-extrabold text-[#111827]"><?php echo esc_html( $price ); ?></span>
                                    <span class="text-xs text-[#6B7280]"><?php echo esc_html( $billing ); ?></span>
                                </div>
                            </div>

                            <!-- Features List -->
                            <div class="space-y-2.5 mb-8">
                                <div class="text-xs font-bold uppercase tracking-wider text-[#111827]">Key Capabilities</div>
                                <?php foreach ( array_slice( $features, 0, 4 ) as $feat ) : ?>
                                    <div class="flex items-start gap-2 text-xs text-[#374151]">
                                        <svg class="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                                        <span><?php echo esc_html( is_array( $feat ) ? ( $feat['feature'] ?? '' ) : $feat ); ?></span>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>

                        <div class="pt-5 border-t border-[#E5E7EB] flex items-center justify-between gap-3">
                            <a href="<?php the_permalink(); ?>" class="flex-1 py-3 rounded-xl text-xs font-bold text-center text-white bg-[#16A34A] hover:bg-[#166534] shadow-sm transition-all">
                                Request Live Demo
                            </a>
                            <a href="<?php the_permalink(); ?>" class="px-4 py-3 rounded-xl text-xs font-bold text-[#16A34A] bg-white border border-[#16A34A] hover:bg-[#F0FDF4] transition-all">
                                Specs &rarr;
                            </a>
                        </div>
                    </article>
                <?php endwhile; wp_reset_postdata(); ?>
            <?php else : ?>
                <?php foreach ( $fallback_products as $prod ) : ?>
                    <article class="product-card bg-white rounded-2xl p-8 flex flex-col justify-between border border-[#E5E7EB] hover:border-[#16A34A] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5" data-title="<?php echo esc_attr( $prod['name'] ); ?>" data-desc="<?php echo esc_attr( $prod['desc'] ); ?>" data-category="<?php echo esc_attr( $prod['category'] ); ?>">
                        <div>
                            <div class="flex items-center justify-between mb-4">
                                <span class="text-[10px] uppercase font-mono px-2.5 py-1 rounded-md bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] font-bold">
                                    <?php echo esc_html( $prod['badge'] ); ?>
                                </span>
                                <span class="text-xs font-mono font-bold text-[#16A34A]"><?php echo esc_html( $prod['metric'] ); ?></span>
                            </div>

                            <h2 class="font-heading font-bold text-2xl text-[#111827] mb-3 hover:text-[#16A34A] transition-colors">
                                <a href="<?php echo esc_url( home_url( '/product/' . $prod['slug'] ) ); ?>"><?php echo esc_html( $prod['name'] ); ?></a>
                            </h2>

                            <p class="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                                <?php echo esc_html( $prod['desc'] ); ?>
                            </p>

                            <!-- Pricing -->
                            <div class="mb-6 p-4 rounded-xl bg-[#F8FAF8] border border-[#E5E7EB]">
                                <div class="text-[10px] uppercase font-mono tracking-wider text-[#6B7280]">Starting Price</div>
                                <div class="flex items-baseline gap-1 mt-1">
                                    <span class="text-2xl font-extrabold text-[#111827]"><?php echo esc_html( $prod['price'] ); ?></span>
                                    <span class="text-xs text-[#6B7280]"><?php echo esc_html( $prod['billing'] ); ?></span>
                                </div>
                            </div>

                            <!-- Features List -->
                            <div class="space-y-2.5 mb-8">
                                <div class="text-xs font-bold uppercase tracking-wider text-[#111827]">Key Capabilities</div>
                                <?php foreach ( $prod['features'] as $feat ) : ?>
                                    <div class="flex items-start gap-2 text-xs text-[#374151]">
                                        <svg class="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                                        <span><?php echo esc_html( $feat ); ?></span>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>

                        <div class="pt-5 border-t border-[#E5E7EB] flex items-center justify-between gap-3">
                            <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="flex-1 py-3 rounded-xl text-xs font-bold text-center text-white bg-[#16A34A] hover:bg-[#166534] shadow-sm transition-all">
                                Request Live Demo
                            </a>
                            <a href="<?php echo esc_url( home_url( '/product/' . $prod['slug'] ) ); ?>" class="px-4 py-3 rounded-xl text-xs font-bold text-[#16A34A] bg-white border border-[#16A34A] hover:bg-[#F0FDF4] transition-all">
                                Specs &rarr;
                            </a>
                        </div>
                    </article>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>

    <!-- CTA Section -->
    <?php get_template_part( 'template-parts/cta-banner' ); ?>
</main>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.prod-filter-btn');
    const searchInput = document.getElementById('product-search-input');
    const cards = document.querySelectorAll('.product-card');
    let currentFilter = 'all';

    function filterCards() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

        cards.forEach(card => {
            const title = (card.getAttribute('data-title') || '').toLowerCase();
            const desc = (card.getAttribute('data-desc') || '').toLowerCase();
            const cat = (card.getAttribute('data-category') || '').toLowerCase();

            const matchesCategory = (currentFilter === 'all') || cat.includes(currentFilter.toLowerCase());
            const matchesQuery = !query || title.includes(query) || desc.includes(query);

            if (matchesCategory && matchesQuery) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => {
                t.classList.remove('bg-[#16A34A]', 'text-white', 'shadow-sm');
                t.classList.add('text-[#374151]', 'bg-[#F8FAF8]', 'border', 'border-[#E5E7EB]');
            });
            this.classList.remove('text-[#374151]', 'bg-[#F8FAF8]', 'border', 'border-[#E5E7EB]');
            this.classList.add('bg-[#16A34A]', 'text-white', 'shadow-sm');

            currentFilter = this.getAttribute('data-filter') || 'all';
            filterCards();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', filterCards);
    }
});
</script>

<?php
get_footer();
