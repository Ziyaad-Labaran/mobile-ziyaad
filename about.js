document.addEventListener('DOMContentLoaded', function() {
            
        
    const hamburger = document.getElementById('hamburgerMenu');
    const nav = document.getElementById('mainNav');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('open');
        nav.classList.toggle('show');
    });
    
    document.querySelectorAll('#mainNav a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('open');
                nav.classList.remove('show');
            }
        });
    });
    
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickInsideHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickInsideHamburger && nav.classList.contains('show')) {
            hamburger.classList.remove('open');
            nav.classList.remove('show');
        }
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('open');
            nav.classList.remove('show');
        }
    });
});