import { useState } from "react"

const App = () => {


  const [title, setTitle] = useState("")

  const [allUsers, setAllUsers] = useState([])

  const submitHanderler = (e) => {
    e.preventDefault()


    const newAllUsers = [...allUsers]
    newAllUsers.push(title)
    setAllUsers(newAllUsers)
    console.log(newAllUsers);
    
    setTitle("")  
  }

  return (
    <div>

      <form onSubmit={(e) => {
        submitHanderler(e)
      }}>

      <input 
      type="text"
      placeholder="Enter Name"
      required
      value={title}

      onChange={(e) => {

        // console.log("hello");
        setTitle(e.target.value)
      }}
      />
      
      <button>Submit</button>
      </form>


      {
        allUsers.map((elem, idx) => {
          return (
            <div key={idx}>
              <h2>{elem}</h2>
            </div>
          )
        })
      }

    </div>
  )
}

export default App
