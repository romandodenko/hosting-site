"use strict"

export function show() {
  const news = document.querySelector(".news_page");
  if (news) {
    function showCode(showBtn, itemsNum, collapseBtn, listItem, lists) {
      const show = document.querySelector(`.${showBtn}`); // кнопка показать ещё
      const collapse = document.querySelector(`.${collapseBtn}`); // кнопка скрывает показанные элементы
      const itemsList = document.querySelectorAll(`.${listItem}`);
      const list = document.querySelector(`.${lists}`);
      const productsLength = itemsList.length; // получаем количество карточек
      let items = itemsNum; // элементы которые изначально показаны на странице, у меня в примере 6 , если меняем здесь чисто то и меняем число в items ниже, где вешаем событие на collapse
      console.log(productsLength)
      if (productsLength > items) { // проверка, если элементов больше чем показано, то кнопка показать ещё появляется
        show.classList.add("is-visible")
        show.addEventListener("click", function () {
          items += 3; // число элементов которые будут добавляться при клике на кнопку показать ещё

          const array = Array.from(list.children); // собираем массив элементов в списке

          const visibleItems = array.slice(0, items) // видимые элементы

          visibleItems.forEach(function (visibleItems) {
            visibleItems.classList.add("is-visible")
          })

          if (items === productsLength) { // если элементов больше нет которые нужно показать кнопка скрывается
            show.classList.remove("is-visible")
            collapse.classList.add("is-visible")
          } else if (items > productsLength) {
            show.classList.remove("is-visible")
            collapse.classList.add("is-visible")
          }
        })
      }

      collapse.addEventListener("click", function () {
        itemsList.forEach(function (it) {
          it.classList.remove("is-visible")
        })
        items = itemsNum;
        show.classList.remove("is-hidden")
        collapse.classList.remove("is-visible")
        if (productsLength > items) {
          show.classList.add("is-visible")
        }
      })
    }

    showCode("show-news", 9, "collapse-news", "news__item_page-item", "news__list_page-list")
  }
  const partnersTable = document.querySelector(".partners-table");
  if (partnersTable) {
    function showCode(showBtn, itemsNum, collapseBtn, listItem, lists) {
      const show = document.querySelector(`.${showBtn}`); // кнопка показать ещё
      const collapse = document.querySelector(`.${collapseBtn}`); // кнопка скрывает показанные элементы
      const itemsList = document.querySelectorAll(`.${listItem}`);
      const list = document.querySelector(`.${lists}`);
      const productsLength = itemsList.length; // получаем количество карточек
      let items = itemsNum; // элементы которые изначально показаны на странице, у меня в примере 6 , если меняем здесь чисто то и меняем число в items ниже, где вешаем событие на collapse
      console.log(productsLength)
      if (productsLength > items) { // проверка, если элементов больше чем показано, то кнопка показать ещё появляется
        show.classList.add("is-visible")
        show.addEventListener("click", function () {
          items += 3; // число элементов которые будут добавляться при клике на кнопку показать ещё

          const array = Array.from(list.children); // собираем массив элементов в списке

          const visibleItems = array.slice(0, items) // видимые элементы

          visibleItems.forEach(function (visibleItems) {
            visibleItems.classList.add("is-visible")
          })

          if (items === productsLength) { // если элементов больше нет которые нужно показать кнопка скрывается
            show.classList.remove("is-visible")
            collapse.classList.add("is-visible")
          } else if (items > productsLength) {
            show.classList.remove("is-visible")
            collapse.classList.add("is-visible")
          }
        })
      }

      collapse.addEventListener("click", function () {
        itemsList.forEach(function (it) {
          it.classList.remove("is-visible")
        })
        items = itemsNum;
        show.classList.remove("is-hidden")
        collapse.classList.remove("is-visible")
        if (productsLength > items) {
          show.classList.add("is-visible")
        }
      })
    }

    showCode("show-partners-table", 10, "collapse-partners-table", "partners-table__row", "partners-table__rows")
  }
  const loanApplicationsTable = document.querySelector(".loan-applications-table");
  if (loanApplicationsTable) {
    function showCode(showBtn, itemsNum, collapseBtn, listItem, lists) {
      const show = document.querySelector(`.${showBtn}`); // кнопка показать ещё
      const collapse = document.querySelector(`.${collapseBtn}`); // кнопка скрывает показанные элементы
      const itemsList = document.querySelectorAll(`.${listItem}`);
      const list = document.querySelector(`.${lists}`);
      const productsLength = itemsList.length; // получаем количество карточек
      let items = itemsNum; // элементы которые изначально показаны на странице, у меня в примере 6 , если меняем здесь чисто то и меняем число в items ниже, где вешаем событие на collapse
      console.log(productsLength)
      if (productsLength > items) { // проверка, если элементов больше чем показано, то кнопка показать ещё появляется
        show.classList.add("is-visible")
        show.addEventListener("click", function () {
          items += 3; // число элементов которые будут добавляться при клике на кнопку показать ещё

          const array = Array.from(list.children); // собираем массив элементов в списке

          const visibleItems = array.slice(0, items) // видимые элементы

          visibleItems.forEach(function (visibleItems) {
            visibleItems.classList.add("is-visible")
          })

          if (items === productsLength) { // если элементов больше нет которые нужно показать кнопка скрывается
            show.classList.remove("is-visible")
            collapse.classList.add("is-visible")
          } else if (items > productsLength) {
            show.classList.remove("is-visible")
            collapse.classList.add("is-visible")
          }
        })
      }

      collapse.addEventListener("click", function () {
        itemsList.forEach(function (it) {
          it.classList.remove("is-visible")
        })
        items = itemsNum;
        show.classList.remove("is-hidden")
        collapse.classList.remove("is-visible")
        if (productsLength > items) {
          show.classList.add("is-visible")
        }
      })
    }

    showCode("show-loan-applications-table", 10, "collapse-loan-applications-table", "loan-applications-table__row", "loan-applications-table__rows")
  }
  const trustLevel = document.querySelector(".trust-level");
  if (trustLevel) {
    function showCode(showBtn, itemsNum, collapseBtn, listItem, lists) {
      const show = document.querySelector(`.${showBtn}`); // кнопка показать ещё
      const collapse = document.querySelector(`.${collapseBtn}`); // кнопка скрывает показанные элементы
      const itemsList = document.querySelectorAll(`.${listItem}`);
      const list = document.querySelector(`.${lists}`);
      const productsLength = itemsList.length; // получаем количество карточек
      let items = itemsNum; // элементы которые изначально показаны на странице, у меня в примере 6 , если меняем здесь чисто то и меняем число в items ниже, где вешаем событие на collapse
      console.log(productsLength)
      if (productsLength > items) { // проверка, если элементов больше чем показано, то кнопка показать ещё появляется
        show.classList.add("is-visible")
        show.addEventListener("click", function () {
          items += 3; // число элементов которые будут добавляться при клике на кнопку показать ещё

          const array = Array.from(list.children); // собираем массив элементов в списке

          const visibleItems = array.slice(0, items) // видимые элементы

          visibleItems.forEach(function (visibleItems) {
            visibleItems.classList.add("is-visible")
          })

          if (items === productsLength) { // если элементов больше нет которые нужно показать кнопка скрывается
            show.classList.remove("is-visible")
            collapse.classList.add("is-visible")
          } else if (items > productsLength) {
            show.classList.remove("is-visible")
            collapse.classList.add("is-visible")
          }
        })
      }

      collapse.addEventListener("click", function () {
        itemsList.forEach(function (it) {
          it.classList.remove("is-visible")
        })
        items = itemsNum;
        show.classList.remove("is-hidden")
        collapse.classList.remove("is-visible")
        if (productsLength > items) {
          show.classList.add("is-visible")
        }
      })
    }

    showCode("show-trust-level", 10, "collapse-trust-level", "trust-level__row", "trust-level__rows")

  }
  const messagesItems = document.querySelector(".messages-items");
  if(messagesItems) {
    function showCode(showBtn, itemsNum, collapseBtn, listItem, lists) {
      const show = document.querySelector(`.${showBtn}`); // кнопка показать ещё
      const collapse = document.querySelector(`.${collapseBtn}`); // кнопка скрывает показанные элементы
      const itemsList = document.querySelectorAll(`.${listItem}`);
      const list = document.querySelector(`.${lists}`);
      const productsLength = itemsList.length; // получаем количество карточек
      let items = itemsNum; // элементы которые изначально показаны на странице, у меня в примере 6 , если меняем здесь чисто то и меняем число в items ниже, где вешаем событие на collapse
      console.log(productsLength)
      if (productsLength > items) { // проверка, если элементов больше чем показано, то кнопка показать ещё появляется
        show.classList.add("is-visible")
        show.addEventListener("click", function () {
          items += 3; // число элементов которые будут добавляться при клике на кнопку показать ещё

          const array = Array.from(list.children); // собираем массив элементов в списке

          const visibleItems = array.slice(0, items) // видимые элементы

          visibleItems.forEach(function (visibleItems) {
            visibleItems.classList.add("is-visible")
          })

          if (items === productsLength) { // если элементов больше нет которые нужно показать кнопка скрывается
            show.classList.remove("is-visible")
            collapse.classList.add("is-visible")
          } else if (items > productsLength) {
            show.classList.remove("is-visible")
            collapse.classList.add("is-visible")
          }
        })
      }

      collapse.addEventListener("click", function () {
        itemsList.forEach(function (it) {
          it.classList.remove("is-visible")
        })
        items = itemsNum;
        show.classList.remove("is-hidden")
        collapse.classList.remove("is-visible")
        if (productsLength > items) {
          show.classList.add("is-visible")
        }
      })
    }

    showCode("show-messages", 7, "collapse-messages", "messages-items__item", "messages-items")
  }
  const payDocuments = document.querySelector(".pay-documents");
  if(payDocuments) {
    function showCode(showBtn, itemsNum, collapseBtn, listItem, lists) {
      const show = document.querySelector(`.${showBtn}`); // кнопка показать ещё
      const collapse = document.querySelector(`.${collapseBtn}`); // кнопка скрывает показанные элементы
      const itemsList = document.querySelectorAll(`.${listItem}`);
      const list = document.querySelector(`.${lists}`);
      const productsLength = itemsList.length; // получаем количество карточек
      let items = itemsNum; // элементы которые изначально показаны на странице, у меня в примере 6 , если меняем здесь чисто то и меняем число в items ниже, где вешаем событие на collapse
      console.log(productsLength)
      if (productsLength > items) { // проверка, если элементов больше чем показано, то кнопка показать ещё появляется
        show.classList.add("is-visible")
        show.addEventListener("click", function () {
          items += 3; // число элементов которые будут добавляться при клике на кнопку показать ещё

          const array = Array.from(list.children); // собираем массив элементов в списке

          const visibleItems = array.slice(0, items) // видимые элементы

          visibleItems.forEach(function (visibleItems) {
            visibleItems.classList.add("is-visible")
          })

          if (items === productsLength) { // если элементов больше нет которые нужно показать кнопка скрывается
            show.classList.remove("is-visible")
            collapse.classList.add("is-visible")
          } else if (items > productsLength) {
            show.classList.remove("is-visible")
            collapse.classList.add("is-visible")
          }
        })
      }

      collapse.addEventListener("click", function () {
        itemsList.forEach(function (it) {
          it.classList.remove("is-visible")
        })
        items = itemsNum;
        show.classList.remove("is-hidden")
        collapse.classList.remove("is-visible")
        if (productsLength > items) {
          show.classList.add("is-visible")
        }
      })
    }

    showCode("show-pay-documents", 3, "collapse-pay-documents", "pay-documents__item", "pay-documents__items")
  }
  const stopListRow = document.querySelector(".stop-list-row");
  if(stopListRow) {
    function showCode(showBtn, itemsNum, collapseBtn, listItem, lists) {
      const show = document.querySelector(`.${showBtn}`); // кнопка показать ещё
      const collapse = document.querySelector(`.${collapseBtn}`); // кнопка скрывает показанные элементы
      const itemsList = document.querySelectorAll(`.${listItem}`);
      const list = document.querySelector(`.${lists}`);
      const productsLength = itemsList.length; // получаем количество карточек
      let items = itemsNum; // элементы которые изначально показаны на странице, у меня в примере 6 , если меняем здесь чисто то и меняем число в items ниже, где вешаем событие на collapse
      console.log(productsLength)
      if (productsLength > items) { // проверка, если элементов больше чем показано, то кнопка показать ещё появляется
        show.classList.add("is-visible")
        show.addEventListener("click", function () {
          items += 3; // число элементов которые будут добавляться при клике на кнопку показать ещё

          const array = Array.from(list.children); // собираем массив элементов в списке

          const visibleItems = array.slice(0, items) // видимые элементы

          visibleItems.forEach(function (visibleItems) {
            visibleItems.classList.add("is-visible")
          })

          if (items === productsLength) { // если элементов больше нет которые нужно показать кнопка скрывается
            show.classList.remove("is-visible")
            collapse.classList.add("is-visible")
          } else if (items > productsLength) {
            show.classList.remove("is-visible")
            collapse.classList.add("is-visible")
          }
        })
      }

      collapse.addEventListener("click", function () {
        itemsList.forEach(function (it) {
          it.classList.remove("is-visible")
        })
        items = itemsNum;
        show.classList.remove("is-hidden")
        collapse.classList.remove("is-visible")
        if (productsLength > items) {
          show.classList.add("is-visible")
        }
      })
    }

    showCode("show-stop-list", 6, "collapse-stop-list", "stop-list-row", "stop-list-wrapper-rows")
  }
}
/* 

        HTML

   <div class="container">
        <ul class="list">
          <li class="list-item"></li>
          <li class="list-item"></li>
          <li class="list-item"></li>
          <li class="list-item"></li>
          <li class="list-item"></li>
          <li class="list-item"></li>
          <li class="list-item"></li>
          <li class="list-item"></li>
          <li class="list-item"></li>
        </ul>
        <div class="wrapper-btn">
          <button class="show">Показать ещё</button>
          <button class="collapse">Скрыть</button>
        </div>
      </div>


    CSS

   
.list {
  display: grid;
  grid-template: auto / repeat(3,1fr);
  gap: 20px;
  margin-bottom: 30px;
}
.list-item {
  height: 300px;
  background-color: red;
}
.list-item:nth-child(n + 7) { // меняем число в зависимости от показанных элементов на сайте
  display: none;
}
.wrapper-btn {
  text-align: center;
}
.list-item.is-visible {
  display: block;
}
.show {
  display: none;
  font-size: 20px;
  padding: 15px 50px;
  line-height: 1;
  border: 1px solid #008000;
  color: #008000;
}
.collapse {
  display: none;
  font-size: 20px;
  padding: 15px 50px;
  line-height: 1;
  border: 1px solid #ff0000;
  color: #ff0000;
}
.is-hidden {
  display: none;
}
.is-visible {
  display: inline-block;
}
*/