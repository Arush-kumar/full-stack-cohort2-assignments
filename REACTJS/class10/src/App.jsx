import { useEffect, useState } from "react"

const App = () => {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('useEffect called')
  },[name])

  return (
    <div className="bg-black h-screen text-white">
      <input 
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter Your Name"
      type="text" />

      <h1>{count}</h1>
      <button
      onClick={()=>{setCount(count + 1)}}
      >Increment</button>
    </div>
  )
}

export default App
