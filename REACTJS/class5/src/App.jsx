import { useState } from "react"

const App = () => {

  const [num, setNum] = useState(0)

  
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-2 bg-black text-white p-8'>
      <h1 className="text-8xl">{num}</h1>

      <button onClick={() => setNum(num + 1)} 
      className="rounded text-2xl bg-amber-600 px-4 py-2  w-fit"
      >
          Increment  
      </button>

      <button onClick={() => num > 0 ? setNum(num - 1):setNum(num)} 
            className="rounded text-2xl bg-amber-600 px-4 py-2  w-fit"
      >
          Decrement  
      </button>

    </div>
  )
}

export default App
