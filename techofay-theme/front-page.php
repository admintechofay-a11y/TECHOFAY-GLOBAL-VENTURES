<?php
/**
 * The template for displaying the front page
 * Exactly matches client/src/pages/Home.jsx structure
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<main id="primary" class="site-main overflow-hidden min-h-screen">
    <?php
    // 1. Hero Section with 3D Three.js canvas + floating telemetric cards + editable ACF copy
    get_template_part( 'template-parts/hero' );

    // 2. Telemetric Stats Bar
    get_template_part( 'template-parts/stats' );

    // 3. Enterprise Services Grid (6 Verticals)
    get_template_part( 'template-parts/services-grid' );

    // 4. Why Choose Us (Pillars & Architecture)
    get_template_part( 'template-parts/why-us' );

    // 5. Battle-Tested Engineering Lifecycle
    get_template_part( 'template-parts/process-timeline' );

    // 6. Enterprise Client Marquee Loop
    get_template_part( 'template-parts/client-marquee' );

    // 7. Enterprise Testimonials & Client Reviews
    get_template_part( 'template-parts/testimonials' );

    // 8. Blog & Technical Insights Preview
    get_template_part( 'template-parts/blog-preview' );

    // 9. High-Conversion CTA Banner
    get_template_part( 'template-parts/cta-banner' );
    ?>
</main>

<?php
get_footer();
