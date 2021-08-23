document.addEventListener('DOMContentLoaded' , function () {

	// burger
  const burgerTimeline = gsap.timeline({paused: true});
  const burger = document.querySelector('#burger');
  const close = document.querySelector('.close');

  burgerTimeline
    .fromTo('.menu', {display: 'none', opacity: 0, transform: 'translateY(100px)'}, {display: 'block', opacity: 1, transform: 'translateY(0)', duration: 1.5})
    .fromTo('.menu__top', {opacity: 0, transform: 'translateY(calc(-100% - 100px))'}, {opacity: 1, transform: 'translateY(0)', duration: 1.5}, "<")
    .fromTo('.close', {opacity: 0}, {opacity: 1, delay: .7, duration: .3}, "<" )
    .fromTo('.nav', {opacity: 0, y: 20}, {opacity: 1, y: 0, delay: .5, duration: .7}, ">")
    .fromTo('.social, .menu__right', {opacity: 0, y: 20}, {opacity: 1, y: 0, delay: .5, duration: .7}, "<")

  burger.addEventListener('click', () => {
    burgerTimeline.play();
  });

  close.addEventListener('click', () => {
    burgerTimeline.reverse();
  });





})  