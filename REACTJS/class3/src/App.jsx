import Button from "./components/Button"
import Card from "./components/Card"

const App = () => {

  // const arr = ["sarthak", "aman", "rohit"]

  return (
    <div className="h-full bg-black">

      <Card user="Sarthak" age={30}/>
      <Card user="Aman" age={22}/>
      <Card user="Rohit" age={20}/>
      <Button text="Click"/>
      <Button text="Explore Now"/>
      <Button text="Buy Now"/>
      <Button text="Book Now"/>
    </div>
  )
}

export default App
