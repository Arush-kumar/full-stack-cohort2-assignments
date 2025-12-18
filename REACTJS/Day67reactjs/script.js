var h1 = React.createElement("h1", null, "Hello World")
var h2 = React.createElement("h2", null, "Hello from h2")
var p = React.createElement("p", null, "Hello from paragraph")

var div = React.createElement("div", { id: "main" }, [h1, h2,p])

var root = ReactDOM.createRoot(document.querySelector("#container"))

root.render(div)