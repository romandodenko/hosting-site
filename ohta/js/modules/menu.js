"use strict"

export function menu() {
  document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const exitMenu = document.querySelector(".menu__exit");
    const closeMenu = document.querySelector(".menu__close");
    const body = document.querySelector("body");

    burger.addEventListener("click", function () {
      menu.classList.add("menu-active")
      body.style.overflow = "hidden"
    })

    exitMenu.addEventListener("click", function () {
      menu.classList.remove("menu-active")
      body.style.overflow = "visible"
    })

    closeMenu.addEventListener("click", function () {
      menu.classList.remove("menu-active")
      body.style.overflow = "visible"
    })
  })
}