import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MyContext from "./MyContext";

function Provider ({ children }) {
  const [products, setProducts] = useState([]);
  const [infoProduct, setInfoProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = "https://wine-back-test.herokuapp.com/products?page=1&limit=27";
      const results = await fetch(response).then((res) => res.json());
      // console.log(products);
      setProducts(results.items);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const InfoProducts = async () => {
      const response = "https://wine-back-test.herokuapp.com/products?page=1&limit=1";
      const results = await fetch(response).then((res) => res.json());
      console.log(infoProduct, "divbdssasds");
      setInfoProduct(results.items);
    };
    InfoProducts();
  }, []);

  const contextValue = {
    products,
    infoProduct,
  };

  return(
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.objectOf(Symbol).isRequired,
};