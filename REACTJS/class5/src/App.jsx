import { useState } from "react"

const App = () => {

  const [user, setUser] = useState("Alen")

  const User = () => {
    setUser("Alex")
  }
  
  return (
    <div className='h-screen bg-black text-white'>
      <h1 className="text-5xl">{user}</h1>
      <button onClick={User} 
      className="bg-amber-600 px-4 py-2  w-fit">
          Change User  
      </button>

    </div>
  )
}

export default App
