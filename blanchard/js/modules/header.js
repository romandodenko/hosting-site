"use strict"

const nav = document.querySelector(".header__nav");
const burger = document.querySelector(".header__burger");
const body = document.querySelector("body");
const searchClicker = document.querySelector(".header__searchclicker");
const search = document.querySelector(".header-bottom__form");
const headerLink = document.querySelectorAll(".header__link");
const entrance = document.querySelector(".header__entrance");
const main = document.querySelector("main");

export function burgerClick() {
  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active")
    body.classList.toggle("body-hidden")
    burger.classList.toggle("burger-active")
  })

  searchClicker.addEventListener("click", function () {
    search.classList.toggle("search-active")
    body.classList.toggle("body-hidden")
  })

  main.addEventListener("click", function() {
    search.classList.remove("search-active")
    body.classList.remove("body-hidden")
  })

  entrance.addEventListener("click", function () {
    nav.classList.remove("nav-active")
    body.classList.remove("body-hidden")
  })

  headerLink.forEach(function(headerLink) {
    headerLink.addEventListener("click", function() {
      nav.classList.remove("nav-active")
      body.classList.remove("body-hidden")
      burger.classList.remove("burger-active")
    })
  })
}