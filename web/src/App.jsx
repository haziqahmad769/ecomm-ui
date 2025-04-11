import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ProductDetail from "./pages/product/ProductDetail";
import CartItem from "./pages/cart/CartItem";
import Checkout from "./pages/checkout/Checkout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path='/cart' element={<CartItem/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        
        
      </Routes>
    </div>
  );
}

export default App;
