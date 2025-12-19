// ---------------- NAV BAR ----------------
function NavBar() {
  const links = [
    React.createElement("h3", { key: 1 }, "Home"),
    React.createElement("h3", { key: 2 }, "Portfolio"),
    React.createElement("h3", { key: 3 }, "Services"),
    React.createElement("h3", { key: 4 }, "Blogs"),
  ];


  const logo = React.createElement("div", { className: "logo" },  React.createElement("img", {
      src: "./assets/logo.png",
      alt: "Hero",
    }),null);

  const navLeft = React.createElement("div",{ className: "nav_left" }, [logo, ...links]
  );

  const navRight = React.createElement(
    "div",{ className: "nav_right" },[
      React.createElement("h2", null, "Book A Call"),
      React.createElement("i", { className: "ri-arrow-right-up-line icon" }),
    ]
  );

  return React.createElement(
    "div",
    { className: "nav" },
    [navLeft, navRight]
  );
}

// ---------------- MAIN LEFT ----------------
function MainLeft() {
  // left vertical text
  const p1 = React.createElement("p", { className: "p1" }, "2025");
  const p2 = React.createElement("p", { className: "p2" }, "");
  const p3 = React.createElement("p", { className: "p3" }, "Product Designer");

  const innerLeftContent = React.createElement(
    "div",
    { className: "inner_left_content vertical_text" },
    [p1, p2, p3]
  );

  const innerLeft = React.createElement(
    "div",
    { className: "inner_left" },
    innerLeftContent
  );

  // stats block
  const div1Stats = React.createElement("div",{ className: "stats-wrapper" },React.createElement("div",{ className: "div1_in_div1" },
    [
      React.createElement(
        "div",
        { className: "text1" },
        [
          React.createElement("h4", null, "+"),
          React.createElement("h3", null, "200"),
        ]
      ),

      React.createElement("p", null, "Projects Completed"),
    ]
  )
);
  const div2Stats = React.createElement("div",{ className: "stats-wrapper" },React.createElement("div",{ className: "div1_in_div2" },
    [
      React.createElement(
        "div",
        { className: "text2" },
        [
          React.createElement("h4", null, "+"),
          React.createElement("h3", null, "50"),
        ]
      ),

      React.createElement("p", null, "Startups Raised"),
    ]
  )
);



  const stats = React.createElement(
    "div",
    { className: "div1" },
    [div1Stats, div2Stats]
  );

  // center text
  const center = React.createElement(
    "div",
    { className: "div2" },
    [
      React.createElement("h1", null, "Hello"),
      React.createElement("p", null, "- It's D.Nova a design wizard"),
    ]
  );

  // scroll
  const scroll = React.createElement(
    "div",
    { className: "div3" },
    [
      React.createElement("p", null, "Scroll down"),
      React.createElement("i", { className: "ri-arrow-down-line icon" }),
    ]
  );

  const innerRight = React.createElement(
    "div",
    { className: "inner_right" },
    [stats, center, scroll]
  );

  return React.createElement(
    "div",
    { className: "left_div" },
    [innerLeft, innerRight]
  );
}

// ---------------- MAIN RIGHT ----------------
function MainRight() {
  return React.createElement(
    "div",
    { className: "right_div" },
    React.createElement("img", {
      src: "./assets/img.png",
      alt: "Hero",
    })
  );
}

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

