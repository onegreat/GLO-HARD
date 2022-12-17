'use strict'

const btn = document.getElementById('btn')
const text = document.getElementById('text')
const square = document.getElementById('square')
const e_btn = document.getElementById('e_btn')
const circle = document.getElementById('circle')
const range = document.getElementById('range')
const span = document.getElementById('range-span')

btn.addEventListener('click', () => {
    square.style.backgroundColor = text.value
    text.value = ''
})
e_btn.style.display = 'none'
span.textContent = '50 %'
range.addEventListener('input', (event) => {
    span.textContent = `${event.target.value} %`
    circle.style.height = `${event.target.value}%`
    circle.style.width = `${event.target.value}%`

})