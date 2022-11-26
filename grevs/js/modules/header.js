"use strict"

export function burgerOpen() {
  document.addEventListener("DOMContentLoaded", function () {
    const headerSelectRegion = document.querySelector('.region-select');
    const burger = document.querySelector(".header__burger");
    const headerWrapperNav = document.querySelector(".header__bottom");
    const linkAnchor = document.querySelectorAll(".link-anchor");
    const body = document.querySelector("body");
    const burgerExit = document.querySelector(".header__burger-exit");

    linkAnchor.forEach(function(linkAnchor) {
      linkAnchor.addEventListener("click", function() {
        headerWrapperNav.classList.remove("nav-active")
        body.classList.remove("body-block")
      })
    })

    burger.addEventListener("click", function () {
      headerWrapperNav.classList.toggle("nav-active")
      body.classList.toggle("body-block")
    })

    burgerExit.addEventListener("click", function () {
      headerWrapperNav.classList.remove("nav-active")
      body.classList.remove("body-block")
    })

    const choices = new Choices(headerSelectRegion, {
      searchEnabled: false,
    });

  })
}