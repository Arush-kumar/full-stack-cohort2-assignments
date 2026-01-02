const para = document.querySelector("p");
const text = para.innerText;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

var iteration = 0;

function randomText() {
  const str = text.split("").map((char, index) => {
      if (index < iteration) {
        return char;
      }
      return characters.split("")[Math.floor(Math.random() * 52)]
    }).join("");

  para.innerText = str;
  iteration += 0.2
}


para.addEventListener("mouseenter", () => {
  setInterval(randomText, 30);
});

