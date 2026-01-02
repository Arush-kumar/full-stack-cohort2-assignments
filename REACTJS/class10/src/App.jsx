import { useEffect } from "react"
import axios from "axios"

const App = () => {

  const getData = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
    console.log(response.data.results[0].name);

  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      
    </div>
  )
}

export default App
