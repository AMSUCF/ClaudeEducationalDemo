// Interactive Elements JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Setup expandable cards
    setupExpandableCards();

    // Setup reveal sections
    setupRevealSections();

    // Setup tier slider
    setupTierSlider();

    // Add keyboard accessibility
    addKeyboardSupport();
});

// Expandable application cards
function setupExpandableCards() {
    // Shared toggle function
    function toggleCardExpansion(card) {
        const content = card.querySelector('.app-content');
        const button = card.querySelector('.expand-btn');

        if (!content || !button) return;

        if (content.classList.contains('expanded')) {
            content.classList.remove('expanded');
            button.textContent = 'Explore +';
        } else {
            content.classList.add('expanded');
            button.textContent = 'Close −';
        }
    }

    // Setup button click handlers
    const expandButtons = document.querySelectorAll('.expand-btn');
    expandButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.interactive-card');
            if (card) {
                toggleCardExpansion(card);
            }
        });
    });

    // Setup card click handlers
    const interactiveCards = document.querySelectorAll('.interactive-card');
    interactiveCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't toggle if clicking the button itself (button has its own handler)
            if (e.target.closest('.expand-btn')) {
                return;
            }
            toggleCardExpansion(card);
        });
    });
}

// Reveal sections with click-to-expand
function setupRevealSections() {
    const revealButtons = document.querySelectorAll('.reveal-btn');

    revealButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.closest('.reveal-section');
            const isRevealed = section.getAttribute('data-reveal') === 'true';

            if (isRevealed) {
                section.setAttribute('data-reveal', 'false');
                this.textContent = this.textContent.replace('▲', '▼').replace('Hide', 'Click to explore');
            } else {
                section.setAttribute('data-reveal', 'true');
                this.textContent = this.textContent.replace('▼', '▲').replace('Click to explore', 'Hide');
            }
        });
    });
}

// Equity tier slider
function setupTierSlider() {
    const slider = document.getElementById('equity-slider');
    if (!slider) return;

    const tierCards = document.querySelectorAll('.tier-card');

    function updateTierDisplay(value) {
        tierCards.forEach(card => {
            card.classList.remove('active');
            if (card.getAttribute('data-tier') === value.toString()) {
                card.classList.add('active');
            }
        });
    }

    slider.addEventListener('input', function() {
        updateTierDisplay(this.value);
    });

    // Initialize with current value
    updateTierDisplay(slider.value);
}

// Keyboard accessibility for interactive elements
function addKeyboardSupport() {
    // Make expand buttons keyboard accessible
    const expandButtons = document.querySelectorAll('.expand-btn');
    expandButtons.forEach(button => {
        button.setAttribute('role', 'button');
        button.setAttribute('tabindex', '0');

        button.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Make reveal buttons keyboard accessible
    const revealButtons = document.querySelectorAll('.reveal-btn');
    revealButtons.forEach(button => {
        button.setAttribute('role', 'button');
        button.setAttribute('tabindex', '0');

        button.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Utility function to toggle card expansion (can be called from HTML)
function toggleCard(button) {
    // Find the card and toggle it directly
    const card = button.closest('.interactive-card');
    if (!card) return;

    const content = card.querySelector('.app-content');
    if (!content) return;

    // Toggle expansion
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        button.textContent = 'Explore +';
    } else {
        content.classList.add('expanded');
        button.textContent = 'Close −';
    }
}

// Utility function to toggle reveal section (can be called from HTML)
function toggleReveal(button) {
    button.click();
}

// Add animation to metric changes
function animateMetricChange(element, startValue, endValue, duration = 1000) {
    const startTime = performance.now();
    const difference = endValue - startValue;

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out)
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = startValue + (difference * easeProgress);

        element.textContent = Math.round(currentValue);

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toggleCard, toggleReveal, animateMetricChange };
}
