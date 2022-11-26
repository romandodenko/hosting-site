"use strict"

const element = document.querySelector('.gallery-select__select');
const popup = document.querySelectorAll(".popup")
const popupItem = document.querySelectorAll(".gallery-swiper__popup")
const popupExit = document.querySelectorAll(".popup__close")
const popupBtn = document.querySelectorAll(".popup__btn")
const body = document.querySelector("body")

export function gallery() {
  const swiper = new Swiper('.gallery__swiper', {
    slidesPerView: "auto",
    direction: 'horizontal',
    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
      hideOnClick: false,
    },
    pagination: {
      el: '.gallery__pagination',
      clickable: true,
      type: 'fraction',
    },
  });



  const choices = new Choices(element, {
    searchEnabled: false,
  });

  document.querySelectorAll(".gallery-swiper__popup").forEach(function (popupBtn) {
    popupBtn.addEventListener("click", function (event) {
      const path3 = event.currentTarget.dataset.path3

      document.querySelectorAll(".content").forEach(function (popupContent) {
        popupContent.classList.remove("popup-active")
      })
      document.querySelector(`[data-target3="${path3}"]`).classList.add("popup-active")
    })
  })
  document.querySelectorAll(".gallery-swiper__popup").forEach(function (popupItems) {
    popupItems.addEventListener("click", function () {
      body.classList.add("hidden-body")
    })
  })

  popupExit.forEach(function (popupExit) {
    popupExit.addEventListener("click", function () {
      popup.forEach(function (popup) {
        popup.classList.remove("popup-active")
        body.classList.remove("hidden-body")
      })
    })
  })
  popupBtn.forEach(function (popupBtn) {
    popupBtn.addEventListener("click", function () {
      popup.forEach(function (popup) {
        popup.classList.remove("popup-active")
        body.classList.remove("hidden-body")
      })
    })
  })
}