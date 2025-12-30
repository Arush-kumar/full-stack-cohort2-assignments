import { set } from "mongoose";
import { useState } from "react";
// import Card from "./components/Card";

const App = () => {

  const [userName, setUserName] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [userRole, setUserRole] = useState("")
  const [userDescription, setUserDescription] = useState("")

  const [allUsers, setAllUsers] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(userName, imageUrl, userRole, userDescription);

    // 1st method
    // const oldUsers = [...allUsers]
    // oldUsers.push({userName, imageUrl, userRole, userDescription})
    // setAllUsers(oldUsers)

    // 2nd method 
    setAllUsers([...allUsers, {userName, imageUrl, userRole, userDescription}])
    
    // console.log(oldUsers);
    

    setUserName("")
    setImageUrl("")
    setUserRole("")
    setUserDescription("")
    
  }

  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers]
    copyUsers.splice(idx, 1)
    console.log(copyUsers);
    
    setAllUsers(copyUsers)
  }


  return (
    <div className="min-h-screen w-full bg-black text-gray-100 ">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
      className="flex justify-center flex-wrap"
      >  
        <input 
          value={userName}
          onChange={(e)=>{
            setUserName(e.target.value)          
        }}
        className="text-xl font-semibold border-2 px-4 py-2 m-4 rounded w-[45%]" 
        type="text" 
        placeholder="Enter your name" 
        />

        <input 
        value={imageUrl}
        onChange={(e)=>{
          setImageUrl(e.target.value)
        }}
        className="text-xl font-semibold border-2 px-4 py-2 m-4 rounded w-[45%]" 
        type="text" 
        placeholder="Image URL" 
        />

        <input 
        value={userRole}
        onChange={(e)=>{
          setUserRole(e.target.value)
        }}
        className="text-xl font-semibold border-2 px-4 py-2 m-4 rounded w-[45%]" 
        type="text" 
        placeholder="Enter Role" 
        />

        <input 
        value={userDescription}
        onChange={(e)=>{
          setUserDescription(e.target.value)
        }}
        className="text-xl font-semibold border-2 px-4 py-2 m-4 rounded w-[45%]" 
        type="text" 
        placeholder="Enter Description" 
        />

        
        <button 
        className="text-xl font-semibold border-none px-10 py-2 bg-emerald-500 active:scale-97 transition-all cursor-pointer mt-4 rounded">Create User</button>
      </form>


      {/* Card Component Use */}
        <div className="px-4 py-4 flex flex-wrap">
      {
          allUsers.map(function(user, idx){
            return (
              <div key={idx} className="bg-gray-700 lg:bg-amber-300 md:bg-emerald-200 sm:bg-sky-200 m-4 p-6 rounded w-1/4 h-auto leading-tight">
                <img src={user.imageUrl} alt="" className="h-20 w-20 rounded-full mb-4 object-center object-cover"/>
                <h2 className="text-3xl font-semibold mb-2">{user.userName}</h2>
                <h3 className="text-base text-blue-400 font-semibold ">{user.userRole}</h3>
                <p className="text-sm font-medium leading-tight text-wrap">{user.userDescription}</p>

                <button onClick={()=>deleteHandler(idx)}
                className="px-4 py-2 rounded text-xs font-bold bg-red-500 mt-6 active:scale-95 cursor-pointer">Delete</button>
              </div>
            )
          })
        }
    </div>
        
      </div>
  )
}

export default App


{/* <Card allUsers={allUsers} deleteHandler={()=>deleteHandler(idx)}/> */}