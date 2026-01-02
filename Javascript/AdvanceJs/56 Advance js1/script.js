class Remote{
  constructor(product, brand, price){
    this.product = product;
    this.brand = brand;
    this.price = price;
  }
  powerOn(){
    console.log(`power on ${this.product}`);
  }
  powerOff(){
    console.log(`power off ${this.product}`)
  }
}

let r1 = new Remote("tv", "sony", 50000);
let r2 = new Remote("lg", "lg", 4000);

console.log(r1);
console.log(r2);





// class => blueprint of object
//class => saancha

// constructor hai automatic chalne wala funstion 