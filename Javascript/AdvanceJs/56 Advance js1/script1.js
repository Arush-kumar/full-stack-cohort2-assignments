// console.log(this);
//Es5 function
// function fun(){
//   console.log(this);
// }
// fun()

//Es5 func inside object
// let obj = {
//   name: "Arush",
//   age: 20,
//   fun: function () {
//     console.log(this);
//   },
// }

// obj.fun();


// Es6 func inside object
// let obj = {
//   name: "Arush",
//   age: 20,
//   fun: () =>{
//     console.log(this);
//   }
// }
// obj.fun()

// Es5 inside Es5 inside object
// let obj = {
//   name: "Arush",
//   age: 20,
//   fun: function () {
//     function fun1() {
//       console.log(this);
//     }
//     fun1();
//   },
// }

// obj.fun();

// Es6 inside Es5 inside object
// let obj = {
//   name: "Arush",
//   age: 20,
//   fun: function () {
//     fun1 = () => {
//       console.log(this);
//     }
//     fun1();
//   },
// }

// obj.fun();



let obj = {
  name: "Arush"
}

function func(a, b, c){
  console.log(this);
}

func.call(obj,1,2,3)