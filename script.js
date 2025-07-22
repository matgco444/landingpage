// Animações de entrada quando elementos entram na viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.feature-item, .service-item, .benefit-item, .section-title, .authority-text'
    );
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

// Smooth scroll para links internos (se houver)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Tracking de cliques nos CTAs (opcional - para analytics)
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        // Aqui pode ser adicionado código de tracking
        console.log('CTA clicked:', this.textContent.trim());
        
        // Exemplo de tracking com Google Analytics (se implementado)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                event_category: 'CTA',
                event_label: this.textContent.trim(),
                value: 1
            });
        }
    });
});

// Efeito parallax sutil no hero (opcional)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Preloader simples (opcional)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Otimização de performance - lazy loading para imagens
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

