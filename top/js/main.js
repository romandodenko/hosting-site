"use strict"

window.onload = function () {

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


/*
       Как работает: 
       1) пишешь атрибут data-da в нём указываешь элемент куда он должен перейти 
       2) разрешение, на котором это должно произойти 
       3) и место куда оно перейдёт


<div data-da=".div2, 1280, 1" class="div three">
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, itaque!</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque reiciendis quidem accusantium dolor sed eveniet doloribus ex impedit odit.</p>
</div> 

<div class="div2"></div>

*/

  const initHeaderSwiper = document.querySelector(".header-slider");
if (initHeaderSwiper) {
  const headerSwiper = new Swiper('.header-slider', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: "auto",
    direction: 'horizontal',
    breakpoints: {
      320: {
        spaceBetween: 8,
      },
      601: {
        spaceBetween: 16,
      },
      992: {
        spaceBetween: 24,
      }
    },
  });
}

// ======================================================================================================================================================

// Открытие в карточке элемента

document.addEventListener("click", function (e) {

  const elementTarget = e.target;

  if (elementTarget.closest(".cards-list__button")) {
    document.querySelectorAll(".cards-list__bottom").forEach(function (e) {
      e.querySelector(".cards-list__content-hidden").style.height = 0;
      e.classList.remove("cards-list-bottom-active");
    })

    function addedClass () {
      elementTarget.closest(".cards-list__button").classList.add("cards-list-button-active")
    } 

    if (!elementTarget.closest(".cards-list-button-active")) {
      setTimeout(addedClass,100)
    }

    elementTarget.closest(".cards-list__bottom").classList.add("cards-list-bottom-active");
    
    document.querySelector(".cards-list-bottom-active").querySelector(".cards-list__content-hidden").style.height = document.querySelector(".cards-list-bottom-active").querySelector(".cards-list__content-hidden").scrollHeight + 'px';

  }

  
  if (elementTarget.closest(".cards-list-button-active")) {

    if (elementTarget.closest(".cards-list-bottom-active") && elementTarget.closest(".cards-list-button-active")) {

      document.querySelector(".cards-list-bottom-active").querySelector(".cards-list__content-hidden").style.height = 0;

      document.querySelector(".cards-list-bottom-active").classList.remove("cards-list-bottom-active");

      document.querySelectorAll(".cards-list__button").forEach(function (e) {
        e.classList.remove("cards-list-button-active")
      })
    }
  }


  if (document.querySelector(".cards-list-bottom-active")) {
    if (!elementTarget.closest(".cards-list-bottom-active")) {

      document.querySelector(".cards-list-bottom-active").querySelector(".cards-list__content-hidden").style.height = 0;

      document.querySelector(".cards-list-bottom-active").classList.remove("cards-list-bottom-active");
    }
  }

})

const cardsItem = document.querySelectorAll(".cards-list__item");

cardsItem.forEach(function(s, i) {
  s.querySelector(".cards-list-part__num").innerHTML = i + 1
})


}