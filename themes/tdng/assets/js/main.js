import * as params from '@params';

document.addEventListener("DOMContentLoaded", function () {
    const homeSlider = document.querySelector("#home-slider");
    initializeSwiper(homeSlider);
    initializeGoatCounter();
});

function initializeSwiper(slider) {
    if (slider) {
        const params = {
            loop: false,
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
            // Mobile: 1 item per view
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            // Tablet: 2 items per view
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            // Desktop: 3 items per view
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            },
            injectStyles: [
            `.swiper-button-next, .swiper-button-prev { color: #4A4A4A; } .swiper-wrapper { align-items: center; }`,
            ],
            navigation: {
            nextEl: ".slider-nav-next",
            prevEl: ".slider-nav-prev",
            },
        };

        Object.assign(slider, params);
        slider.initialize();
    }
}

function initializeGoatCounter() {
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-goatcounter", params.goatcounter);
    script.src = params.source;
    document.body.appendChild(script);
    if (window.location.host.includes("localhost")) {
        window.goatcounter = { no_onload: true };
    }
}