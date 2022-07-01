import React, { useContext } from "react";
import MyContext from "../context/MyContext";

import Header from "../components/Header";
import FilterPrice from "../components/filterPrice";
import ListProducts from "../components/listProducts";
import {QuantProduct, Catalago } from "../styles/productPageStyle";

function Products () {
  const { products } = useContext(MyContext);

  return (
    <div>
      <Header />
      <FilterPrice />
      <Catalago>
        {
          <QuantProduct>{`${products.length} produtos encontrados`}</QuantProduct >
        }
        <ListProducts />
      </Catalago>
    </div>
  );
}

export default Products;