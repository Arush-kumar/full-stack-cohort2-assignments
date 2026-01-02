import { useEffect, useState } from "react"
import axios from "axios"
const App = () => {

  const [allPokemons, setAllPokemons] = useState([])
  const getData = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
    // console.log(response.data.results[0].name);
    setAllPokemons(response.data.results)
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div className="h-screen bg-black text-white text-3xl">
      {/* <button onClick={getData}>click</button> */}

      {
        allPokemons.map((elem) => {
          return <h1>{elem.name}</h1>
        })
      }
    </div>
  )
}

export default App
