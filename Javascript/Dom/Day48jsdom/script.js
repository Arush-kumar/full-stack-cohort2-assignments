var h1 = document.querySelector("h1")
var body = document.body

body.addEventListener('keydown', function(dets){
    
  h1.innerHTML = dets.code

})