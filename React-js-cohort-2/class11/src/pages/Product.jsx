import { Link } from "react-router-dom"

const Product = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl whitespace-nowrap underline font-bold">Product Page</h1>

      <div className="flex gap-4 text-white"> 
        <Link to="/product/men" className="underline text-2xl">Men's Collection</Link>
        <Link to="/product/women" className="underline text-2xl">Women's Collection</Link>
      </div>
    </div>
  )
}

export default Product
