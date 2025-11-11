// ==================== DOM ELEMENTS ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('backToTopBtn');

// ==================== MOBILE MENU TOGGLE ====================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ==================== BACK TO TOP BUTTON ====================
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = getAnimationForElement(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function getAnimationForElement(element) {
    if (element.classList.contains('fade-in')) {
        return 'fadeIn 0.8s ease-out forwards';
    } else if (element.classList.contains('fade-in-up')) {
        return 'fadeInUp 0.8s ease-out forwards';
    } else if (element.classList.contains('fade-in-left')) {
        return 'fadeInLeft 0.8s ease-out forwards';
    }
    return '';
}

// Observe all animated elements
document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left').forEach(el => {
    observer.observe(el);
});

// ==================== SMOOTH SCROLL BEHAVIOR ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== NAVBAR HIGHLIGHT ON SCROLL ====================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== STAGGER ANIMATION FOR PROJECT CARDS ====================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ==================== STAGGER ANIMATION FOR ACHIEVEMENT CARDS ====================
const achievementCards = document.querySelectorAll('.achievement-card');
achievementCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ==================== STAGGER ANIMATION FOR SKILL CATEGORIES ====================
const skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach((category, index) => {
    category.style.animationDelay = `${index * 0.08}s`;
});

// ==================== FORM SUBMISSION HANDLING ====================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Form submission is handled by formspree.io
        // This is just for any additional client-side handling
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.style.opacity = '0.7';
        submitBtn.style.pointerEvents = 'none';
        
        setTimeout(() => {
            submitBtn.style.opacity = '1';
            submitBtn.style.pointerEvents = 'auto';
        }, 2000);
    });
}

// ==================== COUNTER ANIMATION FOR HIGHLIGHTS ====================
const highlightItems = document.querySelectorAll('.highlight-item h3');

const counterObserverOptions = {
    threshold: 0.5
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, counterObserverOptions);

highlightItems.forEach(item => {
    counterObserver.observe(item);
});

function animateCounter(element) {
    const target = parseInt(element.textContent);
    const increment = target / 50;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// ==================== PARALLAX EFFECT FOR HERO SECTION ====================
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    if (hero) {
        const scrollPosition = window.scrollY;
        const heroElements = hero.querySelectorAll('.fade-in');
        heroElements.forEach((el, index) => {
            el.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        });
    }
});

// ==================== ACTIVE NAV LINK STYLING ====================
const style = document.createElement('style');
style.textContent = `
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ==================== LAZY LOADING FOR IMAGES ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== KEYBOARD NAVIGATION ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ==================== SCROLL TO TOP ON PAGE LOAD ====================
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ==================== PRINT FUNCTIONALITY ====================
function printPortfolio() {
    window.print();
}

// ==================== ACCESSIBILITY IMPROVEMENTS ====================
// Add skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#hero';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
document.body.insertBefore(skipLink, document.body.firstChild);

const skipLinkStyle = document.createElement('style');
skipLinkStyle.textContent = `
    .skip-link {
        position: absolute;
        top: -40px;
        left: 0;
        background: #001F3F;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 100;
    }

    .skip-link:focus {
        top: 0;
    }
`;
document.head.appendChild(skipLinkStyle);

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce scroll event for better performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==================== TOOLTIPS ====================
const tooltipElements = document.querySelectorAll('[data-tooltip]');

tooltipElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = element.getAttribute('data-tooltip');
        element.appendChild(tooltip);
    });

    element.addEventListener('mouseleave', () => {
        const tooltip = element.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});

console.log('Portfolio website loaded successfully! 🚀');
