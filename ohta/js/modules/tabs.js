"use strict";

export function tabs() {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".complex__button").forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll(".complex__content").forEach(function (tabContent) {
          tabContent.classList.remove("complex-content-active")
        })
        document.querySelector(`[data-target="${path}"]`).classList.add("complex-content-active")
      })
    })
    document.querySelectorAll(".complex__button").forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const path1 = event.currentTarget.dataset.path1

        document.querySelectorAll(".complex__button").forEach(function (tabContent) {
          tabContent.classList.remove("complex-button-active")
        })
        document.querySelector(`[data-target1="${path1}"]`).classList.add("complex-button-active")
      })
    })
  })
}