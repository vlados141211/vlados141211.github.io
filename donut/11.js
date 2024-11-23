let countP = document.querySelector('.count-p')
let wrapper = document.querySelector('.wrapper')
let div = document.querySelector('#no')
let img = document.querySelector('.img-donut')

let count = 0;
let i = 1;
let imgArr = ['donut-1.png', 'donut-2.png', 'donut-3.png', 'donut-4.png', 'donut-5.png']


function changePosition() {
    let maxLeft = wrapper.clientWidth - div.clientWidth;
    let maxTop = wrapper.clientHeight - div.clientHeight;

    let newLeft = Math.random() * maxLeft
    let newTop = Math.random() * maxTop

    div.style.left = newLeft + 'px'
    div.style.top = newTop + 'px'

    div.style.width = div.clientWidth + 10 + 'px'

    if (div.clientWidth >= (wrapper.clientWidth - 50) || div.clientHeight >= (wrapper.clientHeight)) {
        div.style.width = '50px'
        count++;
        countP.innerHTML = count
        img.src = imgArr[i]
        i++


        if (i >= imgArr.length) {
            i = 0
        }
    }
}

div.onmouseenter = function () {
    changePosition()
}