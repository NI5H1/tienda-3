// Slider functionality
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.slider-arrow.prev');
const nextButton = document.querySelector('.slider-arrow.next');
let currentSlide = 0;
const slideCount = slides.length;

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideCount;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slideCount) % slideCount;
  updateSlider();
}

// Add click events for navigation arrows
prevButton.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

nextButton.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

// Auto-advance slides
let slideInterval;

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

startAutoSlide();

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

document.querySelectorAll('.producto-card, .oferta-card, .contacto-info, .contacto-form').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s, transform 0.5s';
  observer.observe(card);
});