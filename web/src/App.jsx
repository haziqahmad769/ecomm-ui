import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ProductDetail from "./pages/product/ProductDetail";
import CartItem from "./pages/cart/CartItem";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path='/cart' element={<CartItem/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
