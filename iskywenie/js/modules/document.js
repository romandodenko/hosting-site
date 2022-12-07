document.querySelector(".burger-init").addEventListener("click", function() {
  document.querySelector(".menu").classList.add("menu-active")
  document.body.style.overflow = "hidden";
})
document.querySelector(".menu__exit").addEventListener("click", function() {
  document.querySelector(".menu").classList.remove("menu-active")
  document.body.style.overflow = "";
})



    // Капелька
    
    function getRandom(min, max){
      return Math.random() * (max - min) + min;
    }

    var isSafari = /constructor/i.test(window.HTMLElement);
    var isFF = !!navigator.userAgent.match(/firefox/i);

    if (isSafari) {
      document.getElementsByTagName('html')[0].classList.add('safari');
    }
        // Инициализация капельки
    document.querySelector('.init-btn-1').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-1 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-1 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-1 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-2').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-2 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-2 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-2 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-3').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-3 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-3 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-3 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-4').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-4 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-4 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-4 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-5').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-5 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-5 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-5 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-6').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-6 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-6 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-6 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-7').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-7 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-7 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-7 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-8').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-8 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-8 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-8 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-9').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-9 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-9 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-9 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-10').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-10 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-10 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-10 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-11').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-11 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-11 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-11 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-12').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-12 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-12 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-12 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-13').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-13 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-13 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-13 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-14').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-14 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-14 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-14 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-15').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-15 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-15 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-15 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-16').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-16 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-16 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-16 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
        document.querySelector('.init-btn-17').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-17 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-17 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-17 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });    
    document.querySelector('.init-btn-18').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-18 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-18 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-18 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-19').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-19 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-19 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-19 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-20').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-20 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-20 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-20 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-21').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-21 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-21 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-21 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-22').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-22 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-22 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-22 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-23').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-23 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-23 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-23 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
    document.querySelector('.init-btn-24').addEventListener('mouseover', function(e) {
      TweenLite.set(document.querySelector('#filter-item-24 feImage'), { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(document.querySelector('#filter-item-24 feImage'), 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(feDisplacementMap1 = document.querySelector('#filter-item-24 feDisplacementMap'), 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });

    // Капелька