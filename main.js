// Simple Alert Example for CTA Buttons
document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.btn-primary');

    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Button clicked!');
        });
    });
});