"use strict";

export function contactsMap() {
  document.addEventListener("DOMContentLoaded", function () {


    const mapClass = document.querySelector(".contacts__map")
    if (mapClass) {
      ymaps.ready(init);

      function init() {
        const myMap = new ymaps.Map(
          "map", {
            center: [55.345002554189634,86.07912534358597],
            zoom: 17,
          },
        );
        var myPlacemark = new ymaps.Placemark([55.345002554189634,86.07912534358597], {}, {
            iconLayout: 'default#image',
            iconImageHref: '../img/svg/marker-map.svg',
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
  })
}