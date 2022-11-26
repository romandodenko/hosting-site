"use strict"

export function overall() {
  window.onload = function () {
    const menu = document.querySelector(".header__menu");

    document.addEventListener("click", function (e) {
      // Главная страница
      if (e.target.closest(".profile__avatar")) {
        e.target.closest(".profile").classList.toggle("profile-active")
      }
      if (!e.target.closest(".profile-active")) {
        let profile = document.querySelector(".profile")
        if (profile) {
          profile.classList.remove("profile-active")
        }
      }
      if (e.target.closest(".profile-menu__button")) {
        e.target.closest(".profile-menu__item").classList.toggle("profile-menu-item-active")
      }
      if (e.target.closest(".burger")) {
        e.target.closest(".burger").classList.toggle("burger-active")
        menu.classList.toggle("menu-active")
      }
      if (!e.target.closest(".burger-active") && !e.target.closest(".menu-active")) {
        menu.classList.remove("menu-active")
        let burgerItem = document.querySelectorAll(".burger");
        burgerItem.forEach(function (e) {
          e.classList.remove("burger-active")
        })
      }
      if (e.target.closest(".accordion-clicker")) {
        e.target.closest(".accordion-clicker").classList.toggle("accordion-clicker-active")
      }
      if (!e.target.closest(".accordion-clicker-active")) {
        let navItem = document.querySelectorAll(".nav__item");
        navItem.forEach(function (e) {
          e.classList.remove("accordion-clicker-active")
        })
      }
      if (e.target.closest(".footer__link")) {
        e.target.closest(".footer-accordion-clicker").classList.toggle("footer-accordion-clicker-active")
      }
      if (!e.target.closest(".footer-accordion-clicker-active")) {
        let footerList = document.querySelectorAll(".footer__item");
        footerList.forEach(function (e) {
          e.classList.remove("footer-accordion-clicker-active")
        })
      }
      if (e.target.closest(".top-item-rating")) {
        loanPopupRatingRemove()
        e.target.closest(".loan__items").classList.add("top-rating-popup-active")
      }
      if (!e.target.closest(".top-rating-popup-active")) {
        loanPopupRatingRemove()
      }
      if (e.target.closest(".top-item-confidence")) {
        loanPopupConfidenceRemove()
        e.target.closest(".loan__items").classList.add("top-confidence-popup-active")
      }
      if (!e.target.closest(".top-confidence-popup-active")) {
        loanPopupConfidenceRemove()
      }
      if (e.target.closest(".loan__body-right")) {
        loanPopupValueRemove()
        e.target.closest(".loan__body-right").classList.add("top-value-popup-active")
      }
      if (!e.target.closest(".top-value-popup-active")) {
        loanPopupValueRemove()
      }
      if (e.target.closest(".loan__avatar")) {
        loanPopupProfileRemove()
        e.target.closest(".loan__body-left").classList.add("profile-popup-active")
      }
      if (e.target.closest(".loan__name")) {
        loanPopupProfileRemove()
        e.target.closest(".loan__body-left").classList.add("profile-popup-active")
      }
      if (!e.target.closest(".profile-popup-active")) {
        loanPopupProfileRemove()
      }
      if (e.target.closest(".item-confidence")) {
        loanPopupConfidenceLeftRemove()
        e.target.closest(".loan__items").classList.add("item-confidence-active")
      }
      if (!e.target.closest(".item-confidence-active")) {
        loanPopupConfidenceLeftRemove()
      }
      if (e.target.closest(".item-time")) {
        loanPopupTimeRemove()
        e.target.closest(".loan__items").classList.add("item-time-active")
      }
      if (!e.target.closest(".item-time-active")) {
        loanPopupTimeRemove()
      }
      if (e.target.closest(".loan__body-right_left")) {
        loanPopupValueLeftRemove()
        e.target.closest(".loan__body-right_left").classList.add("item-value-active")
      }
      if (!e.target.closest(".item-value-active")) {
        loanPopupValueLeftRemove()
      }
      if (e.target.closest(".item-rating")) {
        loanPopupRatingLeftRemove()
        e.target.closest(".loan__items").classList.add("item-rating-active")
      }
      if (!e.target.closest(".item-rating-active")) {
        loanPopupRatingLeftRemove()
      }
      if (e.target.closest(".item-rating-grey")) {
        loanPopupRatingGreyRemove()
        e.target.closest(".loan__items").classList.add("item-rating-grey-active")
      }
      if (!e.target.closest(".item-rating-grey-active")) {
        loanPopupRatingGreyRemove()
      }
      // Главная страница

      // Партнерская программа
      if (e.target.closest(".dropdown-a-clicker")) {
        let dropdownA = document.querySelectorAll(".dropdown-a");
        dropdownA.forEach(function (a) {
          a.classList.remove("dropdown-a-active")
        })
        e.target.closest(".dropdown-a-clicker").classList.add("dropdown-a-clicker-active")
      }
      if (!e.target.closest(".dropdown-a-active")) {
        let dropdownA = document.querySelectorAll(".dropdown-a");
        dropdownA.forEach(function (a) {
          a.classList.remove("dropdown-a-active")
        })
      }
      // Партнерская программа

      //Заявки на получение займа
      if (e.target.closest(".dropdown-method__button")) {
        e.target.closest(".dropdown-method").classList.add("dropdown-method-active")
      }
      if (!e.target.closest(".dropdown-method-active")) {
        let dropdownMethod = document.querySelectorAll(".dropdown-method")
        dropdownMethod.forEach(function (el) {
          el.classList.remove("dropdown-method-active")
        })
      }

      if (e.target.closest(".loan-applications__button-city")) {
        e.target.closest(".dropdown-city").classList.add("dropdown-city-active")
      }
      if (!e.target.closest(".dropdown-city-active")) {
        let dropdownCity = document.querySelectorAll(".dropdown-city")
        dropdownCity.forEach(function (el) {
          el.classList.remove("dropdown-city-active")
        })
      }
      if (document.body.clientWidth <= 450) {
        if (e.target.closest(".loan-applications__filter")) {
          e.target.closest(".loan-applications__right-right").classList.add("filter-active")
        }
        if (!e.target.closest(".filter-active")) {
          const filterParent = document.querySelectorAll(".loan-applications__right-right");
          filterParent.forEach(function (a) {
            a.classList.remove("filter-active")
          })
        }
      }
      if (e.target.closest(".disabled-link")) {
        e.target.closest(".parent-disabled-link").classList.add("parent-disabled-link-active")
      }
      if (!e.target.closest(".parent-disabled-link-active")) {
        let parentDisabledLink = document.querySelectorAll(".parent-disabled-link")
        parentDisabledLink.forEach(function (e) {
          e.classList.remove("parent-disabled-link-active")
        })
      }

      // Поиск
     if( search ) {
      if (e.target.closest(".search__init")) {
        e.target.closest(".search").classList.add("search-active")
      }
      if (!e.target.closest(".search-active")) {
        document.querySelector(".search").classList.remove("search-active")
      }
     }
      // Поиск
      // Мои данные - настройки

      if (e.target.closest(".carted__button")) {
        e.target.closest(".carted").classList.add("carted-active")
      }
      if (!e.target.closest(".carted-active")) {
        document.querySelectorAll(".carted").forEach(function(a) {
          a.classList.remove("carted-active")
        })

      }
      if (e.target.closest(".del-item")) {
        e.target.closest(".carted-active").remove()
      }
      // Мои данные - настройки
     // Мои данные - добавление карты
     if (e.target.closest(".added-cart-top__close")) {
      e.target.closest(".added-cart-top__item").remove()
    }
     // Мои данные - добавление карты

     // Мои данные - стоп лист
     if (e.target.closest(".stop-list-row__button")) {
      e.target.closest(".stop-list-row").remove()
    }
     
     // Мои данные - стоп лист
     // Мои данные - главная
     if (e.target.closest(".data-row-file__button")) {
      e.target.closest(".data-row-file__item").remove()
    }
     // Мои данные - главная
     if (e.target.closest(".rows__close")) {
      e.target.closest(".rows__row").remove()
    }




      

    })

    if (document.body.clientWidth <= 450) {
      const dropdownMethodSave = document.querySelectorAll(".dropdown-method__save");
      const filterParent = document.querySelectorAll(".loan-applications__right-right");
      dropdownMethodSave.forEach(function (e) {
        e.addEventListener("click", function () {
          filterParent.forEach(function (a) {
            a.classList.remove("filter-active")
          })
        })
      })
    }
    //Заявки на получение займа

    document.addEventListener("mouseover", function (e) {
      // Главная страница
      if (e.target.closest(".top-item-rating")) {
        loanPopupRatingRemove()
        e.target.closest(".loan__items").classList.add("top-rating-popup-active")
      }
      if (!e.target.closest(".top-rating-popup-active")) {
        loanPopupRatingRemove()
      }
      if (e.target.closest(".top-item-confidence")) {
        loanPopupConfidenceRemove()
        e.target.closest(".loan__items").classList.add("top-confidence-popup-active")
      }
      if (!e.target.closest(".top-confidence-popup-active")) {
        loanPopupConfidenceRemove()
      }
      if (e.target.closest(".loan__body-right")) {
        loanPopupValueRemove()
        e.target.closest(".loan__body-right").classList.add("top-value-popup-active")
      }
      if (!e.target.closest(".top-value-popup-active")) {
        loanPopupValueRemove()
      }
      if (e.target.closest(".loan__avatar")) {
        loanPopupProfileRemove()
        e.target.closest(".loan__body-left").classList.add("profile-popup-active")
      }
      if (e.target.closest(".loan__name")) {
        loanPopupProfileRemove()
        e.target.closest(".loan__body-left").classList.add("profile-popup-active")
      }
      if (!e.target.closest(".profile-popup-active")) {
        loanPopupProfileRemove()
      }
      if (e.target.closest(".item-confidence")) {
        loanPopupConfidenceLeftRemove()
        e.target.closest(".loan__items").classList.add("item-confidence-active")
      }
      if (!e.target.closest(".item-confidence-active")) {
        loanPopupConfidenceLeftRemove()
      }
      if (e.target.closest(".item-time")) {
        loanPopupTimeRemove()
        e.target.closest(".loan__items").classList.add("item-time-active")
      }
      if (!e.target.closest(".item-time-active")) {
        loanPopupTimeRemove()
      }
      if (e.target.closest(".loan__body-right_left")) {
        loanPopupValueLeftRemove()
        e.target.closest(".loan__body-right_left").classList.add("item-value-active")
      }
      if (!e.target.closest(".item-value-active")) {
        loanPopupValueLeftRemove()
      }
      if (e.target.closest(".item-rating")) {
        loanPopupRatingLeftRemove()
        e.target.closest(".loan__items").classList.add("item-rating-active")
      }
      if (!e.target.closest(".item-rating-active")) {
        loanPopupRatingLeftRemove()
      }
      if (e.target.closest(".item-rating-grey")) {
        loanPopupRatingGreyRemove()
        e.target.closest(".loan__items").classList.add("item-rating-grey-active")
      }
      if (!e.target.closest(".item-rating-grey-active")) {
        loanPopupRatingGreyRemove()
      }
      // Главная страница

      //Заявки на получение займа
      if (e.target.closest(".disabled-link")) {
        e.target.closest(".parent-disabled-link").classList.add("parent-disabled-link-active")
      }
      if (!e.target.closest(".parent-disabled-link-active")) {
        let parentDisabledLink = document.querySelectorAll(".parent-disabled-link")
        parentDisabledLink.forEach(function (e) {
          e.classList.remove("parent-disabled-link-active")
        })
      }
      //Заявки на получение займа

      // Кредитная история
      if (e.target.closest(".init-popup-profile")) {
        document.querySelectorAll(".wrapper-popup-profile").forEach(function (a) {
          a.classList.remove("wrapper-popup-profile-active")
        })
        e.target.closest(".wrapper-popup-profile").classList.add("wrapper-popup-profile-active")
      }
      if (!e.target.closest(".wrapper-popup-profile-active")) {
        document.querySelectorAll(".wrapper-popup-profile").forEach(function (a) {
          a.classList.remove("wrapper-popup-profile-active")
        })
      }

      // Кредитная история
      // Попап модератор

      if (e.target.closest(".popup-attracted-users-init")) {
        document.querySelectorAll(".moderators-rows__popup-parent").forEach(function (a) {
          a.classList.remove("moderators-rows-popup-parent-active")
        })
        e.target.closest(".moderators-rows__popup-parent").classList.add("moderators-rows-popup-parent-active")
      }
      if (!e.target.closest(".moderators-rows-popup-parent-active")) {
        document.querySelectorAll(".moderators-rows__popup-parent").forEach(function (a) {
          a.classList.remove("moderators-rows-popup-parent-active")
        })
      }
      // Попап модератор


    })


    // Главная страница
    function loanPopupRatingRemove() {
      let loanRatingItems = document.querySelectorAll(".loan__items");
      loanRatingItems.forEach(function (e) {
        e.classList.remove("top-rating-popup-active")
      })
    }

    function loanPopupConfidenceRemove() {
      let loanConfidenceItems = document.querySelectorAll(".loan__items");
      loanConfidenceItems.forEach(function (e) {
        e.classList.remove("top-confidence-popup-active")
      })
    }

    function loanPopupValueRemove() {
      let loanConfidenceItems = document.querySelectorAll(".loan__body-right");
      loanConfidenceItems.forEach(function (e) {
        e.classList.remove("top-value-popup-active")
      })
    }

    function loanPopupProfileRemove() {
      let loanConfidenceItems = document.querySelectorAll(".loan__body-left");
      loanConfidenceItems.forEach(function (e) {
        e.classList.remove("profile-popup-active")
      })
    }

    function loanPopupConfidenceLeftRemove() {
      let loanConfidenceItemsLeft = document.querySelectorAll(".loan__items");
      loanConfidenceItemsLeft.forEach(function (e) {
        e.classList.remove("item-confidence-active")
      })
    }

    function loanPopupTimeRemove() {
      let loanPopupTimeRemove = document.querySelectorAll(".loan__items");
      loanPopupTimeRemove.forEach(function (e) {
        e.classList.remove("item-time-active")
      })
    }

    function loanPopupValueLeftRemove() {
      let loanPopupValueLeftRemove = document.querySelectorAll(".loan__body-right_left");
      loanPopupValueLeftRemove.forEach(function (e) {
        e.classList.remove("item-value-active")
      })
    }

    function loanPopupRatingLeftRemove() {
      let loanPopupRatingLeftRemove = document.querySelectorAll(".loan__items");
      loanPopupRatingLeftRemove.forEach(function (e) {
        e.classList.remove("item-rating-active")
      })
    }

    function loanPopupRatingGreyRemove() {
      let loanPopupRatingGreyRemove = document.querySelectorAll(".loan__items");
      loanPopupRatingGreyRemove.forEach(function (e) {
        e.classList.remove("item-rating-grey-active")
      })
    }
    // Главная страница
    // Видео новости
    const newVideo = document.querySelectorAll(".new-video");

    newVideo.forEach(function (e) {
      e.addEventListener("click", function () {
        e.querySelector('video').play();
        e.querySelector('video').setAttribute("controls", "controls");
        e.querySelector('video').removeAttribute("muted");
        e.querySelector(".new__icon-play").remove();
      })
    })
    // Видео новости
    // Видео  Партнерская программа
    const partnersVideo = document.querySelectorAll(".partners-video");

    partnersVideo.forEach(function (e) {
      e.addEventListener("click", function () {
        e.querySelector('video').play();
        e.querySelector('video').setAttribute("controls", "controls");
        e.querySelector('video').removeAttribute("muted");
        e.querySelector(".partners-top-list__icon-play").remove();
      })
    })
    // Видео  Партнерская программа

    // Копия текста  Партнерская программа
    const copyButton = document.querySelector(".copy-btn");
    if (copyButton) {
      copyButton.addEventListener("click", function () {
        copyFunction()
      })

      function copyFunction() {
        var copyText = document.querySelector(".copy-value");
        copyText.select();
        document.execCommand("copy");
      }
    }
    // Копия текста  Партнерская программа
    // Появление текста если пользователь авторизован  Партнерская программа
    let clickerTextPartnes = document.querySelector(".clicker-text");
    if (clickerTextPartnes) {
      clickerTextPartnes.addEventListener("click", function () {
        document.querySelector(".partners-descr").classList.toggle("dropdown-a-active")
        clickerTextPartnes.classList.toggle("clicker-text-active")
      })
    }

    // Появление текста если пользователь авторизован  Партнерская программа
    //Партнерская программа
    if (document.querySelector(".show-partners-table")) {
      document.querySelector(".show-partners-table").addEventListener("click", function () {
        document.querySelector(".partners-table__rows").classList.add('partners-border-none')
      })

      document.querySelector(".collapse-partners-table").addEventListener("click", function () {
        document.querySelector(".partners-table__rows").classList.remove('partners-border-none')
      })
    }

    //Партнерская программа
    //Заявки на получение займа
    if (document.querySelector(".show-loan-applications-table")) {
      document.querySelector(".show-loan-applications-table").addEventListener("click", function () {
        document.querySelector(".loan-applications-table__rows").classList.add('loan-border-none')
      })

      document.querySelector(".collapse-loan-applications-table").addEventListener("click", function () {
        document.querySelector(".loan-applications-table__rows").classList.remove('loan-border-none')
      })
    }


    if (document.querySelector(".disabled-link")) {
      const loanDisabledLink = document.querySelectorAll(".disabled-link");

      loanDisabledLink.forEach(function (e) {
        e.addEventListener("click", function (a) {
          a.preventDefault()
        })
      })
    }
    //Заявки на получение займа
    // Кабинет другого пользователя
    const cabinetInteraction = document.querySelector(".cabinet-interaction")
    const userBurger = document.querySelector(".user-burger");
    if (cabinetInteraction) {
      userBurger.addEventListener("click", function () {
        userBurger.classList.toggle("user-burger-active")
        cabinetInteraction.classList.toggle("cabinet-interaction-active")
      })
    }

    // Кабинет другого пользователя





    // заявка
    if (document.querySelector(".application__approve_disabled")) {
      const applicationDisabledLink = document.querySelectorAll(".application__approve_disabled");

      applicationDisabledLink.forEach(function (e) {
        e.addEventListener("click", function (a) {
          a.preventDefault()
        })
      })
    }
    // заявка
    // предложение
    if (document.querySelector(".suggestion__approve_disabled")) {
      const applicationDisabledLink = document.querySelectorAll(".suggestion__approve_disabled");

      applicationDisabledLink.forEach(function (e) {
        e.addEventListener("click", function (a) {
          a.preventDefault()
        })
      })
    }
    // предложение

    const receivedCheckbox = document.querySelector(".received-checkbox");

    if (receivedCheckbox) {
      receivedCheckbox.addEventListener("input", function () {
        document.querySelector(".received-link").classList.toggle("received-link-disabled")
      })
    }

    const menuInit = document.querySelector(".menu-init");
    if (menuInit) {
      menuInit.addEventListener('click', function () {
        menuInit.classList.toggle("menu-init-active")
        document.querySelector(".menu").classList.toggle("menu-active")
      })
    }

    const prolongaciyaInput = document.querySelector(".prolongaciya__input");

    if (prolongaciyaInput) {
      prolongaciyaInput.addEventListener("change", function () {
        if (prolongaciyaInput.value) {
          document.querySelector(".prolongaciya__symm").classList.add("prolongaciya-symm-visible")
          document.querySelector(".prolongaciya__icon").classList.add("prolongaciya-icon-visible")
          document.querySelector(".prolongaciya__button").classList.remove("prolongaciya__button_disabled")
        } else {
          document.querySelector(".prolongaciya__symm").classList.remove("prolongaciya-symm-visible")
          document.querySelector(".prolongaciya__icon").classList.remove("prolongaciya-icon-visible")
          document.querySelector(".prolongaciya__button").classList.add("prolongaciya__button_disabled")
        }
      })

    }


    const creatingInputFile = document.querySelector(".creating-file__input");
    const creatingValues = document.querySelector(".creating-file__values");
    const creatingButtonClose = document.querySelector(".creating-file__close");
    const creatingNoValue = document.querySelector(".no-file");

    if (creatingInputFile) {
      creatingInputFile.addEventListener("input", function () {
        let valueInputFile = `
    <p class="creating-file__value file-added">
      ${creatingInputFile.value}
    </p>`

        creatingValues.insertAdjacentHTML("afterbegin", valueInputFile)
        creatingNoValue.classList.add("no-file-disabled")
        creatingButtonClose.classList.add("creating-button-close-active")


      })
      creatingButtonClose.addEventListener("click", function () {
        document.querySelectorAll(".file-added").forEach(function (e) {
          e.remove()
        })
        creatingButtonClose.classList.remove("creating-button-close-active")
        creatingNoValue.classList.remove("no-file-disabled")
      })

    }

    const moderatorSeeAdded = document.querySelector(".see-profile-added");
    const moderatorSeeInputFile = document.querySelector(".see-profile-added__input");
    const moderatorSeeValues = document.querySelector(".see-profile-added__values");
    const moderatorSeeButtonClose = document.querySelector(".see-profile-added__close");
    if (moderatorSeeAdded) {
      moderatorSeeInputFile.addEventListener("input", function () {
        let valueInputFile = `
    <p class="creating-file__value file-added">
      ${moderatorSeeInputFile.value}
    </p>`

    moderatorSeeValues.insertAdjacentHTML("afterbegin", valueInputFile)
    moderatorSeeButtonClose.classList.add("button-close-active")


      })
      moderatorSeeButtonClose.addEventListener("click", function () {
        document.querySelectorAll(".file-added").forEach(function (e) {
          e.remove()
        })
        moderatorSeeButtonClose.classList.remove("button-close-active")
      })
    }

    // Форма
    const forms = document.querySelector(".forms");
    const timer = document.querySelector(".timer")
    const timerValue = document.querySelector(".timer-value")
    const formLinkRepeat = document.querySelector(".link-repeat")
    if (formLinkRepeat) {
      function timer() {
        if (timerValue.innerHTML > 0) {
          timerValue.innerHTML -= 1
        } else {
          formLinkRepeat.classList.add("link-repeat-visible")
        }
      }
      formLinkRepeat.addEventListener("click", function () {
        timerValue.innerHTML = 60
        formLinkRepeat.classList.remove("link-repeat-visible")
      })
      setInterval(timer, 1000)
    }

    const openpass = document.querySelector(".openpass1");

    if(openpass) {
      function seePass(openpass, closepass, input, parent) {
        document.querySelector(`${openpass}`).addEventListener("click", function () {
          document.querySelector(`${input}`).setAttribute("type", "text")
          document.querySelector(`${parent}`).classList.add("openpass-active")
        })
        document.querySelector(`${closepass}`).addEventListener("click", function () {
          document.querySelector(`${input}`).setAttribute("type", "password")
          document.querySelector(`${parent}`).classList.remove("openpass-active")
        })
      }
      seePass(".openpass1", ".closepass1", ".input-see1", ".openpass-parent1")
      seePass(".openpass2", ".closepass2", ".input-see2", ".openpass-parent2")
    }


    // Форма

    // Конструктор документов
    const documentDesigner = document.querySelector(".document-designer");

    if (documentDesigner) {
      let added1_i = 1;
      document.querySelector(`.added1`).addEventListener("click", function () {
        added1_i += 1;
        let content = `
        <div class="document-row__wrapper-input document-row__wrapper-input_m">
        <span class="document-row__num">${added1_i}.</span>
        <input class="document-row__input" type="text" >
       </div>
        `
        document.querySelector(`.inputs1`).insertAdjacentHTML("beforeend", content)
      })
      let added2_i = 1;
      document.querySelector(`.added2`).addEventListener("click", function () {
        added2_i += 1;
        let content = `
        <div class="document-row__wrapper-input document-row__wrapper-input_m">
        <span class="document-row__num">${added2_i}.</span>
        <input class="document-row__input" type="text" >
       </div>
        `
        document.querySelector(`.inputs2`).insertAdjacentHTML("beforeend", content)
      })
      let added3_i = 1;
      document.querySelector(`.added3`).addEventListener("click", function () {
        added3_i += 1;
        let content = `
        <div class="document-row__wrapper-input document-row__wrapper-input_m">
        <span class="document-row__num">${added3_i}.</span>
        <input class="document-row__input" type="text" >
       </div>
        `
        document.querySelector(`.inputs3`).insertAdjacentHTML("beforeend", content)
      })
      let added4_i = 1;
      document.querySelector(`.added4`).addEventListener("click", function () {
        added4_i += 1;
        let content = `
        <div class="document-row__wrapper-input document-row__wrapper-input_m">
        <span class="document-row__num">${added4_i}.</span>
        <input class="document-row__input" type="text" >
       </div>
        `
        document.querySelector(`.inputs4`).insertAdjacentHTML("beforeend", content)
      })
      let added5_i = 1;
      document.querySelector(`.added5`).addEventListener("click", function () {
        added5_i += 1;
        let content = `
        <div class="document-row__wrapper-input document-row__wrapper-input_m">
        <span class="document-row__num">${added5_i}.</span>
        <input class="document-row__input" type="text" >
       </div>
        `
        document.querySelector(`.inputs5`).insertAdjacentHTML("beforeend", content)
      })
      let added6_i = 1;
      document.querySelector(`.added6`).addEventListener("click", function () {
        added6_i += 1;
        let content = `
        <div class="document-row__wrapper-input document-row__wrapper-input_m">
        <span class="document-row__num">${added6_i}.</span>
        <input class="document-row__input" type="text" >
       </div>
        `
        document.querySelector(`.inputs6`).insertAdjacentHTML("beforeend", content)
      })


    }
    // Конструктор документов
    // Заказ документов

    const orderDocuments = document.querySelector(".order-documents");
    if (orderDocuments) {
      document.querySelector(`.added1`).addEventListener("click", function () {
        let content = `
        <input class="order-documents-top__input" type="text">
        `
        document.querySelector(`.inputs1`).insertAdjacentHTML("beforeend", content)
      })
    }
    // Заказ документов
    // Кабинет модератора
    const search = document.querySelector(".search");

    if (search) {
      if (document.body.clientWidth <= 1450) {
        document.querySelector(".search__input").setAttribute("placeholder", "Введите данные")
      }
    }

    // Кабинет модератора

    // Сообщения
     const messageTextarea =  document.querySelector(".sms-message__text");
    if(messageTextarea) {
      if (document.body.clientWidth <= 600) {
    messageTextarea.addEventListener("input", function() {
      if(messageTextarea.value !== "") {
        messageTextarea.classList.add("message-text-area-active")
      } else {
        messageTextarea.classList.remove("message-text-area-active")
      }
    })
  }
    }
    const popup = document.querySelector(".popup");
    if(popup) {
      document.querySelectorAll(".popup__back").forEach(function(e) {
        e.addEventListener("click", function() {
          document.querySelectorAll(".popup").forEach(function(a) {
            a.classList.remove("tab-content-active")
          })
        })
      })

    }
    const smsWrapper = document.querySelector(".sms__scroll");
    const smsButton = document.querySelector(".sms-message__button");
    if(smsButton) {
      smsButton.addEventListener("click", function() {
        let valueSmsText = messageTextarea.value;
        let innewSmsItem = `
        <div class="sms__item sms-you">
        <div class="sms__left sms__left_2">
          <span class="sms__icon sms__icon_2">
            <img src="./img/icon/avatar-mini.png" alt="Иконка">
          </span>
          <p class="sms__user">
            Константин У. 78
          </p>
        </div>
        <div class="sms__right">
          <div class="sms__right-top">
            <div class="sms__wrapper-file"></div>
            <p class="sms__text">
              ${valueSmsText}
            </p>
           </div>
          <div class="sms__bottom">
            <span class="sms__data">
              17.07.2022
            </span>
            <span class="sms__data">
              15:30
            </span>
          </div>
        </div>
        <p class="sms__status"></p>
      </div>
        `;
        smsWrapper.insertAdjacentHTML("afterend",innewSmsItem);
        messageTextarea.value = "";
      })
    }
    // Сообщения
 // Тарифы
    const payDocumentLink = document.querySelector(".pay-documents-link-all");
    if(payDocumentLink) {
      
      if (document.body.clientWidth <= 600) {
        document.addEventListener("scroll", function() {
          let posY = Math.floor(scrollY);
          console.log(posY)
          if (posY >= 200) {
            payDocumentLink.classList.add("position-absolute")
          } else {
            payDocumentLink.classList.remove("position-absolute")
          }
        })
      }

    }
 // Тарифы

    const wrapperCart = document.querySelector(".carted-wrapper-cart");
    const cartedCartAdded = document.querySelector(".carta-added");
    if(cartedCartAdded) {
      cartedCartAdded.addEventListener("click", function() {
        let contentCart = `
          <div class="carted">
          <div class="carted__top">
            <p class="carted__value">
              4654 6465 4654 6546
            </p>
            <button class="carted__button"></button>
          </div>
          <div class="carted__dropdown carted-dropdown">
              <button class="carted-dropdown__item">
                <img src="./img/icon/perevod-na-bankovskyu-karty24.svg" alt="Иконка">
                Сделать картой по умолчанию
              </button>
              <button class="carted-dropdown__item">
                <img src="./img/icon/yrna-red.svg" alt="Иконка">
                Удалить карту
              </button>
          </div>
        </div>
        `;

        wrapperCart.insertAdjacentHTML("beforeend", contentCart);
      })
    }
    const wrapperSchet = document.querySelector(".schet-wrapper-schet");
    const cartedSchetAdded = document.querySelector(".schet-added");

    if(cartedSchetAdded) {
      cartedSchetAdded.addEventListener("click", function() {
        let contentCart = `
          <div class="carted">
          <div class="carted__top">
            <p class="carted__value">
              4654 6465 4654 6546
            </p>
            <button class="carted__button"></button>
          </div>
          <div class="carted__dropdown carted-dropdown">
          <button class="carted-dropdown__item">
            <img src="./img/icon/perevod-na-bankovskyu-karty24.svg" alt="Иконка">
            Сделать картой по умолчанию
          </button>
          <button class="carted-dropdown__item">
            <img src="./img/icon/karandaw.svg" alt="Иконка">
           Редактировать
          </button>
          <button class="carted-dropdown__item del-item">
            <img src="./img/icon/yrna-red.svg" alt="Иконка">
            Удалить карту
          </button>
      </div>
        </div>
        `;

        wrapperSchet.insertAdjacentHTML("beforeend", contentCart);
      })
    }
    // Добавление карты
      const addedInputFile = document.querySelector(".added-cart-top__input");
      const addedCartWrapper = document.querySelector(".added-cart-top__files");
      if(addedInputFile) {
        addedInputFile.addEventListener("change", function() {
          let content = `
          <div class="added-cart-top__item">
          <p class="added-cart-top__name-file">
            ${addedInputFile.value}
          </p>
            <button class="added-cart-top__close">
              <img src="./img/icon/close-dark.svg" alt="Иконка">
            </button>
          </div>
          `;
          addedCartWrapper.insertAdjacentHTML("afterend", content)
        })
      }
    // Добавление карты
    // Настройки стоп лист
      const stopListButton = document.querySelector(".stop-list-rows__top-button");
      if(stopListButton) {
        stopListButton.addEventListener("click", function() {
          document.querySelectorAll(".stop-list-row").forEach(function(a) {
            a.remove()
          })
        })
      }
    // Настройки стоп лист

      //  Анкета
      const anketaCheckbox = document.querySelector(".anketa-checkbox-auto");

      if (anketaCheckbox) {
        anketaCheckbox.addEventListener("change", function() {
          document.querySelector(".input-auto").classList.toggle("input-auto-ok")
        })
      }
      // Анкета
       // Мои данные
      const fileInputData1 = document.querySelector(".file-input-1");
      const wrapperFileData1 = document.querySelector(".row-file-1");
      const fileInputData2 = document.querySelector(".file-input-2");
      const wrapperFileData2 = document.querySelector(".row-file-2");
      const fileInputData3 = document.querySelector(".file-input-3");
      const wrapperFileData3 = document.querySelector(".row-file-3");
      const fileInputData4 = document.querySelector(".file-input-4");
      const wrapperFileData4 = document.querySelector(".row-file-4");


      if (fileInputData1) {
        if(wrapperFileData1.querySelector(".data-row-file__item")) {
            wrapperFileData1.classList.add("wrapper-file-active")
        }
        fileInputData1.addEventListener("change", function() {
          let content = `
          <div class="data-row-file__item">
          <p class="data-row-file__file">
            ${fileInputData1.value}
          </p>
          <button class="data-row-file__button">
              <img src="./img/icon/close-dark.svg" alt="">
            </button>
          </div>
            `;
            wrapperFileData1.insertAdjacentHTML("afterbegin", content)
            if(wrapperFileData1.querySelector(".data-row-file__item")) {
              wrapperFileData1.classList.add("wrapper-file-active")
          }
        })
      }
      if (fileInputData2) {
        if(wrapperFileData2.querySelector(".data-row-file__item")) {
          wrapperFileData2.classList.add("wrapper-file-active")
      }
        fileInputData2.addEventListener("change", function() {
          let content = `
          <div class="data-row-file__item">
          <p class="data-row-file__file">
            ${fileInputData2.value}
          </p>
          <button class="data-row-file__button">
              <img src="./img/icon/close-dark.svg" alt="">
            </button>
          </div>
            `;
            wrapperFileData2.insertAdjacentHTML("afterbegin", content)
            if(wrapperFileData2.querySelector(".data-row-file__item")) {
              wrapperFileData2.classList.add("wrapper-file-active")
          }
        })
      }
      if (fileInputData3) {
        if(wrapperFileData3.querySelector(".data-row-file__item")) {
          wrapperFileData3.classList.add("wrapper-file-active")
      }
        fileInputData3.addEventListener("change", function() {
          let content = `
          <div class="data-row-file__item">
          <p class="data-row-file__file">
            ${fileInputData3.value}
          </p>
          <button class="data-row-file__button">
              <img src="./img/icon/close-dark.svg" alt="">
            </button>
          </div>
            `;
            wrapperFileData3.insertAdjacentHTML("afterbegin", content)
            if(wrapperFileData3.querySelector(".data-row-file__item")) {
              wrapperFileData3.classList.add("wrapper-file-active")
          }
        })
      }
      if (fileInputData4) {
        if(wrapperFileData4.querySelector(".data-row-file__item")) {
          wrapperFileData4.classList.add("wrapper-file-active")
      }
        fileInputData4.addEventListener("change", function() {
          let content = `
          <div class="data-row-file__item">
          <p class="data-row-file__file">
            ${fileInputData4.value}
          </p>
          <button class="data-row-file__button">
              <img src="./img/icon/close-dark.svg" alt="">
            </button>
          </div>
            `;
            wrapperFileData4.insertAdjacentHTML("afterbegin", content)
            if(wrapperFileData4.querySelector(".data-row-file__item")) {
              wrapperFileData4.classList.add("wrapper-file-active")
          }
        })
      }
        // Мои данные








  }
}