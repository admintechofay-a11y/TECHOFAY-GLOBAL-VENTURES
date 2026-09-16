<?php
/**
 * Custom WordPress Admin Dashboard Extension
 *
 * Inquiries manager, career applications portal, inline status updates, CSV export
 *
 * @package Techofay_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Register Admin Menus
 */
function techofay_register_admin_menus() {
    add_menu_page(
        __( 'Techofay Command Center', 'techofay' ),
        __( 'Techofay', 'techofay' ),
        'manage_options',
        'techofay-dashboard',
        'techofay_render_admin_dashboard',
        'dashicons-chart-area',
        2
    );

    add_submenu_page(
        'techofay-dashboard',
        __( 'Dashboard Overview', 'techofay' ),
        __( 'Dashboard', 'techofay' ),
        'manage_options',
        'techofay-dashboard',
        'techofay_render_admin_dashboard'
    );

    add_submenu_page(
        'techofay-dashboard',
        __( 'Contact Inquiries', 'techofay' ),
        __( 'Inquiries', 'techofay' ),
        'manage_options',
        'techofay-inquiries',
        'techofay_render_admin_inquiries'
    );

    add_submenu_page(
        'techofay-dashboard',
        __( 'Career Applications', 'techofay' ),
        __( 'Applications', 'techofay' ),
        'manage_options',
        'techofay-applications',
        'techofay_render_admin_applications'
    );
}
add_action( 'admin_menu', 'techofay_register_admin_menus' );

/**
 * Render Dashboard Overview Page
 */
function techofay_render_admin_dashboard() {
    // Count stats
    $inquiry_count = wp_count_posts( 'contact_inquiry' )->private ?? 0;
    $jobs_count    = wp_count_posts( 'job_opening' )->publish ?? 0;
    $app_count     = wp_count_posts( 'career_application' )->private ?? 0;
    $service_count = wp_count_posts( 'techofay_service' )->publish ?? 0;

    // Recent 10 Inquiries
    $recent_inquiries = get_posts( array(
        'post_type'      => 'contact_inquiry',
        'posts_per_page' => 10,
        'post_status'    => 'private',
        'orderby'        => 'date',
        'order'          => 'DESC',
    ) );
    ?>
    <div class="wrap" style="max-width: 1200px;">
        <?php if ( isset( $_GET['seeded'] ) ) : ?>
            <div class="notice notice-success is-dismissible" style="padding: 12px 16px; margin-bottom: 20px;">
                <p style="font-weight: 600; font-size: 14px; margin: 0;">
                    🎉 <strong>Setup Success:</strong> All 8 Core Pages, 6 Enterprise Services, and 5 Flagship SaaS Suites have been populated with default architectures and pricing!
                </p>
            </div>
        <?php endif; ?>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 12px;">
            <h1 style="display: flex; align-items: center; gap: 10px; margin: 0;">
                <span style="color: #2B6EFA;">&#9670;</span>
                <span>TECHOFAY GLOBAL VENTURES &mdash; Command Dashboard</span>
            </h1>

            <form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" style="margin: 0;">
                <input type="hidden" name="action" value="techofay_seed_content" />
                <?php wp_nonce_field( 'techofay_seed_nonce' ); ?>
                <button type="submit" class="button button-primary" style="background: #10b981; border-color: #059669; font-weight: 600;" onclick="return confirm('Seed default pages, 6 services, and 5 SaaS products? Existing content will not be overwritten.');">
                    ⚡ 1-Click Seed All Default Website Content & Pages
                </button>
            </form>
        </div>

        <!-- Stats Grid -->

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-bottom: 30px;">
            <div style="background: #fff; border-left: 4px solid #2B6EFA; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <div style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: bold;">Total Inquiries</div>
                <div style="font-size: 32px; font-weight: 800; color: #0f172a; margin-top: 4px;"><?php echo esc_html( $inquiry_count ); ?></div>
            </div>
            <div style="background: #fff; border-left: 4px solid #00D4FF; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <div style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: bold;">Job Openings Active</div>
                <div style="font-size: 32px; font-weight: 800; color: #0f172a; margin-top: 4px;"><?php echo esc_html( $jobs_count ); ?></div>
            </div>
            <div style="background: #fff; border-left: 4px solid #10b981; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <div style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: bold;">Candidate Applications</div>
                <div style="font-size: 32px; font-weight: 800; color: #0f172a; margin-top: 4px;"><?php echo esc_html( $app_count ); ?></div>
            </div>
            <div style="background: #fff; border-left: 4px solid #8b5cf6; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <div style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: bold;">Active Verticals</div>
                <div style="font-size: 32px; font-weight: 800; color: #0f172a; margin-top: 4px;"><?php echo esc_html( $service_count ); ?></div>
            </div>
        </div>

        <!-- Recent Inquiries Section -->
        <div style="background: #fff; padding: 24px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 style="margin: 0; font-size: 18px;">Recent Inquiries (Commercial Pipeline)</h2>
                <a href="<?php echo esc_url( admin_url( 'admin-post.php?action=techofay_export_csv' ) ); ?>" class="button button-primary" style="background: #2B6EFA; border-color: #2B6EFA;">
                    &darr; Export Inquiries to CSV
                </a>
            </div>

            <table class="wp-list-table widefat fixed striped">
                <thead>
                    <tr>
                        <th style="width: 18%;">Name</th>
                        <th style="width: 22%;">Contact</th>
                        <th style="width: 20%;">Vertical / Service</th>
                        <th style="width: 15%;">Budget</th>
                        <th style="width: 12%;">Status</th>
                        <th style="width: 13%;">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if ( ! empty( $recent_inquiries ) ) : ?>
                        <?php foreach ( $recent_inquiries as $inq ) : ?>
                            <?php
                            $fname   = get_post_meta( $inq->ID, 'inquiry_full_name', true ) ?: $inq->post_title;
                            $email   = get_post_meta( $inq->ID, 'inquiry_email', true );
                            $phone   = get_post_meta( $inq->ID, 'inquiry_phone', true );
                            $service = get_post_meta( $inq->ID, 'inquiry_service', true ) ?: 'General';
                            $budget  = get_post_meta( $inq->ID, 'inquiry_budget', true ) ?: 'N/A';
                            $status  = get_post_meta( $inq->ID, 'inquiry_status', true ) ?: 'New';
                            ?>
                            <tr>
                                <td><strong><?php echo esc_html( $fname ); ?></strong></td>
                                <td>
                                    <div><a href="mailto:<?php echo esc_attr( $email ); ?>"><?php echo esc_html( $email ); ?></a></div>
                                    <div style="font-size: 11px; color: #64748b;"><?php echo esc_html( $phone ); ?></div>
                                </td>
                                <td><span style="background: #f1f5f9; padding: 3px 8px; border-radius: 4px; font-weight: 500;"><?php echo esc_html( $service ); ?></span></td>
                                <td><?php echo esc_html( $budget ); ?></td>
                                <td>
                                    <span style="display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; <?php echo $status === 'Resolved' ? 'background: rgba(245,158,11,0.15); color: #B45309;' : ($status === 'In Progress' ? 'background: #fef9c3; color: #854d0e;' : 'background: #e0f2fe; color: #075985;'); ?>">
                                        <?php echo esc_html( $status ); ?>
                                    </span>
                                </td>
                                <td style="font-size: 12px; color: #64748b;"><?php echo get_the_date( 'M j, Y', $inq->ID ); ?></td>
                            </tr>
                        <?php endforeach; ?>
                    <?php else : ?>
                        <tr><td colspan="6" style="text-align: center; padding: 30px; color: #64748b;">No inquiries received yet.</td></tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>
    <?php
}

/**
 * Render Contact Inquiries Full Page
 */
function techofay_render_admin_inquiries() {
    $inquiries = get_posts( array(
        'post_type'      => 'contact_inquiry',
        'posts_per_page' => 100,
        'post_status'    => 'private',
        'orderby'        => 'date',
        'order'          => 'DESC',
    ) );
    ?>
    <div class="wrap" style="max-width: 1200px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h1>All Contact Inquiries & Leads</h1>
            <a href="<?php echo esc_url( admin_url( 'admin-post.php?action=techofay_export_csv' ) ); ?>" class="button button-primary">
                &darr; Download CSV Report
            </a>
        </div>

        <table class="wp-list-table widefat fixed striped">
            <thead>
                <tr>
                    <th style="width: 15%;">Name</th>
                    <th style="width: 20%;">Email</th>
                    <th style="width: 15%;">Phone</th>
                    <th style="width: 20%;">Service Interest</th>
                    <th style="width: 15%;">Company</th>
                    <th style="width: 15%;">Date</th>
                </tr>
            </thead>
            <tbody>
                <?php if ( ! empty( $inquiries ) ) : ?>
                    <?php foreach ( $inquiries as $inq ) : ?>
                        <tr>
                            <td><strong><?php echo esc_html( get_post_meta( $inq->ID, 'inquiry_full_name', true ) ?: $inq->post_title ); ?></strong></td>
                            <td><a href="mailto:<?php echo esc_attr( get_post_meta( $inq->ID, 'inquiry_email', true ) ); ?>"><?php echo esc_html( get_post_meta( $inq->ID, 'inquiry_email', true ) ); ?></a></td>
                            <td><?php echo esc_html( get_post_meta( $inq->ID, 'inquiry_phone', true ) ); ?></td>
                            <td><?php echo esc_html( get_post_meta( $inq->ID, 'inquiry_service', true ) ); ?></td>
                            <td><?php echo esc_html( get_post_meta( $inq->ID, 'inquiry_company', true ) ?: 'N/A' ); ?></td>
                            <td><?php echo get_the_date( 'M j, Y H:i', $inq->ID ); ?></td>
                        </tr>
                    <?php endforeach; ?>
                <?php else : ?>
                    <tr><td colspan="6" style="text-align: center; padding: 40px;">No records found.</td></tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
    <?php
}

/**
 * Render Career Applications Page
 */
function techofay_render_admin_applications() {
    $apps = get_posts( array(
        'post_type'      => 'career_application',
        'posts_per_page' => 100,
        'post_status'    => 'private',
        'orderby'        => 'date',
        'order'          => 'DESC',
    ) );
    ?>
    <div class="wrap" style="max-width: 1200px;">
        <h1>Candidate Applications</h1>
        <table class="wp-list-table widefat fixed striped" style="margin-top: 20px;">
            <thead>
                <tr>
                    <th style="width: 20%;">Candidate Name</th>
                    <th style="width: 25%;">Position Applied</th>
                    <th style="width: 20%;">Email & Phone</th>
                    <th style="width: 20%;">Profiles & Resume</th>
                    <th style="width: 15%;">Application Date</th>
                </tr>
            </thead>
            <tbody>
                <?php if ( ! empty( $apps ) ) : ?>
                    <?php foreach ( $apps as $app ) : ?>
                        <?php
                        $name       = get_post_meta( $app->ID, 'applicant_name', true ) ?: $app->post_title;
                        $job        = get_post_meta( $app->ID, 'applied_job', true );
                        $email      = get_post_meta( $app->ID, 'applicant_email', true );
                        $phone      = get_post_meta( $app->ID, 'applicant_phone', true );
                        $linkedin   = get_post_meta( $app->ID, 'linkedin_url', true );
                        $resume     = get_post_meta( $app->ID, 'resume_url', true );
                        ?>
                        <tr>
                            <td><strong><?php echo esc_html( $name ); ?></strong></td>
                            <td><span style="font-weight: 600; color: #2B6EFA;"><?php echo esc_html( $job ); ?></span></td>
                            <td>
                                <div><a href="mailto:<?php echo esc_attr( $email ); ?>"><?php echo esc_html( $email ); ?></a></div>
                                <div style="font-size: 11px; color: #64748b;"><?php echo esc_html( $phone ); ?></div>
                            </td>
                            <td>
                                <?php if ( $linkedin ) : ?>
                                    <a href="<?php echo esc_url( $linkedin ); ?>" target="_blank" class="button button-small" style="margin-right: 4px;">LinkedIn &rarr;</a>
                                <?php endif; ?>
                                <?php if ( $resume ) : ?>
                                    <a href="<?php echo esc_url( $resume ); ?>" target="_blank" class="button button-small button-primary">&darr; View Resume</a>
                                <?php endif; ?>
                            </td>
                            <td><?php echo get_the_date( 'M j, Y', $app->ID ); ?></td>
                        </tr>
                    <?php endforeach; ?>
                <?php else : ?>
                    <tr><td colspan="5" style="text-align: center; padding: 40px;">No applications submitted yet.</td></tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
    <?php
}

/**
 * Handle CSV Export Action
 */
function techofay_handle_csv_export() {
    if ( ! current_user_can( 'manage_options' ) ) {
        wp_die( 'Unauthorized' );
    }

    $inquiries = get_posts( array(
        'post_type'      => 'contact_inquiry',
        'posts_per_page' => -1,
        'post_status'    => 'private',
        'orderby'        => 'date',
        'order'          => 'DESC',
    ) );

    header( 'Content-Type: text/csv; charset=utf-8' );
    header( 'Content-Disposition: attachment; filename=techofay_inquiries_' . date( 'Y-m-d' ) . '.csv' );

    $output = fopen( 'php://output', 'w' );
    fputcsv( $output, array( 'ID', 'Name', 'Email', 'Phone', 'Company', 'Service', 'Budget', 'Status', 'Date', 'Message' ) );

    foreach ( $inquiries as $inq ) {
        fputcsv( $output, array(
            $inq->ID,
            get_post_meta( $inq->ID, 'inquiry_full_name', true ) ?: $inq->post_title,
            get_post_meta( $inq->ID, 'inquiry_email', true ),
            get_post_meta( $inq->ID, 'inquiry_phone', true ),
            get_post_meta( $inq->ID, 'inquiry_company', true ),
            get_post_meta( $inq->ID, 'inquiry_service', true ),
            get_post_meta( $inq->ID, 'inquiry_budget', true ),
            get_post_meta( $inq->ID, 'inquiry_status', true ) ?: 'New',
            get_the_date( 'Y-m-d H:i:s', $inq->ID ),
            $inq->post_content,
        ) );
    }

    fclose( $output );
    exit;
}
add_action( 'admin_post_techofay_export_csv', 'techofay_handle_csv_export' );
