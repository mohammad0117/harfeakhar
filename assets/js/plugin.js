$(document).ready(function () {
    $('.owl-one').owlCarousel({
        rtl: true,
        smartSpeed: 500,
        loop: true,
        autoplay: true,
        autoPlayTimeout: 1000,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
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
                items: 3
            }
        }
    })
    $('.owl-three').owlCarousel({
        rtl: true,
        smartSpeed: 500,
        loop: true,
        autoplay: true,
        autoPlayTimeout: 1000,
        margin: 10,
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
                items: 2
            }
        }
    })
});
