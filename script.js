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

document.querySelector('.nav__links').addEventListener
('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id)
      .scrollIntoView({behavior: 'smooth'});
    document.querySelectorAll('.features__img')
      .forEach(el => el.classList.remove('lazy-img'));
  }
});
document.querySelector('.operations__tab-container').addEventListener
('click', function (e) {
  e.preventDefault();
  const tabId = e.target.getAttribute('data-tab')
  if (e.target.classList.contains('operations__tab')) {
    document.querySelectorAll('.operations__content')
      .forEach(el => {
        el.classList.remove('operations__content--active');
      })
    document.querySelectorAll('.operations__tab')
      .forEach(el => {
        el.classList.remove('operations__tab--active');
      })
    document.querySelector(`.operations__content--${tabId}`)
      .classList.add('operations__content--active');
    document.querySelector(`.operations__tab--${tabId}`)
      .classList.add('operations__tab--active');
  }
})


/////////////////////////////////
// message insert ..
const message = document.createElement('div');
message.classList.add('cookie-message')
message.innerHTML = '현재 홈페이지 구축 중입니다.' +
  '<button class="btn--close-cookie">🎉 OK 🎉 </button>'
header.prepend(message);
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
  , 2000)