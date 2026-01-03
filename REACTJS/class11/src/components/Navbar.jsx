import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 px-12 flex justify-between text-white">
      <h3>Navbar</h3>
      <input type="text" placeholder="search" className="border px-2 rounded"/>
      <div className="text-white text-lg text-semibold decoration-none flex gap-12">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
        <Link to='/product/men'>Men</Link>
        <Link to='/product/women'>Women</Link>

      </div>
    </div>
  )
}

export default Navbar
