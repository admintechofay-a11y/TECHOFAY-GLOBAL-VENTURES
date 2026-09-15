<?php
/**
 * The template for displaying the front page
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<main id="primary" class="site-main overflow-hidden">
    <?php
    // 1. Hero Section with 3D Three.js canvas + editable ACF copy
    get_template_part( 'template-parts/hero' );

    // 2. Telemetric Stats Bar
    get_template_part( 'template-parts/stats' );

    // 3. Enterprise Services Grid (6 Verticals)
    get_template_part( 'template-parts/services-grid' );

    // 4. Why Choose Us (Pillars & Architecture)
    get_template_part( 'template-parts/why-us' );

    // 5. Battle-Tested Engineering Lifecycle
    get_template_part( 'template-parts/process-timeline' );

    // 6. Enterprise Testimonials & Client Reviews
    get_template_part( 'template-parts/testimonials' );

    // 7. Blog & Technical Insights Preview
    get_template_part( 'template-parts/blog-preview' );

    // 8. High-Conversion CTA Banner
    get_template_part( 'template-parts/cta-banner' );
    ?>
</main>

<?php
get_footer();
