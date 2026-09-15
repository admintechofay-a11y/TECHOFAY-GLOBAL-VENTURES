<?php
/**
 * AJAX Handlers for Contact Form & Career Applications
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Handle Contact Inquiry Submission
 */
function techofay_handle_contact_submit() {
    // 1. Verify Nonce
    check_ajax_referer( 'techofay_ajax_nonce', 'nonce' );

    // 2. Client IP Rate Limiting (Max 5 submissions per hour)
    $ip = isset( $_SERVER['REMOTE_ADDR'] ) ? sanitize_text_field( $_SERVER['REMOTE_ADDR'] ) : 'unknown';
    $rate_limit_key = 'techofay_rate_' . md5( $ip );
    $attempts = (int) get_transient( $rate_limit_key );

    if ( $attempts >= 5 ) {
        wp_send_json_error( array(
            'message' => __( 'Rate limit exceeded. Please wait a while or call +91-9359339000.', 'techofay' ),
        ), 429 );
    }

    // 3. Sanitize and Validate Inputs
    $full_name    = isset( $_POST['fullName'] ) ? sanitize_text_field( $_POST['fullName'] ) : '';
    $email        = isset( $_POST['email'] ) ? sanitize_email( $_POST['email'] ) : '';
    $phone        = isset( $_POST['phone'] ) ? sanitize_text_field( $_POST['phone'] ) : '';
    $company_name = isset( $_POST['companyName'] ) ? sanitize_text_field( $_POST['companyName'] ) : '';
    $service      = isset( $_POST['service'] ) ? sanitize_text_field( $_POST['service'] ) : 'General Inquiry';
    $budget       = isset( $_POST['budget'] ) ? sanitize_text_field( $_POST['budget'] ) : 'Not specified';
    $message      = isset( $_POST['message'] ) ? sanitize_textarea_field( $_POST['message'] ) : '';

    if ( empty( $full_name ) || empty( $email ) || ! is_email( $email ) || empty( $phone ) || empty( $message ) ) {
        wp_send_json_error( array(
            'message' => __( 'Please provide all mandatory fields with a valid email address.', 'techofay' ),
        ), 400 );
    }

    // 4. Save to Database as Private Contact Inquiry CPT
    $post_id = wp_insert_post( array(
        'post_title'   => sprintf( '%s — %s (%s)', $full_name, $service, date( 'Y-m-d H:i' ) ),
        'post_type'    => 'contact_inquiry',
        'post_status'  => 'private',
        'post_content' => $message,
    ) );

    if ( is_wp_error( $post_id ) ) {
        wp_send_json_error( array(
            'message' => __( 'Database write error. Please contact us by phone.', 'techofay' ),
        ), 500 );
    }

    // Update Post Meta
    update_post_meta( $post_id, 'inquiry_full_name', $full_name );
    update_post_meta( $post_id, 'inquiry_email', $email );
    update_post_meta( $post_id, 'inquiry_phone', $phone );
    update_post_meta( $post_id, 'inquiry_company', $company_name );
    update_post_meta( $post_id, 'inquiry_service', $service );
    update_post_meta( $post_id, 'inquiry_budget', $budget );
    update_post_meta( $post_id, 'inquiry_status', 'New' );
    update_post_meta( $post_id, 'inquiry_ip', $ip );
    update_post_meta( $post_id, 'inquiry_date', current_time( 'mysql' ) );

    // 5. Increment Rate Limit Transient (Expires in 3600 seconds / 1 hour)
    set_transient( $rate_limit_key, $attempts + 1, HOUR_IN_SECONDS );

    // 6. Send Branded HTML Notifications
    if ( function_exists( 'techofay_send_inquiry_emails' ) ) {
        techofay_send_inquiry_emails( array(
            'fullName'    => $full_name,
            'email'       => $email,
            'phone'       => $phone,
            'companyName' => $company_name,
            'service'     => $service,
            'budget'      => $budget,
            'message'     => $message,
            'ip'          => $ip,
        ) );
    }

    wp_send_json_success( array(
        'message' => __( 'Inquiry successfully transmitted! Our solutions engineering team will reach out within 24 hours.', 'techofay' ),
    ) );
}
add_action( 'wp_ajax_techofay_contact_submit', 'techofay_handle_contact_submit' );
add_action( 'wp_ajax_nopriv_techofay_contact_submit', 'techofay_handle_contact_submit' );

/**
 * Handle Career Application Submission
 */
function techofay_handle_career_submit() {
    check_ajax_referer( 'techofay_ajax_nonce', 'nonce' );

    $name        = isset( $_POST['applicant_name'] ) ? sanitize_text_field( $_POST['applicant_name'] ) : '';
    $email       = isset( $_POST['applicant_email'] ) ? sanitize_email( $_POST['applicant_email'] ) : '';
    $phone       = isset( $_POST['applicant_phone'] ) ? sanitize_text_field( $_POST['applicant_phone'] ) : '';
    $applied_job = isset( $_POST['applied_job'] ) ? sanitize_text_field( $_POST['applied_job'] ) : 'General Engineering';
    $linkedin    = isset( $_POST['linkedin_url'] ) ? esc_url_raw( $_POST['linkedin_url'] ) : '';
    $resume_url  = isset( $_POST['resume_url'] ) ? esc_url_raw( $_POST['resume_url'] ) : '';

    if ( empty( $name ) || empty( $email ) || ! is_email( $email ) || empty( $phone ) ) {
        wp_send_json_error( array(
            'message' => __( 'Please fill in all mandatory candidate fields.', 'techofay' ),
        ), 400 );
    }

    $post_id = wp_insert_post( array(
        'post_title'   => sprintf( '%s — %s (%s)', $name, $applied_job, date( 'Y-m-d' ) ),
        'post_type'    => 'career_application',
        'post_status'  => 'private',
    ) );

    if ( ! is_wp_error( $post_id ) ) {
        update_post_meta( $post_id, 'applicant_name', $name );
        update_post_meta( $post_id, 'applicant_email', $email );
        update_post_meta( $post_id, 'applicant_phone', $phone );
        update_post_meta( $post_id, 'applied_job', $applied_job );
        update_post_meta( $post_id, 'linkedin_url', $linkedin );
        update_post_meta( $post_id, 'resume_url', $resume_url );
        update_post_meta( $post_id, 'application_status', 'New' );

        if ( function_exists( 'techofay_send_career_email' ) ) {
            techofay_send_career_email( array(
                'applicant_name'  => $name,
                'applicant_email' => $email,
                'applicant_phone' => $phone,
                'applied_job'     => $applied_job,
                'linkedin_url'    => $linkedin,
                'resume_url'      => $resume_url,
            ) );
        }

        wp_send_json_success( array(
            'message' => __( 'Application transmitted successfully! Our technical recruiter will be in touch.', 'techofay' ),
        ) );
    }

    wp_send_json_error( array(
        'message' => __( 'Could not process candidate record. Please email resume to info@techofay.com.', 'techofay' ),
    ), 500 );
}
add_action( 'wp_ajax_techofay_career_submit', 'techofay_handle_career_submit' );
add_action( 'wp_ajax_nopriv_techofay_career_submit', 'techofay_handle_career_submit' );
