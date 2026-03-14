// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle (add a hamburger button in HTML if needed, but for simplicity, assume desktop-first)
const navUl = document.querySelector('nav ul');
if (window.innerWidth <= 768) {
    // Add hamburger logic here if you expand the mobile nav
}

// Form submission (placeholder - in a real site, connect to backend/email service)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (This is a demo—add real form handling.)');
});