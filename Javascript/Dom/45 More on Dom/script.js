var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var downloadBtn = document.querySelector('.inner')

var grow = 0;

btn.addEventListener('click', function() {

  btn.style.pointerEvents = 'none'

  var num = 50 + Math.floor(Math.random() * 50) 
  // console.log(num);

  var initial = setInterval(() => {
    grow++
    h2.innerHTML = `${grow}%` 
    downloadBtn.style.width = `${grow}%`    
  }, num)

  setTimeout(() => {
    clearInterval(initial)
    btn.innerHTML = 'Downloaded'    
    btn.style.opacity = '0.8' 
    console.log(`Your file will be Downloaded in ${num/10} seconds...`);
  }, num * 100);

})