/* ═══════════════════════════════════════════════════════════
   PAGES — comportements des pages internes

   Ce code était recopié dans une balise <script> de chaque
   article et de chaque mandat. mandat3.html en portait deux
   copies concurrentes de la visionneuse : la première fermait
   la galerie au moindre clic, ce qui neutralisait la navigation
   au clavier et au doigt de la seconde.
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Barre de progression de lecture ────────────────────────
     L'ancienne version lisait scrollHeight à chaque événement de
     défilement, ce qui force le navigateur à recalculer la mise
     en page en continu. On passe par requestAnimationFrame et on
     ne mesure la hauteur qu'au redimensionnement. */
  function progressionLecture() {
    if (!document.querySelector('.article-content')) return;

    var barre = document.querySelector('.reading-progress');
    if (!barre) {
      barre = document.createElement('div');
      barre.className = 'reading-progress';
      document.body.prepend(barre);
    }

    var course = 0;
    var enAttente = false;

    function mesurer() {
      course = document.documentElement.scrollHeight - window.innerHeight;
    }

    function peindre() {
      enAttente = false;
      if (course <= 0) return;
      var pct = (window.scrollY / course) * 100;
      barre.style.width = Math.min(100, Math.max(0, pct)) + '%';
    }

    mesurer();
    window.addEventListener('scroll', function () {
      if (enAttente) return;
      enAttente = true;
      requestAnimationFrame(peindre);
    }, { passive: true });
    window.addEventListener('resize', function () {
      mesurer();
      peindre();
    });
    peindre();
  }

  /* ── Apparition des blocs au défilement ─────────────────── */
  function apparitionBlocs() {
    var blocs = document.querySelectorAll('.article-content > *');
    if (!blocs.length) return;

    // Sans IntersectionObserver, on laisse le contenu visible.
    if (!('IntersectionObserver' in window)) return;

    // Le réglage système prime : pas d'animation d'entrée.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var observateur = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-visible');
        observateur.unobserve(e.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    blocs.forEach(function (bloc) {
      bloc.classList.add('fade-in-section');
      observateur.observe(bloc);
    });
  }

  /* ── Visionneuse de galerie ─────────────────────────────── */
  function visionneuse() {
    var vignettes = Array.prototype.slice.call(
      document.querySelectorAll('.souvenir-gallery img')
    );
    var boite = document.getElementById('lightbox');
    var image = document.getElementById('lightbox-img');
    if (!vignettes.length || !boite || !image) return;

    var index = 0;
    var declencheur = null;

    function afficher(i) {
      index = ((i % vignettes.length) + vignettes.length) % vignettes.length;
      image.src = vignettes[index].src;
      image.alt = vignettes[index].alt || '';
    }

    function ouvrir(i, source) {
      declencheur = source;
      afficher(i);
      boite.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      boite.focus();
    }

    function fermer() {
      boite.classList.remove('is-open');
      document.body.style.overflow = '';
      // Rendre le focus à la vignette d'où l'on vient.
      if (declencheur) declencheur.focus();
    }

    vignettes.forEach(function (vignette, i) {
      // Rendre les vignettes atteignables au clavier.
      vignette.setAttribute('tabindex', '0');
      vignette.setAttribute('role', 'button');
      vignette.addEventListener('click', function () { ouvrir(i, vignette); });
      vignette.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          ouvrir(i, vignette);
        }
      });
    });

    boite.setAttribute('tabindex', '-1');

    // Ne fermer qu'au clic sur le fond, jamais sur l'image :
    // c'est ce qui cassait le glissement dans l'ancienne version.
    boite.addEventListener('click', function (e) {
      if (e.target === boite) fermer();
    });

    document.addEventListener('keydown', function (e) {
      if (!boite.classList.contains('is-open')) return;
      if (e.key === 'Escape') fermer();
      else if (e.key === 'ArrowRight') afficher(index + 1);
      else if (e.key === 'ArrowLeft') afficher(index - 1);
    });

    // Glissement au doigt et à la souris.
    var departX = null;
    function debut(x) { departX = x; }
    function fin(x) {
      if (departX === null) return;
      var dx = x - departX;
      if (Math.abs(dx) > 40) afficher(index + (dx < 0 ? 1 : -1));
      departX = null;
    }

    image.addEventListener('touchstart', function (e) {
      if (e.touches.length === 1) debut(e.touches[0].clientX);
    }, { passive: true });
    image.addEventListener('touchend', function (e) {
      fin(e.changedTouches[0].clientX);
    }, { passive: true });
    image.addEventListener('mousedown', function (e) { debut(e.clientX); });
    image.addEventListener('mouseup', function (e) { fin(e.clientX); });
  }

  function demarrer() {
    progressionLecture();
    apparitionBlocs();
    visionneuse();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', demarrer);
  } else {
    demarrer();
  }
})();
