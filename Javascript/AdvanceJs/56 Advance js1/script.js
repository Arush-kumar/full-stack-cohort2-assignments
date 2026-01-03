class Human{
  constructor(name, age){
    this.name = "Arush";
    this.age = 20;
  }
  // here create method than to be the part of constructor function
}


Human.prototype.breath = function(){
  console.log("I am breathing");
}

Human.prototype.eat = function(){
  console.log("I am eating");
}

let h1 = new Human(); 
let h2 = new Human(); 