// Handle WhatsApp link visibility based on scroll position
const whatsappLink = document.getElementById('whatsapp-link');
const mapSection = document.getElementById('map');

if (whatsappLink && mapSection) {
  window.addEventListener('scroll', () => {
    const mapRect = mapSection.getBoundingClientRect();
    // Hide the WhatsApp link when map section is in viewport
    if (mapRect.top < window.innerHeight && mapRect.bottom > 0) {
      whatsappLink.classList.add('hidden');
    } else {
      whatsappLink.classList.remove('hidden');
    }
  });
}

// Handle booking form submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const fullName = this.fullName.value.trim();
  const phone = this.phone.value.trim();
  const service = this.service.value;
  const appointmentDate = this.appointmentDate.value;
  const successMsg = document.getElementById('successMsg');
  
  // Validate form inputs
  if (!fullName) {
    showMessage('Please enter your full name', 'error');
    return;
  }
  
  if (!phone || phone.length < 10) {
    showMessage('Please enter a valid phone number', 'error');
    return;
  }
  
  if (!service) {
    showMessage('Please select a service', 'error');
    return;
  }
  
  if (!appointmentDate) {
    showMessage('Please select an appointment date', 'error');
    return;
  }
  
  // Check if appointment date is not in the past
  const selectedDate = new Date(appointmentDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (selectedDate < today) {
    showMessage('Please select a future date', 'error');
    return;
  }
  
  // Show success message
  showMessage(`Thank you, ${fullName}! Your appointment has been booked. We'll contact you at ${phone} soon.`, 'success');
  
  // Reset form
  this.reset();
  
  // Optional: Send to WhatsApp
  setTimeout(() => {
    const message = `Hello, I'd like to book an appointment for ${service} on ${appointmentDate}. My name is ${fullName} and my phone number is ${phone}.`;
    const whatsappUrl = `https://wa.me/233201300714?text=${encodeURIComponent(message)}`;
    // Uncomment below to auto-send to WhatsApp:
    // window.open(whatsappUrl, '_blank');
  }, 1000);
});

// Show success or error message
function showMessage(message, type) {
  const successMsg = document.getElementById('successMsg');
  successMsg.textContent = message;
  successMsg.className = type;
  
  // Auto-hide error messages after 5 seconds
  if (type === 'error') {
    setTimeout(() => {
      successMsg.className = '';
      successMsg.textContent = '';
    }, 5000);
  }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Mobile nav toggle behavior and accessibility
const navToggle = document.querySelector('.nav-toggle');
const bodyEl = document.body;
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    bodyEl.classList.toggle('nav-open');
  });

  // Close nav when a link is clicked (mobile)
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (bodyEl.classList.contains('nav-open')) {
        bodyEl.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close nav on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bodyEl.classList.contains('nav-open')) {
      bodyEl.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });
}

// Slideshow functionality
let slideIndex = 1;
let slideTimer;

function changeSlide(n) {
  clearTimeout(slideTimer);
  showSlide(slideIndex += n);
  autoSlide();
}

function currentSlide(n) {
  clearTimeout(slideTimer);
  showSlide(slideIndex = n);
  autoSlide();
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].classList.add('active');
  }
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].classList.add('active');
  }
}

function autoSlide() {
  slideTimer = setTimeout(() => {
    slideIndex++;
    showSlide(slideIndex);
    autoSlide();
  }, 5000); // Change slide every 5 seconds
}

// Initialize slideshow
document.addEventListener('DOMContentLoaded', () => {
  showSlide(slideIndex);
  autoSlide();
});

