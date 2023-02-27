const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,

  autoHeight: true,
  slidesPerView: 1.1,
  spaceBetween: 5,
  centeredSlides: 1,

  // Указать то количество сколько объектов(картинок, слайдов) в самом слайде
  loopedSlides: 7,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },

  breakpoints: {
    680: {
      slidesPerView: 2,
      spaceBetween: 15
    }
  }
});

new Swiper('.swiperMenu', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  slidesPerView: 'auto'
});
