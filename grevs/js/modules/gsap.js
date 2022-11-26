"use strict"

export function gsapScript() {
  document.addEventListener("DOMContentLoaded", function () {

    let heroBlock = gsap.timeline()

    heroBlock
      .from(".hero__title", {duration: .6, y: 100, opacity: 0})
      .from(".hero__text", {duration: .6, y: 100, opacity: 0}, "-=.3")
      .from(".hero__button", {duration: .6, y: 100, opacity: 0}, "-=.3")
      .from(".basket__title", {duration: .6, y: 100, opacity: 0}, "-=.8")

  })
}