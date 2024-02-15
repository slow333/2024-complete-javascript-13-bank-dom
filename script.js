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
//////////////////////////////////
// smooth scroll => learn more ↓  
btnScrollTo.addEventListener('click', function (e) {
  // e.preventDefault();
  // const s1coords = section1.getBoundingClientRect();
  // console.log('s1 => ', s1coords);
  // console.log('btn scroll to => ', e.target.getBoundingClientRect())
  // const xPositionFromScreenTopToPage = window.scrollX;
  // const yPositionFromScreenTopToPage = window.scrollY;
  // console.log(xPositionFromScreenTopToPage, yPositionFromScreenTopToPage)
  // console.log('height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth) // 보이는 화면의 크기
  // window.scrollTo(
  //   s1coords.x + xPositionFromScreenTopToPage,
  //   s1coords.y + yPositionFromScreenTopToPage)
  // window.scroll({
  //   top: s1coords.top + yPositionFromScreenTopToPage,
  //   left: s1coords.left + xPositionFromScreenTopToPage,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({behavior: 'smooth'});
  document.querySelectorAll('.features__img')
    .forEach(el => el.classList.remove('lazy-img'));
});
// smooth : 윈도우 설정이 성능최적화로 되어 있으면 적용안됨. 쩝
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth'})
//   })
// });

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
  // e.preventDefault();
  const clicked = e.target;
  // if (!clicked) return;
  document.querySelectorAll('.features__img')
    .forEach(el => el.classList.remove('lazy-img'));
  if (e.target.classList.contains('nav__link')) {
    const togo = document.querySelector(clicked.getAttribute('href'));
    togo.scrollIntoView({behavior: 'smooth'});
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

// sticky navigation
const initialCoords = section1.getBoundingClientRect();
// console.log('init', initialCoords)
window.addEventListener('scroll', function (e) {
  e.preventDefault();
  // console.log(window.scrollY)
  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
    document.querySelectorAll('.features__img')
      .forEach(el => el.classList.remove('lazy-img'));
  } else {
    nav.classList.remove('sticky');
    document.querySelectorAll('.features__img')
      .forEach(el => el.classList.add('lazy-img'));
  }
});


/////////////////////////////////
// message insert ..
const message = document.createElement('div');
message.classList.add('cookie-message')
message.innerHTML = '현재 홈페이지 구축 중입니다.' +
  '<button class="btn--close-cookie">🎉 OK 🎉 </button>'
header.append(message);
// header.after(message); // 관련 내용 밖에 붙임.
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function (ev) {
    ev.preventDefault();
    // message.remove();
    message.parentNode.removeChild(message);
  });
setTimeout(() =>
    message.parentNode.removeChild(message)
  , 3000)