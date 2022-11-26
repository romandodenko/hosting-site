"use strict";

export function contactsMap() {
  document.addEventListener("DOMContentLoaded", function () {


    const mapClass = document.querySelector(".contacts__map")
    if (mapClass) {
      ymaps.ready(init);

      function init() {
        const myMap = new ymaps.Map(
          "map", {
            center: [59.947477353530964, 30.318436256741137],
            zoom: 14,
          },
        );
        myMap.controls.remove('geolocationControl'); // удаляем геолокацию
        myMap.controls.remove('searchControl'); // удаляем поиск
        myMap.controls.remove('trafficControl'); // удаляем контроль трафика
        myMap.controls.remove('typeSelector'); // удаляем тип
        myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
        myMap.controls.remove('rulerControl'); // удаляем контрол правил
      }
    }


  })
}