let bannerSlider = new Swiper('.banners-slider', {
  spaceBetween:32,
  pagination: {
      el: '.banners-slider .swiper-pagination'
  }
})
let cardSliders = new Swiper('.card__gallery', {
  loop:true,
  spaceBetween:0,
  pagination: {
      el: '.swiper-pagination'
  }
})