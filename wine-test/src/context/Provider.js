import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MyContext from "./MyContext";

function Provider ({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = "https://wine-back-test.herokuapp.com/products?page=1&limit=27";
      const results = await fetch(response).then((res) => res.json());
      setProducts(results.items);
      console.log(products);
    };
    getProducts();
  }, []);

  const contextValue = {
    products
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