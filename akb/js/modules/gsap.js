"use strict"

export function gsapScript() {
  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".manufacturer-btn-clicker")
    const collapseBtn = document.querySelector(".manufacturer-btn-collapse")
    const elem = document.querySelector(".catalog-filters__simplebar")

    if (elem) {
      let elemGsap = gsap.timeline({
        paused: true
      })


      elemGsap
        .to(elem, {
          duration: .4,
          height: "auto",
        })

      openBtn.addEventListener("click", () => {
        openBtn.classList.add("init-disabled")
        collapseBtn.classList.add("collapse-active")
        elemGsap.timeScale(1).play()
      })

      collapseBtn.addEventListener("click", () => {
        openBtn.classList.remove("init-disabled")
        collapseBtn.classList.remove("collapse-active")
        elemGsap.timeScale(1).reverse()
      })
    }

  })
}


// не забудь установить пакет