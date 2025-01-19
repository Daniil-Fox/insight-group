import { Swiper } from "swiper";
import { Navigation, Pagination } from "swiper/modules";

Swiper.use([Navigation, Pagination]);

new Swiper(".complex__slider", {
  slidesPerView: 5,
  spaceBetween: 25,
  loop: true,
  speed: 400,
  navigation: {
    prevEl: ".complex-prev",
    nextEl: ".complex-next",
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 5,
    },
  },
});

new Swiper(".proj__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".proj__pagination",
  },
});
