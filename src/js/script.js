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
let pageHeadBanners = new Swiper('.page-head__banners', {
  loop:true,
  spaceBetween:0,
  pagination: {
      el: '.swiper-pagination'
  }
})
let productGallery = new Swiper('.product__gallery', {
  loop:true,
  spaceBetween:0,
  pagination: {
      el: '.swiper-pagination'
  }
})
let itemsSlider = new Swiper('.items__slider', {
  loop:true,
  spaceBetween:20,
  slidesPerView: 6,
  pagination: {
      el: '.swiper-pagination'
  },
  navigation: {
      nextEl: '.items__arrows .swiper-button-next',
      prevEl: '.items__arrows .swiper-button-prev',
  },
})
let clientsSlider = new Swiper('.clients__slider', {
  loop:true,
  spaceBetween:20,
  slidesPerView: 6,
  pagination: {
      el: '.swiper-pagination'
  },
  navigation: {
      nextEl: '.clients__arrows .swiper-button-next',
      prevEl: '.clients__arrows .swiper-button-prev',
  },
})