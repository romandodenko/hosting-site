"use strict"

export function popup() {
  document.addEventListener("DOMContentLoaded", function () {
    const clickerRequest = document.querySelectorAll(".popup-request-clicker") // класс вызывающий попапы
    const popupRequest = document.querySelector(".popup-request");
    const popupClose = document.querySelector(".popup-request__close");
    const popupExitRequest = document.querySelector(".popup-request__exit");
    const popupExitOkay = document.querySelector(".popup-request__okay-exit");
    const popupReview = document.querySelector(".popup-review");
    const clickerReview = document.querySelectorAll(".popup-review-clicker") // класс вызывающий попапы
    const popupCloseReview = document.querySelector(".popup-review__close");
    const popupExitReview = document.querySelector(".popup-review__exit");
    const body = document.querySelector("body");
    const form = document.querySelector(".form-wrapper");
    const clickerForm = document.querySelectorAll(".clicker-form")
    const formClose = document.querySelector(".form-wrapper__close");
    if (form) {
      clickerForm.forEach(function(clickerForm) {
        clickerForm.addEventListener("click", function() {
          form.classList.add("form-active")
          body.style.overflow = "hidden"
        })
      })
      formClose.addEventListener("click", function() {
        form.classList.remove("form-active")
        body.style.overflow = "visible"
      })
    }
    if (popupRequest) {
      clickerRequest.forEach(function (clickerRequest) {
        clickerRequest.addEventListener("click", function () {
          popupRequest.classList.add("popup-active")
          body.style.overflow = "hidden"
        })
      })
      popupClose.addEventListener("click", function () {
        popupRequest.classList.remove("popup-active")
        body.style.overflow = "visible"
      })
      popupExitRequest.addEventListener("click", function () {
        popupRequest.classList.remove("popup-active")
        body.style.overflow = "visible"
      })
      popupExitOkay.addEventListener("click", function () {
        popupRequest.classList.remove("popup-active")
        body.style.overflow = "visible"
      })
    }
    if (popupReview) {
      clickerReview.forEach(function (clickerReview) {
        clickerReview.addEventListener("click", function () {
          popupReview.classList.add("popup-active")
          body.style.overflow = "hidden"
        })
      })
      popupCloseReview.addEventListener("click", function () {
        popupReview.classList.remove("popup-active")
        body.style.overflow = "visible"
      })
      popupExitReview.addEventListener("click", function () {
        popupReview.classList.remove("popup-active")
        body.style.overflow = "visible"
      })
    }
  })
}