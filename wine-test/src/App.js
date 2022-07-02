import React from "react";
import Provider from "./context/Provider";
import {Routes, Route, Navigate} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductInfoPage from "./pages/ProductInfoPage";
import ClubPage from "./pages/ClubPage";
import ProducersPage from "./pages/ProducersPage";
import OffersPage from "./pages/OffersPage";
import EventsPage from "./pages/EventsPage";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={ <Navigate replace to="/produtos" /> } />
        <Route path="/produtos" element={ <ProductsPage /> } />
        <Route path="/clube" element={ <ClubPage /> } />
        <Route path="/produtores" element={<ProducersPage />} />
        <Route path="/ofertas" element={<OffersPage /> } />
        <Route path="/eventos" element={<EventsPage /> } />
        <Route path="/produtos/:id" element={ <ProductInfoPage /> } />
      </Routes>
    </Provider>
  );
}

export default App;
