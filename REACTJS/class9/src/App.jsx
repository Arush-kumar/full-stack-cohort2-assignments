import axios from "axios"
const App = () => {

  const getData = async()=> {
    
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response.data[1].name)
    
  }

  return (
    <>
      <button onClick={getData} className="btn">Click</button>
    </>
  )
}

export default App
