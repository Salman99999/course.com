/*========== Swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/*========== Owl Carousel ==========*/

  $(document).ready(function() {
    $('.carousel-1').owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      autoplay:true,
      autoplayTimeout:2500,
      autoplayHoverPause:false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      },
    });

    $('.owl-prev-1').click(function() {
      $('.carousel-1').trigger('prev.owl.carousel');
    });

    $('.owl-next-1').click(function() {
      $('.carousel-1').trigger('next.owl.carousel');
    });
  });




$(document).ready(function(){
  var owl = $('.carousel-2');
  owl.owlCarousel({
    responsive: {
      0: {
        items: 1 // Number of items shown on phones
      },
      768: {
        items: 3 // Number of items shown on medium devices
      },
      992: {
        items: 4 // Number of items shown on large devices
      }
    },
    loop: true,
    nav: false,
    autoplay: false
  });

  $('.owl-next-2').click(function() {
    owl.trigger('next.owl.carousel');
  });

  $('.owl-prev-2').click(function() {
    owl.trigger('prev.owl.carousel');
  });
});
