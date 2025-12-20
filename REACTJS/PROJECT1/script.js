import NavBar from "./navbar.js";
import MainLeft from "./mainleft.js";
import MainRight from "./mainrigth.js"

// ---------------- MAIN SECTION ----------------
function MainSection() {
  return React.createElement(
    "div",
    { className: "content" },
    [MainLeft(), MainRight()]
  );
}

// ---------------- APP ----------------
const App = React.createElement(
  "main",
  { id: "main" },
  [NavBar(), MainSection()]
);

ReactDOM.render(App, document.getElementById("root"));

