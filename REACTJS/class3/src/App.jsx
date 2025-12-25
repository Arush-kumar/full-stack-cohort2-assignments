import Card from "./components/Card"

const App = () => {

  const arr = ["sarthak", "aman", "rohit", "ritik"]

  return (
    <div className="h-full bg-black text-red-400">
      {arr.map((elem) => {
        return <Card user={elem} />
      })}
    </div>
  )
}

export default App
