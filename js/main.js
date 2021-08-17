// const swiper = new Swiper('.swiper-container', {
//   // Optional parameters
// //   direction: 'vertical',
//   loop: true,

  // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

  // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

 var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        thumbs: {
          swiper: swiper,
        },
      });
const menuBtn = document.querySelector('.menu-button'),
    navbarPanel = document.querySelector('.navbar-panel'),
    closeMenuBtn = document.querySelector('.close-menu');


menuBtn.addEventListener('click', () => {
    navbarPanel.classList.add('is-open');
})
closeMenuBtn.addEventListener('click', () => {
    navbarPanel.classList.remove('is-open');
})
