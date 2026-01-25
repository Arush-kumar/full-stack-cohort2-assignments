// cb ak function hota hai jab kaam ho jaye tab chalta hai.

function instagramParJaoDataLaao(username, cb){
  // logic 
  setTimeout(() => {
    cb({id: 1, name: "Arush Kumar", address: "Delhi", age: 20})
    
  }, 2000);
}


instagramParJaoDataLaao("arushk", function(data){
  console.log(data);
})
