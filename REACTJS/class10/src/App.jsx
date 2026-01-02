import axios from "axios"
const App = () => {

  const getData = async() => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data.data[0].name)
    
  }
  return (
    <div className="h-screen w-full bg-black text-white">
      <button onClick={getData}>click</button>
    </div>
  )
}

export default App
