document.addEventListener('DOMContentLoaded', () => {
    // 1. Page Loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);

    // 2. Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 30, fill: "forwards" });
    });

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card, .glass-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    // 3. Scroll Progress Bar
    const scrollProgress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = `${scrollPx / winHeightPx * 100}%`;
        scrollProgress.style.width = scrolled;
    });

    // 4. Back to Top Button
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.remove('opacity-0', 'pointer-events-none');
            backToTop.classList.add('opacity-100', 'pointer-events-auto');
        } else {
            backToTop.classList.add('opacity-0', 'pointer-events-none');
            backToTop.classList.remove('opacity-100', 'pointer-events-auto');
        }
    });

    // 5. Dark/Light Mode Toggle
    const html = document.documentElement;
    const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
    
    // Default to dark mode as requested
    if (localStorage.theme === 'light') {
        html.classList.remove('dark');
    } else {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }

    themeToggles.forEach(toggle => {
        if(!toggle) return;
        toggle.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                html.classList.add('dark');
                localStorage.theme = 'dark';
            }
            // Re-init particles based on theme
            initParticles();
        });
    });

    // 6. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu on link click
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // 7. Typed.js Init
    new Typed('#typed', {
        strings: ['Full Stack Developer', 'AI/ML Developer', 'Python Developer', 'FastAPI Developer'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        cursorChar: '_'
    });

    // 8. AOS Init (Animate on Scroll)
    AOS.init({
        once: true,
        offset: 100,
        duration: 800,
        easing: 'ease-out-cubic',
    });

    // 9. Render Skills Dynamically
    const skills = [
        { name: 'Python', icon: 'fab fa-python', color: '#3b82f6', percent: 90 },
        { name: 'Machine Learning', icon: 'fas fa-brain', color: '#10b981', percent: 85 },
        { name: 'NLP', icon: 'fas fa-language', color: '#8b5cf6', percent: 80 },
        { name: 'FastAPI', icon: 'fas fa-bolt', color: '#059669', percent: 85 },
        { name: 'Django', icon: 'fas fa-server', color: '#047857', percent: 80 },
        { name: 'React', icon: 'fab fa-react', color: '#61dafb', percent: 75 },
        { name: 'JavaScript', icon: 'fab fa-js', color: '#f59e0b', percent: 85 },
        { name: 'HTML5', icon: 'fab fa-html5', color: '#ef4444', percent: 95 },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#3b82f6', percent: 90 },
        { name: 'MySQL', icon: 'fas fa-database', color: '#f97316', percent: 85 },
        { name: 'Power BI', icon: 'fas fa-chart-bar', color: '#eab308', percent: 80 },
        { name: 'Git & GitHub', icon: 'fab fa-git-alt', color: '#f43f5e', percent: 90 }
    ];

    const skillsContainer = document.getElementById('skills-container');
    skills.forEach((skill, index) => {
        const delay = index * 50;
        const skillHTML = `
            <div data-aos="fade-up" data-aos-delay="${delay}" class="skill-card glass-card p-6 rounded-2xl border border-white/10 transition-all duration-300 text-center" style="--hover-color: ${skill.color}">
                <div class="skill-icon-wrap w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl mb-4 transition-colors duration-300">
                    <i class="${skill.icon}"></i>
                </div>
                <h4 class="font-semibold mb-3">${skill.name}</h4>
                <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mb-2 overflow-hidden">
                    <div class="h-1.5 rounded-full" style="width: ${skill.percent}%; background-color: ${skill.color}"></div>
                </div>
                <div class="text-right text-xs font-medium text-slate-500">${skill.percent}%</div>
            </div>
        `;
        skillsContainer.insertAdjacentHTML('beforeend', skillHTML);
    });

    // 10. Number Counters Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            
            // Only animate if element is in viewport
            const rect = counter.getBoundingClientRect();
            if(rect.top < window.innerHeight && counter.innerText == "0") {
                updateCount();
            }
        });
    };
    window.addEventListener('scroll', animateCounters);

    // 11. Particles.js Init
    function initParticles() {
        const isDark = document.documentElement.classList.contains('dark');
        const color = isDark ? "#3b82f6" : "#8b5cf6";
        
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": color },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.3, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": color,
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } }
                }
            },
            "retina_detect": true
        });
    }
    
    if(document.getElementById('particles-js')) {
        initParticles();
    }

    // 12. Set Current Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // 13. Contact Form Submit Logic
    const contactForm = document.getElementById('contact-form');
    const formAlert = document.getElementById('form-alert');
    const submitBtn = document.getElementById('submit-btn');

    if(contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            const originalBtnHtml = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="relative z-10 flex items-center justify-center gap-2"><i class="fas fa-spinner fa-spin"></i> Sending...</span>';
            submitBtn.disabled = true;

            try {
                const response = await fetch('http://127.0.0.1:8000/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    formAlert.className = 'mb-6 p-4 rounded-lg text-sm font-medium transition-all duration-300 bg-emerald-500/20 text-emerald-500 border border-emerald-500/50 block';
                    formAlert.innerHTML = '<i class="fas fa-check-circle mr-2"></i> Message sent successfully! I will get back to you soon.';
                    contactForm.reset();
                } else {
                    throw new Error('Failed to send message');
                }
            } catch (error) {
                formAlert.className = 'mb-6 p-4 rounded-lg text-sm font-medium transition-all duration-300 bg-red-500/20 text-red-500 border border-red-500/50 block';
                formAlert.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i> Error sending message. Please try again later or email directly.';
            } finally {
                submitBtn.innerHTML = originalBtnHtml;
                submitBtn.disabled = false;
                
                // Hide alert after 5 seconds
                setTimeout(() => {
                    formAlert.classList.add('hidden');
                    formAlert.classList.remove('block');
                }, 5000);
            }
        });
    }

    // 14. 3D Tilt Effect
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".glass-card, .project-card, .skill-card"), {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
        });
    }
});
