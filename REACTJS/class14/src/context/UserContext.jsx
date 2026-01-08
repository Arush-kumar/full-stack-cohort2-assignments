import { createContext } from "react"

export const UserDataContext = createContext();
const UserContext = (props) => {

  const user = "Arush";

  return (
    <UserDataContext.Provider value={user}>
      {props.children}
    </UserDataContext.Provider>
  )
}

export default UserContext
