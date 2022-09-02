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

// modal product
const modalProduct = document.querySelector('#modal-product')
const modalCloseBtn = document.querySelectorAll('.modal-close')
const productHeight = document.querySelector('.product__height')
const productOldPrice = document.querySelector('.product__old-price')
const productNewPrice = document.querySelector('.product__new-price')
const productOptions = document.querySelector('.product-options')
const productTitle = document.querySelector('.product-desc__title')
const productGift = document.querySelector('.product-desc__gift')
const productdDescText = document.querySelector('.product-desc__text')

const products = document.querySelectorAll('.product--info')

const productsObj = {
    buy60: {
        name: 'Дюймовочка',
        height: 60,
        gift: 'В подарок гирлянда',
        desc: 'Модель елки идеально подходит для украшения дома и офиса',
        oldPrice: 1100,
        newPrice: 590,
        options: [
            {
                title: 'Снежок на иголках',
                src: 'images/trees/options/snowy-needle.png',
            },
            {
                title: 'Пушистые ветви',
                src: 'images/trees/options/fluffy-branches.png',
            },
        ],
    },
    buy90: {
        name: 'Золушка',
        height: 90,
        gift: 'В подарок гирлянда',
        desc: 'Модель елки идеально подходит для украшения дома и офиса',
        oldPrice: 2100,
        newPrice: 990,
        options: [
            {
                title: 'Снежок на иголках',
                src: 'images/trees/options/snowy-needle.png',
            },
            {
                title: 'Пушистые ветви',
                src: 'images/trees/options/fluffy-branches.png',
            },
        ],
    },
    buy120: {
        name: 'Принцесса',
        height: 120,
        gift: 'В подарок гирлянда',
        desc: 'Модель елки идеально подходит для украшения дома и офиса',
        oldPrice: 3100,
        newPrice: 1890,
        options: [
            {
                title: 'Живые шишки',
                src: 'images/trees/options/fir-cone.png',
            },
            {
                title: 'Снежок на иголках',
                src: 'images/trees/options/snowy-needle.png',
            },
            {
                title: 'Пушистые ветви',
                src: 'images/trees/options/fluffy-branches.png',
            },
        ],
    },
    buy150: {
        name: 'Снежинка',
        height: 150,
        gift: 'В подарок гирлянда',
        desc: 'Модель елки идеально подходит для украшения дома и офиса',
        oldPrice: 4500,
        newPrice: 2290,
        options: [
            {
                title: 'Живые шишки',
                src: 'images/trees/options/fir-cone.png',
            },
            {
                title: 'Снежок на иголках',
                src: 'images/trees/options/snowy-needle.png',
            },
            {
                title: 'Пушистые ветви',
                src: 'images/trees/options/fluffy-branches.png',
            },
        ],
    },
    buy180: {
        name: 'Особая',
        height: 180,
        gift: 'В подарок гирлянда',
        desc: 'Модель елки идеально подходит для украшения дома и офиса',
        oldPrice: 5500,
        newPrice: 2990,
        options: [
            {
                title: 'Живые шишки',
                src: 'images/trees/options/fir-cone.png',
            },
            {
                title: 'Снежок на иголках',
                src: 'images/trees/options/snowy-needle.png',
            },
            {
                title: 'Пушистые ветви',
                src: 'images/trees/options/fluffy-branches.png',
            },
        ],
    },
    buy210: {
        name: 'Снегурочка',
        height: 210,
        gift: 'В подарок гирлянда',
        desc: 'Модель елки идеально подходит для украшения дома и офиса',
        oldPrice: 6500,
        newPrice: 3990,
        options: [
            {
                title: 'Живые шишки',
                src: 'images/trees/options/fir-cone.png',
            },
            {
                title: 'Снежок на иголках',
                src: 'images/trees/options/snowy-needle.png',
            },
            {
                title: 'Пушистые ветви',
                src: 'images/trees/options/fluffy-branches.png',
            },
        ],
    },
}

const handleModalProductFill = (productId) => {
    productHeight.innerHTML = `${productsObj[productId].height} см`
    productOldPrice.innerHTML = `${productsObj[productId].oldPrice} руб.`
    productNewPrice.innerHTML = `${productsObj[productId].newPrice} руб.`
    productTitle.innerHTML = `Елка "${productsObj[productId].name}" ${productsObj[productId].height} см`
    productGift.innerHTML = productsObj[productId].gift
    productdDescText.innerHTML = productsObj[productId].desc

    // remove all childs from options node
    while (productOptions.firstChild) {
        productOptions.removeChild(productOptions.firstChild)
    }

    productsObj[productId].options.forEach((option) => {
        let figure = document.createElement('figure')
        let img = document.createElement('img')
        let figCaption = document.createElement('figcaption')

        img.src = option.src
        img.alt = option.title
        figCaption.innerHTML = option.title

        productOptions.append(figure)

        figure.append(img, figCaption)
    })
}

// filling the modal product with values
products.forEach((p) => {
    p.addEventListener('click', () => {
        modalProduct.classList.add('active')
        document.body.classList.add('fixed')

        const productId = p.getAttribute('data-id')

        switch (productId) {
            case 'buy60':
                handleModalProductFill(productId)
                break
            case 'buy90':
                handleModalProductFill(productId)
                break
            case 'buy120':
                handleModalProductFill(productId)
                break
            case 'buy150':
                handleModalProductFill(productId)
                break
            case 'buy180':
                handleModalProductFill(productId)
                break
            case 'buy210':
                handleModalProductFill(productId)
                break
            default:
                break
        }

        // filling
    })
})

// modal photo
const modalPhoto = document.querySelector('#modal-photo')
const images = document.querySelectorAll('.image-popup-vertical-fit')

images.forEach((image) => {
    image.addEventListener('click', () => {
        const src = image.getAttribute('data-source')
        const title = image.getAttribute('title')

        modalPhoto.classList.add('active')
        document.body.classList.add('fixed')

        modalPhoto.querySelector('img').src = src
        modalPhoto.querySelector('img').alt = title
        modalPhoto.querySelector('.modal__image-title').innerHTML = title
    })
})

// modal close btn
modalCloseBtn.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        modalProduct.classList.remove('active')
        modalPhoto.classList.remove('active')
        document.body.classList.remove('fixed')
    })
})

// close modal when clicking outside modal container
window.addEventListener('click', (e) => {
    if (e.target === modalProduct || e.target === modalPhoto) {
        modalProduct.classList.remove('active')
        modalPhoto.classList.remove('active')
        document.body.classList.remove('fixed')
    }
})

// burger
const burgerBtn = document.querySelector('.burger')

const navList = document.querySelector('.nav__list')

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    navList.classList.toggle('active')
})

// nav handler
const navItemList = document.querySelectorAll('.nav__item')

navItemList.forEach((navEl) => {
    navEl.addEventListener('click', () => {
        burgerBtn.classList.remove('active')
        navList.classList.remove('active')
    })
})

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
