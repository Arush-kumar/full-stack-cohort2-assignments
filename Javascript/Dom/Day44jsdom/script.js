var btn  = document.querySelector('button')
var main  = document.querySelector('main')

btn.addEventListener('click', function() {
  // create a element 
  var div = document.createElement('div')

  var x = Math.random() * 100
  var y = Math.random() * 100


  //random color generate
  var c1 = Math.floor(Math.random() * 256)
  var c2 = Math.floor(Math.random() * 256)
  var c3 = Math.floor(Math.random() * 256)
  
  div.style.height = '50px'
  div.style.width = '50px'
  div.style.borderRadius = '4px'
  div.style.position = 'absolute'
  div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
  
  div.style.left = x + '%'
  div.style.top = y + '%'



  main.appendChild(div)

  // console.log(h1);

})