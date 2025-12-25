import { useState } from "react"

const App = () => {



  const [marks, setMarks] = useState([28, 91, 85, 80, 27])

  function graceStudent(){

    const newMarks = marks.map((elem)=>{
      if(elem>90) return elem
      return elem + 5
    })

    setMarks(newMarks)
  }

  
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-8 bg-black text-white p-8'>

      {marks.map(function(elem, idx) {
        return <h1 key={idx}>Student {idx+1} = {elem} {elem>32?'PASS':'FAIL'}</h1>
      })}

      <button onClick={graceStudent}
      className="rounded text-2xl bg-amber-600 px-4 py-2  w-fit"
      >
          Give them grace  
      </button>

    </div>
  )
}

export default App
