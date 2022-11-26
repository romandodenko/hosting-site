"use strict"

export function swiper() {
  document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    const swiper = new Swiper('.electronics-swiper', {
      loop: true,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      spaceBetween: 32,
      direction: 'horizontal',
      speed: 500, // Автовоспроизведение
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 25
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 25
        },
        991: {
          slidesPerView: 6,
          spaceBetween: 30
        }
      }
    });
    const swiperGallery = new Swiper('.gallery-swiper', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      direction: 'horizontal',
      grid: {
        rows: 2,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 5
        },
        501: {
          slidesPerView: 2,
          spaceBetween: 5
        },
        601: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        901: {
          slidesPerView: 3,
          spaceBetween: 15
        },
       1201: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
    if ( body.offsetWidth <= 600 ) {
      const swiper = new Swiper('.feedback-swiper', {
        observer: true,
        observeParents: true,
        watchOverflow: true,
        slidesPerView: 1,
        spaceBetween: 20,
        direction: 'horizontal',
        pagination: {
          el: '.feedback-swiper__pagination',
          clickable: true,
        },
      
      });
    }
  })
}