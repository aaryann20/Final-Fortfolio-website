// Smooth scroll for nav links and scroll cue
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Section entrance animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Contact form alert
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    form.reset();
  });
} 