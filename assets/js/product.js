//script for zoom plugin
$("#demo").ezPlus({

    container: 'ZoomContainer',
    attrImageZoomSrc: 'zoom-image', // attribute to plugin use for zoom
    borderColour: '#888',
    borderSize: 1,
    constrainSize: false,  //in pixels the dimensions you want to constrain on
    constrainType: false,  //width or height
    containLensZoom: false,
    cursor: 'pointer', // user should set to what they want the cursor as, if they have set a click function
    debug: false,
    easing: false, // easing effects
    easingAmount: 12,
    enabled: true,
    // enable cross-fade effect
    imageCrossfade: false,

    // lens options
    lensBorderColour: '#000',
    lensBorderSize: 1,
    lensColour: 'white', //colour of the lens background
    lensFadeIn: false,
    lensFadeOut: false,
    lensOpacity: 0.4, //opacity of the lens
    lensShape: 'square', //can be 'round'
    lensSize: 200,
    lenszoom: false,
    // image loading spinner
    loadingIcon: false, //http://www.example.com/spinner.gif

    // This change will allow to decide if you want to decrease
    // zoom of one of the dimensions once the other reached it's top value,
    // or keep the aspect ratio, default behaviour still being as always,
    // allow to continue zooming out, so it keeps retrocompatibility.
    mantainZoomAspectRatio: false,
    maxZoomLevel: false,
    minZoomLevel: 2.5,
    // callbacks
    onComplete: $.noop,
    onDestroy: $.noop,
    onImageClick: $.noop,
    onImageSwap: $.noop,
    onImageSwapComplete: $.noop,
    onShow: $.noop,
    onHide: $.noop,
    onZoomedImageLoaded: $.noop,

    preloading: 1, //by default, load all the images, if 0, then only load images after activated (PLACEHOLDER FOR NEXT VERSION)
    respond: [],
    responsive: true,
    scrollZoom: false, //allow zoom on mousewheel, true to activate
    scrollZoomIncrement: 0.1,  //steps of the scrollzoom
    showLens: true,
    tint: false, //enable the tinting
    tintColour: '#333', //default tint color, can be anything, red, #ccc, rgb(0,0,0)
    tintOpacity: 0.4, //opacity of the tint
    touchEnabled: true,

    // zoom options
    zoomActivation: 'hover', // Can also be click (PLACEHOLDER FOR NEXT VERSION)
    zoomContainerAppendTo: 'body', //zoom container parent selector
    zoomId: -1, // identifier for the zoom container
    zoomLevel: 1, //default zoom level of image
    zoomTintFadeIn: false,
    zoomTintFadeOut: false,
    zoomType: 'window', //window is default,  also 'lens' available -
    zoomWindowAlwaysShow: false,
    zoomWindowBgColour: '#fff',
    zoomWindowFadeIn: false,
    zoomWindowFadeOut: false,
    zoomWindowHeight: 400,
    zoomWindowOffsetX: 0,
    zoomWindowOffsetY: 0,
    zoomWindowPosition: 10, //Possible values: 1-16, but we can also position with a selector string.
    zoomWindowWidth: 400,
    zoomEnabled: true, //false disables zoomwindow from showing
    zIndex: 999

});
//script for nav-item
const navItem = document.querySelectorAll('.nav-item')
const navPage = document.querySelectorAll('.nav-page')
for (let counter = 0; counter < navItem.length; counter++) {
    navItem[counter].addEventListener('click', () => {
        if (counter === 0) {
            navItem[counter].classList.add('cracking')
            navItem[counter + 1].classList.remove('cracking')
            navPage[counter].classList.add('showing')
            navPage[counter + 1].classList.remove('showing')
        } else if (counter === 1) {
            navItem[counter].classList.add('cracking')
            navItem[counter - 1].classList.remove('cracking')
            navPage[counter].classList.add('showing')
            navPage[counter - 1].classList.remove('showing')
        }
    })
}
//script for slider
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
            items: 4
        },
        1000: {
            items: 4
        }
    }
})
//script for add-off or low-off product
const number=document.querySelector('.number')
const lowButton=document.querySelector('.low-off')