import { set } from "mongoose"
import { useState } from "react"

const App = () => {


  const [title, setTitle] = useState("")
  const [email, setEmail] = useState("")

  const [allUsers, setAllUsers] = useState([])

  const submitHanderler = (e) => {
    e.preventDefault()


    const newAllUsers = [...allUsers]
    newAllUsers.push(title, email)
    setAllUsers(newAllUsers)
  
    
    setTitle("") 
    setEmail("") 
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
      <input 
      type="text"
      placeholder="Enter Email"
      required
      value={email}

      onChange={(e) => {

        // console.log("hello");
        setEmail(e.target.value)
      }}
      />
      
      <button>Submit</button>
      </form>


      {
        allUsers.map((elem, idx) => {
          return (
            <div key={idx}>
              <h2>{elem} {email}</h2>
            </div>
          )
        })
      }

    </div>
  )
}

export default App
