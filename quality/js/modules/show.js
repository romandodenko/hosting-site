"use strict"

export function show() {
  function showCode(showBtn, itemsNum, collapseBtn, listItem, lists) {
    const show = document.querySelector(`.${showBtn}`); // кнопка показать ещё
    const collapse = document.querySelector(`.${collapseBtn}`); // кнопка скрывает показанные элементы
    const itemsList = document.querySelectorAll(`.${listItem}`);
    const list = document.querySelector(`.${lists}`);
    const productsLength = itemsList.length; // получаем количество карточек
    console.log(productsLength)
    let items = itemsNum; // элементы которые изначально показаны на странице, у меня в примере 6 , если меняем здесь чисто то и меняем число в items ниже, где вешаем событие на collapse
    if (productsLength > items) { // проверка, если элементов больше чем показано, то кнопка показать ещё появляется
      show.classList.add("is-visible-btn")
      show.addEventListener("click", function () {
        items += 5; // число элементов которые будут добавляться при клике на кнопку показать ещё

        const array = Array.from(list.children); // собираем массив элементов в списке

        const visibleItems = array.slice(0, items) // видимые элементы

        visibleItems.forEach(function (visibleItems) {
          visibleItems.classList.add("is-visible-btn")
        })

        if (items === productsLength) { // если элементов больше нет которые нужно показать кнопка скрывается
          show.classList.remove("is-visible-btn")
          collapse.classList.add("is-visible-btn")
        } else if (items > productsLength) {
          show.classList.remove("is-visible-btn")
          collapse.classList.add("is-visible-btn")
        }
      })
      collapse.addEventListener("click", function () {
        itemsList.forEach(function (it) {
          it.classList.remove("is-visible-btn")
        })
        items = itemsNum;
        show.classList.remove("is-hidden-btn")
        collapse.classList.remove("is-visible-btn")
        if (productsLength > items) {
          show.classList.add("is-visible-btn")
        }
      })
    }

  }
  showCode("apple-show", 15, "apple-collapse", "works-item-apple", "works-list-apple")
  showCode("android-show", 15, "android-collapse", "works-item-android", "works-list-android")
  showCode("laptop-show", 15, "laptop-collapse", "works-item-laptop", "works-list-laptop")
  showCode("computers-show", 15, "computers-collapse", "works-item-computers", "works-list-computers")
}