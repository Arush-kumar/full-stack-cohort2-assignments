import { useParams } from "react-router-dom"


const CourseDetails = () => {

  const params = useParams()
  
  return (
    <>
      <h1 className="text-5xl whitespace-nowrap underline font-bold capitalize">{params.courseId} Course Details Page</h1>
    </>
  )
}

export default CourseDetails
