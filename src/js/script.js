function getScrollBarWidth () {
  var inner = document.createElement('p');
  inner.style.width = "100%";
  inner.style.height = "200px";

  var outer = document.createElement('div');
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild (inner);

  document.body.appendChild (outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  if (w1 == w2) w2 = outer.clientWidth;

  document.body.removeChild (outer);

  return (w1 - w2);
};


if (document.querySelector("#basket-price_observer")) {
  var observer = new IntersectionObserver(function(entries) {
    // no intersection with screen
    let el = document.querySelector("#basket-price_observer");
    let elDistanceToTop = window.scrollY + el.getBoundingClientRect().top;
    if(entries[0].intersectionRatio === 0 && window.scrollY < elDistanceToTop)
      document.querySelector(".basket__action").classList.add("container-sticky");
    // fully intersects with screen
    else if(entries[0].intersectionRatio === 1)
      document.querySelector(".basket__action").classList.remove("container-sticky");
  }, { threshold: [0,1] });
  observer.observe(document.querySelector("#basket-price_observer"));
}
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

let itemsSlider,clientsSlider;
function initDeskSliders() {
  if (document.querySelector(".items_first-type .items__slider")) {
    itemsSlider = new Swiper('.items_first-type .items__slider', {
      loop:true,
      spaceBetween:20,
      slidesPerView: 4,
      pagination: {
          el: '.items_first-type .swiper-pagination'
      },
      navigation: {
          nextEl: '.items_first-type .items__arrows .swiper-button-next',
          prevEl: '.items_first-type .items__arrows .swiper-button-prev',
      },
      breakpoints: {
        1280: {
          slidesPerView: 6,
        }
      }
    })
  }

  if (document.querySelector(".clients__slider")) {
    clientsSlider = new Swiper('.clients__slider', {
      loop:true,
      spaceBetween:20,
      slidesPerView:4,
      pagination: {
          el: '.swiper-pagination'
      },
      navigation: {
          nextEl: '.clients__arrows .swiper-button-next',
          prevEl: '.clients__arrows .swiper-button-prev',
      },
      breakpoints: {
        1280: {
          slidesPerView: 6,
        }
      }
    })
  }
}
const resizeHandlerSlider = () => {
  if (window.innerWidth < 970) {
      if (itemsSlider) {
        itemsSlider.destroy();
        itemsSlider = null
      }

      if (clientsSlider) {
        clientsSlider.destroy();
        clientsSlider = null
      }
  } else {
    if (!itemsSlider  && !clientsSlider) {
      initDeskSliders();
    }
  }
}
window.addEventListener('resize', resizeHandlerSlider)
resizeHandlerSlider();
let itemsSliderSecond = new Swiper('.items_second-type .items__slider', {
  loop:true,
  spaceBetween:12,
  slidesPerView: 2,
  pagination: {
      el: '.items_second-type .swiper-pagination'
  },
  navigation: {
      nextEl: '.items_second-type .items__arrows .swiper-button-next',
      prevEl: '.items_second-type .items__arrows .swiper-button-prev',
  },
  breakpoints: {
    970: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1280: {
      slidesPerView: 5,
    }
  }
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
pagination: {
  el: '.detail__pic-slider .swiper-pagination'
},
});
$('.nav--item-head').on('click',function(){
  $(this).closest('.nav').toggleClass('nav_opened')
})

$('.header__catalog-btn').on('click',function(){
  let body = $('body');
  let scrollBarWidth = getScrollBarWidth();
  if (body.hasClass('menu_opened')) {
    body.css('padding-right','0')
  } else {
    body.css('padding-right', scrollBarWidth + 'px')
  }
  body.toggleClass('menu_opened');
})
$('[data-popup]').click(function(){
  let idPopup = '#' + $(this).attr('data-popup');
	$.fancybox.open({
		src: idPopup,
		type: 'inline',
    touch: false
	});
});

$('.header-menu__item-title').on('click',function(){
  $(this).closest('.header-menu__item').addClass('active')
})
$('.header-menu__item-back').on('click',function(){
  $(this).closest('.header-menu__item').removeClass('active')
})
$('.header__burger').on('click',function(){
  $("body").toggleClass('menu_opened');
  $('header').toggleClass('menu_opened');
  $('.header-menu').toggleClass('menu_opened');
})