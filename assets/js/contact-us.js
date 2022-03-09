const dropDwonButton = document.querySelector('.button')
const dropDwonMenu = document.querySelector('.menu')

dropDwonButton.addEventListener('click', () => {
    dropDwonMenu.classList.toggle('d-block')
    dropDwonButton.classList.toggle('border-radius-0')
})