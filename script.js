// Tab navigation - show only selected section
const sections = document.querySelectorAll('main > section');
const navLinks = document.querySelectorAll('.nav a');

// Hide all sections except the active one
function showSection(sectionId) {
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
            section.style.display = 'block';
        } else {
            section.classList.remove('active');
            section.style.display = 'none';
        }
    });
    
    // Update active nav link
    navLinks.forEach(link => {
        if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Handle nav clicks
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        showSection(sectionId);
        
        // Update URL hash without scrolling
        history.pushState(null, null, '#' + sectionId);
    });
});

// Handle browser back/forward
window.addEventListener('popstate', () => {
    const hash = window.location.hash.substring(1) || 'about';
    showSection(hash);
});

// Initialize - show section based on URL hash or default to 'about'
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1) || 'about';
    showSection(hash);
    
    // Handle member photos: try jpg, then png, then show placeholder
    document.querySelectorAll('.member-photo img').forEach(img => {
        img.onerror = function() {
            const src = this.src;
            if (src.endsWith('.jpg')) {
                // Try png instead
                this.src = src.replace('.jpg', '.png');
            } else {
                // Show placeholder
                this.style.display = 'none';
                const placeholder = this.nextElementSibling;
                if (placeholder) placeholder.style.display = 'flex';
            }
        };
    });
    
    // Handle partner logos: try png, then jpg, then show placeholder
    document.querySelectorAll('.logo-item img').forEach(img => {
        img.onerror = function() {
            const src = this.src;
            if (src.endsWith('.png')) {
                // Try jpg instead
                this.src = src.replace('.png', '.jpg');
            } else {
                // Show placeholder
                this.style.display = 'none';
                const placeholder = this.nextElementSibling;
                if (placeholder) placeholder.style.display = 'flex';
            }
        };
    });
    
    // Handle gallery images: try jpg, then png, then show placeholder
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.onerror = function() {
            const src = this.src;
            if (src.endsWith('.jpg')) {
                // Try png instead
                this.src = src.replace('.jpg', '.png');
            } else {
                // Show placeholder
                const alt = this.alt || 'Photo';
                this.parentElement.innerHTML = '<div class="gallery-placeholder">' + alt + '</div>';
            }
        };
    });
});

// Publication tabs
const pubTabs = document.querySelectorAll('.pub-tab');
const pubContents = document.querySelectorAll('.pub-content');

pubTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        
        // Update active tab
        pubTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Show target content
        pubContents.forEach(content => {
            if (content.id === target) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    });
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

console.log('AIBA Lab website loaded successfully!');
