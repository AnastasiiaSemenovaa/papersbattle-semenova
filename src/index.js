import './libs/swiper-bundle.min.scss';
import './style.scss';
import Swiper, { Navigation, Pagination } from 'swiper';

import lozad from 'lozad'
const observer = lozad();
observer.observe();


    
document.addEventListener("DOMContentLoaded", function(event) {
  var swiper1 = new Swiper(".swiper1", {
    modules: [Navigation, Pagination],
    // direction: "horizontal",
    // mousewheel: true,
    mousewheelControl: true,
    speed: 600,
    spaceBetween: 16,
    slidesPerView: 3.5,
    // pagination: {
    //   el: ".swiper-pagination1",
    //   clickable: true,
    // },
  });


  let menuHasChild = document.querySelectorAll('.header__haschild');
  let header = document.querySelector('.header');
  let menuDrop = document.querySelector('.menu-drop');
  let menuDropContent = document.querySelectorAll('.menu-drop__content');

  menuHasChild.forEach(element => {
    element.addEventListener('mouseover', (event)=> {
      menuOpen(element)
    });
  })

  header.addEventListener('mouseleave', (event)=> {
    menuClose()
  });


  function menuOpen(element) {

    menuHasChild.forEach(event => {
      event.classList.remove('active');
    })
    menuDropContent.forEach(event => {
      event.classList.remove('active');
    })

    header.classList.add('header--white');
    menuDrop.classList.add('open');
    element.classList.add('active');

    let id = element.querySelector('a').getAttribute('href');
    document.querySelector(id).classList.add('active');

  }

  function menuClose() {

    header.classList.remove('header--white');
    menuDrop.classList.remove('open');

    menuDropContent.forEach(event => {
      event.classList.remove('active');
    })

    menuHasChild.forEach(event => {
      event.classList.remove('active');
    })

  }

 let swiperGuestbook = new Swiper(".swiper-guestbook", {
    modules: [Navigation, Pagination],
    direction: "vertical",
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    autoHeight: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
      dynamicBullets: true,
    },
 });



  var swiper3 = new Swiper(".swiper3", {
    modules: [Navigation, Pagination],
    spaceBetween: 20,
    slidesPerView: 3,
    pagination: {
      el: ".swiper-pagination3",
      clickable: true,
      dynamicBullets: true,
    },
 });



});
 