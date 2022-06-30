import React from "react";

import NavBar from "../components/navBar";
import FilterPrice from "../components/filterPrice";
import ListProducts from "../components/listProducts";
import styled from "styled-components";


const Catalago = styled.div`
  margin-left: 25%;
  margin-bottom: 2%;
`;

function Products () {
  return (
    <div>
      <NavBar />
      <FilterPrice />
      <Catalago>
        <ListProducts />
      </Catalago>
    </div>
  );
}

export default Products;