$('.owl-two').owlCarousel({
    rtl: true,
    smartSpeed: 500,
    loop: true,
    autoplay: true,
    autoPlayTimeout: 1000,
    margin: 20,
    stagePadding: 5,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})