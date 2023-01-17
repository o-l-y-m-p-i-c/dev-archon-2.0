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


const checkMenu = () => {
    const top = -document.body.getBoundingClientRect().top
    if (top > 90) {
        document.body.classList.add('scrolled')
    } else {
        document.body.classList.remove('scrolled')
    }
}

window.onscroll = (e) => {
    checkMenu()
}
window.onresize = () => {
    checkMenu()
}
