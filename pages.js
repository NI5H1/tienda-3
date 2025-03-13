// Animate cards on scroll
const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply animations to cards
document.querySelectorAll('.producto-card, .oferta-card, .contacto-info, .contacto-form').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s, transform 0.5s';
  observer.observe(card);
});

// Form submission handling
const contactForm = document.querySelector('.contacto-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const formValues = Object.fromEntries(formData.entries());
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formValues);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    this.reset();
  });
}