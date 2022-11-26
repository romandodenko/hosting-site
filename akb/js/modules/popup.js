"use strict"

export function popup() {
  document.addEventListener("DOMContentLoaded", function() {
    const soloClickerCall = document.querySelector(".popup-init-call")
    const clickerCall = document.querySelectorAll(".popup-init-call") // класс вызывающий попапы
    const popupCall = document.querySelector(".popup-call");
    const popupCloseCall = document.querySelector(".popup-call__close");
    const popupExitCall = document.querySelector(".popup-call__exit");
    const soloClickerSolicitud = document.querySelector(".popup-init-solicitud");
    const clickerSolicitud = document.querySelectorAll(".popup-init-solicitud") // класс вызывающий попапы
    const popupSolicitud = document.querySelector(".popup-solicitud");
    const popupCloseSolicitud = document.querySelector(".popup-solicitud__close");
    const popupExitSolicitud = document.querySelector(".popup-solicitud__exit");
    const soloClickerOneClick = document.querySelector(".button-oneclick-init");
    const clickerOneClick = document.querySelectorAll(".button-oneclick-init") // класс вызывающий попапы
    const popupOneClick = document.querySelector(".popup-oneclick");
    const popupCloseOneClick = document.querySelector(".popup-oneclick__close");
    const popupExitOneClick = document.querySelector(".popup-oneclick__exit");
    const oneClickProceed = document.querySelector(".popup-oneclick__proceed");
    const body = document.querySelector("body");
    const menu = document.querySelector(".header-wrapper-menu")

    if (soloClickerCall) {
      clickerCall.forEach(function(clickerCall) {
        clickerCall.addEventListener("click", function() {
          popupCall.classList.add("popup-active")
          body.classList.add("body-block")
          menu.classList.remove("menu-active")
        })
      })
  
      popupCloseCall.addEventListener("click", function() {
        popupCall.classList.remove("popup-active")
        body.classList.remove("body-block")
      })
  
      popupExitCall.addEventListener("click", function() {
        popupCall.classList.remove("popup-active")
        body.classList.remove("body-block")
      })
    }

    if (soloClickerSolicitud) {

      clickerSolicitud.forEach(function(clickerSolicitud) {
        clickerSolicitud.addEventListener("click", function() {
          popupSolicitud.classList.add("popup-active")
          body.classList.add("body-block")
          menu.classList.remove("menu-active")
        })
      })
  
      popupCloseSolicitud.addEventListener("click", function() {
        popupSolicitud.classList.remove("popup-active")
        body.classList.remove("body-block")
      })
  
      popupExitSolicitud.addEventListener("click", function() {
        popupSolicitud.classList.remove("popup-active")
        body.classList.remove("body-block")
      })
    }


   if (soloClickerOneClick) {
    clickerOneClick.forEach(function(clickerOneClick) {
      clickerOneClick.addEventListener("click", function() {
        popupOneClick.classList.add("popup-active")
        body.classList.add("body-block")
        menu.classList.remove("menu-active")
      })
    })

    popupCloseOneClick.addEventListener("click", function() {
      popupOneClick.classList.remove("popup-active")
      body.classList.remove("body-block")
    })

    popupExitOneClick.addEventListener("click", function() {
      popupOneClick.classList.remove("popup-active")
      body.classList.remove("body-block")
    })

    oneClickProceed.addEventListener("click", function() {
      popupOneClick.classList.remove("popup-active")
      body.classList.remove("body-block")
    })
   }

  })
}
