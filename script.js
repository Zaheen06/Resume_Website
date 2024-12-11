// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Alert for Contact Section
document.querySelector('#contact').addEventListener('click', () => {
    alert('Thank you for your interest. I will get back to you soon!');
});
