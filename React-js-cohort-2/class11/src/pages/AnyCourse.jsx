import { useParams } from "react-router-dom"

const AnyCourse = () => {
  const params =useParams()
  // console.log(params.courseId);
  
  return (
    <>
      <h1 className="text-5xl whitespace-nowrap underline font-bold capitalize">{params.courseId} Course Page</h1>
    </>
  )
}

export default AnyCourse
