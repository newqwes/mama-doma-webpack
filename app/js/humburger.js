document.querySelector('.hamburger-region').addEventListener('click', function (e) {
  if (this.classList.contains('is-active')) {
    this.classList.remove('is-active');
  } else {
    this.classList.add('is-active');
  }
});

document.querySelector('.hamburger').addEventListener('click', function (e) {
  if (this.classList.contains('is-active')) {
    this.classList.remove('is-active');
  } else {
    this.classList.add('is-active');
  }
});
window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.querySelector('.hamburger').classList.remove('is-active');
    document.querySelector('.hamburger-region').classList.remove('is-active');
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
