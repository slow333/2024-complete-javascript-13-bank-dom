'use strict';
// console.log('==== getComputedStyle and getAttribute ====')
// message.style.backgroundColor = '#373723';
// message.style.width = '107%';
// message.style.height =
//   parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
// document.documentElement.style
//   .setProperty('--color-primary', 'orangered');
// const logo = document.querySelector('.nav__logo');
// console.log(logo.src)
//
// //getAttribute 하면 사용자 지정한 값 자체를 가지고옮.
// const nonStandard = logo.getAttribute('madeBy');
// console.log(nonStandard);
// // setAttribute 하면 사용자 지정 값을 지정할 수 있음
// logo.setAttribute('company', 'ai automation')
// console.log(logo.getAttribute('company'))
// console.log(logo.getAttribute('src'))
//
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href)
// console.log(link.getAttribute('href'))
//
// // element 속성에 data-name-description 하면 dataset으로 추출 가능
// // 추출은 dataset.camelCase
// const version = logo.dataset.versionNumber;
// classes  .classList.add('a') remove('c') toggle('d') contain('e')
// logo.className = 'f' 하면 전체를 지우고 다시 설정함.*/
// console.log('===========================');
// const h1 = document.querySelector('h1');
// // even 한번만 발생하게 하는 방법
// const h1MouseEnter = function (e) {
//   alert('mouse enter happened ~~ 🖱️');
//   // h1.removeEventListener('mouseenter', h1MouseEnter)
// };
//
// h1.addEventListener('mouseenter', h1MouseEnter);
// setTimeout(() =>
//   h1.removeEventListener('mouseenter', h1MouseEnter)
//   , 4000);
// console.log('=============== event bubbling and capturing ===================');
// parent node에 적용된 이벤트도 같이 적용됨
/*const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1));
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
document.querySelector('.nav__link')
  .addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log(e.target);
    console.log(e.currentTarget)
    // e.stopPropagation();
  });
document.querySelector('.nav__links')
  .addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log(e.target);
    console.log(e.currentTarget)
  });
document.querySelector('.nav')
  .addEventListener('click', function (e) {
      this.style.backgroundColor = randomColor();
      console.log(e.target);
      console.log(e.currentTarget)
    }
  );*/
