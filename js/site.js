/* ═══════════════════════════════════════════════════════════
   SITE — comportements communs à toutes les pages

   Remplace index2.js, écrit pour la version précédente du site.
   Sur ses 25 cibles DOM, 15 ne correspondaient plus à aucun
   élément : graphiques, jauge, compteurs, menu déroulant,
   barre latérale. Six setInterval tournaient en permanence pour
   animer des éléments absents — dont un qui interrogeait le DOM
   toutes les trois secondes, sur chaque page, indéfiniment.
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var mouvementReduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Preloader ──────────────────────────────────────────────
     Il était piloté par deux scripts à la fois : index2.js le
     masquait à 1,9 s pendant que professional.js jouait son
     animation jusqu'à 2,7 s après le chargement. Un seul pilote
     désormais, et il ne se déclenche qu'à la première page de
     la session — revenir en arrière ne doit pas faire attendre. */
  function preloader() {
    var voile = document.getElementById('preloader');
    if (!voile) return;

    var logo = document.querySelector('.nav-logo');
    var contenu = voile.querySelector('.preloader-content');
    var dejaVu = sessionStorage.getItem('preloaderVu') === 'true';

    function reveler(immediat) {
      document.body.classList.remove('preloader-active');
      if (logo) logo.style.opacity = '1';
      if (immediat) {
        voile.remove();
        return;
      }
      voile.classList.add('fade-out');
      setTimeout(function () { voile.remove(); }, 450);
    }

    if (dejaVu || mouvementReduit || !contenu || !logo) {
      reveler(true);
      return;
    }

    document.body.classList.add('preloader-active');

    window.addEventListener('load', function () {
      setTimeout(function () {
        // Le titre rejoint la position du logo, puis s'efface.
        var cibleLogo = logo.getBoundingClientRect();
        var cibleTexte = contenu.getBoundingClientRect();
        var dx = (cibleLogo.left + cibleLogo.width / 2) - (cibleTexte.left + cibleTexte.width / 2);
        var dy = (cibleLogo.top + cibleLogo.height / 2) - (cibleTexte.top + cibleTexte.height / 2);
        var echelle = Math.min(cibleLogo.height / cibleTexte.height, 0.4);

        contenu.style.transform = 'translate(' + dx + 'px, ' + dy + 'px) scale(' + echelle + ')';
        contenu.style.opacity = '0';

        setTimeout(function () {
          sessionStorage.setItem('preloaderVu', 'true');
          reveler(false);
        }, 520);
      }, 550);
    });

    // Filet de sécurité : si « load » n'arrive jamais — une image
    // lente, une ressource tierce bloquée — la page se révèle
    // quand même plutôt que de rester derrière le voile.
    setTimeout(function () {
      if (document.body.contains(voile)) reveler(false);
    }, 4000);
  }

  /* ── Navigation ─────────────────────────────────────────── */
  function navigation() {
    var bouton = document.querySelector('.hamburger');
    var menu = document.querySelector('.nav-links');
    if (!bouton || !menu) return;

    // Le bouton n'annonçait pas son état aux lecteurs d'écran.
    bouton.setAttribute('role', 'button');
    bouton.setAttribute('tabindex', '0');
    bouton.setAttribute('aria-label', 'Ouvrir le menu');
    bouton.setAttribute('aria-expanded', 'false');
    bouton.setAttribute('aria-controls', 'menu-principal');
    menu.id = 'menu-principal';

    function basculer(ouvrir) {
      var etat = typeof ouvrir === 'boolean' ? ouvrir : !menu.classList.contains('active');
      menu.classList.toggle('active', etat);
      bouton.classList.toggle('active', etat);
      bouton.setAttribute('aria-expanded', String(etat));
      bouton.setAttribute('aria-label', etat ? 'Fermer le menu' : 'Ouvrir le menu');
    }

    bouton.addEventListener('click', function () { basculer(); });
    bouton.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); basculer(); }
    });

    menu.querySelectorAll('a').forEach(function (lien) {
      lien.addEventListener('click', function () { basculer(false); });
    });

    document.addEventListener('click', function (e) {
      if (!menu.classList.contains('active')) return;
      if (menu.contains(e.target) || bouton.contains(e.target)) return;
      basculer(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('active')) {
        basculer(false);
        bouton.focus();
      }
    });
  }

  /* ── Bascule de langue ──────────────────────────────────── */
  function langue() {
    var bouton = document.querySelector('.language-toggle');
    if (!bouton) return;
    bouton.addEventListener('click', function (e) {
      e.preventDefault();
      if (typeof window.toggleLanguage === 'function') window.toggleLanguage();
    });
  }

  /* ── Retour en haut ─────────────────────────────────────── */
  function retourHaut() {
    var bouton = document.querySelector('.back-to-top');
    if (!bouton) return;

    var enAttente = false;
    function evaluer() {
      enAttente = false;
      bouton.classList.toggle('visible', window.scrollY > 400);
    }

    window.addEventListener('scroll', function () {
      if (enAttente) return;
      enAttente = true;
      requestAnimationFrame(evaluer);
    }, { passive: true });

    bouton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: mouvementReduit ? 'auto' : 'smooth' });
    });

    evaluer();
  }

  /* Le défilement fluide et le décalage sous la barre fixe sont
     désormais gérés en CSS (scroll-behavior, scroll-padding-top).
     Le gestionnaire JavaScript qui interceptait chaque ancre a
     été retiré. */

  preloader();

  function demarrer() {
    navigation();
    langue();
    retourHaut();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', demarrer);
  } else {
    demarrer();
  }
})();
