// Navigation JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Highlight current page in navigation
    highlightCurrentPage();

    // Add smooth scrolling to all links
    addSmoothScrolling();

    // Mobile menu toggle (if needed in future)
    setupMobileMenu();
});

function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPage ||
            (currentPage === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
}

function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function setupMobileMenu() {
    // Placeholder for mobile menu functionality
    // Can be expanded if hamburger menu is added
}

// Utility function to animate elements on scroll
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Call on load
observeElements();
