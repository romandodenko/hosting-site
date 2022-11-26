"use strict"

export function swiperHero() {
  const swiper = new Swiper('.hero__swiper', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 5000,
    autoplay: {
      delay: 3000
    },
  });
}