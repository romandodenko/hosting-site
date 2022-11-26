"use strict"

import gsap from 'gsap';

const body = document.querySelector("body")
const btnAll = document.querySelector(".events__all")
const btnCollapse = document.querySelector(".events__collapse")

export function events() {

  let productList = gsap.timeline({
    paused: true
  })

  productList
    .to(".hidden", {
      duration: .2,
      opacity: 1,
      visibility: "visible",
      display: "block"
    })
    .to(".hidden-fade", {
      duration: .2,
      opacity: 1,
      visibility: "visible",
      display: "block"
    }, "-=.2")

  btnAll.addEventListener("click", () => {
    btnCollapse.classList.add("collapse-btn-active")
    btnAll.classList.add("open-btn-disabled")
    productList.timeScale(1).play()
  })

  btnCollapse.addEventListener("click", () => {
    btnCollapse.classList.remove("collapse-btn-active")
    btnAll.classList.remove("open-btn-disabled")
    productList.timeScale(2).reverse()
  })

  if (body.offsetWidth < 768) {
    const swiper = new Swiper('.events__swiper', {
      slidesPerView: "auto",
      direction: 'horizontal',
      pagination: {
        el: '.events-swiper__pagination',
        clickable: true,
      },
    });
  }
}