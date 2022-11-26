"use strict"

export function hero() {
  const hero = document.querySelector(".main-form");
  const columnItems = document.querySelectorAll(".hero__column-item");
  const slidersClose = document.querySelector(".hero__sliders-close")
  const columnSwiper = document.querySelectorAll(".column-swiper");
  const heroBody = document.querySelector(".hero__body");
  const body = document.querySelector("body");
  if (hero) {
    if (body.offsetWidth <= 992) {

      columnItems.forEach(function (columnItems) {
        columnItems.addEventListener("click", function () {
          columnItems.querySelector('.column-swiper').classList.add("column-swiper-visible")
        })
      })
  
      slidersClose.addEventListener("click", function () {
        columnSwiper.forEach(function (columnSwiper) {
          columnSwiper.classList.remove("column-swiper-visible")
        })
      })
  
    } else {
      
      columnItems.forEach(function (columnItems) {
        columnItems.addEventListener("mouseover", function () {
          columnItems.querySelector('.column-swiper').classList.add("column-swiper-visible")
        })
      })
  
      slidersClose.addEventListener("mouseover", function () {
        columnSwiper.forEach(function (columnSwiper) {
          columnSwiper.classList.remove("column-swiper-visible")
        })
      })
  
      heroBody.addEventListener("mouseover", function () {
        columnSwiper.forEach(function (columnSwiper) {
          columnSwiper.classList.remove("column-swiper-visible")
        })
      })
    }
  }


  // columnItems.forEach(function (columnItems) {
  //   columnItems.addEventListener("mouseover", function () {
  //     columnItems.querySelector('.column-swiper').classList.add("column-swiper-visible")
  //   })
  // })

  // slidersClose.addEventListener("mouseover", function () {
  //   columnSwiper.forEach(function (columnSwiper) {
  //     columnSwiper.classList.remove("column-swiper-visible")
  //   })
  // })

  // heroBody.addEventListener("mouseover", function () {
  //   columnSwiper.forEach(function (columnSwiper) {
  //     columnSwiper.classList.remove("column-swiper-visible")
  //   })
  // })




}