const btn_menu = document.getElementById('menu-btn');
const nav_links = document.getElementById('nav-links');
const menu_btn_icons = document.querySelector('i');

btn_menu.addEventListener('click', (e) => {
    nav_links.classList.toggle('open');
    const isOpen  = nav_links.classList.contains('open');
    menu_btn_icons.setAttribute("class", isOpen ? 'ri-close-line' : 'ri-menu-line');
});

nav_links.addEventListener('click', (e) => {
    nav_links.classList.remove('open');
    menu_btn_icons.setAttribute('class', 'ri-menu-line');
});

const scroll_reveal_options = {
    origin: 'boton',
    distance: '50px',
    duration: 1000,
};

ScrollReveal().reveal('.header__container h1', { ...scroll_reveal_options });
ScrollReveal().reveal('.header__container form', { ...scroll_reveal_options, delay: 500 });
ScrollReveal().reveal('.header__container img', { ...scroll_reveal_options, delay: 1000 });
ScrollReveal().reveal('.range__card', { 
    duration: 1000,
    interval: 500,
 });
ScrollReveal().reveal('.location__image', {
    ...scroll_reveal_options,
    origin: 'right',
});
ScrollReveal().reveal('.location__content .section__header', {
    ...scroll_reveal_options,
    delay: 500,
});
ScrollReveal().reveal('.location__content p', {
    ...scroll_reveal_options,
    delay: 1000,
});
ScrollReveal().reveal('.location__content .location__btn', {
    ...scroll_reveal_options,
    delay: 1500,
});

ScrollReveal().reveal('.story__card', {
    ...scroll_reveal_options,
    interval: 500,
});

ScrollReveal().reveal('.download__image', {
    ...scroll_reveal_options,
    origin: 'right',
});
ScrollReveal().reveal('.download__content .section__header', {
    ...scroll_reveal_options,
    delay: 500,
});
ScrollReveal().reveal('.download__links', {
    ...scroll_reveal_options,
    delay: 1000,
});

const selectCards = document.querySelectorAll('.select__card');

selectCards[0].classList.add("show__info");

const prices = ['225', '455', '275', '625', '395'];

const price_el = document.getElementById('select-price');

const updateSwiperImage = (eventName, args) => {
    if (eventName == 'slideChangeTransitionStart') {
        const index = args && args[0].realIndex;
        price_el.innerText = prices[index];
        selectCards.forEach(item => item.classList.remove('show__info'));
        selectCards[index].classList.add('show__info');
    }
};

const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        depth: 500,
        modifier: 1,
        scale: 0.75,
        slideShadows: false,
        stretch: -100
    },

    onAny(event, ...args) {
        updateSwiperImage(event, args)
    }
});

const banner = document.querySelector('.banner__wrapper');

const banner_content = Array.from(banner.children);

banner_content.forEach(item => {
    console.log(item);
    const duplicate_node = item.cloneNode(true);
    duplicate_node.setAttribute('aria-hidden', true);
    console.log(duplicate_node);
    banner.appendChild(duplicate_node);
});


