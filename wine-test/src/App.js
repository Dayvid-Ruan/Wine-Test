import React from "react";
import Provider from "./context/Provider";
import {Routes, Route, Navigate} from "react-router-dom";
import ProductsPage from "./pages/productsPage";
import ProductInfoPage from "./pages/productInfoPage";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={ <Navigate replace to="/products" /> } />
        <Route path="/products" element={ <ProductsPage /> } />
        <Route path="/product/:id" element={ <ProductInfoPage /> } />
      </Routes>
    </Provider>
  );
}

export default App;
