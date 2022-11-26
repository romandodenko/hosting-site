"use strict"

const burger = document.querySelector(".header__burger")
const menu = document.querySelector(".header-wrapper-menu")
const searchInit = document.querySelector(".header__search-init");
const search = document.querySelector(".search");
const main = document.querySelector("main");
const headerMenuExit = document.querySelector(".header-wrapper-menu__exit")
const menuCall = document.querySelector(".header-wrapper-menu__call");
const body = document.querySelector("body");
const error = document.querySelector(".header-container-middle-error");
const headerPartLeft = document.querySelector(".header__middle-left");

export function header() {
  document.addEventListener("DOMContentLoaded", function() {
    
    if (!error) {
      main.addEventListener("click", function() {
        search.classList.remove("search-active")
        body.classList.remove("body-block")
        headerPartLeft.classList.remove("header-part-left-hidden")
      })
  
      searchInit.addEventListener("click", function() {
        search.classList.toggle("search-active")
        body.classList.toggle("body-block")
        headerPartLeft.classList.toggle("header-part-left-hidden")
      })
  
      burger.addEventListener("click", function() {
        menu.classList.add("menu-active")
        body.classList.add("body-block")
      })
    
      headerMenuExit.addEventListener("click", function() {
        menu.classList.remove("menu-active")
        body.classList.remove("body-block")
      })
  
      menuCall.addEventListener("click", function() {
        menu.classList.remove("menu-active")
        body.classList.remove("body-block")
      })
    }

        
    if (error) {
      main.addEventListener("click", function() {
        search.classList.remove("search-active")
        body.classList.remove("body-block")
      })
  
      burger.addEventListener("click", function() {
        menu.classList.add("menu-active")
        body.classList.add("body-block")
      })
    
      headerMenuExit.addEventListener("click", function() {
        menu.classList.remove("menu-active")
        body.classList.remove("body-block")
      })
  
      menuCall.addEventListener("click", function() {
        menu.classList.remove("menu-active")
        body.classList.remove("body-block")
      })
    }

  
  })
}