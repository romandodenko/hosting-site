"use strict"

export function popup() {
  document.addEventListener("DOMContentLoaded", function() {
    const popupButton = document.querySelectorAll(".popup-button");
    const popupForm = document.querySelector(".popup-form");
    const popupFormClose = document.querySelector(".popup-form__close");
    const popupFormExit = document.querySelector(".popup-form__exit");
    const body = document.querySelector("body");
    const headerWrapperNav = document.querySelector(".header__bottom");

    popupButton.forEach(function(popupButton) {
      popupButton.addEventListener("click", function() {
        popupForm.classList.add("popup-form-active")
        body.classList.add("body-block")
        headerWrapperNav.classList.remove("nav-active")
        body.classList.remove("body-block")
      })
    })

    popupFormClose.addEventListener("click", function() {
      popupForm.classList.remove("popup-form-active")
       body.classList.remove("body-block")
    })

    popupFormExit.addEventListener("click", function() {
      popupForm.classList.remove("popup-form-active")
       body.classList.remove("body-block")
    })

  })
}