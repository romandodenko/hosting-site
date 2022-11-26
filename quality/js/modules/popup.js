"use strict"

export function popup() {
  document.addEventListener("DOMContentLoaded", function () {
    const clicker = document.querySelectorAll(".popup-form-clicker") // класс вызывающий попапы
    const popup = document.querySelector(".popup-form");
    const popupClose = document.querySelector(".popup-form__close");
    const popupExit = document.querySelector(".popup-form__exit");
    const popupItem = document.querySelectorAll(".popup-item")
    const popupItemExit = document.querySelectorAll(".popup-item__exit")
    const popupItemClose = document.querySelectorAll(".popup-item__close")
    const body = document.querySelector("body")
    const popupClicker = document.querySelectorAll(".popup-item-clicker");
    const inner = document.querySelector(".inner");

    popupClicker.forEach(function (popupClicker) {
      popupClicker.addEventListener("click", function () {
        inner.classList.add("inner-active")
        body.style.overflow = "hidden"
      })
    })

    clicker.forEach(function (clicker) {
      clicker.addEventListener("click", function () {
        popup.classList.add("popup-form-active")
        body.style.overflow = "hidden"
      })
    })

    popupClose.addEventListener("click", function () {
      popup.classList.remove("popup-form-active")
      body.style.overflow = "visible"
    })

    popupExit.addEventListener("click", function () {
      popup.classList.remove("popup-form-active")
      body.style.overflow = "visible"
    })

    popupItemExit.forEach(function (popupItemExit) {
      popupItemExit.addEventListener("click", function () {
        popupItem.forEach(function (popupItem) {
          popupItem.classList.remove("popup-item-active")
        })
        inner.classList.remove("inner-active")
        body.style.overflow = ""
      })
    })

    popupItemClose.forEach(function (popupItemClose) {
      popupItemClose.addEventListener("click", function () {
        popupItem.forEach(function (popupItem) {
          popupItem.classList.remove("popup-item-active")
        })
        inner.classList.remove("inner-active")
        body.style.overflow = ""
      })
    })


  })
}