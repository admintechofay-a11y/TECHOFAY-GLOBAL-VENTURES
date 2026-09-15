<?php
/**
 * Branded HTML Email Dispatcher
 *
 * Generates and sends high-contrast enterprise email notifications
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Dispatches both Admin Notification and User Auto-Reply for Contact Inquiries
 */
function techofay_send_inquiry_emails( $data ) {
    $admin_email = get_option( 'admin_email' );
    $headers     = array( 'Content-Type: text/html; charset=UTF-8' );

    // 1. ADMIN NOTIFICATION EMAIL
    $admin_subject = sprintf(
        '🚨 New Enterprise Inquiry: %s (%s)',
        $data['fullName'],
        ! empty( $data['companyName'] ) ? $data['companyName'] : 'Direct Client'
    );

    $admin_body = '
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="margin: 0; padding: 24px; background-color: #050B1F; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; color: #ffffff;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #0A1628; border-radius: 16px; border: 1px solid rgba(43,110,250,0.3); overflow: hidden; padding: 32px;">
            <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 24px;">
                <span style="color: #00D4FF; font-size: 11px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">NEW COMMERCIAL TELEMETRY</span>
                <h1 style="color: #ffffff; font-size: 24px; margin: 8px 0 0 0;">Inquiry Received &bull; TECHOFAY</h1>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr><td style="padding: 10px 0; color: #8B9AB5; font-size: 13px; width: 140px;">Client Name:</td><td style="padding: 10px 0; color: #ffffff; font-size: 14px; font-weight: bold;">' . esc_html( $data['fullName'] ) . '</td></tr>
                <tr><td style="padding: 10px 0; color: #8B9AB5; font-size: 13px;">Corporate Email:</td><td style="padding: 10px 0; color: #00D4FF; font-size: 14px;"><a href="mailto:' . esc_attr( $data['email'] ) . '" style="color: #00D4FF; text-decoration: none;">' . esc_html( $data['email'] ) . '</a></td></tr>
                <tr><td style="padding: 10px 0; color: #8B9AB5; font-size: 13px;">Direct Phone:</td><td style="padding: 10px 0; color: #ffffff; font-size: 14px;"><a href="tel:' . esc_attr( $data['phone'] ) . '" style="color: #ffffff; text-decoration: none;">' . esc_html( $data['phone'] ) . '</a></td></tr>
                <tr><td style="padding: 10px 0; color: #8B9AB5; font-size: 13px;">Company / Entity:</td><td style="padding: 10px 0; color: #ffffff; font-size: 14px;">' . esc_html( $data['companyName'] ) . '</td></tr>
                <tr><td style="padding: 10px 0; color: #8B9AB5; font-size: 13px;">Vertical Interest:</td><td style="padding: 10px 0; color: #2B6EFA; font-size: 14px; font-weight: bold;">' . esc_html( $data['service'] ) . '</td></tr>
                <tr><td style="padding: 10px 0; color: #8B9AB5; font-size: 13px;">Budget Range:</td><td style="padding: 10px 0; color: #00D4FF; font-size: 14px;">' . esc_html( $data['budget'] ) . '</td></tr>
            </table>

            <div style="background-color: rgba(255,255,255,0.04); border-left: 4px solid #00D4FF; padding: 18px; border-radius: 8px; margin-bottom: 24px;">
                <span style="color: #00D4FF; font-size: 11px; font-weight: bold; text-transform: uppercase; display: block; margin-bottom: 8px;">Project Scope & Requirements:</span>
                <p style="margin: 0; color: #e2e8f0; font-size: 13px; line-height: 1.6;">' . nl2br( esc_html( $data['message'] ) ) . '</p>
            </div>

            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; font-size: 11px; color: #8B9AB5;">
                Transmitted via TECHOFAY GLOBAL VENTURES Web Core &bull; IP: ' . esc_html( $data['ip'] ) . '
            </div>
        </div>
    </body>
    </html>';

    wp_mail( $admin_email, $admin_subject, $admin_body, $headers );

    // 2. CLIENT CONFIRMATION AUTO-REPLY
    $client_subject = 'Thank You for Contacting TECHOFAY GLOBAL VENTURES';
    $client_body = '
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="margin: 0; padding: 24px; background-color: #050B1F; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; color: #ffffff;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #0A1628; border-radius: 16px; border: 1px solid rgba(43,110,250,0.3); overflow: hidden; padding: 32px;">
            <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 24px;">
                <h1 style="color: #ffffff; font-size: 22px; margin: 0;">TECHOFAY GLOBAL VENTURES</h1>
                <p style="color: #00D4FF; font-size: 13px; margin: 4px 0 0 0;">Engineering the Future, One Solution at a Time.</p>
            </div>

            <p style="font-size: 14px; color: #ffffff; line-height: 1.6;">Dear ' . esc_html( $data['fullName'] ) . ',</p>
            <p style="font-size: 14px; color: #8B9AB5; line-height: 1.6;">Thank you for contacting <strong>TECHOFAY GLOBAL VENTURES</strong>. Our solutions architecture team has received your inquiry regarding <strong>' . esc_html( $data['service'] ) . '</strong>.</p>
            
            <div style="background-color: rgba(0,212,255,0.06); border: 1px solid rgba(0,212,255,0.25); border-radius: 12px; padding: 18px; margin: 24px 0;">
                <h4 style="margin: 0 0 6px 0; color: #00D4FF; font-size: 13px;">What Happens Next?</h4>
                <p style="margin: 0; color: #e2e8f0; font-size: 12px; line-height: 1.6;">
                    A senior solutions engineer will review your project requirements and prepare an initial architectural scope. We will contact you via email or phone within 24 business hours.
                </p>
            </div>

            <p style="font-size: 12px; color: #8B9AB5; line-height: 1.6;">
                Need immediate emergency response? Call our global hotline at <a href="tel:+919359339000" style="color: #00D4FF;">+91-9359339000</a>.
            </p>

            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; margin-top: 24px; font-size: 11px; color: #8B9AB5;">
                <strong>TECHOFAY GLOBAL VENTURES</strong><br>
                Global HQ: Vadodara, Gujarat, India &bull; Bangalore &bull; Chennai &bull; Edinburgh (UK)<br>
                Web: <a href="https://techofay.com" style="color: #00D4FF;">www.techofay.com</a>
            </div>
        </div>
    </body>
    </html>';

    wp_mail( $data['email'], $client_subject, $client_body, $headers );
}

/**
 * Dispatches Career Application Notification to HR/Admin
 */
function techofay_send_career_email( $data ) {
    $admin_email = get_option( 'admin_email' );
    $headers     = array( 'Content-Type: text/html; charset=UTF-8' );

    $subject = sprintf( '💼 New Career Application: %s for %s', $data['applicant_name'], $data['applied_job'] );

    $body = '
    <!DOCTYPE html>
    <html>
    <body style="background-color: #050B1F; color: #ffffff; padding: 24px; font-family: Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background: #0A1628; padding: 30px; border-radius: 12px; border: 1px solid rgba(43,110,250,0.3);">
            <h2 style="color: #00D4FF; margin-top: 0;">New Career Application Received</h2>
            <p><strong>Candidate Name:</strong> ' . esc_html( $data['applicant_name'] ) . '</p>
            <p><strong>Role Applied For:</strong> ' . esc_html( $data['applied_job'] ) . '</p>
            <p><strong>Email:</strong> <a href="mailto:' . esc_attr( $data['applicant_email'] ) . '" style="color: #00D4FF;">' . esc_html( $data['applicant_email'] ) . '</a></p>
            <p><strong>Phone:</strong> ' . esc_html( $data['applicant_phone'] ) . '</p>
            <p><strong>LinkedIn Profile:</strong> <a href="' . esc_url( $data['linkedin_url'] ) . '" style="color: #00D4FF;">' . esc_html( $data['linkedin_url'] ) . '</a></p>
            <p><strong>Resume URL:</strong> <a href="' . esc_url( $data['resume_url'] ) . '" style="color: #00D4FF; font-weight: bold;">' . esc_html( $data['resume_url'] ) . '</a></p>
        </div>
    </body>
    </html>';

    wp_mail( $admin_email, $subject, $body, $headers );
}
