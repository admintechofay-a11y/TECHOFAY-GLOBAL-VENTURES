/**
 * GSAP ScrollTrigger Animations for Techofay Global Ventures
 *
 * @package Techofay_Theme
 */

document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Stagger-in reveal for glass cards
    const cardSections = document.querySelectorAll('.grid');
    cardSections.forEach((section) => {
        const cards = section.querySelectorAll('.glass-card');
        if (cards.length > 0) {
            gsap.from(cards, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
                opacity: 0,
                y: 35,
                duration: 0.7,
                stagger: 0.12,
                ease: 'power2.out',
            });
        }
    });

    // Fade-in headings
    const headings = document.querySelectorAll('h2');
    headings.forEach((heading) => {
        gsap.from(heading, {
            scrollTrigger: {
                trigger: heading,
                start: 'top 90%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power2.out',
        });
    });
});
