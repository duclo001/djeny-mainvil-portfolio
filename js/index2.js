// Language toggle button (calls translation.js if present)
document.addEventListener('DOMContentLoaded', () => {
  const languageToggleButton = document.querySelector('.language-toggle');
  if (!languageToggleButton) return;

  // If the HTML still has an onclick handler, this will be redundant but harmless.
  languageToggleButton.addEventListener('click', (e) => {
    // Avoid accidental navigation/selection.
    e.preventDefault();

    const toggle = window.toggleLanguage;
    if (typeof toggle === 'function') {
      toggle();
    }
  });
});

// Bouton retour en haut
const backToTopBtn = document.querySelector('.back-to-top');

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY || window.pageYOffset;
    if (scrolled > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Animation du preloader (une seule fois par session)
document.addEventListener('DOMContentLoaded', function() {
  var preloader = document.querySelector('.preloader');
  var leftText = document.querySelector('.preloader-text.left');
  var rightText = document.querySelector('.preloader-text.right');
  var leftDiv = document.querySelector('.preloader-left-div');
  var rightDiv = document.querySelector('.preloader-right-div');
  var nav = document.querySelector('.nav');
  var hero = document.querySelector('.hero-section');
  var mainContainer = document.querySelector('.main-container');

  var hasPlayed = sessionStorage.getItem('preloaderPlayed') === 'true';

  // Si l'animation a déjà été jouée dans cette session, on affiche directement la page
  if (hasPlayed) {
    if (preloader) preloader.style.display = 'none';
    if (nav) {
      nav.style.opacity = '1';
      nav.style.transform = 'translate3d(0, 0, 0)';
    }
    if (hero) {
      hero.style.opacity = '1';
    }
    if (mainContainer) {
      mainContainer.style.opacity = '1';
    }
    return;
  }

  // Anime l'apparition des textes
  setTimeout(function() {
    if (leftText) {
      leftText.style.transition = 'all 0.6s cubic-bezier(0.77, 0, 0.175, 1)';
      leftText.style.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0) rotateZ(0deg)';
      leftText.style.opacity = '1';
    }

    if (rightText) {
      rightText.style.transition = 'all 0.6s cubic-bezier(0.77, 0, 0.175, 1)';
      rightText.style.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0) rotateZ(0deg)';
      rightText.style.opacity = '1';
    }
  }, 100);

  // Anime la disparition des textes
  setTimeout(function() {
    if (leftText) {
      leftText.style.transition = 'all 0.4s cubic-bezier(0.77, 0, 0.175, 1)';
      leftText.style.transform = 'translate3d(0, -150%, 0)';
      leftText.style.opacity = '0';
    }

    if (rightText) {
      rightText.style.transition = 'all 0.4s cubic-bezier(0.77, 0, 0.175, 1)';
      rightText.style.transform = 'translate3d(0, -150%, 0)';
      rightText.style.opacity = '0';
    }
  }, 1000);

  // Fait disparaître le preloader
  setTimeout(function() {
    if (leftDiv) {
      leftDiv.style.transition = 'transform 0.6s cubic-bezier(0.77, 0, 0.175, 1)';
      leftDiv.style.transform = 'translateX(-100%)';
    }

    if (rightDiv) {
      rightDiv.style.transition = 'transform 0.6s cubic-bezier(0.77, 0, 0.175, 1)';
      rightDiv.style.transform = 'translateX(100%)';
    }
  }, 1300);

  // Cache complètement le preloader
  setTimeout(function() {
    if (preloader) preloader.style.display = 'none';
  }, 1900);

  // Anime l'apparition du contenu de la page
  setTimeout(function() {
    // Nav apparaît en premier
    if (nav) {
      nav.style.transition = 'all 0.8s cubic-bezier(0.77, 0, 0.175, 1)';
      nav.style.opacity = '1';
      nav.style.transform = 'translate3d(0, 0, 0)';
    }

    // Hero apparaît légèrement après
    setTimeout(function() {
      if (hero) {
        hero.style.transition = 'opacity 1s cubic-bezier(0.77, 0, 0.175, 1)';
        hero.style.opacity = '1';
      }
    }, 150);

    // Main content apparaît ensuite
    setTimeout(function() {
      if (mainContainer) {
        mainContainer.style.transition = 'opacity 1s cubic-bezier(0.77, 0, 0.175, 1)';
        mainContainer.style.opacity = '1';
      }

      // Marquer l'animation comme jouée pour cette session
      sessionStorage.setItem('preloaderPlayed', 'true');
    }, 300);
  }, 1400);
});

// Menu hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

function closeMobileMenu() {
  if (hamburger) hamburger.classList.remove('active');
  if (navLinks) navLinks.classList.remove('active');
  if (dropdown) dropdown.classList.remove('active');
}

if (hamburger && navLinks) {
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

// Gestion du dropdown sur mobile et desktop
if (dropdownToggle) {
  dropdownToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (dropdown) dropdown.classList.toggle('active');
  });
}

// Fermer le menu quand on clique sur un lien (sauf dropdown-toggle)
navLinkItems.forEach(link => {
  link.addEventListener('click', function() {
    closeMobileMenu();
  });
});

// Fermer le menu mobile quand on clique sur un lien du dropdown
dropdownLinks.forEach(link => {
  link.addEventListener('click', function() {
    closeMobileMenu();
  });
});

// Fermer le menu mobile quand on clique en dehors du menu
document.addEventListener('click', function(e) {
  if (!navLinks || !navLinks.classList.contains('active')) return;

  if (!hamburger) return;

  // Si on clique dans le menu (liste) ou sur le hamburger, ne pas fermer ici
  if (navLinks.contains(e.target) || hamburger.contains(e.target)) return;

  closeMobileMenu();
});

// Fermer le dropdown si on clique ailleurs
document.addEventListener('click', function(e) {
  if (!dropdown) return;
  if (!dropdown.contains(e.target)) dropdown.classList.remove('active');
});

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = ('IntersectionObserver' in window) ? new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');

      // Animate section title underline
      if (entry.target.classList.contains('section-title')) {
        entry.target.classList.add('active');
      }

      // Animate topics list items
      if (entry.target.classList.contains('topics-list')) {
        const items = entry.target.querySelectorAll('li');
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('animate');
          }, index * 100);
        });
      }
    }
  });
}, observerOptions) : null;

if (observer) {
  // Observe elements
  document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .section-title, .topics-list').forEach(el => {
    observer.observe(el);
  });
}

// Animated Data Chart
function animateChart() {
  const bars = document.querySelectorAll('.chart-bar');
  bars.forEach(bar => {
    const randomHeight = Math.floor(Math.random() * 50) + 40; // Between 40% and 90%
    bar.style.height = randomHeight + '%';
  });
}

// Start chart animation after page load
setTimeout(() => {
  animateChart();
  setInterval(animateChart, 3000); // Update every 3 seconds
}, 1000);

// Sidebar animation
const sidebarObserver = ('IntersectionObserver' in window) ? new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 }) : null;

if (sidebarObserver) {
  document.querySelectorAll('.sidebar-section').forEach(section => {
    sidebarObserver.observe(section);
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const navEl = document.querySelector('.nav');
      const navHeight = navEl ? navEl.offsetHeight : 0;
      const targetPosition = target.offsetTop - navHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Animation continue des barres du graphique
function animateBarChart() {
  const bars = document.querySelectorAll('#barChart .chart-bar');
  if (!bars.length) return;

  setInterval(() => {
    bars.forEach(bar => {
      const newHeight = Math.floor(Math.random() * 60) + 30; // Entre 30% et 90%
      bar.style.height = newHeight + '%';
    });
  }, 3000);
}

// Animation continue de la courbe
function animateLineChart() {
  const linePath = document.getElementById('linePath');
  const lineArea = document.getElementById('lineArea');
  if (!linePath || !lineArea) return;

  const pathVariations = [
    'M 0 80 L 33 60 L 66 70 L 100 45 L 133 50 L 166 30 L 200 25',
    'M 0 75 L 33 55 L 66 65 L 100 40 L 133 55 L 166 35 L 200 30',
    'M 0 70 L 33 65 L 66 60 L 100 50 L 133 45 L 166 40 L 200 35',
    'M 0 85 L 33 70 L 66 75 L 100 55 L 133 60 L 166 45 L 200 40',
    'M 0 65 L 33 50 L 66 55 L 100 35 L 133 40 L 166 25 L 200 20'
  ];

  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % pathVariations.length;
    const newPath = pathVariations[currentIndex];
    linePath.setAttribute('d', newPath);

    // Mettre à jour l'aire sous la courbe
    const areaPath = newPath + ' L 200 100 L 0 100 Z';
    lineArea.setAttribute('d', areaPath);
  }, 3500);
}

// Animation de la jauge
function animateGauge() {
  const gaugeFill = document.getElementById('gaugeFill');
  const gaugeValue = document.getElementById('gaugeValue');
  if (!gaugeFill || !gaugeValue) return;

  // Garder le dégradé sur la jauge (ne pas écraser via JS)
  gaugeFill.style.stroke = 'url(#gaugeGradient)';

  const circumference = 251.2;

  setInterval(() => {
    const percentage = Math.floor(Math.random() * 30) + 65; // Entre 65% et 95%
    const offset = circumference - (percentage / 100) * circumference;
    gaugeFill.style.strokeDashoffset = offset;

    // Animer le changement de valeur
    let currentValue = parseInt(gaugeValue.textContent);
    const step = percentage > currentValue ? 1 : -1;
    const interval = setInterval(() => {
      currentValue += step;
      gaugeValue.textContent = currentValue + '%';
      if ((step > 0 && currentValue >= percentage) || (step < 0 && currentValue <= percentage)) {
        clearInterval(interval);
      }
    }, 30);

    // Garder une couleur lisible pour le % (la jauge reste en dégradé)
    if (percentage >= 80) {
      gaugeValue.style.color = '#ff9d70';
    } else if (percentage >= 60) {
      gaugeValue.style.color = '#ff9d70';
    } else {
      gaugeValue.style.color = '#ef4444';
    }
  }, 4000);
}

// Animation des KPI
function animateKPIs() {
  const kpiData = [
    { id: 'kpi1', baseValue: 2.4, label: 'M', trendId: 'trend1', variance: 0.3 },
    { id: 'kpi2', baseValue: 95, label: '%', trendId: 'trend2', variance: 5 },
    { id: 'kpi3', baseValue: 1.8, label: 'K', trendId: 'trend3', variance: 0.2 }
  ];

  setInterval(() => {
    kpiData.forEach(kpi => {
      const element = document.getElementById(kpi.id);
      const trendElement = document.getElementById(kpi.trendId);
      if (!element || !trendElement) return;

      // Calculer une nouvelle valeur
      const variance = (Math.random() * kpi.variance * 2) - kpi.variance;
      const newValue = kpi.baseValue + variance;
      const displayValue = kpi.label === '%' ? Math.round(newValue) : newValue.toFixed(1);

      // Animer le changement
      element.style.transform = 'scale(1.1)';
      setTimeout(() => {
        element.textContent = displayValue + kpi.label;
        element.style.transform = 'scale(1)';
      }, 200);

      // Mettre à jour la tendance
      const trendValue = (Math.random() * 15 + 5).toFixed(1);
      const isUp = Math.random() > 0.3; // 70% de chance d'être positif
      trendElement.className = 'kpi-trend ' + (isUp ? 'up' : 'down');
      trendElement.textContent = (isUp ? '▲ ' : '▼ ') + trendValue + '%';
    });
  }, 3500);
}

// Démarrer toutes les animations après le chargement
window.addEventListener('load', () => {
  setTimeout(() => {
    animateBarChart();
    animateLineChart();
    animateGauge();
    animateKPIs();
  }, 2000); // Attendre que les animations initiales se terminent
});
