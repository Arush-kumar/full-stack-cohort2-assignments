import { useContext } from "react"
import { UserDataContext } from "../context/UserContext"

const Navbar = () => {
  
  const data = useContext(UserDataContext)
  console.log(data);
  
  return (
    <div className="h-11 bg-emerald-600 w-full">
      <h1>This is Navbar</h1>
      <h2>Name: {data}</h2>
    </div>
  )
}

export default Navbar
