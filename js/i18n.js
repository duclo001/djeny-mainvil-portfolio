/* ═══════════════════════════════════════════════════════════
   I18N — moteur de traduction FR / EN

   Le dictionnaire tenait dans un seul fichier de 203 Ko chargé
   sur chaque page, alors qu'une page n'utilise qu'une fraction
   de son contenu : la page d'accueil n'a besoin d'aucune des
   traductions des cinq articles.

   Chaque page charge désormais ce moteur, le fonds commun, puis
   son propre dictionnaire. Les dictionnaires s'enregistrent ici
   au chargement, dans n'importe quel ordre.
   ═══════════════════════════════════════════════════════════ */

(function (global) {
  'use strict';

  var dictionnaire = { fr: {}, en: {} };
  var langue = 'fr';

  try {
    langue = localStorage.getItem('language') || 'fr';
  } catch (e) {
    // Navigation privée stricte : on reste en français.
  }

  /* Appelé par chaque fichier de dictionnaire. */
  global.i18nAjouter = function (partie) {
    if (!partie) return;
    ['fr', 'en'].forEach(function (l) {
      if (!partie[l]) return;
      for (var cle in partie[l]) {
        if (Object.prototype.hasOwnProperty.call(partie[l], cle)) {
          dictionnaire[l][cle] = partie[l][cle];
        }
      }
    });
  };

  function appliquer() {
    var table = dictionnaire[langue] || {};
    document.documentElement.lang = langue === 'en' ? 'en' : 'fr';

    document.querySelectorAll('[data-translate]').forEach(function (el) {
      var valeur = table[el.getAttribute('data-translate')];
      if (valeur == null) return;

      // Cas fréquent : l'élément ne contient qu'un lien. On ne
      // remplace que son texte, pour préserver href et structure.
      if (el.childElementCount === 1 &&
          el.firstElementChild.tagName === 'A' &&
          el.firstElementChild.childElementCount === 0) {
        el.firstElementChild.textContent = valeur;
        return;
      }

      // Une traduction peut contenir du balisage (listes, gras).
      if (typeof valeur === 'string' && /<\/?[a-z][\s\S]*>/i.test(valeur)) {
        el.innerHTML = valeur;
        return;
      }

      el.textContent = valeur;
    });

    // Les libellés lus par les lecteurs d'écran suivent aussi la langue.
    document.querySelectorAll('[data-translate-aria]').forEach(function (el) {
      var valeur = table[el.getAttribute('data-translate-aria')];
      if (valeur != null) el.setAttribute('aria-label', valeur);
    });

    document.querySelectorAll('[data-translate-alt]').forEach(function (el) {
      var valeur = table[el.getAttribute('data-translate-alt')];
      if (valeur != null) el.setAttribute('alt', valeur);
    });
  }

  function majBouton() {
    var etiquette = document.getElementById('current-lang');
    if (etiquette) etiquette.textContent = langue === 'fr' ? 'EN' : 'FR';
  }

  global.toggleLanguage = function () {
    langue = langue === 'fr' ? 'en' : 'fr';
    try {
      localStorage.setItem('language', langue);
    } catch (e) {
      // Le choix ne sera pas retenu, la bascule fonctionne quand même.
    }
    appliquer();
    majBouton();
  };

  global.i18nLangue = function () { return langue; };

  /* Lecture d'un libellé depuis le script : les messages d'un
     formulaire, par exemple, n'existent pas dans le HTML et doivent
     tout de même suivre la langue choisie. */
  global.i18nTexte = function (cle) {
    var table = dictionnaire[langue] || {};
    return table[cle];
  };

  function demarrer() {
    appliquer();
    majBouton();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', demarrer);
  } else {
    demarrer();
  }
})(window);
