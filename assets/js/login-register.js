const visibleButton = document.querySelector('.fa-eye ')
const hiddenButton = document.querySelector('.fa-eye-slash')
const passwordInput = document.querySelector('.pass')
function show() {
    visibleButton.style.display = 'none'
    hiddenButton.style.display = 'block'
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
function hidden(){
hiddenButton.addEventListener('click', () => {
    hiddenButton.style.display = 'none'
    visibleButton.style.display = 'block'
    if (passwordInput.type === "text") {
        passwordInput.type = "password";
    } else {
        passwordInput.type = "text";
    }
})
}
visibleButton.addEventListener('click', show)
hiddenButton.addEventListener('click', hidden)
