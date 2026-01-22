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

    // Système de traduction bilingue
    let currentLang = localStorage.getItem('language') || 'fr';

    const translations = {
      fr: {
        'nav-accueil': 'Accueil',
        'nav-apropos': 'A propos',
        'nav-expertise': 'Expertise',
        'nav-publications': 'Publications & Réflexions',
        'nav-articles': 'Articles & Analyses',
        'nav-podcast': 'Podcast',
        'nav-recherches': 'Recherches académiques',
        'nav-contact': 'Contact',
        'hero-subtitle1': 'Conseillère en solutions technologiques',
        'hero-subtitle2': 'Solutions data pour la performance et la croissance',
        'hero-badge-makila': 'Makila AI — Membre',
        'hero-badge-hec': 'HEC Montréal — Maîtrise BI',
        'hero-badge2': 'BI • Analytics • Stratégie',
        'hero-badge3': 'Français • Anglais (bilingue)',
        'hero-main': 'Donner du sens aux données pour mieux décider',
        'hero-cta1': 'Explorer les publications',
        'hero-cta2': 'Me Contacter',
        'section-apropos': 'À Propos',
        'apropos-p1': 'Conseillère en solutions technologiques spécialisée en données et intelligence d\'affaires, j\'accompagne les organisations dans la transformation de leurs données en décisions stratégiques. Mon parcours combine une double formation de niveau maîtrise en économie (Université de Montreal) et en intelligence d\'affaires (HEC Montréal), ainsi que plus de cinq années d\'expérience dans des fonctions analytiques et décisionnelles.',
        'apropos-p2': 'Au fil de mes expériences professionnelles et de mes échanges avec des dirigeants, recruteurs et professionnels, j\'ai développé un intérêt marqué pour la manière dont les organisations analysent l\'information, structurent leur réflexion et prennent des décisions dans des contextes économiques complexes et incertains. J\'ai constaté que les difficultés rencontrées ne tiennent pas uniquement à un manque d\'outils ou de données, mais très souvent à un manque de clarté sur les enjeux, les priorités décisionnelles et l\'usage réel de l\'information.',
        'apropos-p3': 'À travers mon travail, mes publications et ce site, je propose une approche analytique, structurée et accessible, orientée impact. Mon objectif est d\'aider les organisations à mieux comprendre leur situation, à poser les bonnes questions et à avancer de manière cohérente, en alignant données, stratégie et besoins réels.',
        'section-expertise': 'Expertise',
        'expertise-1': 'Aide à la décision basée sur l\'analyse des données',
        'expertise-2': 'Business Intelligence et tableaux de bord décisionnels (Power BI, KPIs)',
        'expertise-3': 'Analyse de données pour enjeux stratégiques et opérationnels',
        'expertise-4': 'Conseil en solutions technologiques et analytiques',
        'section-pourquoi': 'Pourquoi ce site',
        'pourquoi-p1': 'Les organisations évoluent aujourd\'hui dans des environnements économiques et informationnels de plus en plus complexes. Les données sont disponibles, les outils sont nombreux, mais les décisions restent souvent difficiles à structurer et à arbitrer au quotidien.',
        'pourquoi-p2': 'Ce site a été créé pour proposer un espace de réflexion clair et accessible, à la croisée de l\'économie et de l\'intelligence des affaires. J\'y partage des analyses et des observations visant à mieux comprendre les enjeux organisationnels, à clarifier les priorités décisionnelles et à donner du sens à l\'information existante.',
        'pourquoi-p3': 'Ces réflexions s\'adressent autant aux dirigeants et entrepreneurs qu\'aux organisations à la recherche de profils capables d\'analyser des situations complexes, de structurer la réflexion et de contribuer à des décisions éclairées.',
        'section-trouverez': 'Ce que vous trouverez ici',
        'trouverez-1': 'Une analyse structurée des enjeux économiques et organisationnels',
        'trouverez-2': 'Une lecture claire du rôle des données, des outils et des fonctions analytiques',
        'trouverez-3': 'Une approche humaine et pragmatique, adaptée aux réalités des PME et des environnements en croissance',
        'section-publications': 'Publications & Réflexions',
        'publications-intro': 'Retrouvez ici mes analyses, réflexions et contributions dans les domaines de l\'économie, de l\'intelligence des affaires et de l\'analyse de données.',
        'articles-title': 'Articles & Analyses',
        'articles-desc': 'Les articles publiés ici abordent des enjeux liés à l\'économie, à l\'intelligence des affaires, aux données et à la prise de décision. Ils s\'adressent aux organisations et aux professionnels qui souhaitent dépasser les approches purement techniques pour adopter une réflexion plus structurée, plus cohérente et mieux adaptée à leur contexte.',
        'article1-title': 'Scientifique des données, analyste de données et analyste en intelligence d\'affaires',
        'article1-desc': 'Une analyse claire des différents rôles analytiques et de leurs contributions spécifiques aux organisations.',
        'article2-title': 'ERP, BI et intelligence artificielle',
        'article2-desc': 'Comment les outils technologiques s\'intègrent dans une démarche analytique cohérente.',
        'article3-title': '« Nous avons des données… mais nous ne savons pas quoi en faire »',
        'article3-desc': 'Réflexion sur les défis de la valorisation des données dans les organisations.',
        'podcast-title': 'Podcast',
        'podcast-desc': 'Écoutez mes interventions et discussions sur des sujets liés à l\'analytique, aux données et aux stratégies numériques.',
        'podcast1-title': 'Comment les entreprises captent l\'attention sur TikTok et Instagram Reels',
        'podcast1-desc': 'Comment les entreprises utilisent l\'analytique pour maximiser leur visibilité et leur chiffre d\'affaires sur les réseaux sociaux.',
        'recherches-title': 'Recherches académiques',
        'recherches-desc': 'Retrouvez ici mes travaux de recherche et contributions académiques dans le domaine de l\'économie, de l\'intelligence des affaires et de l\'analyse de données.',
        'recherche1-title': 'Travaux académiques',
        'recherche1-desc': 'Découvrez mes trois principaux travaux de recherche : un rapport de stage HEC sur l\'optimisation de la performance par Power BI, un rapport de recherche UdeM sur la réallocation de l\'emploi durant la COVID-19, et un mémoire sur les investissements directs étrangers dans les télécommunications en Haïti.',
        'section-contact': 'Contact',
        'contact-subtitle': 'Échanger autour d\'enjeux liés aux données, à la BI ou aux solutions technologiques.',
        'sidebar-etudes': 'Études',
        'domaine-1': 'Maîtrise en Intelligence des Affaires (HEC)',
        'domaine-2': 'Maîtrise en sciences économiques (Université de Montréal)',
        'domaine-3': 'Baccalauréat en sciences économiques (Université Quisqueya)',
        'sidebar-outils': 'Outils & Compétences',
        'sidebar-audience': 'À qui s\'adresse ce site',
        'audience-1': 'Dirigeants et entrepreneurs',
        'audience-2': 'PME et organisations en structuration',
        'audience-3': 'Recruteurs et gestionnaires',
        'audience-4': 'Professionnels et équipes en intelligence des affaires',
        'footer-tagline': 'Analyser. Clarifier. Décider.',
        'footer-subtitle': 'Économiste & Analyste des Affaires',
        'footer-copyright': '© 2026 Djeny Mainvil. Tous droits réservés.',
        'float-powerbi': 'POWER BI',
        'float-python': 'PYTHON',
        'float-sql': 'SQL',
        'float-data': 'DONNÉES',
        'float-dashboard': 'TABLEAU DE BORD',
        'chart-bars': 'Croissance Mensuelle',
        'chart-line': 'Tendance Performance',
        'chart-gauge': 'Taux d\'Atteinte',
        'gauge-label': 'Objectif',
        'kpi-revenue': 'Revenus',
        'kpi-satisfaction': 'Satisfaction',
        'kpi-clients': 'Clients',
        'float-analytics': 'ANALYTIQUE',
        'float-kpi': 'KPI',
        'float-excel': 'EXCEL',
        'float-bi': 'BI',
        'float-insights': 'PERSPECTIVES',
        'viz-title': 'Analytique de Performance • Données en Temps Réel'
      },
      en: {
        'nav-accueil': 'Home',
        'nav-apropos': 'About',
        'nav-expertise': 'Expertise',
        'nav-publications': 'Publications & Insights',
        'nav-articles': 'Articles & Analysis',
        'nav-podcast': 'Podcast',
        'nav-recherches': 'Academic Research',
        'nav-contact': 'Contact',
        'hero-subtitle1': 'Technology Solutions Consultant',
        'hero-subtitle2': 'Data solutions for performance and growth',
        'hero-badge-makila': 'Makila AI — Member',
        'hero-badge-hec': 'HEC Montréal — BI Master\'s',
        'hero-badge2': 'BI • Analytics • Strategy',
        'hero-badge3': 'French • English (bilingual)',
        'hero-main': 'Making sense of data for better decisions',
        'hero-cta1': 'Explore publications',
        'hero-cta2': 'Contact Me',
        'section-apropos': 'About',
        'apropos-p1': 'As a technology solutions consultant specializing in data and business intelligence, I help organizations transform their data into strategic decisions. My background combines a dual master\'s degree in economics (Université de Montréal) and business intelligence (HEC Montréal), along with over five years of experience in analytical and decision-making roles.',
        'apropos-p2': 'Through my professional experiences and exchanges with executives, recruiters, and professionals, I have developed a keen interest in how organizations analyze information, structure their thinking, and make decisions in complex and uncertain economic contexts. I have found that the difficulties encountered are not only due to a lack of tools or data, but very often to a lack of clarity on the issues, decision-making priorities, and the actual use of information.',
        'apropos-p3': 'Through my work, publications, and this site, I offer an analytical, structured, and accessible approach focused on impact. My goal is to help organizations better understand their situation, ask the right questions, and move forward consistently, aligning data, strategy, and real needs.',
        'section-expertise': 'Expertise',
        'expertise-1': 'Data-driven decision support',
        'expertise-2': 'Business Intelligence and decision dashboards (Power BI, KPIs)',
        'expertise-3': 'Data analysis for strategic and operational challenges',
        'expertise-4': 'Consulting in technological and analytical solutions',
        'section-pourquoi': 'Why This Site',
        'pourquoi-p1': 'Organizations today operate in increasingly complex economic and information environments. Data is available, tools are numerous, but decisions often remain difficult to structure and prioritize on a daily basis.',
        'pourquoi-p2': 'This site was created to provide a clear and accessible space for reflection at the intersection of economics and business intelligence. I share analyses and observations aimed at better understanding organizational issues, clarifying decision-making priorities, and making sense of existing information.',
        'pourquoi-p3': 'These reflections are addressed to executives and entrepreneurs as well as organizations looking for profiles capable of analyzing complex situations, structuring thinking, and contributing to informed decisions.',
        'section-trouverez': 'What You Will Find Here',
        'trouverez-1': 'A structured analysis of economic and organizational issues',
        'trouverez-2': 'A clear understanding of the role of data, tools, and analytical functions',
        'trouverez-3': 'A human and pragmatic approach, adapted to the realities of SMEs and growing environments',
        'section-publications': 'Publications & Insights',
        'publications-intro': 'Find here my analyses, reflections, and contributions in the fields of economics, business intelligence, and data analysis.',
        'articles-title': 'Articles & Analysis',
        'articles-desc': 'The articles published here address issues related to economics, business intelligence, data, and decision-making. They are aimed at organizations and professionals who wish to go beyond purely technical approaches to adopt a more structured, coherent, and context-appropriate reflection.',
        'article1-title': 'Data Scientist, Data Analyst, and Business Intelligence Analyst',
        'article1-desc': 'A clear analysis of different analytical roles and their specific contributions to organizations.',
        'article2-title': 'ERP, BI, and Artificial Intelligence',
        'article2-desc': 'How technological tools integrate into a coherent analytical approach.',
        'article3-title': '"We have data... but we don\'t know what to do with it"',
        'article3-desc': 'Reflection on the challenges of data valorization in organizations.',
        'podcast-title': 'Podcast',
        'podcast-desc': 'Listen to my interventions and discussions on topics related to analytics, data, and digital strategies.',
        'podcast1-title': 'How companies capture attention on TikTok and Instagram Reels',
        'podcast1-desc': 'How companies use analytics to maximize their visibility and revenue on social networks.',
        'recherches-title': 'Academic Research',
        'recherches-desc': 'Find here my research work and academic contributions in the field of economics, business intelligence, and data analysis.',
        'recherche1-title': 'Academic Work',
        'recherche1-desc': 'Discover my three main research works: an HEC internship report on performance optimization through Power BI, a UdeM research report on employment reallocation during COVID-19, and a thesis on foreign direct investments in telecommunications in Haiti.',
        'section-contact': 'Contact',
        'contact-subtitle': 'Discuss issues related to data, BI, or technological solutions.',
        'sidebar-etudes': 'Education',
        'domaine-1': 'Master\'s in Business Intelligence (HEC)',
        'domaine-2': 'Master\'s in Economics (University of Montreal)',
        'domaine-3': 'Bachelor\'s in Economics (Quisqueya University)',
        'sidebar-outils': 'Tools & Skills',
        'sidebar-audience': 'Who This Site Is For',
        'audience-1': 'Executives and entrepreneurs',
        'audience-2': 'SMEs and organizations in structuring',
        'audience-3': 'Recruiters and managers',
        'audience-4': 'Professionals and business intelligence teams',
        'footer-tagline': 'Analyze. Clarify. Decide.',
        'footer-subtitle': 'Economist & Business Analyst',
        'footer-copyright': '© 2026 Djeny Mainvil. All rights reserved.',
        'float-powerbi': 'POWER BI',
        'float-python': 'PYTHON',
        'float-sql': 'SQL',
        'float-data': 'DATA',
        'float-dashboard': 'DASHBOARD',
        'chart-bars': 'Monthly Growth',
        'chart-line': 'Performance Trend',
        'chart-gauge': 'Achievement Rate',
        'gauge-label': 'Target',
        'kpi-revenue': 'Revenue',
        'kpi-satisfaction': 'Satisfaction',
        'kpi-clients': 'Clients',
        'float-analytics': 'ANALYTICS',
        'float-kpi': 'KPI',
        'float-excel': 'EXCEL',
        'float-bi': 'BI',
        'float-insights': 'INSIGHTS',
        'viz-title': 'Performance Analytics • Live Data'
      }
    };

    function toggleLanguage() {
      currentLang = currentLang === 'fr' ? 'en' : 'fr';
      localStorage.setItem('language', currentLang);
      updateContent();
      updateLanguageButton();
    }

    function updateLanguageButton() {
      const langButton = document.getElementById('current-lang');
      if (currentLang === 'fr') {
        langButton.innerHTML = '🇬🇧 EN';
      } else {
        langButton.innerHTML = '🇫🇷 FR';
      }
    }

    function updateContent() {
      const lang = translations[currentLang];
      
      document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (lang[key]) {
          // Ne pas écraser le contenu des éléments avec des IDs (valeurs dynamiques)
          if (!element.id || element.id === '') {
            element.textContent = lang[key];
          }
        }
      });
    }

    window.addEventListener('DOMContentLoaded', function() {
      updateContent();
      updateLanguageButton();
    });
  
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
        leftText.style.transition = 'all 0.6s cubic-bezier(0.77, 0, 0.175, 1)';
        leftText.style.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0) rotateZ(0deg)';
        leftText.style.opacity = '1';
        
        rightText.style.transition = 'all 0.6s cubic-bezier(0.77, 0, 0.175, 1)';
        rightText.style.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0) rotateZ(0deg)';
        rightText.style.opacity = '1';
      }, 100);
      
      // Anime la disparition des textes
      setTimeout(function() {
        leftText.style.transition = 'all 0.4s cubic-bezier(0.77, 0, 0.175, 1)';
        leftText.style.transform = 'translate3d(0, -150%, 0)';
        leftText.style.opacity = '0';
        
        rightText.style.transition = 'all 0.4s cubic-bezier(0.77, 0, 0.175, 1)';
        rightText.style.transform = 'translate3d(0, -150%, 0)';
        rightText.style.opacity = '0';
      }, 1000);
      
      // Fait disparaître le preloader
      setTimeout(function() {
        leftDiv.style.transition = 'transform 0.6s cubic-bezier(0.77, 0, 0.175, 1)';
        leftDiv.style.transform = 'translateX(-100%)';
        
        rightDiv.style.transition = 'transform 0.6s cubic-bezier(0.77, 0, 0.175, 1)';
        rightDiv.style.transform = 'translateX(100%)';
      }, 1300);
      
      // Cache complètement le preloader
      setTimeout(function() {
        preloader.style.display = 'none';
      }, 1900);
      
      // Anime l'apparition du contenu de la page
      setTimeout(function() {
        // Nav apparaît en premier
        nav.style.transition = 'all 0.8s cubic-bezier(0.77, 0, 0.175, 1)';
        nav.style.opacity = '1';
        nav.style.transform = 'translate3d(0, 0, 0)';
        
        // Hero apparaît légèrement après
        setTimeout(function() {
          hero.style.transition = 'opacity 1s cubic-bezier(0.77, 0, 0.175, 1)';
          hero.style.opacity = '1';
        }, 150);
        
        // Main content apparaît ensuite
        setTimeout(function() {
          mainContainer.style.transition = 'opacity 1s cubic-bezier(0.77, 0, 0.175, 1)';
          mainContainer.style.opacity = '1';

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

    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Gestion du dropdown sur mobile et desktop
    if (dropdownToggle) {
      dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('active');
      });
    }

    // Fermer le menu quand on clique sur un lien (sauf dropdown-toggle)
    navLinkItems.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

    // Fermer le menu mobile quand on clique sur un lien du dropdown
    dropdownLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        dropdown.classList.remove('active');
      });
    });

    // Fermer le dropdown si on clique ailleurs
    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });

    // Scroll Reveal Animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
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
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .section-title, .topics-list').forEach(el => {
      observer.observe(el);
    });

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
    const sidebarObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.sidebar-section').forEach(section => {
      sidebarObserver.observe(section);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
          e.preventDefault();
          const target = document.querySelector(href);
          const navHeight = document.querySelector('.nav').offsetHeight;
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
        
        // Changer la couleur selon le pourcentage
        if (percentage >= 80) {
          gaugeFill.style.stroke = '#ff9d70'; // Orange
          gaugeValue.style.color = '#ff9d70';
        } else if (percentage >= 60) {
          gaugeFill.style.stroke = '#ff9d70'; // Orange
          gaugeValue.style.color = '#ff9d70';
        } else {
          gaugeFill.style.stroke = '#ef4444'; // Rouge
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

