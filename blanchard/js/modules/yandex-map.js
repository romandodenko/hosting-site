"use strict";

export function contactsMap() {
  let flag = 0;

  window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;
    let mapOffset = this.document.querySelector("#map").offsetTop;
    if (scrollY >= mapOffset - 1000 && flag == 0) {
      ymaps.ready(init);

      function init() {
        const myMap = new ymaps.Map(
          "map", {
            center: [55.759861, 37.610557],
            zoom: 14,
            controls: ['geolocationControl', 'zoomControl']
          }, {
            suppressMapOpenBlock: true,
            geolocationControlSize: "large",
            geolocationControlPosition: {
              top: "330px",
              right: "20px"
            },
            geolocationControlFloat: 'none',
            zoomControlSize: "small",
            zoomControlFloat: "none",
            zoomControlPosition: {
              top: "250px",
              right: "20px"
            }
          }
        );

        var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
          iconLayout: 'default#image',
          iconImageHref: '../../img/svg/marker-map.svg',
          iconImageSize: [20, 20],
        });

        myMap.geoObjects.add(myPlacemark);
      }
      flag = 1;
    }

  })
}