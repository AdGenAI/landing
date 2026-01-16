/* ===========================================
   AI Showcase Interactive Features
   =========================================== */

'use strict';

// AI Showcase Animation Controller
class AIShowcaseAnimations {
    constructor() {
        this.isAnimating = false;
        this.observer = null;
    }

    init() {
        this.setupIntersectionObserver();
        this.initParticles();
    }

    setupIntersectionObserver() {
        const options = {
            threshold: 0.3,
            rootMargin: '0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isAnimating) {
                    this.startAnimationSequence();
                    this.isAnimating = true;
                }
            });
        }, options);

        const aiSection = document.querySelector('.ai-showcase');
        if (aiSection) {
            this.observer.observe(aiSection);
        }
    }

    async startAnimationSequence() {
        // Step 1: Show initial AI response after 1s
        await this.delay(1000);
        this.showTyping();

        // Step 2: Hide typing and show message after 2s
        await this.delay(2000);
        this.hideTyping();
        this.showAIResponse1();

        // Step 3: Show user response after 3s
        await this.delay(3000);
        this.showUserResponse2();

        // Step 4: Show final AI response after 2s
        await this.delay(2000);
        this.showAIResponse2();

        // Step 5: Animate confidence meter
        await this.delay(500);
        this.animateConfidence(45, 95);
    }

    showTyping() {
        const typing = document.querySelector('#aiResponse1 .typing-indicator');
        if (typing) typing.style.display = 'flex';
    }

    hideTyping() {
        const typing = document.querySelector('#aiResponse1 .typing-indicator');
        if (typing) typing.style.display = 'none';
    }

    showAIResponse1() {
        const content = document.querySelector('#aiResponse1 .msg-content');
        if (content) content.classList.remove('hidden');
    }

    showUserResponse2() {
        const msg = document.getElementById('userResponse2');
        if (msg) msg.classList.remove('hidden');
    }

    showAIResponse2() {
        const msg = document.getElementById('aiResponse2');
        if (msg) msg.classList.remove('hidden');
    }

    animateConfidence(from, to) {
        const circle = document.getElementById('confidenceCircle');
        const text = document.getElementById('confidenceText');
        const value = document.getElementById('confidenceValue');
        const label = document.getElementById('confidenceLabel');

        if (!circle || !text) return;

        const circumference = 2 * Math.PI * 70; // radius = 70
        const duration = 2000; // 2 seconds
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function
            const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
            const easedProgress = easeOutCubic(progress);

            const current = from + (to - from) * easedProgress;
            const offset = circumference - (current / 100) * circumference;

            circle.style.strokeDashoffset = offset;
            text.textContent = Math.round(current);
            if (value) value.textContent = Math.round(current);

            // Update label based on confidence
            if (label) {
                if (current < 31) {
                    label.textContent = '🔴 منخفض';
                    label.style.background = 'rgba(239, 68, 68, 0.2)';
                    label.style.color = '#ef4444';
                } else if (current < 70) {
                    label.textContent = '🟡 متوسط';
                    label.style.background = 'rgba(245, 158, 11, 0.2)';
                    label.style.color = '#f59e0b';
                } else {
                    label.textContent = '🟢 عالي';
                    label.style.background = 'rgba(16, 185, 129, 0.2)';
                    label.style.color = '#10b981';
                }
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }

    initParticles() {
        const canvas = document.getElementById('aiParticles');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const particles = [];
        const particleCount = 50;

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
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

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = `rgba(102, 126, 234, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        const animate = () => {
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

                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(102, 126, 234, ${0.2 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        };

        animate();

        // Handle resize
        window.addEventListener('resize', () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        });
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const aiShowcase = new AIShowcaseAnimations();
    aiShowcase.init();
});
