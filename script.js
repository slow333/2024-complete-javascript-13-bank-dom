'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const header = document.querySelector('.header');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav')
const navLinks = document.querySelector('.nav__links');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(modal =>
     modal.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
const blurImg = function (value) {
  document.querySelectorAll('.lazy-img')
       .forEach(el => el.style.filter = `blur(${value})`);
};
//////////////////////////////////
// smooth scroll => learn more ↓  
btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  // blurImg('0px');
  section1.scrollIntoView({behavior: 'smooth'});
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav')
         .querySelectorAll('.nav__link');
    const logo = link.closest('.nav')
         .querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this
    });
    logo.style.opacity = this;
  }
}
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

nav.addEventListener('click', function (e) {
  const clicked = e.target;
  if (e.target.classList.contains('nav__link')) {
    const togo = document.querySelector(clicked.getAttribute('href'));
    togo.scrollIntoView({behavior: 'smooth'});
    // blurImg('0px');
  }
});

// tabbed component
tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab')
  if (!clicked) return;

  // Active tab
  tabs.forEach(el =>
       el.classList.remove('operations__tab--active'))
  clicked.classList.add('operations__tab--active');
  // Active content
  tabsContent.forEach(el =>
       el.classList.remove('operations__content--active'))
  document
       .querySelector(`.operations__content--${clicked.dataset.tab}`)
       .classList.add('operations__content--active');
})

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver
(stickyNav, {
  root: null,
  threshold: 0, rootMargin: `-${navHeight}px`
})
headerObserver.observe(header)

// Reveal sections
const allSections = document.querySelectorAll('.section')
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target)
};
const sectionObserver = new IntersectionObserver
(revealSection, {
  root: null,
  threshold: 0.5,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden')
});

// Lazy loading images => 위치로 적용하기 때문에 nav로 가도 적용됨
const imageTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target)
};

const imgObserver = new IntersectionObserver
(loadImg, {
  root: null, threshold: 0, rootMargin: '200px'
})

imageTargets.forEach(img => imgObserver.observe(img))

// slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

///////////////////////
// functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML('beforeend', `
    <button class="dots__dot" data-slide="${i}"></button>`)
    });
  };

  const activateDot = function (slide) {
    document.querySelectorAll('.dots__dot')
         .forEach(d => d.classList.remove('dots__dot--active'))
    document.querySelector(`.dots__dot[data-slide="${slide}"]`)
         .classList.add('dots__dot--active')
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) =>
         s.style.transform = `translateX(${100 * (i - slide)}%)`)
  }

  let curSlide = 0;
  const nextSlide = function () {
    if (curSlide === slides.length - 1) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);

  };
  const preSlide = function () {
    if (curSlide === 0) curSlide = slides.length - 1;
    else curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', preSlide);

  const init = function () {
    createDots();
    goToSlide(0);
    activateDot(0);
  };
  init();

// Event handler
  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowRight' && nextSlide();
    e.key === 'ArrowLeft' && preSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const {slide} = e.target.dataset;
      goToSlide(slide);
      activateDot(slide)
    }
  });
};
slider();



