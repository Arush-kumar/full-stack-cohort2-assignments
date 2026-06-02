import axios from "axios"
import { useEffect, useState } from "react"
import UserCard from "./components/UserCard"
const App = () => {

  const [users, setUsers] = useState([])
  const getData = async()=> {
    
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response.data)
    
    setUsers(response.data)
  }

  useEffect(() => {
    getData()
  }, [])



  return (
    <div>
      
      <div className='all-cards'>
        {users.map(function (elem, idx) {
          return <div key={idx}>
            <UserCard elem={elem} />
          </div>
        })}
      </div>
    </div>
  )
}

export default App
