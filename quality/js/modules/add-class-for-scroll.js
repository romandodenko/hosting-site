"use strict"

export function scrollAddClass() {
  document.addEventListener("DOMContentLoaded", function() {
    const headerElement = document.querySelector(".header")
    const button = document.querySelector(".link-up")

    const callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        button.classList.remove("link-up-active")
      } else {
        button.classList.add("link-up-active")
      }
    }
  
    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(headerElement);
  })
}