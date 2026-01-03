class Car{
  constructor(brand, model){
    this.brand = brand;
    this.model = model;
    this.speed = 0;
  }
  accelerate(){
    this.speed = this.speed + 5;
    console.log(`${this.brand} ${this.model} after acceleration speed is ${this.speed}`);
  }
  brake(){
    this.speed = this.speed - 5;
    console.log(`${this.brand} ${this.model} after braking speed is ${this.speed}`);
  }
}


let car1 = new Car('Honda', 'Civic')
let car2 = new Car('Honda', 'Civic').brake();