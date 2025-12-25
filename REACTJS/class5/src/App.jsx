import { useState } from "react"

const App = () => {

  const [num, setNum] = useState(0)

  const inc = () => {
    setNum(num + 1)
  }
  
  return (
    <div className='h-screen bg-black text-white'>
      <h1 className="text-5xl">{num}</h1>
      <button onClick={inc} 
      className="bg-amber-600 px-4 py-2  w-fit">
          Increment  
      </button>

    </div>
  )
}

export default App
