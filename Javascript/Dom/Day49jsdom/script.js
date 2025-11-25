var allBtns = document.querySelectorAll("button");

allBtns.forEach(function(elem){
  elem.addEventListener("click", function(){
    if(elem.innerHTML == "Add Freiend"){
      elem.innerHTML = "Remove"
    }else{
      elem.innerHTML = "Add Freiend"
    }
  })
})