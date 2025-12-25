import { useState } from "react"

const App = () => {


  const arr  = ["Hitesh", "Sarthak", "Harsh", "Piyush"]

  const [num, setNum] = useState(0)

  
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-8 bg-black text-white p-8'>
      <h1 className="text-8xl">{arr[num]}</h1>

      <button onClick={() => {

        if(num < arr.length -1){

          setNum(num + 1)
        }
      }} 
      className="rounded text-2xl bg-amber-600 px-4 py-2  w-fit"
      >
          Change User  
      </button>

    </div>
  )
}

export default App
