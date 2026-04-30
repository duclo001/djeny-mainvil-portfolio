/* ── Preloader ─────────────────────────────────────────── */
(function () {
  document.body.classList.add('preloader-active');

  window.addEventListener('load', function () {
    var preloader = document.getElementById('preloader');
    if (!preloader) return;

    var content = preloader.querySelector('.preloader-content');
    var logo = document.querySelector('.nav-logo');
    if (!logo) { preloader.remove(); document.body.classList.remove('preloader-active'); return; }

    // Wait for fade-in animations to finish (0.8s + 0.3s delay = ~1.3s total)
    setTimeout(function () {
      // Get logo target position
      var logoRect = logo.getBoundingClientRect();
      var contentRect = content.getBoundingClientRect();

      // Calculate translation to move text center to logo center
      var dx = (logoRect.left + logoRect.width / 2) - (contentRect.left + contentRect.width / 2);
      var dy = (logoRect.top + logoRect.height / 2) - (contentRect.top + contentRect.height / 2);

      // Scale down to match logo size (logo is ~50px, text is much larger)
      var scale = Math.min(logoRect.height / contentRect.height, 0.4);

      content.style.transform = 'translate(' + dx + 'px, ' + dy + 'px) scale(' + scale + ')';
      content.style.opacity = '0';

      // After the movement animation, fade out overlay and reveal page
      setTimeout(function () {
        preloader.classList.add('fade-out');
        document.body.classList.remove('preloader-active');
        logo.style.transition = 'opacity 0.4s ease';
        logo.style.opacity = '1';

        setTimeout(function () {
          preloader.remove();
        }, 600);
      }, 700);
    }, 1400);
  });
})();

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
	const swipeMenus = document.querySelectorAll('.exec-swipe-menu');
	swipeMenus.forEach((swipeMenu) => {
		const track = swipeMenu.querySelector('.exec-swipe-track');
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

	// Pagination dots
	const dots = Array.from(swipeMenu.querySelectorAll('.exec-swipe-dot'));

	const setActive = (index) => {
		activeIndex = Math.max(0, Math.min(cards.length - 1, index));
		cards.forEach((el, i) => el.classList.toggle('is-active', i === activeIndex));
		captionTag.textContent = cards[activeIndex].dataset.tag || '';
		captionTitle.textContent = cards[activeIndex].dataset.title || '';
		dots.forEach((d, i) => d.classList.toggle('is-active', i === activeIndex));
	};

	// Click on a dot → scroll to that card
	dots.forEach((dot, i) => {
		dot.addEventListener('click', () => {
			setActive(i);
			centerCard(i);
		});
	});

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

	track.addEventListener('scroll', () => {
		if (rafId) return;
		rafId = window.requestAnimationFrame(updateActiveFromScroll);
	});

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
