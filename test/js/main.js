"use strict"

window.onload = function () {

  // Анимация появления формы

let formGreenshockAnimation = gsap.timeline({
  paused: true
})

formGreenshockAnimation
  .to(".form-block", {
    duration: .3,
    opacity: 1,
    visibility: "visible"
  })
  .to(".form-block__close", {
    duration: .3,
    opacity: 1,
    visibility: "visible"
  })
  .to(".form-block__content", {
    duration: .5,
    transform: "translateY(0)"
  })
// Анимация появления формы

// Анимация появления скрытого меню в хеадере
let headerMenuGreenshockAnimation = gsap.timeline({
  paused: true
})

headerMenuGreenshockAnimation
  .to(".header-menu", {
    duration: .3,
    opacity: 1,
    visibility: "visible"
  })
  .to(".header-menu__close", {
    duration: .3,
    opacity: 1,
    visibility: "visible"
  })
  .to(".header-menu__content", {
    duration: .5,
    transform: "translateX(0)"
  })
// Анимация появления скрытого меню в хеадере

document.addEventListener("mouseover", function (e) {

  const elementTarget = e.target; // Элемент принимающий на сетя таргет

  // Выпадающий список
  if (document.body.clientWidth >= 991) {
    if (elementTarget.closest(".init-show-list")) {
      elementTarget.closest(".init-show-list").classList.add("init-show-list-active")
    }
    if (!elementTarget.closest(".init-show-list-active")) {
      document.querySelectorAll(".init-show-list").forEach(function (initShow) {
        initShow.classList.remove("init-show-list-active")
      })
    }
  }
  // Выпадающий список
  // Форма инпуты
  if (elementTarget.closest(".input-tel")) {
    elementTarget.closest(".input-tel").setAttribute("placeholder", "+7-(999)-999-99-99")
  }
  if (!elementTarget.closest(".input-tel")) {
    document.querySelector(".input-tel").setAttribute("placeholder", "Телефон")
  }
  // Форма инпуты

  // if()

})

function timerInit() {
  function timerRemove() {
    document.querySelector(".timer").remove()
  }
  let timerRemoveFun = setInterval(timerRemove, 10000, );

  function timerCreate() {
    const createTimer = `<svg class="timer" width="24" height="24" viewBox="0 0 24 24">
    <circle class="path" cx="4" cy="12" r="10" transform="rotate(-90 8 8)"
    stroke-width="1px" stroke="#ff862f" fill="transparent"></circle>
    </svg>`;
    document.querySelector(".hero-button-next").insertAdjacentHTML("beforeend", createTimer)
  }
  let timerCreateFun = setInterval(timerCreate, 11000, );
}

// Калькулятор

// Стоимость автомобиля

document.querySelector(".cost-input").addEventListener("change", function () {
  if (document.querySelector(".cost-input").value < 1000000) {
    document.querySelector(".cost-input").value = 1000000
  }
  document.querySelector(".installment-symm-input").value = Math.round((document.querySelector(".installment-input").value / 100) * document.querySelector(".cost-input").value)

  // Ежемесячный платеж

  createMonthlyPayment()

  // Ежемесячный платеж

  // Сумма договора лизинга

  createAmountDeal()

  // Сумма договора лизинга
})

// Стоимость автомобиля

// Функция ежемесячный платеж

  function createMonthlyPayment() {
    document.querySelector(".calculator-form__amount").innerHTML = Math.round((Number(document.querySelector(".cost-input").value) - Number(document.querySelector(".installment-symm-input").value)) / Number(document.querySelector(".term-input").value)) + " ₽"
  }

// Функция ежемесячный платеж

// Функция сумма договора лизинга

function createAmountDeal() {
  document.querySelector(".calculator-form__payment").innerHTML = Math.round(Number(document.querySelector(".installment-symm-input").value) + (parseInt(document.querySelector(".calculator-form__amount").innerText) * Number(document.querySelector(".term-input").value))) + " ₽";

  if (parseInt(document.querySelector(".calculator-form__payment").innerHTML) < document.querySelector(".cost-input").value || parseInt(document.querySelector(".calculator-form__payment").innerHTML) > document.querySelector(".cost-input").value) {
    document.querySelector(".calculator-form__payment").innerHTML = document.querySelector(".cost-input").value + " ₽";
  }
}

// Функция сумма договора лизинга

// Калькулятор

document.addEventListener("click", function (e) {

  const elementTarget = e.target; // Элемент принимающий на сетя таргет

  // Бургер

  if (elementTarget.closest(".okay__exit")) {
    document.querySelector(".okay").classList.remove("okay-visible")
  }
  if (elementTarget.closest(".okay")) {
    document.querySelector(".okay").classList.remove("okay-visible")
  }
  const menu = document.querySelector(".header-menu");

  if (elementTarget.closest(".burger")) {
    document.body.style.overflow = "hidden";
    headerMenuGreenshockAnimation.timeScale(1).play()
  }

  if (elementTarget.closest(".header-menu__exit")) {
    document.body.style.overflow = "";
    headerMenuGreenshockAnimation.timeScale(2).reverse()
  }
  if (elementTarget.closest(".header-menu__close")) {
    document.body.style.overflow = "";
    headerMenuGreenshockAnimation.timeScale(2).reverse()
  }
  if (elementTarget.closest(".show-list__link")) {
    document.body.style.overflow = "";
    headerMenuGreenshockAnimation.timeScale(2).reverse()
  }
  if (elementTarget.closest(".init-form")) {
    document.body.style.overflow = "";
    headerMenuGreenshockAnimation.timeScale(2).reverse()
  }
  if (elementTarget.closest(".nav__link")) {
    document.body.style.overflow = "";
    headerMenuGreenshockAnimation.timeScale(2).reverse()
  }
  // Бургер

  // Слайдер кнопки disabled , loading

  if (elementTarget.closest(".init-disabled")) {
    elementTarget.closest(".init-disabled").classList.add("disabled")
  }
  if (elementTarget.closest(".init-loading")) {
    elementTarget.closest(".init-loading").classList.add("loading")
  }
  // Слайдер кнопки disabled , loading

  // Вызывание формы

  if (elementTarget.closest(".init-form")) {
    document.body.style.overflow = "hidden";
    formGreenshockAnimation.timeScale(1).play()
  }
  if (elementTarget.closest(".form-block__close")) {
    document.body.style.overflow = "";
    formGreenshockAnimation.timeScale(2).reverse()
  }
  if (elementTarget.closest(".form-block__exit")) {
    document.body.style.overflow = "";
    formGreenshockAnimation.timeScale(2).reverse()
  }
  if (elementTarget.closest(".form-block-form__button")) {
    function checkedErrorValidateForm() {
      if (document.querySelectorAll(".js-validate-error-label").length == 0) {
        document.body.style.overflow = "";
        formGreenshockAnimation.timeScale(2).reverse()
        document.querySelectorAll(".form-block-form__label").forEach(function (e) {
          e.classList.remove("form-label-done")
        })
        document.querySelector(".form-block-form__button").classList.add("disabled")
      }
    }
    setTimeout(checkedErrorValidateForm, 500);

  }

  // Вызывание формы

})

// Дается класс хеадеру при скроле

const header = document.querySelector(".header");
const headerContent = document.querySelector(".header__content")

document.addEventListener("scroll", function () {
  let checkingHeight = Math.floor(scrollY);

  if (checkingHeight >= header.clientHeight) {
    header.classList.add("header-scroll")
    header.style.minHeight = `${headerContent.clientHeight}px`;
  } else {
    header.classList.remove("header-scroll")
    header.style.minHeight = "";
  }
})

// Дается класс хеадеру при скроле

// Форма

document.querySelector(".input-name").addEventListener("focus", function () {
  document.querySelector(".label-name").classList.add("form-label-interaction");
})

document.querySelector(".input-name").addEventListener("focusout", function () {
  document.querySelector(".label-name").classList.remove("form-label-interaction");
})

document.querySelector(".input-tel").addEventListener("focus", function () {
  document.querySelector(".label-tel").classList.add("form-label-interaction");
  document.querySelector(".input-tel").setAttribute("placeholder", "+7-(999)-999-99-99")
})

document.querySelector(".input-tel").addEventListener("focusout", function () {
  document.querySelector(".label-tel").classList.remove("form-label-interaction");
  document.querySelector(".input-tel").setAttribute("placeholder", "Телефон")
})

// Форма

// Форма done
const inputName = document.querySelector(".input-name");
let banNumber = /[0-9]/g;
let banEnglishLetter = /[A-Za-zA]/g;
inputName.oninput = function () {
  this.value = this.value.replace(banNumber, "")
  this.value = this.value.replace(banEnglishLetter, "")
}
inputName.addEventListener("change", function () {
  let length = inputName.value.length
  if (length >= 0) {
    document.querySelector(".label-name").classList.add("form-label-done");
  } else {
    document.querySelector(".label-name").classList.remove("form-label-done");
  }
  if (document.querySelectorAll(".form-label-done").length == 2) {
    document.querySelector(".form-block-form__button").classList.remove("disabled")
  }
})

document.querySelector(".input-tel").addEventListener("change", function () {
  if ((document.querySelector(".input-tel").value.indexOf('_') == -1) && document.querySelector(".input-tel").value != 0) {
    document.querySelector(".label-tel").classList.add("form-label-done");
  } else {
    document.querySelector(".label-tel").classList.remove("form-label-done");
  }
  if (document.querySelectorAll(".form-label-done").length == 2) {
    document.querySelector(".form-block-form__button").classList.remove("disabled")
  }
})

// Форма done


// Запрос на сервер при отправке формы   
const form = document.querySelector(".calculator-form");

const requestUrl = "https://jsonplaceholder.typicode.com/users"; // Для проверки работает всё или нет, выступает в качестве сервера

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json',
  };

  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  }).then(response => {
    return response.json()
  })

}

document.querySelector(".calculator-form__button").addEventListener("click", function (e) {
  e.preventDefault()
  const body = {
    carCost: form.querySelector(".cost-input").value + " ₽",
    anInitialFee: form.querySelector(".installment-symm-input").value + " ₽",
    leasingTerm: form.querySelector(".term-input").value,
    amountOfTheLeaseAgreement: form.querySelector(".calculator-form__payment").innerHTML,
    monthlyPaymentFrom: form.querySelector(".calculator-form__amount").innerHTML,
  }
  sendRequest("POST", requestUrl, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))
})

// Запрос на сервер при отправке формы 

  // Калькулятор
// Стоимость
const costRangeSlider = document.querySelector(".cost-range");

const installmentRangeSlider = document.querySelector(".installment-range");

const termRangeSlider = document.querySelector(".term-range");

noUiSlider.create(costRangeSlider, {
  start: [0],
  animationDuration: 100,
  connect: [true,true],
  step: 1,
  handleAttributes: [{
      'aria-label': 'уменьшить цену'
    },
    {
      'aria-label': 'повысить цену'
    },
  ],
  behaviour: 'tap',
  decimals: 0,
  range: {
    'min': 1000000,
    'max': 6000000,
  }
});

const costInput = document.querySelector(".cost-input");

costRangeSlider.noUiSlider.on('update', function (values, handle) {
  costInput.value = Math.round(values[handle]);

  // Ежемесячный платеж

  createMonthlyPayment()

  // Ежемесячный платеж

  // Сумма договора лизинга

  createAmountDeal()

  // Сумма договора лизинга
});

const setRangeSliderCost = (i, value) => {
  let arr = [null, null]
  arr[i] = value;
  costRangeSlider.noUiSlider.set(arr)
}

costInput.addEventListener('change', function () {
  costRangeSlider.noUiSlider.set(this.value);
});
// Стоимость

// Взнос

noUiSlider.create(installmentRangeSlider, {
  start: [0],
  animationDuration: 100,
  connect: [true,true],
  step: 1,
  handleAttributes: [{
      'aria-label': 'уменьшить цену'
    },
    {
      'aria-label': 'повысить цену'
    },
  ],
  behaviour: 'tap',
  decimals: 0,
  range: {
    'min': 10,
    'max': 60,
  }
});

const installmentInput = document.querySelector(".installment-input");

installmentRangeSlider.noUiSlider.on('update', function (values, handle) {
  installmentInput.value = Math.round(values[handle]);
  if (installmentInput.value == 10) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.10)
  } else if (installmentInput.value == 11) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.11)
  } else if (installmentInput.value == 12) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.12)
  } else if (installmentInput.value == 13) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.13)
  } else if (installmentInput.value == 14) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.14)
  } else if (installmentInput.value == 15) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.15)
  } else if (installmentInput.value == 16) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.16)
  } else if (installmentInput.value == 17) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.17)
  } else if (installmentInput.value == 18) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.18)
  } else if (installmentInput.value == 19) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.19)
  } else if (installmentInput.value == 20) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.20)
  } else if (installmentInput.value == 21) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.21)
  } else if (installmentInput.value == 22) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.22)
  } else if (installmentInput.value == 23) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.23)
  } else if (installmentInput.value == 24) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.24)
  } else if (installmentInput.value == 25) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.25)
  } else if (installmentInput.value == 26) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.26)
  } else if (installmentInput.value == 27) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.27)
  } else if (installmentInput.value == 28) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.28)
  } else if (installmentInput.value == 29) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.29)
  } else if (installmentInput.value == 30) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.30)
  } else if (installmentInput.value == 31) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.31)
  } else if (installmentInput.value == 32) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.32)
  } else if (installmentInput.value == 33) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.33)
  } else if (installmentInput.value == 34) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.34)
  } else if (installmentInput.value == 35) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.35)
  } else if (installmentInput.value == 36) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.36)
  } else if (installmentInput.value == 37) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.37)
  } else if (installmentInput.value == 38) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.38)
  } else if (installmentInput.value == 39) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.39)
  } else if (installmentInput.value == 40) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.40)
  } else if (installmentInput.value == 41) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.41)
  } else if (installmentInput.value == 42) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.42)
  } else if (installmentInput.value == 43) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.43)
  } else if (installmentInput.value == 44) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.44)
  } else if (installmentInput.value == 45) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.45)
  } else if (installmentInput.value == 46) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.46)
  } else if (installmentInput.value == 47) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.47)
  } else if (installmentInput.value == 48) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.48)
  } else if (installmentInput.value == 49) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.49)
  } else if (installmentInput.value == 50) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.50)
  } else if (installmentInput.value == 51) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.51)
  } else if (installmentInput.value == 52) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.52)
  } else if (installmentInput.value == 53) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.53)
  } else if (installmentInput.value == 54) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.54)
  } else if (installmentInput.value == 55) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.55)
  } else if (installmentInput.value == 56) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.56)
  } else if (installmentInput.value == 57) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.57)
  } else if (installmentInput.value == 58) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.58)
  } else if (installmentInput.value == 59) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.59)
  } else if (installmentInput.value == 60) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.60)
  }

  // Ежемесячный платеж

  createMonthlyPayment()

  // Ежемесячный платеж

  // Сумма договора лизинга

  createAmountDeal()

  // Сумма договора лизинга
});

const setRangeSliderInstallment = (i, value) => {
  let arr = [null, null]
  arr[i] = value;
  installmentRangeSlider.noUiSlider.set(arr)
}

installmentInput.addEventListener('change', function () {
  installmentRangeSlider.noUiSlider.set(this.value);
});

// Взнос

// Срок

noUiSlider.create(termRangeSlider, {
  start: [0],
  animationDuration: 100,
  connect: [true,true],
  step: 1,
  handleAttributes: [{
      'aria-label': 'уменьшить цену'
    },
    {
      'aria-label': 'повысить цену'
    },
  ],
  behaviour: 'tap',
  decimals: 0,
  range: {
    'min': 1,
    'max': 60,
  }
});

const termInput = document.querySelector(".term-input");

termRangeSlider.noUiSlider.on('update', function (values, handle) {
  termInput.value = Math.round(values[handle]);

  // Ежемесячный платеж

  createMonthlyPayment()

  // Ежемесячный платеж

  // Сумма договора лизинга

  createAmountDeal()

  // Сумма договора лизинга
});

const setRangeSliderTerm = (i, value) => {
  let arr = [null, null]
  arr[i] = value;
  termRangeSlider.noUiSlider.set(arr)
}

termInput.addEventListener('change', function () {
  termRangeSlider.noUiSlider.set(this.value);
});
// Срок

// Мин - макс у инпута

const inp = document.querySelectorAll('input[type=number]');
Array.from(inp).forEach(input => {
  const min = +input.min;
  const max = +input.max;

  input.addEventListener('input', (e) => {
    const value = input.value;
    if (value > max) {
      input.value = max
    } else if (value < min) {
      input.value = min
    }
  })
});

// Мин - макс у инпута

    // Слайдер
const heroSwiperInit = document.querySelector(".hero-swiper");
if (heroSwiperInit) {
  const heroSwiper = new Swiper('.hero-swiper', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 10,
    direction: 'horizontal',
    effect: "fade",
    speed: 500, // Автовоспроизведение
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
      stopOnLastSlide: true,
      waitForTransition: false,
    },
    pagination: {
      el: '.hero-pagination',
    },
    navigation: {
      nextEl: '.hero-button-next',
      prevEl: '.hero-button-prev',
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
        pagination: {
          clickable: true,
        }
      },
      992: {
        allowTouchMove: false,
        pagination: {
          clickable: false,
        }
      }
    },
    on: {
      slideNextTransitionStart() {
        const timer = `<svg class="timer" width="24" height="24" viewBox="0 0 24 24">
        <circle cx="4" cy="12" r="10" transform="rotate(-90 8 8)"
        stroke-width="1px" stroke="#ff862f" fill="transparent"></circle>
        </svg>`;
        if (document.querySelector(".timer")) {
          document.querySelector(".timer").remove()
        }
        document.querySelector(".timer-active").insertAdjacentHTML("beforeend", timer)

        const swiperSlideActive = document.querySelector(".hero-swiper__slide.swiper-slide-active");
        if (!swiperSlideActive.nextElementSibling) {
          document.querySelector(".hero-button-next").classList.add("timer-disabled")
        }
      },
      slidePrevTransitionStart() {
        const timer = `<svg class="timer" width="24" height="24" viewBox="0 0 24 24">
        <circle cx="4" cy="12" r="10" transform="rotate(-90 8 8)"
        stroke-width="1px" stroke="#ff862f" fill="transparent"></circle>
        </svg>`;
        if (document.querySelector(".timer")) {
          document.querySelector(".timer").remove()
        }
        document.querySelector(".timer-active").insertAdjacentHTML("beforeend", timer)
        const swiperSlideActive = document.querySelector(".hero-swiper__slide.swiper-slide-active");
        if (swiperSlideActive.nextElementSibling) {
          document.querySelector(".hero-button-next").classList.remove("timer-disabled")
        }
      },
      afterInit() {
        const timer = `<svg class="timer" width="24" height="24" viewBox="0 0 24 24">
        <circle cx="4" cy="12" r="10" transform="rotate(-90 8 8)"
        stroke-width="1px" stroke="#ff862f" fill="transparent"></circle>
        </svg>`
        document.querySelector(".timer-active").insertAdjacentHTML("beforeend", timer)
      },
    }
  });
}

// Слайдер

    // Валидация и маскирование
const initForm = document.querySelector(".form-block-form");
if (initForm) {
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask({
    "mask": "+7-(999)-999-99-99",
  });
  im.mask(selector);
  new JustValidate('.form-block-form', {
    colorWrong: "#D53234",
    rules: {
      name: {
        required: true,
        minLength: 0,
        strength: {
          custom: '[а-яА-Я\d]',
        },
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        }
      },
    },
    messages: {
      name: {
        required: 'Введите ваше имя',
        strength: 'Недопустимый формат',
      },
      tel: 'Введите ваш телефон'
    },

  });
}

// Валидация и маскирование

    // Плавное перемещение по якорям

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});

// Плавное перемещение по якорям

    // data-tel-input добавить этот атрибут к инпуту с типом tel 
var phoneInputs = document.querySelectorAll('input[data-tel-input]');

var getInputNumbersValue = function (input) {
  // Return stripped input value — just numbers
  return input.value.replace(/\D/g, '');
}

var onPhonePaste = function (e) {
  var input = e.target,
    inputNumbersValue = getInputNumbersValue(input);
  var pasted = e.clipboardData || window.clipboardData;
  if (pasted) {
    var pastedText = pasted.getData('Text');
    if (/\D/g.test(pastedText)) {
      // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
      // formatting will be in onPhoneInput handler
      input.value = inputNumbersValue;
      return;
    }
  }
}

var onPhoneInput = function (e) {
  var input = e.target,
    inputNumbersValue = getInputNumbersValue(input),
    selectionStart = input.selectionStart,
    formattedInputValue = "";

  if (!inputNumbersValue) {
    return input.value = "";
  }

  if (input.value.length != selectionStart) {
    // Editing in the middle of input, not last symbol
    if (e.data && /\D/g.test(e.data)) {
      // Attempt to input non-numeric symbol
      input.value = inputNumbersValue;
    }
    return;
  }

  if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
    if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
    var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
    formattedInputValue = input.value = firstSymbols + " ";
    if (inputNumbersValue.length > 1) {
      formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
    }
  } else {
    formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
  }
  input.value = formattedInputValue;
}
var onPhoneKeyDown = function (e) {
  // Clear input after remove last symbol
  var inputValue = e.target.value.replace(/\D/g, '');
  if (e.keyCode == 8 && inputValue.length == 1) {
    e.target.value = "";
  }
}
for (var phoneInput of phoneInputs) {
  phoneInput.addEventListener('keydown', onPhoneKeyDown);
  phoneInput.addEventListener('input', onPhoneInput, false);
  phoneInput.addEventListener('paste', onPhonePaste, false);
}
    
}