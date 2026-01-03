import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Navbar from "./components/Navbar"
import Men from "./pages/Men"
import Women from "./pages/Women"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-black text-white flex items-center justify-center pb-28" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/men" element={<Men />} />
        <Route path="/product/women" element={<Women />} />
      </Routes>
    </div>
    </>
    
  )
}

export default App
