document.querySelector('.js-sandwich').onclick = (e) => {
    e.currentTarget.closest('.body').classList.toggle('nav-open')
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slidesPerView: 'auto',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

document.querySelectorAll('.js-m-click').forEach(item => {
    item.onclick = (e) => {
        const parent = e.currentTarget.closest('.swiper-slide')
        parent.classList.toggle('show-popup')
    }
})


const checkMenu = (y) => {
    const top = y || -document.querySelector('.js-container').getBoundingClientRect().top
    if (top > 90) {
        document.body.classList.add('scrolled')
    } else {
        document.body.classList.remove('scrolled')
    }
}

document.querySelector('.container-overflow-hidden').onscroll = (e) => {
    checkMenu(e.originalTarget.scrollTop)
}
document.querySelector('.container-overflow-hidden').onresize = (e) => {
    checkMenu(e.originalTarget.scrollTop)
}

window.onresize = () => {
    const y = document.querySelector('.container-overflow-hidden').scrollTop
    checkMenu(y)
}
