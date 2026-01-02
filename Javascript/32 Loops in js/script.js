// Loops & condtionals in js 

// conditionals
// if else 
  //truthy & falsy
// 0 "" false null undefined NaN document.all

// kuch bhi dikhe -> true 

// if (12) {
    // console.log("hey");
// } else {
    // console.log("hello");
// }


// straightforward loops => na hi value balti hai aur na hi printing badalti hai 

// dynamic loops => value badal sakti hai aur printing bhi badal sakti hai

// for loop
// for( start; end; change){}

// 12 - 1 and skip 5 and 7
// for(let i = 12; i > 0; i--){
//   if(i === 5 || i === 7){} // bypass
//   else console.log(i);
// }

// practice questions
// for(let i = 2; i < 21; i+=2){
//   console.log(i);
// }
// for(let i = 1; i < 21; i++){
//   if(i % 2 === 0){
//     console.log(i);
//   }
// }

// for(let i = 1; i <= 5; i++){
//   console.log("Yes");
// }

// for(let i = 1; i < 11; i++){
//   if(i % 2 === 0) console.log(`Even ${i}`); 
//   else console.log(`Odd ${i}`);
// }

let askNumber = prompt("Enter a number");
askNumber = Number(askNumber);

if(askNumber > 0) console.log("Number is positive");
else if(askNumber < 0) console.log("Number is negative");
else console.log("Number is zero");