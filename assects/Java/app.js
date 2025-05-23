const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  loop: true,
  autoplay: {
    delay: 3000, // har 3 seconds mein slide change hoga
    disableOnInteraction: false, // user interaction ke baad bhi autoplay chalu rahega
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 6,
    },
  },
});
