function initBigSlider() {
  if (document.querySelector(".big-slider"))
    new Swiper(".big-slider", {
      centeredSlides: true,
      centeredSlidesBounds: true,
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 1000,
      loop: true,
      watchOverflow: true,
      loopAdditionalSlides: 3,
      preloadImages: true,
      autoHeight: true,
      parallax: true,
      // autoplay: {
      // 	delay: 7500,
      // 	disableOnInteraction: false,
      // },

      navigation: {
        nextEl: ".slider__swiper-button-next",
        prevEl: ".slider__swiper-button-prev",
      },
      // breakpoints: {
      // 	320: {
      // 		slidesPerView: 1,
      // 		spaceBetween: 8
      // 	},
      // 	530: {
      // 		slidesPerView: 1.1,
      // 		spaceBetween: 10
      // 	},
      // 	768: {
      // 		slidesPerView: 1.4,
      // 	},
      // 	992: {
      // 		slidesPerView: 1.4,
      // 		spaceBetween: 20
      // 	},
      // 	1268: {
      // 		slidesPerView: 1.7,
      // 		spaceBetween: 24
      // 	},
      // 	1550: {
      // 		slidesPerView: 2,
      // 		spaceBetween: 24
      // 	}
      // },
      on: {},
    });
}

// function initSlidersGenres() {
//   if (document.querySelector(".genres-slider"))
//     new Swiper(".genres-slider", {
//       slidesPerView: 6,
//       spaceBetween: 24,
//       // freeMode: true,
//       preloadImages: true,
//       navigation: {
//         nextEl: ".genres-slider__btn-next",
//         prevEl: ".genres-slider__btn-prev",
//       },
//       breakpoints: {
//         320: {
//           slidesPerView: 2.5,
//           spaceBetween: 5,
//         },
//         530: {
//           slidesPerView: 3,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 4,
//         },
//         992: {
//           // slidesPerView: 1.4,
//           spaceBetween: 20,
//         },
//         1268: {
//           // slidesPerView: 1.7,
//           spaceBetween: 24,
//         },
//         1550: {
//           slidesPerView: 6,
//           spaceBetween: 24,
//         },
//       },
//     });
// }

// function initSlidersMovies() {
//   if (document.querySelector(".movies-slider"))
//     new Swiper(".movies-slider", {
//       slidesPerView: 6,
//       // freeMode: true,
//       spaceBetween: 20,

//       preloadImages: true,
//       // watchOverflow: true,
//       navigation: {
//         // nextEl: ".genres-slider__btn-next",
//         // prevEl: ".genres-slider__btn-prev",
//       },
//     });
// }

window.addEventListener("load", function (e) {
  initBigSlider();
  //   initSlidersGenres();
  //   initSlidersMovies();
});
