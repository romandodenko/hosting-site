"use strict"

export function tooltip() {
  document.addEventListener("DOMContentLoaded", function () {
    const tooltipOne = document.querySelector(".catalog-filters__tooltip");
    const tooltip = document.querySelectorAll(".catalog-filters__tooltip");

    if (tooltipOne) {
      tippy(tooltip, {
        placement: 'right', 
        allowHTML: true,
        role: 'tooltip',
        trigger: 'mouseenter focus click', 
        hideOnClick: true,
        theme: "colorToolp", 
        maxWidth: 239,
        arrow: false,
      });
    }

  })
}
