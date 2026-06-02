import { createContext, useEffect, useState } from "react";
import { getAllProductData } from "../api/productApi";

export const ProductContextData = createContext()
const ProductContext = (props) => {
  
const [productData, setProductData] = useState([]);


  const setData = async () => {    
    setProductData(await getAllProductData())
  }

  useEffect(function () {
    setData();
  }, []);

  return (
    <ProductContextData.Provider value={productData}>
      {props.children}
    </ProductContextData.Provider>
  )
}

export default ProductContext
