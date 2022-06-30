import React from "react";
import Provider from "./context/Provider";
import {Routes, Route, Navigate} from "react-router-dom";
import ProductsPage from "./pages/productsPage";
import ProductInfo from "./pages/productInfo";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={ <Navigate replace to="/products" /> } />
        <Route path="/products" element={ <ProductsPage /> } />
        <Route exact path="/product/:id" element={ <ProductInfo /> } />
      </Routes>
    </Provider>
  );
}

export default App;
