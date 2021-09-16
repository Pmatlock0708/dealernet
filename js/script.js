$(function () {

    "use strict";



    /*------ MENU Fixed ------*/

    $(window).scroll(function () {

        var $scroll = $(window).scrollTop();

        var $navbar = $("header");

        if ($scroll > 100) {

            $navbar.addClass("scroll-nav");

        } else {

            $navbar.removeClass("scroll-nav");

        }

    });



 // banner slider
//  var owl = $('.banner-slider');
//  owl.owlCarousel({
//   items:1,
//   dots:true,
//   nav:true,
//   navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
//   loop:true,
//   margin:0,
// //   autoplay:true,
// //   autoplayTimeout:2000,
// //   autoplayHoverPause:false
// });

 // ipad slider
 var owl = $('.ipad-slider');
 owl.owlCarousel({
  items:3,
  dots:false,
  loop:true,
  margin:100,
  center:true,
    nav:true,
    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive : {
        1100 : {
            margin:65
        },
        1300 : {
            margin:70
        },
        1400 : {
            margin:85
        },
        1599 : {
            margin:90
        }
    }
});
// var swiper = new Swiper('.ipad-slider', {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     loop: true,
//     centeredSlides: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//   });
// if ($('.owl-item').hasClass("center")) {
//     $(this).addClass("show").parent().next().addClass("show2"); 
//   }
// });

    // $(window).on('change', function(e) {
        
    // })
    // var owl = $('.ipad-slider');
    // owl.owlCarousel();
    // // Listen to owl events:
    // owl.on('changed.owl.carousel', function(event) {
    //     $('.owl-item.center').next().addClass('asd')
    // });
// testi slider
    $(document).ready(function () {
        var $owl = $('.testi-carousel');
        $owl.owlCarousel({
            items: 1,
            smartSpeed: 800,
            dots: false,
            margin: 10,
            navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            nav:true,
            autoplay: false,
            loop: true,
       
        });
    });

        
        $(document).ready(function () {
            var $owl = $('.media-carousel');
            $owl.owlCarousel({
                items: 4,
                smartSpeed: 800,
                dots: true,
                margin: 10,
                navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                nav:true,
                autoplay: false,
                loop: true,
                responsiveRefreshRate: 1000,
                responsive: {
                    0: {
                        items: 1,
                        dots: false
                    },
                    500: {
                        items: 2,
                        dots: false
                    },
                    768: {
                        items: 3
                    },
                    1000: {
                        items:4                  
                      }
                }
            });
        });
          

      

        
        $('.advantage-faq-heading').click(function(){
            $(this).addClass('active').parent('.advantage-faq').siblings().children('.advantage-faq-heading').removeClass('active');
            $(this).siblings('.advantage-para').slideDown('').parent('.advantage-faq').siblings().children('.advantage-para').slideUp('');
        });

        var owl = $('.advantage-slider');
        owl.owlCarousel({
         items:1,
         dots:false,
         nav:true,
         navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
         loop:true,
         margin:0,
       });
       var owl = $('.brands-carousel');
       owl.owlCarousel({
        items:6,
        dots:false,
        nav:true,
        navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        loop:true,
        margin:50,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
        responsive: {
            0: {
                items: 3,
                margin:30,
            },
            500: {
                items: 3,
                margin:20,
            },
            768: {
                items: 4
            },
            1000: {
                items:6                  
              }
        }
      });
      $('span.down-arrow').click(function(){
        $(this).siblings('.sub-menu').slideToggle().parent('.menu-item-has-children').siblings().children('.sub-menu').slideUp();
      });
      $('.hamburger').click(function(){
          $(this).toggleClass('active');
        $('.listing-menu').toggleClass('show-menu');
      });
      $( document ).ready(function() {
      if ($(window).width() < 767) {
      $('.footer-links h4').click(function(){
        $(this).toggleClass('rotate-i').parent().parent('.footer-links').siblings('.footer-links').find(' h4').removeClass('rotate-i');
       $(this).siblings('ul').slideToggle().parent().parent('.footer-links').siblings('.footer-links').find('ul').slideUp();
   });
}
});
$( document ).ready(function() {
    if ($(window).width() < 1100) {
        $('.sub-down-arrow').click(function(){
            $(this).parent().parent('.submenu-width').toggleClass('rotate-i').siblings().removeClass('rotate-i');
            $(this).parent().parent('.submenu-width').children('ul').slideToggle().parent('.submenu-width').siblings().children('ul').slideUp();
        });
}
});
    $('.service-filters ul>li button').click(function(){
        $(this).parent('li').hide('slow');
    });
    $('.service-product-view-btn button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('#grid').click(function(){
        $('.colum').addClass('grid50');
        $('.colum').removeClass('grid100');
    });
    $('#list').click(function(){
        $('.colum').addClass('grid100');
        $('.colum').removeClass('grid50');
    });
// product detail page slider
$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false, 
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: true,
            navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],

            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});

$('.compare-link a').click(function(){
    $('.single-add-to-compare').addClass('compare-bar');
});
// redline popup
var owl = $('.redline-slider');
owl.owlCarousel({
 items:1,
 dots:false,
 nav:true,
 navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
 loop:true,
 margin:0,
});
// photo popup
var owl = $('.photo-banner-slider');
owl.owlCarousel({
 items:2.5,
 dots:false,
 nav:true,
 navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
 loop:true,
 margin:10,
 responsive: {

    0: {
        items:1,
        margin:10,
    },
    600: {
        items:1.5,
        margin:5,
    },
    1000: {
        items:2.5,     
        margin:10,            
      }
}
});
AOS.init({
    duration: 1200,
  });


  
});
