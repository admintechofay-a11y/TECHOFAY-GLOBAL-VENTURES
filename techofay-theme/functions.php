<?php
/**
 * Techofay Global Ventures Theme Functions
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

define( 'TECHOFAY_VERSION', '1.0.0' );
define( 'TECHOFAY_DIR', get_template_directory() );
define( 'TECHOFAY_URI', get_template_directory_uri() );

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function techofay_theme_setup() {
    // Make theme available for translation
    load_theme_textdomain( 'techofay', TECHOFAY_DIR . '/languages' );

    // Add default posts and comments RSS feed links to head
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails on posts and pages
    add_theme_support( 'post-thumbnails' );
    add_image_size( 'techofay-card', 600, 400, true );
    add_image_size( 'techofay-hero', 1920, 1080, false );
    add_image_size( 'techofay-avatar', 300, 300, true );

    // Switch default core markup to output valid HTML5
    add_theme_support(
        'html5',
        array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        )
    );

    // Custom logo support
    add_theme_support(
        'custom-logo',
        array(
            'height'      => 80,
            'width'       => 280,
            'flex-width'  => true,
            'flex-height' => true,
        )
    );

    // Register navigation menus
    register_nav_menus(
        array(
            'primary'   => esc_html__( 'Primary Header Navigation', 'techofay' ),
            'footer'    => esc_html__( 'Footer Quick Links', 'techofay' ),
            'services'  => esc_html__( 'Services Menu', 'techofay' ),
            'products'  => esc_html__( 'Products Menu', 'techofay' ),
        )
    );
}
add_action( 'after_setup_theme', 'techofay_theme_setup' );

/**
 * Enqueue scripts and styles.
 */
function techofay_enqueue_scripts() {
    // Google Fonts: Plus Jakarta Sans, Inter, JetBrains Mono
    wp_enqueue_style(
        'techofay-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap',
        array(),
        null
    );

    // Animations CSS
    wp_enqueue_style(
        'techofay-animations',
        TECHOFAY_URI . '/assets/css/animations.css',
        array(),
        TECHOFAY_VERSION
    );

    // Main Theme CSS (Complete styling, responsive layout, glassmorphism)
    wp_enqueue_style(
        'techofay-main',
        TECHOFAY_URI . '/assets/css/main.css',
        array( 'techofay-animations' ),
        TECHOFAY_VERSION
    );

    // Theme style.css
    wp_enqueue_style(
        'techofay-style',
        get_stylesheet_uri(),
        array( 'techofay-main' ),
        TECHOFAY_VERSION
    );

    // Three.js (r128)
    wp_enqueue_script(
        'three-js',
        'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
        array(),
        'r128',
        true
    );

    // GSAP Core
    wp_enqueue_script(
        'gsap',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.7/gsap.min.js',
        array(),
        '3.12.7',
        true
    );

    // GSAP ScrollTrigger
    wp_enqueue_script(
        'gsap-scroll-trigger',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.7/ScrollTrigger.min.js',
        array( 'gsap' ),
        '3.12.7',
        true
    );

    // Three.js Hero Canvas script
    wp_enqueue_script(
        'techofay-three-hero',
        TECHOFAY_URI . '/assets/js/three-hero.js',
        array( 'three-js' ),
        TECHOFAY_VERSION,
        true
    );

    // GSAP Scroll animations
    wp_enqueue_script(
        'techofay-gsap-scroll',
        TECHOFAY_URI . '/assets/js/gsap-scroll.js',
        array( 'gsap-scroll-trigger' ),
        TECHOFAY_VERSION,
        true
    );

    // Main Interactions (modals, mobile menu, tabs, accordions)
    wp_enqueue_script(
        'techofay-main',
        TECHOFAY_URI . '/assets/js/main.js',
        array(),
        TECHOFAY_VERSION,
        true
    );

    // AJAX Form submissions
    wp_enqueue_script(
        'techofay-contact-form',
        TECHOFAY_URI . '/assets/js/contact-form.js',
        array( 'techofay-main' ),
        TECHOFAY_VERSION,
        true
    );

    // Localize Script Data for AJAX
    wp_localize_script(
        'techofay-main',
        'techofayData',
        array(
            'ajaxUrl'       => admin_url( 'admin-ajax.php' ),
            'nonce'         => wp_create_nonce( 'techofay_ajax_nonce' ),
            'siteUrl'       => home_url( '/' ),
            'themeUrl'      => TECHOFAY_URI,
            'isFrontPage'   => is_front_page(),
        )
    );
}
add_action( 'wp_enqueue_scripts', 'techofay_enqueue_scripts' );

/**
 * Load Modules
 */
if ( file_exists( TECHOFAY_DIR . '/inc/custom-post-types.php' ) ) {
    require_once TECHOFAY_DIR . '/inc/custom-post-types.php';
}

if ( file_exists( TECHOFAY_DIR . '/inc/acf-fields.php' ) ) {
    require_once TECHOFAY_DIR . '/inc/acf-fields.php';
}

if ( file_exists( TECHOFAY_DIR . '/inc/ajax-handlers.php' ) ) {
    require_once TECHOFAY_DIR . '/inc/ajax-handlers.php';
}

if ( file_exists( TECHOFAY_DIR . '/inc/email-functions.php' ) ) {
    require_once TECHOFAY_DIR . '/inc/email-functions.php';
}

if ( file_exists( TECHOFAY_DIR . '/inc/admin-dashboard.php' ) ) {
    require_once TECHOFAY_DIR . '/inc/admin-dashboard.php';
}

if ( file_exists( TECHOFAY_DIR . '/inc/seed-content.php' ) ) {
    require_once TECHOFAY_DIR . '/inc/seed-content.php';
}

