// Simple Fade in animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
});

// Simple Alert Example for CTA Buttons
document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.btn-primary');

    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Button clicked!');
        });
    });
});

// Adjust Testimonial Carousel Interval
document.addEventListener('DOMContentLoaded', () => {
    const testimonialCarousel = document.querySelector('#testimonialCarousel');
    if (testimonialCarousel) {
        const carousel = new bootstrap.Carousel(testimonialCarousel, {
            interval: 5000, // Change testimonial every 5 seconds
            pause: 'hover'
        });
    }
});