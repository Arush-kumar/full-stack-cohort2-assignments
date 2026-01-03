import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Navbar from "./components/Navbar"
import Men from "./pages/Men"
import Women from "./pages/Women"
import RandomPage from "./pages/RandomPage"
import Courses from "./pages/Courses"
import Cohort1 from "./pages/Cohort1"
import AnyCourse from "./pages/AnyCourse"
import CourseDetails from "./pages/CourseDetails"
import PageNotFound from "./pages/PageNotFound"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-black text-white flex items-center justify-center pb-28" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/courses" element={<Courses />} />
        {/* Nested Routes */}
        <Route path="/product/men" element={<Men />} />
        <Route path="/product/women" element={<Women />} />
        <Route path="/courses/cohort1" element={<Cohort1 />} />

        {/* Dynamic Routes */}
        <Route path="/about/:id" element={<RandomPage />} />

        {/* Nested Dynamic Routes */}
        <Route path="/courses/:courseId" element={<AnyCourse />} />
        <Route path="/courses/:courseId/detail" element={<CourseDetails />} />

        {/* Not Found Page  */}
        <Route path="/*" element={<PageNotFound />} />
        
      </Routes>
    </div>
    </>
    
  )
}

export default App
