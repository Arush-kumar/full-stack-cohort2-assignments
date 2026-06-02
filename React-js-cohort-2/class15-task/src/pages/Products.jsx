import { useContext } from "react"
import { ProductContextData } from "../context/ProductContext"
import { Link } from "react-router-dom"

const Products = () => {

  const productData = useContext(ProductContextData)


  let renderData = 'Loading...'

  if(productData.length>0) {
    renderData = productData.map(function (product, idx) {
        return (
          <Link key={idx} to={`/products/${product.id}`}>
            <div className="flex flex-col w-fit bg-zinc-800 p-4 m-2 rounded-2xl">
              <div>
                <img
                src={product.image}
                alt={product.title}
                className="h-40 w-40 rounded"
              />
                <p className="text-lg decoration-none text-orange-400">
                  ${product.price}
                </p>
                <p className="w-45 text-sm decoration-none text-white p-1">
                  {product.title}
                </p>
            
              </div>
            </div>
          </Link>
        );
      })
  }

  return (
    <div className="allProduct flex flex-wrap">
      {renderData}
    </div>
  )
}

export default Products
