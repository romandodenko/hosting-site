"use strict";

export function tabs() {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".works__button").forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll(".works__body").forEach(function (tabContent) {
          tabContent.classList.remove("works-body-active")
        })
        document.querySelector(`[data-target="${path}"]`).classList.add("works-body-active")
      })
    })

    document.querySelectorAll(".works__button").forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const path1 = event.currentTarget.dataset.path1

        document.querySelectorAll(".works__button").forEach(function (tabContent) {
          tabContent.classList.remove("works-button-active")
        })
        document.querySelector(`[data-target1="${path1}"]`).classList.add("works-button-active")
      })
    })

    document.querySelectorAll(".popup-item-clicker").forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const path2 = event.currentTarget.dataset.path2

        document.querySelectorAll(".popup-item").forEach(function (tabContent) {
          tabContent.classList.remove("works-item-active")
        })
        document.querySelector(`[data-target2="${path2}"]`).classList.add("popup-item-active")
      })
    })

    
    document.querySelectorAll(".gallery__button").forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const path3 = event.currentTarget.dataset.path3

        document.querySelectorAll(".gallery__content").forEach(function (tabContent) {
          tabContent.classList.remove("gallery-content-active")
        })
        document.querySelector(`[data-target3="${path3}"]`).classList.add("gallery-content-active")
      })
    })
    document.querySelectorAll(".gallery__button").forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const path4 = event.currentTarget.dataset.path4

        document.querySelectorAll(".gallery__button").forEach(function (tabContent) {
          tabContent.classList.remove("gallery-button-active")
        })
        document.querySelector(`[data-target4="${path4}"]`).classList.add("gallery-button-active")
      })
    })
  })
}