import { useContext } from "react"
import { UserDataContext } from "../context/UserContext"

const Footer = () => {
  const data = useContext(UserDataContext)
  return (
    <div className="h-10 bg-cyan-950 w-full p-4">
      <h1>Footer</h1>
      <p>Name {data}</p>
    </div>
  )
}

export default Footer
