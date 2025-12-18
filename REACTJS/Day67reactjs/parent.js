import box from "./app.js"
import circle from "./test.js"

var parent = () => React.createElement("div", null, [box(),circle()])

export default parent