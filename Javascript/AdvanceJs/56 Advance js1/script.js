class AalooChaat {
  constructor(){
    this.name = "Aaloo Chaat"
    this.price = 100
    this.oil = "5ml"
    this.oilBrand = "Saffola"
    this.masaale = ["dhania", "pudhina", "mirch"]
  }

  pack(){
    console.log("Aaloo Chaat is packed.");
    
  }
  unpack(){
    console.log("Aaloo Chaat is unpacked.");
    
  }
}

class ChholeChaat {
  constructor(){
    this.name = "Chhole Chaat"
    this.price = 70
    this.oil = "5ml"
    this.oilBrand = "Saffola"
    this.masaale = ["dhania", "pudhina", "mirch"]
  }

  pack(){
    console.log("Chhole Chaat is packed.");
    
  }
  unpack(){
    console.log("Chhole Chaat is unpacked.");
    
  }
}


let ac1 = new AalooChaat();
ac1.pack()