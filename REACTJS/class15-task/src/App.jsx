import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [productData, setProductData] = useState([]);
  const getData = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/`);

    setProductData(response.data);
  };
  const getFirstData = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(response.data);
  };

  useEffect(function () {
    getData();
    getFirstData(8);
  }, []);

  return (
    <div className="allProduct flex flex-wrap">
      {productData.map(function (product, idx) {
        return (
          <a key={idx} target="_blank" href="#">
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
          </a>
        );
      })}
    </div>
  );
};

export default App;
