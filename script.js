// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Hamburger animation
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.classList.toggle('change');
        });
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.classList.remove('change');
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // In a real application, you would send this data to a server
        // For now, we'll just show an alert
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-category, .hobby-card, .project-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .hobby-card, .project-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial check in case elements are already in view
    animateOnScroll();
});

// Profile image placeholder animation
const profilePlaceholders = document.querySelectorAll('.profile-placeholder, .profile-placeholder-large');
profilePlaceholders.forEach(placeholder => {
    placeholder.addEventListener('mouseenter', () => {
        placeholder.style.transform = 'scale(1.05)';
    });
    
    placeholder.addEventListener('mouseleave', () => {
        placeholder.style.transform = 'scale(1)';
    });
    
    placeholder.style.transition = 'transform 0.3s ease';
});

// Project card hover effect enhancement
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    // Add mouseenter event
    card.addEventListener('mouseenter', () => {
        // Scale up the icon
        const icon = card.querySelector('.project-icon');
        if (icon) {
            icon.style.transform = 'scale(1.2)';
        }
        
        // Add shadow effect to the card
        card.style.boxShadow = '0 15px 30px rgba(78, 84, 200, 0.2)';
    });
    
    // Add mouseleave event
    card.addEventListener('mouseleave', () => {
        // Scale down the icon
        const icon = card.querySelector('.project-icon');
        if (icon) {
            icon.style.transform = 'scale(1)';
        }
        
        // Remove shadow effect from the card
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
    });
    
    // Ensure smooth transitions
    const icon = card.querySelector('.project-icon');
    if (icon) {
        icon.style.transition = 'transform 0.3s ease';
    }
});