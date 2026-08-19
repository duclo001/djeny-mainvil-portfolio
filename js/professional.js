document.addEventListener('DOMContentLoaded', () => {
	// Safety: some browsers can end up with a non-zero horizontal scroll,
	// making the left side look cut off. Ensure we start at x=0.
	try {
		window.scrollTo({ left: 0, top: window.scrollY, behavior: 'auto' });
	} catch {
		window.scrollTo(0, window.scrollY);
	}

	const publicationsSection = document.getElementById('publications');
	if (!publicationsSection) return;

	const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	const columns = Array.from(publicationsSection.querySelectorAll('.pub-col-main, .pub-side-block, .pub-article-card'));
	const links = Array.from(publicationsSection.querySelectorAll('.executive-link, .pub-research-link'));
	const swipeMenus = Array.from(publicationsSection.querySelectorAll('.exec-swipe-menu'));
	const swipeCards = Array.from(publicationsSection.querySelectorAll('.exec-swipe-card'));
	const animatedItems = [...columns, ...links, ...swipeMenus, ...swipeCards];

	animatedItems.forEach((el) => el.classList.add('exec-anim'));

	if (prefersReducedMotion) {
		animatedItems.forEach((el) => el.classList.add('is-visible'));
		return;
	}

	// Stagger: columns first, then links in document order
	columns.forEach((el, i) => {
		el.style.setProperty('--delay', `${i * 90}ms`);
	});
	links.forEach((el, i) => {
		el.style.setProperty('--delay', `${180 + i * 55}ms`);
	});
	// --- Ajout swipe tactile natif pour exec-swipe-track (carousel articles) ---
	// Le CSS pose touch-action: pan-y sur la piste, donc le navigateur ne gère
	// pas le défilement horizontal : on le pilote nous-mêmes au doigt.
	swipeMenus.forEach((menu) => {
		const track = menu.querySelector('.exec-swipe-track');
		if (!track) return;
		let isTouching = false;
		let touchStartX = 0;
		let scrollStartX = 0;
		track.addEventListener('touchstart', (e) => {
			if (e.touches.length !== 1) return;
			isTouching = true;
			touchStartX = e.touches[0].clientX;
			scrollStartX = track.scrollLeft;
		}, { passive: true });
		track.addEventListener('touchmove', (e) => {
			if (!isTouching || e.touches.length !== 1) return;
			const dx = e.touches[0].clientX - touchStartX;
			track.scrollLeft = scrollStartX - dx;
		}, { passive: true });
		track.addEventListener('touchend', () => {
			isTouching = false;
		});
		track.addEventListener('touchcancel', () => {
			isTouching = false;
		});
	});

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			});
		},
		{
			root: null,
			rootMargin: '0px 0px -10% 0px',
			threshold: 0.08,
		}
	);

	animatedItems.forEach((el) => observer.observe(el));

	// Swipe select menu: Articles & Analyses
	const swipeMenu = publicationsSection.querySelector('.exec-swipe-menu[data-menu="articles"]');
	if (!swipeMenu) return;

	const track = swipeMenu.querySelector('.exec-swipe-track');
	const cards = Array.from(swipeMenu.querySelectorAll('.exec-swipe-card'));
	const captionTag = swipeMenu.querySelector('.exec-swipe-caption-tag');
	const captionTitle = swipeMenu.querySelector('.exec-swipe-caption-title');
	if (!track || cards.length === 0 || !captionTag || !captionTitle) return;

	let activeIndex = 0;
	let rafId = 0;
	let isPointerDown = false;

	const setActive = (index) => {
		activeIndex = Math.max(0, Math.min(cards.length - 1, index));
		cards.forEach((el, i) => el.classList.toggle('is-active', i === activeIndex));
		captionTag.textContent = cards[activeIndex].dataset.tag || '';
		captionTitle.textContent = cards[activeIndex].dataset.title || '';
	};

	const centerCard = (index, behavior = 'smooth') => {
		const card = cards[index];
		if (!card) return;

		// Scroll ONLY the track; avoid scrollIntoView which may scroll the page horizontally.
		const trackRect = track.getBoundingClientRect();
		const cardRect = card.getBoundingClientRect();
		const cardLeftInTrack = (cardRect.left - trackRect.left) + track.scrollLeft;
		const target = cardLeftInTrack - (trackRect.width - cardRect.width) / 2;
		const maxScroll = track.scrollWidth - track.clientWidth;
		const clamped = Math.max(0, Math.min(maxScroll, target));
		track.scrollTo({ left: clamped, behavior });
	};

	const updateActiveFromScroll = () => {
		rafId = 0;
		const trackRect = track.getBoundingClientRect();
		const centerX = trackRect.left + trackRect.width / 2;
		let nearestIndex = 0;
		let nearestDist = Infinity;
		cards.forEach((card, i) => {
			const r = card.getBoundingClientRect();
			const cardCenter = r.left + r.width / 2;
			const dist = Math.abs(cardCenter - centerX);
			if (dist < nearestDist) {
				nearestDist = dist;
				nearestIndex = i;
			}
		});
		setActive(nearestIndex);
	};

	setActive(0);
	updateActiveFromScroll();
	centerCard(0, 'auto');

	// Synchronise les dots à chaque scroll et swipe tactile
	track.addEventListener('scroll', () => {
		if (rafId) return;
		rafId = window.requestAnimationFrame(updateActiveFromScroll);
	});
	// Sur mobile, certains navigateurs ne déclenchent pas toujours scroll, donc on force aussi sur touchmove
	track.addEventListener('touchmove', () => {
		if (rafId) return;
		rafId = window.requestAnimationFrame(updateActiveFromScroll);
	}, {passive:true});

	// Drag-to-scroll (desktop friendly). Native touch swipe already works.
	let isDragging = false;
	let startX = 0;
	let startScrollLeft = 0;

	const onPointerDown = (ev) => {
		if (prefersReducedMotion) return;
		isPointerDown = true;
		isDragging = true;
		startX = ev.clientX;
		startScrollLeft = track.scrollLeft;
		track.setPointerCapture?.(ev.pointerId);
	};

	const onPointerMove = (ev) => {
		if (!isDragging) return;
		const dx = ev.clientX - startX;
		track.scrollLeft = startScrollLeft - dx;
	};

	const onPointerUp = (ev) => {
		if (!isDragging) return;
		isDragging = false;
		isPointerDown = false;
		track.releasePointerCapture?.(ev.pointerId);
		updateActiveFromScroll();
	};

	track.addEventListener('pointerdown', onPointerDown);
	track.addEventListener('pointermove', onPointerMove);
	track.addEventListener('pointerup', onPointerUp);
	track.addEventListener('pointercancel', onPointerUp);

	// If user clicks a card without scrolling much, also mark it active immediately.
	cards.forEach((card, i) => {
		card.addEventListener('focus', () => setActive(i));
		card.addEventListener('click', (ev) => {
			// During a drag gesture, don't navigate.
			if (isPointerDown) {
				ev.preventDefault();
				return;
			}
			if (i !== activeIndex) {
				ev.preventDefault();
				setActive(i);
				centerCard(i, 'smooth');
			}
		});
	});
});

/* ── À propos : repli du texte ─────────────────────────────────
   La colonne de texte dépasse largement la photo placée à sa
   droite, ce qui laisse un vide sous celle-ci. On replie le texte
   pour que les deux colonnes se terminent sur la même ligne.

   Le repli est appliqué ici et non dans le HTML : sans
   JavaScript, le texte reste entièrement lisible. */
(function () {
  'use strict';

  var texte = document.getElementById('apropos-texte');
  var bouton = document.querySelector('.apropos-bascule');
  if (!texte || !bouton) return;

  var aside = document.querySelector('#positionnement .executive-aside');
  var mouvementReduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var deplie = false;

  /* Hauteur de repli : le bas du texte doit tomber sur le bas de
     la photo. En dessous de 900px la photo passe sous le texte,
     on garde alors une hauteur de lecture fixe. */
  function hauteurRepli() {
    if (window.innerWidth <= 900 || !aside) return 340;
    var ecart = aside.getBoundingClientRect().bottom - texte.getBoundingClientRect().top;
    // Le bouton se place sous le texte : sa hauteur est retirée pour
    // que la colonne entière se termine au bas de la photo.
    var style = getComputedStyle(bouton);
    var place = bouton.offsetHeight + (parseFloat(style.marginTop) || 0);
    return Math.max(240, Math.round(ecart - place));
  }

  function mesurer() {
    if (deplie) return;
    texte.style.setProperty('--apropos-hauteur', hauteurRepli() + 'px');
  }

  /* Rien à replier si le texte tient déjà dans la hauteur visée. */
  function utile() {
    return texte.scrollHeight > hauteurRepli() + 60;
  }

  function replier() {
    deplie = false;
    mesurer();
    texte.classList.add('est-replie');
    texte.style.maxHeight = '';
    bouton.setAttribute('aria-expanded', 'false');
  }

  function deplier() {
    deplie = true;
    var depart = texte.getBoundingClientRect().height;
    texte.classList.remove('est-replie');
    bouton.setAttribute('aria-expanded', 'true');

    if (mouvementReduit) {
      texte.style.maxHeight = '';
      return;
    }

    // Animer vers une hauteur connue, puis la relâcher : une
    // transition vers « auto » ne se joue pas.
    var arrivee = texte.scrollHeight;
    texte.style.maxHeight = depart + 'px';
    texte.style.transition = 'max-height 480ms cubic-bezier(0.4, 0, 0.2, 1)';
    requestAnimationFrame(function () {
      texte.style.maxHeight = arrivee + 'px';
    });
    setTimeout(function () {
      texte.style.maxHeight = '';
      texte.style.transition = '';
    }, 520);
  }

  if (!utile()) return;

  bouton.classList.add('est-actif');
  replier();

  bouton.addEventListener('click', function () {
    if (deplie) {
      replier();
      // Ne pas laisser le visiteur au milieu du texte disparu.
      var haut = texte.getBoundingClientRect().top + window.scrollY - 110;
      if (window.scrollY > haut) {
        window.scrollTo({ top: haut, behavior: mouvementReduit ? 'auto' : 'smooth' });
      }
    } else {
      deplier();
    }
  });

  var attente;
  window.addEventListener('resize', function () {
    clearTimeout(attente);
    attente = setTimeout(mesurer, 150);
  });

  // Les polices de caractères arrivent après le rendu initial et
  // décalent les hauteurs : on remesure une fois tout chargé.
  window.addEventListener('load', mesurer);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(mesurer);
})();

/* ── Services : accordéon ──────────────────────────────────────
   Les panneaux sont repliés ici, jamais dans le HTML : sans
   JavaScript, les huit listes restent affichées et le visiteur ne
   perd aucune information. */
(function () {
  'use strict';

  var accordeon = document.querySelector('.services-accordeon');
  if (!accordeon) return;

  var items = Array.prototype.slice.call(accordeon.querySelectorAll('.service-item'));
  if (!items.length) return;

  var mouvementReduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function ouvrir(panneau, bouton) {
    panneau.hidden = false;
    bouton.setAttribute('aria-expanded', 'true');

    if (mouvementReduit) return;
    var cible = panneau.scrollHeight;
    panneau.style.maxHeight = '0px';
    panneau.style.transition = 'max-height 340ms cubic-bezier(0.4, 0, 0.2, 1)';
    requestAnimationFrame(function () {
      panneau.style.maxHeight = cible + 'px';
    });
    setTimeout(function () {
      panneau.style.maxHeight = '';
      panneau.style.transition = '';
    }, 380);
  }

  function fermer(panneau, bouton) {
    bouton.setAttribute('aria-expanded', 'false');

    if (mouvementReduit) {
      panneau.hidden = true;
      return;
    }
    panneau.style.maxHeight = panneau.scrollHeight + 'px';
    panneau.style.transition = 'max-height 280ms cubic-bezier(0.4, 0, 0.2, 1)';
    requestAnimationFrame(function () {
      panneau.style.maxHeight = '0px';
    });
    setTimeout(function () {
      panneau.hidden = true;
      panneau.style.maxHeight = '';
      panneau.style.transition = '';
    }, 300);
  }

  items.forEach(function (item) {
    var bouton = item.querySelector('.service-bouton');
    var panneau = item.querySelector('.service-panneau');
    if (!bouton || !panneau) return;

    panneau.hidden = true;
    bouton.setAttribute('aria-expanded', 'false');

    bouton.addEventListener('click', function () {
      var ouvert = bouton.getAttribute('aria-expanded') === 'true';
      if (ouvert) fermer(panneau, bouton);
      else ouvrir(panneau, bouton);
    });
  });

  /* Flèches haut et bas pour circuler d'un domaine à l'autre,
     comportement attendu d'un ensemble d'en-têtes de ce type. */
  var boutons = items.map(function (i) { return i.querySelector('.service-bouton'); });
  boutons.forEach(function (b, i) {
    if (!b) return;
    b.addEventListener('keydown', function (e) {
      var suivant = null;
      if (e.key === 'ArrowDown') suivant = boutons[(i + 1) % boutons.length];
      else if (e.key === 'ArrowUp') suivant = boutons[(i - 1 + boutons.length) % boutons.length];
      else if (e.key === 'Home') suivant = boutons[0];
      else if (e.key === 'End') suivant = boutons[boutons.length - 1];
      if (suivant) { e.preventDefault(); suivant.focus(); }
    });
  });
})();
