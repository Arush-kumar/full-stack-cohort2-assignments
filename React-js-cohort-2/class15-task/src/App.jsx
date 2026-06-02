import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom"
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  

  return (
    <div className="h-screen w-full bg-zinc-900 text-white">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:productId' element={<ProductDetails/>} />
      </Routes>
    </div>
  );
};

export default App;
