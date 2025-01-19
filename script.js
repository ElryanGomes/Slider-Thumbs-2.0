let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let list = document.querySelector('.container .list')
let thumbs = document.querySelector('.container .thumbs')
let container = document.querySelector('.container')

btnNext.onclick = () => moveCardOnClick('next')
btnBack.onclick = () => moveCardOnClick('back')

function moveCardOnClick(type) {
    let listItens = document.querySelectorAll('.list-item')
    let thumbItens = document.querySelectorAll('.thumb-items')

    if (type === 'next') {
        list.appendChild(listItens[0])
        thumbs.appendChild(thumbItens[0])
        container.classList.add('next')
    }
    else {
        list.prepend(listItens[listItens.length - 1])
        thumbs.prepend(thumbItens[thumbItens.length - 1])
        container.classList.add('back')
    }
    setTimeout(() => {
        container.classList.remove("next");
        container.classList.remove("back");
      }, 500);
}
