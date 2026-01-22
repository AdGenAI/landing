/* ===========================================
   AdGen AI - Main JavaScript
   =========================================== */

'use strict';

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initCustomCursor();
    initCookieBanner();
    initDemoModal();
    initAOS();
    initNavbar();
    initMobileMenu();
    initTypedText();
    initCounters();
    initParticles();
    initScrollReveal();
    initSmoothScroll();
    initRegistrationModal();

    // Final check for all triggers
    console.log('✅ AdGen AI Fully Loaded & Optimized');
});

// ============================================
// Premium UX: Preloader
// ============================================
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('fade-out');
                document.body.style.overflow = 'auto';
            }, 500);
        });
    }
}

// ============================================
// Premium UX: Custom Cursor
// ============================================
function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');

    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Fast cursor
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.transform = `translate3d(${mouseX - 6}px, ${mouseY - 6}px, 0)`;

        // Smooth follower
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.transform = `translate3d(${followerX - 20}px, ${followerY - 20}px, 0)`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, .faq-item, .use-case-card, .feature-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.style.transform += ' scale(2)';
            follower.style.background = 'rgba(99, 102, 241, 0.15)';
            cursor.style.transform += ' scale(0.5)';
        });
        el.addEventListener('mouseleave', () => {
            follower.style.transform = follower.style.transform.replace(' scale(2)', '');
            follower.style.background = 'rgba(99, 102, 241, 0.3)';
            cursor.style.transform = cursor.style.transform.replace(' scale(0.5)', '');
        });
    });
}

// ============================================
// Premium UX: Cookie Banner
// ============================================
function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');

    if (banner && acceptBtn) {
        if (!localStorage.getItem('adgen_cookies_accepted')) {
            setTimeout(() => {
                banner.classList.add('show');
            }, 2000);
        }

        acceptBtn.addEventListener('click', () => {
            banner.classList.remove('show');
            localStorage.setItem('adgen_cookies_accepted', 'true');
        });
    }
}

// ============================================
// Premium UX: Demo Modal
// ============================================
function initDemoModal() {
    const demoBtn = document.getElementById('demoBtn');
    const demoModal = document.getElementById('demoModal');
    const modalClose = document.getElementById('modalClose');

    if (demoBtn && demoModal && modalClose) {
        demoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            demoModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });

        const closeModal = () => {
            demoModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        };

        modalClose.addEventListener('click', closeModal);
        demoModal.addEventListener('click', (e) => {
            if (e.target === demoModal) closeModal();
        });
    }
}

// ============================================
// Premium UX: Registration Modal (Email Client Integration)
// ============================================
function initRegistrationModal() {
    const triggerBtns = document.querySelectorAll('[data-trigger-reg="true"]');
    const regModal = document.getElementById('registrationModal');
    const modalClose = document.getElementById('regModalClose');
    const form = document.getElementById('registrationForm');
    const status = document.getElementById('formStatus');
    const submitBtn = document.getElementById('regSubmitBtn');
    const loader = document.getElementById('btnLoader');

    if (!regModal || !modalClose || !form) return;

    console.log('🚀 Registration Modal Initialized for [ferasswed2022@gmail.com]');

    const openModal = (e) => {
        if (e) e.preventDefault();
        regModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        regModal.classList.remove('show');
        document.body.style.overflow = 'auto';
        form.reset();
        status.textContent = '';
        status.className = 'form-status';
    };

    // Robust Event Delegation
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-trigger-reg="true"]');
        if (trigger) {
            console.log('🎯 Global Capture: Trigger Clicked');
            openModal(e);
        }
    });

    modalClose.addEventListener('click', closeModal);
    regModal.addEventListener('click', (e) => {
        if (e.target === regModal) closeModal();
    });

    // Premium UX: Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && regModal.classList.contains('show')) {
            closeModal();
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const ownerEmail = 'ferasswed2022@gmail.com';
        const subject = encodeURIComponent(`AdGen AI - Registration: ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

        // Construct Mailto Link
        const mailtoLink = `mailto:${ownerEmail}?subject=${subject}&body=${body}`;

        // Feedback
        status.textContent = (window.i18n && window.i18n.currentLang === 'ar') ? 'يتم فتح تطبيق البريد الآن...' : 'Opening email client...';
        status.className = 'form-status success';

        // Direct redirection to mail client
        window.location.href = mailtoLink;

        setTimeout(closeModal, 2000);
    });
}

// ============================================
// AOS (Animate On Scroll) Initialization
// ============================================
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            delay: 100
        });
    }
}

// ============================================
// Navbar Scroll Effect
// ============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll
        if (currentScroll > lastScroll && currentScroll > 300) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, { passive: true });
}

// ============================================
// Mobile Menu Toggle
// ============================================
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const menu = document.getElementById('navMenu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            menu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu on link click
        const links = menu.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                menu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
}

// ============================================
// Typed Text Effect
// ============================================
function initTypedText() {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    function type() {
        const currentLang = document.documentElement.getAttribute('lang') || 'ar';
        const words = currentLang === 'ar'
            ? ['جيبك', 'يديك', 'خدمتك', 'متناولك']
            : ['Pocket', 'Hands', 'Service', 'Reach'];

        const currentWord = words[wordIndex % words.length];

        if (isDeleting) {
            typedElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typedElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Pause before next word
        }

        type();

        // Reset when language changes
        document.addEventListener('languageChanged', () => {
            charIndex = 0;
            wordIndex = 0;
            isDeleting = false;
            typedElement.textContent = '';
        });
    }

    // ============================================
    // Animated Counters
    // ============================================
    function initCounters() {
        const counters = document.querySelectorAll('.stat-value[data-count]');

        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const count = parseInt(target.getAttribute('data-count'));
                    animateCounter(target, count);
                    observer.unobserve(target);
                }
            });
        }, observerOptions);

        counters.forEach(counter => observer.observe(counter));
    }

    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const duration = 2000;
        const stepTime = duration / 100;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = formatNumber(target);
                clearInterval(timer);
            } else {
                element.textContent = formatNumber(Math.floor(current));
            }
        }, stepTime);
    }

    function formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K+';
        }
        return num.toString();
    }

    // ============================================
    // Particles Animation
    // ============================================
    function initParticles() {
        const canvas = document.getElementById('particlesCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const particles = [];
        const particleCount = 50;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 150)})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        }

        animate();

        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        });
    }

    // ============================================
    // Scroll Reveal
    // ============================================
    function initScrollReveal() {
        const reveals = document.querySelectorAll('.reveal');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px'
        });

        reveals.forEach(reveal => observer.observe(reveal));
    }

    // ============================================
    // Smooth Scroll
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const navbarHeight = document.getElementById('navbar').offsetHeight;
                    const targetPosition = target.offsetTop - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Language Toggle Logic moved to i18n.js for centralized state management

    // ============================================
    // Demo Button (Modal trigger)
    // ============================================
    const demoBtn = document.getElementById('demoBtn');
    if (demoBtn) {
        demoBtn.addEventListener('click', () => {
            // Modal functionality would go here
            alert('العرض التوضيحي قريباً! 🎬');
        });
    }

    // ============================================
    // Performance Optimization
    // ============================================

    // Lazy loading images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // Console Easter Egg
    // ============================================
    console.log('%cAdGen AI 🚀', 'color: #6366F1; font-size: 24px; font-weight: bold;');
    console.log('%cمدعوم بـ Google Gemini 3 & Kling AI', 'color: #EC4899; font-size: 14px;');
    console.log('%cنحن نبحث عن مطورين موهوبين! تواصل معنا 💼', 'color: #10B981; font-size: 12px;');
}
