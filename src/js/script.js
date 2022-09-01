import * as customFunctions from './modules/functions.js'

// vendors

// swiper

import Swiper, { Navigation } from 'swiper'
// import Swiper and modules styles

const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 40,

    breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
})

// modal

const modal = document.querySelector('#modal')

const modalObj = {}
console.log(modal)

// $(function () {
//     //STICKY MENU
//     // var $menu = $('.menu')
//     // $(document).scroll(function () {
//     //     $menu.css({
//     //         position: $(this).scrollTop() > 102 ? 'fixed' : 'relative',
//     //     })
//     // })

//     //MODAL WINDOW
//     var modal = document.getElementById('myModal')

//     // Get the button that opens the modal
//     var btn210 = document.getElementById('buy210')
//     var btn180 = document.getElementById('buy180')
//     var btn150 = document.getElementById('buy150')
//     var btn120 = document.getElementById('buy120')
//     var btn90 = document.getElementById('buy90')
//     var btn60 = document.getElementById('buy60')
//     var menu = document.getElementById('menu')
//     var closebtn = document.getElementById('close')

//     var height1 = document.getElementById('height1')
//     var old_price = document.getElementById('old_price')
//     var new_price = document.getElementById('new_price')
//     var height2 = document.getElementById('height2')
//     var treename = document.getElementById('treename')
//     var pines = document.getElementById('pines')

//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function (event) {
//         if (event.target == modal) {
//             modal.style.display = 'none'
//             menu.style.display = 'block'
//         }
//     }

//     closebtn.onclick = function () {
//         modal.style.display = 'none'
//         menu.style.display = 'block'
//     }

//     btn210.onclick = function () {
//         pines.style.display = 'block'
//         modal.style.display = 'block'
//         menu.style.display = 'none'
//         height1.innerHTML = '210 см'
//         height2.innerHTML = '210 см'
//         treename.innerHTML = 'Снегурочка'
//         old_price.innerHTML = '6 500 руб'
//         new_price.innerHTML = '3 990 руб'
//     }
//     btn180.onclick = function () {
//         pines.style.display = 'block'
//         modal.style.display = 'block'
//         menu.style.display = 'none'
//         height1.innerHTML = '180 см'
//         height2.innerHTML = '180 см'
//         treename.innerHTML = 'Особая'
//         old_price.innerHTML = '5 500 руб'
//         new_price.innerHTML = '2 990 руб'
//     }
//     btn150.onclick = function () {
//         pines.style.display = 'block'
//         modal.style.display = 'block'
//         menu.style.display = 'none'
//         height1.innerHTML = '150 см'
//         height2.innerHTML = '150 см'
//         treename.innerHTML = 'Снежинка'
//         old_price.innerHTML = '4 500 руб'
//         new_price.innerHTML = '2 290 руб'
//     }
//     btn120.onclick = function () {
//         pines.style.display = 'block'
//         modal.style.display = 'block'
//         menu.style.display = 'none'
//         height1.innerHTML = '120 см'
//         height2.innerHTML = '120 см'
//         treename.innerHTML = 'Принцесса'
//         old_price.innerHTML = '3 100 руб'
//         new_price.innerHTML = '1 890 руб'
//     }
//     btn60.onclick = function () {
//         pines.style.display = 'none'
//         modal.style.display = 'block'
//         menu.style.display = 'none'
//         height1.innerHTML = '60 см'
//         height2.innerHTML = '60 см'
//         treename.innerHTML = 'Дюймовочка'
//         old_price.innerHTML = '1 100 руб'
//         new_price.innerHTML = '590 руб'
//     }
//     btn90.onclick = function () {
//         pines.style.display = 'none'
//         modal.style.display = 'block'
//         menu.style.display = 'none'
//         height1.innerHTML = '90 см'
//         height2.innerHTML = '90 см'
//         treename.innerHTML = 'Золушка'
//         old_price.innerHTML = '2 100 руб'
//         new_price.innerHTML = '990 руб'
//     }

//     //SLIDER
//     $('.multiple-items').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         adaptiveHeight: true,
//         variableWidth: true,
//         arrows: true,
//     })

//     //ZOOM IMAGE
//     // $('.image-popup-vertical-fit').magnificPopup({
//     //     type: 'image',
//     //     closeOnContentClick: true,
//     //     mainClass: 'mfp-img-mobile',
//     //     image: {
//     //         verticalFit: true,
//     //     },
//     // })

//     // $('.image-popup-fit-width').magnificPopup({
//     //     type: 'image',
//     //     closeOnContentClick: true,
//     //     image: {
//     //         verticalFit: false,
//     //     },
//     // })

//     // $('.image-popup-no-margins').magnificPopup({
//     //     type: 'image',
//     //     closeOnContentClick: true,
//     //     closeBtnInside: false,
//     //     fixedContentPos: true,
//     //     mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
//     //     image: {
//     //         verticalFit: true,
//     //     },
//     //     zoom: {
//     //         enabled: true,
//     //         duration: 300, // don't foget to change the duration also in CSS
//     //     },
//     // })
// })
