"use strict"

export function tooltip() {
  document.addEventListener("DOMContentLoaded", function () {
    const fire = document.querySelectorAll(".fire");
    const newE = document.querySelectorAll(".new");
    const topTooltip = document.querySelectorAll(".top__tooltip");
    const prolongaciyaTooltip = document.querySelectorAll(".prolongaciya__tooltip");
    const creatingTooltip = document.querySelectorAll(".creating-tooltip");
    const grafikTooltip = document.querySelector(".grafik__tooltip");
    const documentRowTooltip = document.querySelectorAll(".document-row-tooltip");
    if (fire) {
      tippy(fire, {
        placement: 'auto', // Расположение
        // content: '<div class="loan__tooltip"><p class="loan__tooltip-text">Горячее предложение</p></div>', // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
        //  allowHTML: true, // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
        role: 'tooltip',
        trigger: 'mouseenter focus click', // Как срабатывает тултип, при наведение, фокусу и клике
        hideOnClick: true,
        theme: 'colorToolp', // Кастомная тема
        maxWidth: 200, // максимальная ширина тултипа
        hideOnClick: true,
        arrow: false,
      });
    }
    if (newE) {
      tippy(newE, {
        placement: 'auto', // Расположение
        //content: '<strong>Текст Текст Текст</strong>', // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
         //allowHTML: true, // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
        role: 'tooltip',
        trigger: 'mouseenter focus click', // Как срабатывает тултип, при наведение, фокусу и клике
        hideOnClick: true,
        theme: "colorToolp", // Кастомная тема
        maxWidth: 200, // максимальная ширина тултипа
        hideOnClick: true,
        arrow: false,
      });
    }
    if (topTooltip) {
      tippy(topTooltip, {
        placement: 'auto', // Расположение
        //content: '<strong>Текст Текст Текст</strong>', // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
         //allowHTML: true, // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
        role: 'tooltip',
        trigger: 'mouseenter focus click', // Как срабатывает тултип, при наведение, фокусу и клике
        hideOnClick: true,
        theme: "colorToolp2", // Кастомная тема
        maxWidth: 455, // максимальная ширина тултипа
        hideOnClick: true,
        arrow: false,
      });
    }
    if (prolongaciyaTooltip) {
      tippy(prolongaciyaTooltip, {
        placement: 'auto', // Расположение
        //content: '<strong>Текст Текст Текст</strong>', // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
         //allowHTML: true, // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
        role: 'tooltip',
        trigger: 'mouseenter focus click', // Как срабатывает тултип, при наведение, фокусу и клике
        hideOnClick: true,
        theme: "colorToolp", // Кастомная тема
        maxWidth: 260, // максимальная ширина тултипа
        hideOnClick: true,
        arrow: false,
      });
    }
    if (creatingTooltip) {
      tippy(creatingTooltip, {
        placement: 'auto', // Расположение
        //content: '<strong>Текст Текст Текст</strong>', // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
         //allowHTML: true, // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
        role: 'tooltip',
        trigger: 'mouseenter focus click', // Как срабатывает тултип, при наведение, фокусу и клике
        hideOnClick: true,
        theme: "colorToolp2", // Кастомная тема
        maxWidth: 330,
        hideOnClick: true,
        arrow: false,
      });
    }
    if (grafikTooltip) {
      tippy(grafikTooltip, {
        placement: 'auto', // Расположение
        //content: '<strong>Текст Текст Текст</strong>', // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
         //allowHTML: true, // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
        role: 'tooltip',
        trigger: 'mouseenter focus click', // Как срабатывает тултип, при наведение, фокусу и клике
        hideOnClick: true,
        theme: "colorToolp2", // Кастомная тема
        maxWidth: 390, // максимальная ширина тултипа
        hideOnClick: true,
        arrow: false,
      });
    }
    if (documentRowTooltip) {
      tippy(documentRowTooltip, {
        placement: 'auto', // Расположение
        //content: '<strong>Текст Текст Текст</strong>', // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
         //allowHTML: true, // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
        role: 'tooltip',
        trigger: 'mouseenter focus click', // Как срабатывает тултип, при наведение, фокусу и клике
        hideOnClick: true,
        theme: "colorToolp2", // Кастомная тема
        maxWidth: 300, // максимальная ширина тултипа
        hideOnClick: true,
        arrow: false,
      });
    }
  })
}

// Появление тултипа можно анимировать , в документации есть

/* <button class="tooltip" data-tippy-content="Информация">
<span>!</span>
</button> */

// .tippy-box[data-theme~='colorToolp'] {
//   font-size: 9px;
//   line-height: 14px;
//   text-align: center;
//   background-color: #000;
// }

// .tippy-box[data-theme~='colorToolp'][data-placement^='top'] > .tippy-arrow::before {
//   border-top-color: #000;
// }