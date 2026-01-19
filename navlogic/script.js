const box = document.querySelector('.box')
const btn = document.querySelector('button')
const icon = document.querySelector('.ri-menu-line')

btn.addEventListener('click', () => {
  box.classList.toggle('active')
  // btn.innerText = box.classList.contains('active') ? 'open' : 'close'

  // add icon class toggle if have box class active
  icon.className = box.classList.contains('active') ? 'ri-menu-line' : 'ri-close-large-line';

  btn.style.color = box.classList.contains('active') ? 'black' : 'red'
  btn.style.border = box.classList.contains('active') ? '1px solid black' : '1px solid white'
})