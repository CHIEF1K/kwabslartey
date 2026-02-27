// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll fade-in animations
const fadeEls = document.querySelectorAll(
  '.about-grid, .work-item, .print-card, .exhibition-card, .framing-service, .format-card, .contact-item, .banner-title, .banner-text'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach(el => observer.observe(el));

// Duplicate gallery images for seamless infinite scroll
const galleryScroll = document.querySelector('.gallery-scroll');
if (galleryScroll) {
  // Clone each image without lazy loading for the duplicates
  const originalImages = Array.from(galleryScroll.querySelectorAll('img'));
  originalImages.forEach(img => {
    const clone = img.cloneNode(true);
    clone.removeAttribute('loading');
    clone.setAttribute('aria-hidden', 'true');
    galleryScroll.appendChild(clone);
  });
}
