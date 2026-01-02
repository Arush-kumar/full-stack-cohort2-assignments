var increaseBtn = document.querySelector("#increaseBtn")
var decreaseBtn = document.querySelector("#decreaseBtn")
var h1 = document.querySelector("h1")

let currentValue = 0;
const MAX = 10;
const MIN = 0;


const update = () => {
  h1.textContent = currentValue;
}

increaseBtn.addEventListener("click", () => {
  update();
  if (currentValue >= MAX) return;
  currentValue++;
})



decreaseBtn.addEventListener("click", () => {
  update();
  if (currentValue <= MIN) return;
  currentValue--;
})