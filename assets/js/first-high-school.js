//script for filter items
const filter = document.querySelector('.available')
const show = document.querySelector('.show')
const closeButton = document.querySelector('.closed')
filter.addEventListener('click', () => {
    if (show.style.display = 'none') {
        show.style.display = 'block'
    }
})
closeButton.addEventListener('click', () => {
    show.style.display = 'none'
    filter.checked = false
})
//script for pagination
const next = document.querySelector('.fa-angle-double-left')
const prev = document.querySelector('.fa-angle-double-right')
const pageNumber = document.querySelectorAll('.page-number')
const pages = [...pageNumber]
var counter = 0
pages[counter].style.display = 'block'
next.addEventListener('click', () => {
    prev.style.display = 'block'
    counter++
    pages[counter].style.display = 'block'
    pages[counter - 1].style.display = 'none'
    if (counter == 0) {
        prev.style.display = 'block'
    }
    if (counter == pages.length - 1) {
        next.style.display = 'none'
    }
})
prev.addEventListener('click', () => {
    counter--
    pages[counter].style.display = 'block'
    pages[counter + 1].style.display = 'none'
    if (counter ==1 || counter==0) {
        next.style.display = 'block'
    }
    if (counter == 0) {
        prev.style.display = 'none'
    } else {
        prev.style.display = 'block'
    }
})
