import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import ProductsPage from "./pages/productsPage";
import ProductInfo from "./pages/productInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate replace to="/products" /> } />
      <Route path="/products" element={ <ProductsPage /> } />
      <Route path="/product/info" element={ <ProductInfo /> } />
    </Routes>
  );
}

export default App;
