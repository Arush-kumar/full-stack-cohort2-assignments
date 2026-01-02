class Human{
  constructor(name, age){
    this.name = "Arush";
    this.age = 20;
  }
  // here create function than to be the part of constructor function
}

//Human class ki Shared memory mei ye function add ho gaye hai
Human.prototype.breath = function(){
  console.log("I am breathing");
}

Human.prototype.eat = function(){
  console.log("I am eating");
}

let h1 = new Human(); 
let h2 = new Human(); 