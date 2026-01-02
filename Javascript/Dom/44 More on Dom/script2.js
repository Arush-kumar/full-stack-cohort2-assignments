var btn = document.querySelector('button')
var main = document.querySelector('main')

btn.addEventListener('click', function(){

  var h1 = document.createElement('h1')
  
  var arr = ['This is awesome!', 'You are doing great!', 'Keep up the good work!', 'JavaScript is fun!', 'You rock!']

  var randomIndex = Math.floor(Math.random() * arr.length)
  h1.innerHTML = arr[randomIndex]


  var x = Math.random() * 100
  var y = Math.random() * 100
  var rotate = Math.random() * 360
  var scale = Math.random() * 3

  h1.style.position = 'absolute'
  h1.style.left = x + '%'
  h1.style.top = y + '%'
  h1.style.rotate = rotate + 'deg'
  h1.style.scale = scale


  main.appendChild(h1)

})