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
