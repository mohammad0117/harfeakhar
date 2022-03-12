const visibleButton = document.querySelectorAll('.fa-eye ')
const hiddenButton = document.querySelectorAll('.fa-eye-slash')
const passwordInput = document.querySelectorAll('.pass')
function show() {
}
function hidden() {

}
for (let counter = 0; counter < visibleButton.length; counter++) {
    visibleButton[counter].addEventListener('click', () => {
        visibleButton[counter].style.display = 'none'
        hiddenButton[counter].style.display = 'block'
        if (passwordInput[counter].type === "password") {
            passwordInput[counter].type = "text";
        } else {
            passwordInput[counter].type = "password";
        }
    })
}
for (let counter = 0; counter < hiddenButton.length; counter++) {
    hiddenButton[counter].addEventListener('click', () => {
        hiddenButton[counter].addEventListener('click', () => {
            hiddenButton[counter].style.display = 'none'
            visibleButton[counter].style.display = 'block'
            if (passwordInput[counter].type === "text") {
                passwordInput[counter].type = "password";
            } else {
                passwordInput[counter].type = "text";
            }
        })
    })
}

