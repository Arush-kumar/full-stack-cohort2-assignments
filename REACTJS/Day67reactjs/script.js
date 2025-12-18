var h1 = React.createElement("h1", {id:"heading1"}, "Hello World")
var h2 = React.createElement("h2", {class:"heading2"}, "Hello from h2")
var p = React.createElement("p", {id:"para", className:"para-class"}, "Hello from paragraph")

var div = React.createElement("div", { id: "main" }, [h1, h2,p])

var root = ReactDOM.createRoot(document.querySelector("#container"))

root.render(div)