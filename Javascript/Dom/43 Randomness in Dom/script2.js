const teams = [
  {
    team: "CSK",
    primary: "yellow",
    secondary: "blue",
    fullName: "Chennai Super Kings",
    trophies: 4,
    captain: "MS Dhoni",
  },
  {
    team: "RCB",
    primary: "red",
    secondary: "black",
    fullName: "Royal Challengers Bangalore",
    trophies: 0,
    captain: "Faf du Plessis",
  },
  {
    team: "MI",
    primary: "blue",
    secondary: "gold",
    fullName: "Mumbai Indians",
    trophies: 2,
    captain: "Rohit Sharma",
  },
  {
    team: "KKR",
    primary: "purple",
    secondary: "gold",
    fullName: "Kolkata Knight Riders",
    trophies: 2,
    captain: "Shreyas Iyer",
  },
  {
    team: "SRH",
    primary: "orange",
    secondary: "black",
    fullName: "Sunrisers Hyderabad",
    trophies: 1,
    captain: "Aiden Markram",
  },
  {
    team: "PBKS",
    primary: "red",
    secondary: "silver",
    fullName: "Punjab Kings",
    trophies: 0,
    captain: "Shikhar Dhawan",
  },
];

// Cache DOM elements in one place
const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
const main = document.querySelector("main");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const p = document.querySelector("p");

// Random team generator
const getRandomTeam = () => teams[Math.floor(Math.random() * teams.length)];

btn.addEventListener("click", () => {
  const { team, primary, secondary, fullName, captain, trophies } = getRandomTeam();

  // console.log(team);
  
  h1.textContent = team;
  h1.style.backgroundColor = secondary;
  main.style.backgroundColor = primary;

  h2.textContent = `Full Name: ${fullName}`;
  h3.textContent = `Captain: ${captain}`;
  p.textContent = `Trophies Won: ${trophies}`;
});










// let arr = ["arush", "hari", "mohan", "stiv", "harsh"]
// let a = Math.floor(Math.random() * arr.length);
// console.log(arr[a]);