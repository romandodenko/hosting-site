"use strict"

export function swiper() {
  document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    const swiper = new Swiper('.hero__swiper', {
      loop: true,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      direction: 'horizontal',
      speed: 1000, // Автовоспроизведение
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
    const swiperItemOhta = new Swiper('.ohta-item-swiper', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      direction: 'horizontal',
      pagination: {
        el: '.ohta-item-swiper__pagination',
        clickable: true,
      },
    });
    if (body.offsetWidth <= 670) {
      const swiperComplex = new Swiper('.complex-swiper', {
        observer: true,
        observeParents: true,
        watchOverflow: true,
        slidesPerView: 1,
        direction: 'horizontal',
        pagination: {
          el: '.complex-swiper__pagination',
          clickable: true,
        },
      });
    }
    if (body.offsetWidth <= 1405) {
      const heroSwiperColumn = new Swiper('.hero-swiper-column', {
        observer: true,
        observeParents: true,
        watchOverflow: true,
        direction: 'horizontal',
        breakpoints: {
          320: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 6,
          },
          991: {
            slidesPerView: 7,
          }
        }
      });
    }
    const swiperColumnOne = new Swiper('.column-swiper', {
      loop: true,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      direction: 'vertical',
      speed: 500, // Автовоспроизведение
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          direction: 'horizontal',
        },
        1406: {
          direction: 'vertical',
        }
      }
    });
     const swiperReviews = new Swiper('.reviews-swiper', {
      loop: true,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      centeredSlides: true,
      slidesPerView: "auto",
      direction: 'horizontal',
      pagination: {
        el: '.reviews-swiper__pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        601: {
          spaceBetween: 20
        },
        1441: {
          spaceBetween: 40
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
      navigation: {
        nextEl: '.gallery-swiper__next',
        prevEl: '.gallery-swiper__prev',
      },
      pagination: {
        el: '.gallery-swiper__pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 5,
          grid: {
            rows: 3,
          },
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        1251: {
          slidesPerView: 5,
          spaceBetween: 5,
        }
      }
    });
    const swiperCottageThumb = new Swiper('.cottage-thumb-swiper', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 4,
      spaceBetween: 5,
      direction: 'horizontal',
      grid: {
        rows: 2,
      },
      navigation: {
        nextEl: '.cottage-thumb-swiper__next',
        prevEl: '.cottage-thumb-swiper__prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 3,
        },
        401: {
          slidesPerView: 4,
        },
        501: {
          slidesPerView: 5,
        },
        631: {
          slidesPerView: 3,
        },
        901: {
          slidesPerView: 5,
        },
        1151: {
          slidesPerView: 3,
        },
        1301: {
          slidesPerView: 4,
        },
        1441: {
          slidesPerView: 5,
        },
      }
    });
    const swiperCottage = new Swiper('.cottage-main-swiper', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      spaceBetween: 32,
      direction: 'horizontal',
      thumbs: {
        swiper: swiperCottageThumb,
      },
    });

  })
}