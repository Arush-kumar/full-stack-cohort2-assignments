const keys = document.querySelectorAll(".white, .black");


const sounds = [];
for (let i = 28; i <= 63; i++) {
  sounds.push(new Audio(`./audio/${i}.mp3`));
}


keys.forEach((key, i) => {
  key.audio = sounds[i];     

  key.addEventListener("click", () => {
    key.audio.currentTime = 0;
    key.audio.play();

    key.classList.add("active");
    setTimeout(() => key.classList.remove("active"), 150);
  });
});


document.addEventListener("keydown", (e) => {
  const pressed = e.key.toUpperCase();

  keys.forEach((key) => {
    if (key.textContent.trim() === pressed) {
      key.audio.currentTime = 0;
      key.audio.play();

      key.classList.add("active");
      setTimeout(() => key.classList.remove("active"), 150);
    }
  });
});
