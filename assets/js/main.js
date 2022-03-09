//script for dropdown footer
const button = document.querySelector('[data-action="custom-dropdown"]')
const menu = document.getElementById("dropdown-menu")
button.addEventListener('click', () => {
    menu.classList.toggle('d-block')
    button.classList.toggle('rotate-180')
})
//script for button-scroll-top
const buttonScrollTop = document.querySelector('.main-content__scroll-up')
window.onscroll = function () { scrollFunction() }
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttonScrollTop.style.display = "block";
    } else {
        buttonScrollTop.style.display = "none";
    }
}
buttonScrollTop.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
//script for chat with consultants
const buttonChat = document.querySelector('.main-content__fa-comment-dots')
const chatBody = document.querySelector('.main-content__conection')
const chatClose = document.querySelector('.main-content__conection .fa-times')
buttonChat.addEventListener('click',()=>{
    chatBody.style.display='block'
    buttonChat.style.display = 'none'
})
chatClose.addEventListener('click',()=>{
    chatBody.style.display = 'none'
    buttonChat.style.display = 'block'
})
