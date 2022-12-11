"use strict"

window.onload = function () {

  // Header

  const menu = document.querySelector(".header__menu");
  const burger = document.querySelector(".burger");
  document.addEventListener("click", function (e) {
    const elementTarget = e.target;

    if (elementTarget.closest(".burger")) {
      menu.classList.toggle("menu-active")
      burger.classList.toggle("burger-menu-active")
    }
    if (elementTarget.closest(".nav__link")) {
      burger.classList.remove("burger-menu-active")
      menu.classList.remove("menu-active")
    }
    if (elementTarget.closest(".warning__button")) {
      elementTarget.closest(".warning_hero").classList.add("warning-disabled")
    }
  })


  document.addEventListener("scroll", function (e) {

    const elementTarget = e.target;

    let scrollHeight = Math.floor(scrollY);

    const header = document.querySelector(".header");

    if (scrollHeight > 10) {
      header.classList.add("header-scroll")

    } else {
      header.classList.remove("header-scroll")
    }
  })

  // ======================================================================================================================================================

  // Слайдеры

  const heroSwiperInit = document.querySelector(".hero-swiper");
  const mnenieSwiperInit = document.querySelector(".mnenie-swiper");
  if (heroSwiperInit) {
    const swiperHero = new Swiper('.hero-swiper', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      direction: 'horizontal',
      navigation: {
        nextEl: '.hero-swiper-button-next',
        prevEl: '.hero-swiper-button-prev',
      },
    });
  }
  if (mnenieSwiperInit) {
    const swiperMnenie = new Swiper('.mnenie-swiper', {
      loop: true,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      spaceBetween: 0,
      direction: 'horizontal',
      speed: 500, // Автовоспроизведение
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        waitForTransition: false,
      },
      pagination: {
        el: '.mnenie-swiper-pagination',
        clickable: true,
      },
    });
  }

  // ======================================================================================================================================================

  // Тултип

  tippy('.benefits__tooltip', {
    placement: 'top', // Расположение
    role: 'tooltip',
    trigger: 'mouseenter focus click', // Как срабатывает тултип, при наведение, фокусу и клике
    hideOnClick: true,
    theme: "colorToolp", // Кастомная тема
    maxWidth: 123, // максимальная ширина тултипа
  });

}