import axios from 'axios'
import { useEffect, useState } from 'react';

const App = () => {

  const [product, setProduct] = useState([])
  const getData = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/`)
    
    setProduct(response.data)
  }
  const getFirstData = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log(response.data); 
  }

  
  useEffect(function(){
    getData()
  },[])

  return (
    <div>
      {}
    </div>
  )
}

export default App
