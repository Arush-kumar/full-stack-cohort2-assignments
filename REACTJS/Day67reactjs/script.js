const h1 = () => {
  return React.createElement("h1", null, "Hello for react") 
}

var root = ReactDOM.createRoot(document.querySelector("#container"))

root.render(h1())