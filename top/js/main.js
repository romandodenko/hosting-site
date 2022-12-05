"use strict"

window.onload = function () {

  const initSwiperBlock2 = document.querySelector(".block-2-swiper");

const initSwiperBlock3 = document.querySelector(".block-3-swiper");

if (initSwiperBlock2) {
  const swiperBlock2 = new Swiper('.block-2-swiper', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 10,
    direction: 'horizontal',
    speed: 500, // Автовоспроизведение
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    stopOnLastSlide: true,
    },
    pagination: {
      el: '.block-2-pagination',
      clickable: true,
    },
  });
}

if (initSwiperBlock3) {
  const swiperBlock3 = new Swiper('.block-3-swiper', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 10,
    direction: 'horizontal',
    speed: 500, // Автовоспроизведение
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    stopOnLastSlide: true,
    },
    pagination: {
      el: '.block-3-pagination',
      clickable: true,
    },
  });
}


const blockTimer = document.querySelector(".block-timer");
const numDay = document.querySelector(".num-day");
const numHours = document.querySelector(".num-hours");
const numMinutes = document.querySelector(".num-minutes");
const numSeconds = document.querySelector(".num-seconds");

if (blockTimer) {

  function timerSeconds() {
    if (numSeconds.innerHTML != 0) {
      numSeconds.innerHTML = numSeconds.innerHTML - 1

    } else if (numSeconds.innerHTML == 0) {
      if (numMinutes.innerHTML != 0) {
        numMinutes.innerHTML = numMinutes.innerHTML - 1
        numSeconds.innerHTML = 60
      }

    }
    if (numMinutes.innerHTML == 0) {
      if (numHours.innerHTML != 0) {
        numHours.innerHTML = numHours.innerHTML - 1
        numMinutes.innerHTML = 60
        numSeconds.innerHTML = 60
      }
    }
    if (numHours.innerHTML == 0) {
      if (numDay.innerHTML != 0) {
        numDay.innerHTML = numDay.innerHTML - 1
        numHours.innerHTML = 24
        numMinutes.innerHTML = 60
        numSeconds.innerHTML = 60
      }
    }
  }

  setInterval(timerSeconds, 1000)

}




}