import Swiper, { Navigation, Pagination } from 'swiper';
// import './libs./swiper-bundle.min.scss';
import './style.scss';


import lozad from 'lozad'
const observer = lozad();
observer.observe();

var swiper = new Swiper(".swiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    
// document.addEventListener("DOMContentLoaded", function(event) {

// }
 