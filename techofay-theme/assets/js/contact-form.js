/**
 * AJAX Form Submission Engine
 *
 * Contact inquiries & career applications with non-blocking async feedback
 *
 * @package Techofay_Theme
 */

document.addEventListener('DOMContentLoaded', () => {
    // ---------------------------------------------
    // 1. CONTACT FORM HANDLER
    // ---------------------------------------------
    const contactForm = document.getElementById('techofay-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = document.getElementById('contact-submit-btn');
            const feedbackBox = document.getElementById('contact-form-feedback');
            const originalBtnText = submitBtn ? submitBtn.innerHTML : '';

            // Client-side validation
            const formData = new FormData(contactForm);
            formData.append('action', 'techofay_contact_submit');
            formData.append('nonce', window.techofayData ? window.techofayData.nonce : '');

            // Loading state
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `
                    <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Transmitting Secure Telemetry...
                `;
            }

            if (feedbackBox) {
                feedbackBox.classList.add('hidden');
                feedbackBox.className = 'hidden p-4 rounded-xl text-xs';
            }

            try {
                const response = await fetch(window.techofayData.ajaxUrl, {
                    method: 'POST',
                    body: formData,
                });

                const result = await response.json();

                if (result.success) {
                    if (feedbackBox) {
                        feedbackBox.className = 'p-4 rounded-xl text-xs bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 block';
                        feedbackBox.innerText = result.data.message || 'Inquiry successfully transmitted. A solutions architect will contact you within 24 hours.';
                    }
                    contactForm.reset();
                } else {
                    if (feedbackBox) {
                        feedbackBox.className = 'p-4 rounded-xl text-xs bg-rose-500/10 border border-rose-500/30 text-rose-400 block';
                        feedbackBox.innerText = result.data.message || 'Submission error. Please call +91-9359339000 or email info@techofay.com.';
                    }
                }
            } catch (err) {
                if (feedbackBox) {
                    feedbackBox.className = 'p-4 rounded-xl text-xs bg-rose-500/10 border border-rose-500/30 text-rose-400 block';
                    feedbackBox.innerText = 'Network error. Please call +91-9359339000 directly.';
                }
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                }
            }
        });
    }

    // ---------------------------------------------
    // 2. CAREER APPLICATION FORM HANDLER
    // ---------------------------------------------
    const careerForm = document.getElementById('career-form');
    if (careerForm) {
        careerForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = document.getElementById('career-submit-btn');
            const feedbackBox = document.getElementById('career-form-msg');
            const originalText = submitBtn ? submitBtn.innerHTML : '';

            const formData = new FormData(careerForm);
            formData.append('action', 'techofay_career_submit');
            formData.append('nonce', window.techofayData ? window.techofayData.nonce : '');

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerText = 'Transmitting Application...';
            }

            try {
                const response = await fetch(window.techofayData.ajaxUrl, {
                    method: 'POST',
                    body: formData,
                });

                const result = await response.json();

                if (result.success) {
                    if (feedbackBox) {
                        feedbackBox.className = 'text-xs p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 block';
                        feedbackBox.innerText = result.data.message || 'Application submitted successfully! Our talent team will review your profile.';
                    }
                    careerForm.reset();
                    setTimeout(() => {
                        if (typeof closeCareerModal === 'function') closeCareerModal();
                    }, 2500);
                } else {
                    if (feedbackBox) {
                        feedbackBox.className = 'text-xs p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 block';
                        feedbackBox.innerText = result.data.message || 'Error processing application.';
                    }
                }
            } catch (err) {
                if (feedbackBox) {
                    feedbackBox.className = 'text-xs p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 block';
                    feedbackBox.innerText = 'Network error. Please email your resume to info@techofay.com.';
                }
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }
            }
        });
    }
});
