document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scroll
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

  // Scroll Progress Bar
  const scrollProgress = document.createElement('div');
  scrollProgress.className = 'scroll-progress';
  document.body.appendChild(scrollProgress);

  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.transform = `scaleX(${scrolled / 100})`;
  });

  // Header Background on Scroll
  const header = document.querySelector('header');
  const headerObserver = new IntersectionObserver(
    ([entry]) => {
      header.classList.toggle('sticky', !entry.isIntersecting);
    },
    { threshold: 0.1 }
  );

  const hero = document.querySelector('#home');
  if (hero) {
    headerObserver.observe(hero);
  }

  // Parallax Effect
  const parallaxElements = document.querySelectorAll('.parallax');
  window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.5;
      element.style.backgroundPosition = `center ${rate}px`;
    });
  });

  // Section Animations
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-transition', 'visible');
        sectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('section-transition');
    sectionObserver.observe(section);
  });

  // Value Icons Animation
  document.querySelectorAll('.value-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.classList.add('animate-spin');
    });

    icon.addEventListener('animationend', () => {
      icon.classList.remove('animate-spin');
    });
  });

  // Image Loading Animation
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('fade-in');
    });
  });

  // Form Input Animation
  document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
      if (!input.value) {
        input.parentElement.classList.remove('focused');
      }
    });
  });
});