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

document.addEventListener('DOMContentLoaded', () => {
    // 1. ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ (вместо старого скрипта с id)
    const triggerBox = document.querySelector('.additional-trigger-box');
    
    if (triggerBox) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    obs.unobserve(entry.target); // прекращаем слежку после активации
                }
            });
        }, { threshold: 0.15 });

        observer.observe(triggerBox);
    }

    // 2. МЯГКИЙ ПАРАЛЛАКС ДЛЯ ВЕРХНЕГО ОКНА (только для десктопов от 1024px)
    const parallaxItem = document.querySelector('.parallax-layer');
    
    if (parallaxItem && triggerBox) {
        window.addEventListener('scroll', () => {
            if (window.innerWidth >= 1024) {
                const rect = triggerBox.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Проверяем, находится ли контейнер в зоне видимости
                if (rect.top < windowHeight && rect.bottom > 0) {
                    // Вычисляем, насколько глубоко проскроллен блок (от 0 до значения высоты окна)
                    const scrolledDistance = windowHeight - rect.top;
                    
                    // Коэффициент скорости параллакса (0.05 — легкое, контролируемое движение)
                    const speed = 0.05; 
                    const translateY = scrolledDistance * speed;

                    // Применяем смещение, сохраняя hover эффекты масштабирования
                    parallaxItem.style.transform = `translateY(${translateY}px)`;
                }
            } else {
                // Сбрасываем стили на мобильных устройствах
                parallaxItem.style.transform = '';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Сработает, когда 10% изображения покажется на экране
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Убираем классы скрытия и сдвига, возвращая в дефолтное состояние
        entry.target.classList.remove('opacity-0', '-translate-x-12');
        observer.unobserve(entry.target); // Отключаем слежку после срабатывания
      }
    });
  }, observerOptions);

  animatedElements.forEach(element => {
    observer.observe(element);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(element => {
    observer.observe(element);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const animatedContainers = document.querySelectorAll('.animate-on-scroll');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Сработает, когда 15% блока покажется на экране
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Убираем скрытие общего контейнера и добавляем маркер appear
        entry.target.classList.remove('opacity-0', '-translate-x-12');
        entry.target.classList.add('appear');
        
        observer.unobserve(entry.target); // Срабатывает один раз
      }
    });
  }, observerOptions);

  animatedContainers.forEach(container => {
    observer.observe(container);
  });
});