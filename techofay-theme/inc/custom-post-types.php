<?php
/**
 * Register Custom Post Types and Taxonomies for Techofay Global Ventures
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Register all Custom Post Types
 */
function techofay_register_post_types() {

    // 1. Services Post Type
    $service_labels = array(
        'name'                  => _x( 'Services', 'Post Type General Name', 'techofay' ),
        'singular_name'         => _x( 'Service', 'Post Type Singular Name', 'techofay' ),
        'menu_name'             => __( 'Services', 'techofay' ),
        'name_admin_bar'        => __( 'Service', 'techofay' ),
        'archives'              => __( 'Service Archives', 'techofay' ),
        'all_items'             => __( 'All Services', 'techofay' ),
        'add_new_item'          => __( 'Add New Service', 'techofay' ),
        'add_new'               => __( 'Add New', 'techofay' ),
        'new_item'              => __( 'New Service', 'techofay' ),
        'edit_item'             => __( 'Edit Service', 'techofay' ),
        'update_item'           => __( 'Update Service', 'techofay' ),
        'view_item'             => __( 'View Service', 'techofay' ),
        'search_items'          => __( 'Search Service', 'techofay' ),
    );
    $service_args = array(
        'label'                 => __( 'Service', 'techofay' ),
        'description'           => __( 'Enterprise Services & Verticals', 'techofay' ),
        'labels'                => $service_labels,
        'supports'              => array( 'title', 'editor', 'thumbnail', 'excerpt', 'revisions' ),
        'taxonomies'            => array( 'service_category' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-shield',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => 'services',
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
        'rewrite'               => array( 'slug' => 'service', 'with_front' => false ),
    );
    register_post_type( 'techofay_service', $service_args );

    // 2. Products Post Type (SaaS Suites)
    $product_labels = array(
        'name'                  => _x( 'Products', 'Post Type General Name', 'techofay' ),
        'singular_name'         => _x( 'Product', 'Post Type Singular Name', 'techofay' ),
        'menu_name'             => __( 'Products (SaaS)', 'techofay' ),
        'name_admin_bar'        => __( 'Product', 'techofay' ),
        'archives'              => __( 'Product Archives', 'techofay' ),
        'all_items'             => __( 'All Products', 'techofay' ),
        'add_new_item'          => __( 'Add New Product', 'techofay' ),
        'add_new'               => __( 'Add New', 'techofay' ),
        'new_item'              => __( 'New Product', 'techofay' ),
        'edit_item'             => __( 'Edit Product', 'techofay' ),
        'update_item'           => __( 'Update Product', 'techofay' ),
        'view_item'             => __( 'View Product', 'techofay' ),
        'search_items'          => __( 'Search Product', 'techofay' ),
    );
    $product_args = array(
        'label'                 => __( 'Product', 'techofay' ),
        'description'           => __( 'Flagship SaaS Products', 'techofay' ),
        'labels'                => $product_labels,
        'supports'              => array( 'title', 'editor', 'thumbnail', 'excerpt', 'revisions' ),
        'taxonomies'            => array( 'product_category' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 6,
        'menu_icon'             => 'dashicons-cloud',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => 'products',
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
        'rewrite'               => array( 'slug' => 'product', 'with_front' => false ),
    );
    register_post_type( 'techofay_product', $product_args );

    // 3. Testimonials Post Type
    $testimonial_labels = array(
        'name'                  => _x( 'Testimonials', 'Post Type General Name', 'techofay' ),
        'singular_name'         => _x( 'Testimonial', 'Post Type Singular Name', 'techofay' ),
        'menu_name'             => __( 'Testimonials', 'techofay' ),
        'all_items'             => __( 'All Testimonials', 'techofay' ),
        'add_new_item'          => __( 'Add New Testimonial', 'techofay' ),
        'edit_item'             => __( 'Edit Testimonial', 'techofay' ),
    );
    register_post_type( 'testimonial', array(
        'labels'                => $testimonial_labels,
        'supports'              => array( 'title', 'editor', 'thumbnail' ),
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 20,
        'menu_icon'             => 'dashicons-testimonial',
        'show_in_rest'          => true,
        'publicly_queryable'    => false,
    ) );

    // 4. Team Members Post Type
    $team_labels = array(
        'name'                  => _x( 'Team Members', 'Post Type General Name', 'techofay' ),
        'singular_name'         => _x( 'Team Member', 'Post Type Singular Name', 'techofay' ),
        'menu_name'             => __( 'Team Members', 'techofay' ),
        'all_items'             => __( 'All Team Members', 'techofay' ),
        'add_new_item'          => __( 'Add New Member', 'techofay' ),
        'edit_item'             => __( 'Edit Member', 'techofay' ),
    );
    register_post_type( 'team_member', array(
        'labels'                => $team_labels,
        'supports'              => array( 'title', 'editor', 'thumbnail' ),
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 21,
        'menu_icon'             => 'dashicons-groups',
        'show_in_rest'          => true,
        'publicly_queryable'    => false,
    ) );

    // 5. Job Openings Post Type
    $job_labels = array(
        'name'                  => _x( 'Job Openings', 'Post Type General Name', 'techofay' ),
        'singular_name'         => _x( 'Job Opening', 'Post Type Singular Name', 'techofay' ),
        'menu_name'             => __( 'Careers & Jobs', 'techofay' ),
        'all_items'             => __( 'All Job Openings', 'techofay' ),
        'add_new_item'          => __( 'Add New Job', 'techofay' ),
        'edit_item'             => __( 'Edit Job Opening', 'techofay' ),
    );
    register_post_type( 'job_opening', array(
        'labels'                => $job_labels,
        'supports'              => array( 'title', 'editor' ),
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 22,
        'menu_icon'             => 'dashicons-businessperson',
        'show_in_rest'          => true,
        'publicly_queryable'    => true,
        'rewrite'               => array( 'slug' => 'careers', 'with_front' => false ),
    ) );

    // 6. Client Logos Post Type
    $client_labels = array(
        'name'                  => _x( 'Client Logos', 'Post Type General Name', 'techofay' ),
        'singular_name'         => _x( 'Client Logo', 'Post Type Singular Name', 'techofay' ),
        'menu_name'             => __( 'Client Logos', 'techofay' ),
        'all_items'             => __( 'All Client Logos', 'techofay' ),
        'add_new_item'          => __( 'Add New Client Logo', 'techofay' ),
    );
    register_post_type( 'client_logo', array(
        'labels'                => $client_labels,
        'supports'              => array( 'title', 'thumbnail' ),
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 23,
        'menu_icon'             => 'dashicons-images-alt2',
        'show_in_rest'          => true,
        'publicly_queryable'    => false,
    ) );

    // 7. Contact Inquiries (Internal / Private CPT)
    $inquiry_labels = array(
        'name'                  => _x( 'Inquiries', 'Post Type General Name', 'techofay' ),
        'singular_name'         => _x( 'Inquiry', 'Post Type Singular Name', 'techofay' ),
        'menu_name'             => __( 'Inquiries Data', 'techofay' ),
        'all_items'             => __( 'Raw Inquiries', 'techofay' ),
        'edit_item'             => __( 'View Inquiry', 'techofay' ),
    );
    register_post_type( 'contact_inquiry', array(
        'labels'                => $inquiry_labels,
        'supports'              => array( 'title' ),
        'public'                => false,
        'show_ui'               => true,
        'show_in_menu'          => false, // Managed inside Techofay Admin Dashboard
        'can_export'            => true,
        'publicly_queryable'    => false,
    ) );

    // 8. Career Applications (Internal / Private CPT)
    $application_labels = array(
        'name'                  => _x( 'Applications', 'Post Type General Name', 'techofay' ),
        'singular_name'         => _x( 'Application', 'Post Type Singular Name', 'techofay' ),
        'menu_name'             => __( 'Career Applications Data', 'techofay' ),
        'all_items'             => __( 'Raw Applications', 'techofay' ),
        'edit_item'             => __( 'View Application', 'techofay' ),
    );
    register_post_type( 'career_application', array(
        'labels'                => $application_labels,
        'supports'              => array( 'title' ),
        'public'                => false,
        'show_ui'               => true,
        'show_in_menu'          => false, // Managed inside Techofay Admin Dashboard
        'can_export'            => true,
        'publicly_queryable'    => false,
    ) );
}
add_action( 'init', 'techofay_register_post_types' );

/**
 * Register Taxonomies
 */
function techofay_register_taxonomies() {
    // Service Category
    register_taxonomy(
        'service_category',
        'techofay_service',
        array(
            'label'        => __( 'Service Categories', 'techofay' ),
            'rewrite'      => array( 'slug' => 'service-category' ),
            'hierarchical' => true,
            'show_in_rest' => true,
        )
    );

    // Product Category
    register_taxonomy(
        'product_category',
        'techofay_product',
        array(
            'label'        => __( 'Product Categories', 'techofay' ),
            'rewrite'      => array( 'slug' => 'product-category' ),
            'hierarchical' => true,
            'show_in_rest' => true,
        )
    );

    // Job Department
    register_taxonomy(
        'job_department',
        'job_opening',
        array(
            'label'        => __( 'Departments', 'techofay' ),
            'rewrite'      => array( 'slug' => 'department' ),
            'hierarchical' => true,
            'show_in_rest' => true,
        )
    );
}
add_action( 'init', 'techofay_register_taxonomies' );
