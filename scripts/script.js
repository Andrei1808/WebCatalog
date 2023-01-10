let element2 = document.getElementsByClassName("sidebar__list-title");
let filtered = false;
let element = document.getElementsByClassName("acordion-item__header");
let sidebarMenu = document.querySelector(".sidebar__block-items_bottom");
let burger = document.querySelector(".burger-menu__list");
let quantity = document.querySelector(".quantity-input");


for (i = 0; i < element2.length; i++) {
  element2[i].addEventListener("click", function () {
    this.classList.toggle("sidebar__list-items_show");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

for (i = 0; i < element.length; i++) {
  element[i].addEventListener("click", function () {
    this.classList.toggle("acordion-item__body_dropdown");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function show() {
  sidebarMenu.classList.toggle("sidebar__block-items_bottom-show");
}


function showBurger() {
  burger.classList.toggle("burger-menu__list_show");
}

function plus() {
  ++quantity.value;
}

function minus() {
  if (quantity.value <= 1) {
    return;
  } else {
    --quantity.value;
  }
}

$('.slider__row').not('.slick-initialized').slick({
  autoplay: 300,
  arrows: false,
  infinite: true,
  pauseOnHover: true,
  swipeToSlide: true,
  responsive: [{
      breakpoint: 1920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
  ]
});

$('.slider__row').not('.slick-initialized').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: 300,
  arrows: false,
  infinite: true,
  pauseOnHover: true,
  swipeToSlide: true,


});

$('.js-filter').on('click', function () {
  if (filtered === false) {
    $('.filtering').slick('slickFilter', ':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.filtering').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
});