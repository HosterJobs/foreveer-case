import './tailwind.css'
import './style.scss'

window.addEventListener('scroll', () => {
    const parallaxImg = document.querySelector('.js-parallax-img');
    
    if (parallaxImg) {
        if (window.innerWidth >= 1280) {
            const scrolled = window.scrollY;
            parallaxImg.style.transform = `translateY(${scrolled * 0.15}px)`;
        } else {
            parallaxImg.style.transform = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const animWrapper = document.querySelector('.js-anim-wrapper');
    
    if (animWrapper) {
        const observerOptions = {
            root: null,
            threshold: 0.6,
            rootMargin: "0px 0px -10% 0px" 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animWrapper.classList.add('is-active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(animWrapper);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const imagesWrapper = document.querySelector('.js-anim-images');
    
    if (imagesWrapper) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    imagesWrapper.classList.add('is-active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 }); 

        observer.observe(imagesWrapper);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const monitorWrapper = document.querySelector('.js-anim-monitor');
    
    if (monitorWrapper) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    monitorWrapper.classList.add('is-active');
                    observer.unobserve(entry.target); 
                }
            });
        }, { 
            threshold: 0.3, 
            rootMargin: "0px 0px -10% 0px"
        });

        observer.observe(monitorWrapper);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });

    const reportWindow = document.querySelector('.js-anim-report');
    if (reportWindow) {
        observer.observe(reportWindow);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const catalogWrapper = document.querySelector('.js-anim-catalog');
    
    if (catalogWrapper) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    catalogWrapper.classList.add('is-active');
                    observer.unobserve(entry.target); 
                }
            });
        }, { 
            threshold: 0.2 
        });

        observer.observe(catalogWrapper);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const connectionBlock = document.querySelector('.js-connection-anim');
    
    if (connectionBlock) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Если блок появился в зоне видимости
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-active');
                    // Отписываемся от слежки, чтобы анимация сработала только один раз
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.2 // Анимация начнется, когда блок покажется на 20%
        });

        observer.observe(connectionBlock);
    }
});