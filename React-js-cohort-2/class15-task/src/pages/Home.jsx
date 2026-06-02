import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate()
  
  return (
    <div className="absolute top-[45vh] left-[50vw] transform -translate-1/2">
      <h1 className="font-bold text-white text-6xl mb-4">Home Page</h1>
      <button 
      className="bg-amber-400 text-xl font-semibold px-4 py-2 rounded-lg border cursor-pointer"
      onClick={()=>navigate('/products')}
      >Explore Products</button>
    </div>
  )
}

export default Home
