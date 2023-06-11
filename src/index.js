// import './libs./swiper-bundle.min.scss';
import './style.scss';
import Swiper, { Navigation, Pagination } from 'swiper';



import lozad from 'lozad'
const observer = lozad();
observer.observe();


    
document.addEventListener("DOMContentLoaded", function(event) {
  var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  let dropdown = document.querySelector('.dropdown-first');
  let trigger = dropdown.querySelector('.header__link-trigger');
  let header = document.querySelector('.header');

  trigger.addEventListener('mouseenter', (event)=> {
    // dropdown.classList.toggle('dropdown-first--active');
    if (dropdown.classList.contains('dropdown-first--active')){
      dropdown.classList.remove('dropdown-first--active');
      
    }
    else {
      dropdown.classList.add('dropdown-first--active');
      header.style.backgroundColor="#fff";
      headerColors();
    }

  });

  // trigger.addEventListener('mouseleave', (event)=> {
  //   header.style.backgroundColor="#9E77ED";
  //   dropdown.classList.remove('dropdown-first--active');
  // });



  // function headerColors(){
  //   let colorChange = document.querySelectorAll(".header__link-trigger");
  //   colorChange.forEach(event => {
  //     event.style.color="black";
  //   })
  // }






});
 