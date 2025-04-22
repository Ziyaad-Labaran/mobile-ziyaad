document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    const testimonials = document.querySelectorAll(".testimonial");
    testimonials.forEach((testimonial, index) => {
        setTimeout(() => {
            testimonial.classList.add("visible");
        }, index * 500);
    });
    

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader,.container001');
    const content = document.querySelector('.main-content0');

    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
        setTimeout(() => {
          content.style.opacity = '1';
          document.body.style.overflow = 'auto';
        }, 100);
      }, 500);
    }, 3000);
  });

