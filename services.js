document.getElementById('mobile-menu').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
  });

  const fadeInElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  fadeInElements.forEach(el => observer.observe(el));