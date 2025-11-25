var allElems = document.querySelectorAll(".elem");

allElems.forEach(function(elem){
  elem.childNodes[3].addEventListener("click", function(){
    console.log('hello');
  })
})