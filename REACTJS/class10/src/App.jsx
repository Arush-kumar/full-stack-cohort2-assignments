import { useEffect, useState } from "react"
import axios from "axios"
const App = () => {

  const [user, setUser] = useState('')
  const [num, setNum] = useState(0)
  const getData = async () => {
    const response = await axios.get("https://randomuser.me/api/")
    setUser((response.data.results[0].name.first)+" "+(response.data.results[0].name.last))
  }

  useEffect(() => {
    getData()
  }, [num])
  


  return (
    <div className="h-[15vw] w-1/3 bg-black text-white text-3xl text-center pt-4">
      {user}
      {/* <h1>{num}</h1> */}
      <br /> <br />
      <button id='btn' onClick={() => setNum(num+1)}>click here</button>
    </div>
  )
}

export default App
