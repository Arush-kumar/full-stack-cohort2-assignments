
// NAVBAR COMPONENT
const NavBar = function NavBar() {
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

export default NavBar