import './libs/swiper-bundle.min.scss';
import './style.scss';
import Swiper, { Navigation, Pagination } from 'swiper';

import lozad from 'lozad'
const observer = lozad();
observer.observe();


    
document.addEventListener("DOMContentLoaded", function(event) {
  var swiper1 = new Swiper(".swiper1", {
    modules: [Navigation, Pagination],
    mousewheelControl: true,
    speed: 600,
    // spaceBetween: 16,
    // slidesPerView: 3.5,
        breakpoints: {  
          992: {
            slidesPerView: 3.5,
            spaceBetween: 16,
          },
          776: {
            slidesPerView: 2.5,
            spaceBetween: 20,},
          0: {
            slidesPerView: 1,
            spaceBetween: 20, },
        },
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
      if (!header.classList.contains('header--fixed')) {
          header.classList.remove('header--white');
      }

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
    direction: getDirection(),
    on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 10,
    autoHeight: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints: {
        992: {
            direction: "vertical",
            slidesPerView: 4,
            spaceBetween: 16,
            pagination: {
                el: ".swiper-pagination2",
                clickable: true,
                dynamicBullets: true,
            },

        },
          0: {
            direction: "horizontal",
            slidesPerView: 4,
            spaceBetween: 16,
            pagination: {
              el: ".swiper-pagination2",
              clickable: true,
              dynamicBullets: true,
            },

          },

        },
 });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    }

  var swiper3 = new Swiper(".swiper3", {
    modules: [Navigation, Pagination],
    // spaceBetween: 30,
    // slidesPerView: 4,
    // pagination: {
    //   el: ".swiper-pagination3",
    //   clickable: true,
    //   // dynamicBullets: true,
    // },
    breakpoints: {  
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      776: {
        slidesPerView: 2.3,
        spaceBetween: 10,},
      0: {
        slidesPerView: 1,
        spaceBetween: 30, },
    },
 });


let burger = document.querySelector('.burger');
let topNav = document.querySelector('.header__nav');

if (burger && topNav) {
  burger.addEventListener('click', function () {
    this.classList.toggle('open');
    topNav.classList.toggle('open');
  }
  )
}

// window.addEventListener('scroll', (event) => {
//   // lastKnownScrollPosition = window.scrollY;
//   header.classList.toggle('fixed');
//   header.classList.toggle('fixed');
// })

// window.onscroll = () => {
//   header.classList.toggle('fixed');
//   // header.classList.toggle('fixed');
// }




window.addEventListener ('scroll',() => {
    let posTop = window.pageYOffset;
    if(posTop < 1) {
        header.classList.remove('header--white');
        header.classList.remove('header--fixed');
    } else  {
        header.classList.add('header--white');
        header.classList.add('header--fixed');
    }

})
    console.log(window.screen.width);

    // if (window.screen.width < 768) {
    //     console.log(window.innerWidth);
    //     let swiperCategories = new Swiper(".swiper-categories", {
    //         grid: {
    //             rows: 2,
    //         },
    //         pagination: {
    //             el: ".swiper-pagination-categories",
    //         },
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     });
    // } else {

    // }

    let form = document.querySelector('.form');

    form.addEventListener('submit', function (e){

       let input = form.querySelector('input');
       let inputVal = input.value;

       if (inputVal.length > 0) {
           input.classList.remove('required');

       } else {
           input.classList.add('required');
       }
        e.preventDefault();
    });


});
 