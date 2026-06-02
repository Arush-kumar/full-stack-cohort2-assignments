import { useContext } from "react"
import { ProductContextData } from "../context/ProductContext"
import { useParams } from "react-router-dom"

function ProductDetails() {

  const productData = useContext(ProductContextData)

  const { productId } = useParams()


  let selectedData = ''

  if(productData.length>0) {
    selectedData = productData.find(product=>product.id==productId)
    // console.log(selectedData);
  }
  

  return (
    <div className="flex items-center justify-center flex-col bg-zinc-300 w-[100vw] h-[100vh]">
      {/* ProductDetails Page  */}
      <div className="flex w-[400px] h-[220px] gap-6 rounded-xl bg-gray-600/20 py-8 p-2">
        <img
                src={selectedData.image}
                alt={selectedData.title}
                className="h-40 w-40 rounded ml-4"
              />
                <div className="flex items-start gap-1 justify-center flex-col">
                  <p className="text-lg decoration-none text-orange-400">
                  ${selectedData.price}
                </p>
                <p className="w-45 text-sm decoration-none text-white p-1">
                  {selectedData.title}
                </p>
            
                </div>
      </div>
    </div>
  )
}

export default ProductDetails
