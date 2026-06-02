import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Sections from "./components/Sections"

const App = () => {
  return (
    <div className="h-screen w-full bg-black">
      <Navbar />
      <Sections />
      <Footer />
    </div>
  )
}

export default App
