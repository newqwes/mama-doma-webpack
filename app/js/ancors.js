'use strict';

const anchors = document.querySelectorAll('a[href*="#"');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    const blockID = anchor.getAttribute('href');
    if (blockID !== '#popup' && blockID !== '#arrowToTop') {
      event.preventDefault();
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
}

const headerMenu = document.querySelector('.header__top');

window.onscroll = function () {
  if (
    document.body.scrollTop > headerMenu.offsetHeight ||
    document.documentElement.scrollTop > headerMenu.offsetHeight
  ) {
    headerMenu.classList.add('_scroll');
  } else {
    headerMenu.classList.remove('_scroll');
  }
};

const isMobile = {
  Android: () => navigator.userAgent.match(/Android/i),
  BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
  iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
  Opera: () => navigator.userAgent.match(/Opera Mini/i),
  Windows: () => navigator.userAgent.match(/IEModile/i),
  any: () =>
    isMobile.Android() ||
    isMobile.BlackBerry() ||
    isMobile.iOS() ||
    isMobile.Opera() ||
    isMobile.Windows(),
};

if (isMobile.any()) {
  document.body.classList.add('_touch');

  const touchElements = document.querySelectorAll('._touch_element');

  if (touchElements.length > 0) {
    touchElements.forEach(touchElement => {
      touchElement.addEventListener('click', e =>
        touchElement.parentElement.classList.toggle('_touchElementIsActive'),
      );
    });
  }
} else {
  document.body.classList.add('_pc');
}

// const bottomArrowsIndent = window.innerWidth > 500 ? 0 : 140;

// window.onscroll = function () {
//   if (
//     (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) &&
//     !(
//       window.scrollY + bottomArrowsIndent >=
//       document.documentElement.scrollHeight - document.documentElement.clientHeight
//     )
//   ) {
//     document.querySelector('.arrow-to-top').style.display = 'block';
//   } else {
//     document.querySelector('.arrow-to-top').style.display = 'none';
//   }
// };
