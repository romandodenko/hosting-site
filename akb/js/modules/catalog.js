"use strict"

export function catalog() {
  document.addEventListener("DOMContentLoaded", function () {
    const catalog = document.querySelector(".catalog");
    const filterBtnInit = document.querySelector(".catalog__init-filters");
    const wrapperFilters = document.querySelector(".catalog__body-left");
    const wrapperFiltersExit = document.querySelector(".catalog__exit-filter");
    const buttonBack = document.querySelector(".catalog__button-back");
    const buttonChoose = document.querySelector(".catalog__button-choose");
    const body = document.querySelector("body");

    if (catalog) {
      filterBtnInit.addEventListener("click", function () {
        wrapperFilters.classList.add("wrapper-filter-active")
        body.classList.add("body")
      })
      wrapperFiltersExit.addEventListener("click", function () {
        wrapperFilters.classList.remove("wrapper-filter-active")
        body.classList.remove("body")
      })
      buttonBack.addEventListener("click", function () {
        wrapperFilters.classList.remove("wrapper-filter-active")
        body.classList.remove("body")
      })
      buttonChoose.addEventListener("click", function () {
        wrapperFilters.classList.remove("wrapper-filter-active")
        body.classList.remove("body")
      })
    }
  })
}