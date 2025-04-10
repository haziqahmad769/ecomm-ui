import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ProductDetail from "./pages/product/ProductDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-detail" component={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
