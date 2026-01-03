class Human{
  constructor(name, age){
    this.name = "Arush";
    this.age = 20;
  }
  // share memory use 
  sleep() {
    console.log("I am sleeping");
  }
  eat(){
    console.log("I am eating");
  }
  work(){
    console.log("I am working");
  }
}



let h1 = new Human(); 
let h2 = new Human(); 