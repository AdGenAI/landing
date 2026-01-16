/* ===========================================
   AdGen AI - GSAP Animations
   =========================================== */

'use strict';

// Wait for GSAP and ScrollTrigger to load
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // ============================================
    // Hero Animations
    // ============================================
    function initHeroAnimations() {
        const heroTimeline = gsap.timeline();

        heroTimeline
            .from('.hero-badge', {
                duration: 0.6,
                y: -20,
                opacity: 0,
                ease: 'power3.out'
            })
            .from('.hero-title', {
                duration: 0.8,
                y: 30,
                opacity: 0,
                ease: 'power3.out'
            }, '-=0.3')
            .from('.hero-subtitle', {
                duration: 0.8,
                y: 20,
                opacity: 0,
                ease: 'power3.out'
            }, '-=0.5')
            .from('.hero-cta .btn', {
                duration: 0.6,
                scale: 0.9,
                opacity: 0,
                stagger: 0.1,
                ease: 'back.out(1.7)'
            }, '-=0.4')
            .from('.stat-item', {
                duration: 0.6,
                y: 20,
                opacity: 0,
                stagger: 0.1,
                ease: 'power3.out'
            }, '-=0.3');
    }

    // ============================================
    // Mockup 3D Rotation
    // ============================================
    function initMockupRotation() {
        const mockup = document.querySelector('.mockup-container');
        if (!mockup) return;

        mockup.addEventListener('mousemove', (e) => {
            const rect = mockup.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            gsap.to(mockup, {
                duration: 0.5,
                rotateX: rotateX,
                rotateY: rotateY,
                transformPerspective: 1000,
                ease: 'power2.out'
            });
        });

        mockup.addEventListener('mouseleave', () => {
            gsap.to(mockup, {
                duration: 0.5,
                rotateX: 0,
                rotateY: 0,
                ease: 'power2.out'
            });
        });
    }

    // ============================================
    // Scroll-Based Animations
    // ============================================
    function initScrollAnimations() {
        // Fade in sections
        gsap.utils.toArray('section:not(.hero)').forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        });

        // Gradient orbs parallax
        gsap.utils.toArray('.gradient-orb').forEach((orb, index) => {
            gsap.to(orb, {
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                },
                y: (index + 1) * 100,
                rotate: (index + 1) * 45,
                ease: 'none'
            });
        });
    }

    // ============================================
    // Card Hover Effects
    // ============================================
    function initCardHovers() {
        const cards = document.querySelectorAll('.problem-item, .solution-item');

        cards.forEach(card => {
            card.addEventListener('mouseenter', function () {
                gsap.to(this, {
                    duration: 0.3,
                    scale: 1.02,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', function () {
                gsap.to(this, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        });
    }

    // ============================================
    // Initialize All GSAP Animations
    // ============================================
    document.addEventListener('DOMContentLoaded', () => {
        initHeroAnimations();
        initMockupRotation();
        initScrollAnimations();
        initCardHovers();
    });
}
