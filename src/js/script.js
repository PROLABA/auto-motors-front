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
let itemsSlider = new Swiper('.items_first-type .items__slider', {
  loop:true,
  spaceBetween:20,
  slidesPerView: 6,
  pagination: {
      el: '.items_first-type .swiper-pagination'
  },
  navigation: {
      nextEl: '.items_first-type .items__arrows .swiper-button-next',
      prevEl: '.items_first-type .items__arrows .swiper-button-prev',
  },
})
let itemsSliderSecond = new Swiper('.items_second-type .items__slider', {
  loop:true,
  spaceBetween:20,
  slidesPerView: 5,
  pagination: {
      el: '.items_second-type .swiper-pagination'
  },
  navigation: {
      nextEl: '.items_second-type .items__arrows .swiper-button-next',
      prevEl: '.items_second-type .items__arrows .swiper-button-prev',
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

var detailGalleryThumb = new Swiper(".detail__thumbs-slider", {
  spaceBetween: 10,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesProgress: true,
  direction: "vertical",
});
var detailGallery = new Swiper(".detail__pic-slider", {
spaceBetween: 10,
thumbs: {
  swiper: detailGalleryThumb,
},
});