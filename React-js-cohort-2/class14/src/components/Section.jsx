import { useContext } from "react";
import { PostDataContext } from "./PostContext";
const Section = () => {

    const data = useContext(PostDataContext)
  // console.log(data[0].username);

  return (
    <div className="h-[84vh] bg-zinc-700 w-full">
      <h1>Section</h1>
      <div className="h-30 w-40 bg-white m-auto mt-10 p-4 rounded-lg">
        <h2>Name: {data[0].username}</h2>
        <p>Title: {data[0].title}</p>
      </div>
      
    </div>
  )
}

export default Section
