"use strict"

window.onload = function () {

  document.documentElement.classList.add("loaded");

  const menu = document.querySelector(".header__menu");

  const popupCalculate = document.querySelector(".popup-calculate");

  const popupCalculateFormItemLength = document.querySelectorAll(".popup-calculate-form__item").length;

  const popupCalculateFormItems = document.querySelectorAll(".popup-calculate-form__item");

  const popupCalculateFormItem = document.querySelector(".popup-calculate-form__item");

  const popupCalculateNumOne = document.querySelector(".popup-calculate__num_one");

  const popupCalculateNumTwo = document.querySelector(".popup-calculate__num_two");

  const popupCalculateFormChoices = document.querySelectorAll(".popup-calculate-form__choice");

  if (popupCalculate) {
    popupCalculateNumTwo.innerHTML = popupCalculateFormItemLength;
    popupCalculateFormItems.forEach(function (e, i) {
      const activeElement = e.classList.contains("calculate-form-item-active")
      if (activeElement) {
        popupCalculateNumOne.innerHTML = i + 1;
        return;
      }
    })
  }


  document.addEventListener("click", function (e) {

    const elementInteractive = e.target;

    if (elementInteractive.closest(".burger")) {
      menu.classList.add("menu-active")
      document.body.style.overflow = "hidden";
    }
    if (elementInteractive.closest(".header__exit-menu")) {
      menu.classList.remove("menu-active")
      document.body.style.overflow = "";
    }
    if (elementInteractive.closest(".nav__link")) {
      menu.classList.remove("menu-active")
      document.body.style.overflow = "";
    }
    if (elementInteractive.closest(".header-sublist__exit")) {
      document.querySelectorAll(".sublist-init").forEach(function (q) {
        q.classList.remove("nav-item-active")
      })
    }
    if (elementInteractive.closest(".header__menu-back")) {
      menu.classList.remove("menu-active")
      document.body.style.overflow = "";
    }
    if (elementInteractive.closest(".popup-calculate-form__choice")) {
      elementInteractive.classList.add("calculate-form-input-choice-active")
      if (elementInteractive.closest(".calculate-form-item-active").nextElementSibling) {
        elementInteractive.closest(".calculate-form-item-active").nextElementSibling.classList.add("calculate-form-item-active")
        elementInteractive.closest(".calculate-form-item-active").classList.remove("calculate-form-item-active")
        popupCalculateFormItems.forEach(function (e, i) {
          const activeElement = e.classList.contains("calculate-form-item-active")
          if (activeElement) {
            popupCalculateNumOne.innerHTML = i + 1;
            return;
          }
        })
      }
    }
    if (elementInteractive.closest(".popup-calculate__back")) {
      popupCalculateFormItems.forEach(function (e) {
        e.classList.remove("calculate-form-item-active");
      })
      popupCalculateFormItem.classList.add("calculate-form-item-active");
      popupCalculateNumOne.innerHTML = 1;
      popupCalculateFormChoices.forEach(function (e) {
        e.classList.remove("calculate-form-input-choice-active")
      })
    }
    if (elementInteractive.closest(".calculator-init")) {
      popupCalculate.classList.add("popup-calculate-active")
      document.body.style.overflow = "hidden";
    }
    if (elementInteractive.closest(".popup-calculate__close")) {
      popupCalculate.classList.remove("popup-calculate-active")
      document.body.style.overflow = "";
    }
    if (elementInteractive.closest(".popup-calculate__exit")) {
      popupCalculate.classList.remove("popup-calculate-active")
      document.body.style.overflow = "";
    }
  })

  document.addEventListener("mouseover", function (e) {

    const elementInteractive = e.target;

    if (elementInteractive.closest(".sublist-init")) {
      document.querySelectorAll(".sublist-init").forEach(function (q) {
        q.classList.remove("nav-item-active")
      })
      elementInteractive.closest(".sublist-init").classList.add("nav-item-active")
    }
    if (!elementInteractive.closest(".sublist-init")) {
      document.querySelectorAll(".sublist-init").forEach(function (q) {
        q.classList.remove("nav-item-active")
      })
    }
  })

  const productsSliderInit = document.querySelector(".products-slider");

  if (productsSliderInit) {
    if (document.body.clientWidth < 992) {
      const productsSlider = new Swiper('.products-slider', {
        observer: true,
        observeParents: true,
        watchOverflow: true,
        slidesPerView: "auto",
        direction: 'horizontal',
        pagination: {
          el: '.products-slider-pagination',
          clickable: true,
        },
        breakpoints: {
          320: {
            spaceBetween: 10,
          },
          601: {
            spaceBetween: 25
          },
        },
      });
    }
  }

  const productInfoInit = document.querySelector(".product-info");

  if (productInfoInit) {
    const productInfoSliderThumb = new Swiper('.product-info-slider-thumb', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      direction: 'vertical',
      breakpoints: {
        320: {
          spaceBetween: 5,
        },
        601: {
          spaceBetween: 7,
        },
      },
    });
    const productInfoSlider = new Swiper('.product-info-slider', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      spaceBetween: 0,
      direction: 'horizontal',
      thumbs: {
        swiper: productInfoSliderThumb,
      },
      navigation: {
        nextEl: '.product-info-slider-next',
        prevEl: '.product-info-slider-prev',
      },
    });
  }

  const reviewsSliderInit = document.querySelector(".reviews-slider");
  if (reviewsSliderInit) {
    if (document.body.clientWidth < 992) {
      const reviewsSlider = new Swiper('.reviews-slider', {
        observer: true,
        observeParents: true,
        watchOverflow: true,
        slidesPerView: "auto",
        direction: 'horizontal',
        pagination: {
          el: '.reviews-slider-pagination',
          clickable: true,
        },
        breakpoints: {
          320: {
            spaceBetween: 10,
          },
          601: {
            spaceBetween: 24
          },
        },
      });
    }
  }

  const footerMap = document.querySelector(".footer__map");

  if (footerMap) {
    ymaps.ready(init);

    function init() {
      const myMap = new ymaps.Map(
        "footer-map", {
          center: [45.035808074596346, 38.97368699999997],
          zoom: 17,
        },
      );
      var myPlacemark = new ymaps.Placemark(myMap.getCenter(45.035808074596346, 38.97368699999997), {}, {
        iconLayout: 'default#image',
        iconImageHref: '../../img/baloon.svg',
        iconImageSize: [20, 20],
      });

      myMap.geoObjects.add(myPlacemark);
      myMap.controls.remove('geolocationControl'); // удаляем геолокацию
      myMap.controls.remove('searchControl'); // удаляем поиск
      myMap.controls.remove('trafficControl'); // удаляем контроль трафика
      myMap.controls.remove('typeSelector'); // удаляем тип
      myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
      myMap.controls.remove('rulerControl'); // удаляем контрол правил
    }
  }

  const coontactsMap = document.querySelector(".contacts__map");

  if (coontactsMap) {
    ymaps.ready(init);

    function init() {
      const myMap = new ymaps.Map(
        "contacts-map", {
          center: [45.035808074596346, 38.97368699999997],
          zoom: 17,
        },
      );
      // var myPlacemark = new ymaps.Placemark(myMap.getCenter(55.76932, 37.63952), {}, { // Если нужно чтобы точка была всегда по центру
      var myPlacemark = new ymaps.Placemark(myMap.getCenter(45.035808074596346, 38.97368699999997), {}, {
        iconLayout: 'default#image',
        iconImageHref: '../../img/baloon.svg',
        iconImageSize: [30, 30],
      });

      myMap.geoObjects.add(myPlacemark);
      myMap.controls.remove('geolocationControl'); // удаляем геолокацию
      myMap.controls.remove('searchControl'); // удаляем поиск
      myMap.controls.remove('trafficControl'); // удаляем контроль трафика
      myMap.controls.remove('typeSelector'); // удаляем тип
      myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
      myMap.controls.remove('rulerControl'); // удаляем контрол правил
    }
  }

  function DynamicAdapt(type) {
    this.type = type;
  }

  DynamicAdapt.prototype.init = function () {
    const _this = this;
    // массив объектов
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    // массив DOM-элементов
    this.nodes = document.querySelectorAll("[data-da]");

    // наполнение оbjects объктами
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const data = node.dataset.da.trim();
      const dataArray = data.split(",");
      const оbject = {};
      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(dataArray[0].trim());
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
      оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
    }

    this.arraySort(this.оbjects);

    // массив уникальных медиа-запросов
    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
      return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
      return Array.prototype.indexOf.call(self, item) === index;
    });

    // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске
    for (let i = 0; i < this.mediaQueries.length; i++) {
      const media = this.mediaQueries[i];
      const mediaSplit = String.prototype.split.call(media, ',');
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];

      // массив объектов с подходящим брейкпоинтом
      const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
        return item.breakpoint === mediaBreakpoint;
      });
      matchMedia.addListener(function () {
        _this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
    }
  };

  DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
      for (let i = 0; i < оbjects.length; i++) {
        const оbject = оbjects[i];
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.moveTo(оbject.place, оbject.element, оbject.destination);
      }
    } else {
      for (let i = 0; i < оbjects.length; i++) {
        const оbject = оbjects[i];
        if (оbject.element.classList.contains(this.daClassname)) {
          this.moveBack(оbject.parent, оbject.element, оbject.index);
        }
      }
    }
  };

  // Функция перемещения
  DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
      destination.insertAdjacentElement('beforeend', element);
      return;
    }
    if (place === 'first') {
      destination.insertAdjacentElement('afterbegin', element);
      return;
    }
    destination.children[place].insertAdjacentElement('beforebegin', element);
  }

  // Функция возврата
  DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
      parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
      parent.insertAdjacentElement('beforeend', element);
    }
  }

  // Функция получения индекса внутри родителя
  DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
  };

  // Функция сортировки массива по breakpoint и place 
  // по возрастанию для this.type = min
  // по убыванию для this.type = max
  DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === "first" || b.place === "last") {
            return -1;
          }

          if (a.place === "last" || b.place === "first") {
            return 1;
          }

          return a.place - b.place;
        }

        return a.breakpoint - b.breakpoint;
      });
    } else {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === "first" || b.place === "last") {
            return 1;
          }

          if (a.place === "last" || b.place === "first") {
            return -1;
          }

          return b.place - a.place;
        }

        return b.breakpoint - a.breakpoint;
      });
      return;
    }
  };

  const da = new DynamicAdapt("max");
  da.init();

  const showInit = document.querySelector(".show-init");

  if (showInit) {
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
          items += 4; // число элементов которые будут добавляться при клике на кнопку показать ещё

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
    showCode("button-show-italbio", 4, "button-collapse-italbio", "italbio-item", "italbio-list")
    showCode("button-show-biodevicepro", 4, "button-collapse-biodevicepro", "biodevicepro-item", "biodevicepro-list")
    showCode("button-show-biodeviceeco", 4, "button-collapse-biodeviceeco", "biodeviceeco-item", "biodeviceeco-list")
    showCode("button-show-biodevicegorizont", 4, "button-collapse-biodevicegorizont", "biodevicegorizont-item", "biodevicegorizont-list")
  }

  // showCode("класс кнопки которая показывает элементы", "число элементов которое показывается", "класс кнопки которая скрывает элементы", "класс элементов списка", "класс списка")

}