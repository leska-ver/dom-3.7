document.addEventListener('DOMContentLoaded' , function () {

  
  let tl = gsap.timeline();

  tl.from('.menu', {opacity: 0, duration: 1})

    /*Text анимации(появление)*/
    .from('.hero__title', {opacity: 0, y: 100, duration: 0.7})
    .from('.hero__btn', {opacity: 0, y: 100, duration: 0.7}, "-=0.5")
    .from('.hero__descr', {opacity: 0, y: 100, duration: 0.7})    
    /*Фото анимации(появление)*/
    .from('.photo1', {opacity: 0, duration: .5})
    .from('.photo2', {opacity: 0, duration: 0.3})
    .from('.photo3', {opacity: 0, duration: 0.3})
    .from('.photos__author', {opacity: 0, duration: 0.7})



}) 