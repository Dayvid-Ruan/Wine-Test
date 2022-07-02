import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import MyContext from "./MyContext";

function Provider ({ children }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [infoProduct, setInfoProduct] = useState([]);
  const [filters, setFilters] = useState({ 
    filterByName: {
      name: ""},
  });

  useEffect(() => {
    const getProducts = async () => {
      const response = "https://wine-back-test.herokuapp.com/products?page=1&limit=27";
      const results = await fetch(response).then((res) => res.json());
      setProducts(results.items);
      setFilterProduct(results.items);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const InfoProducts = async () => {
      const response = "https://wine-back-test.herokuapp.com/products?page=1&limit=1";
      const results = await fetch(response).then((res) => res.json());
      setInfoProduct(results.items);
    };
    InfoProducts();
  }, []);

  function handleChange ({ target: { value } }) {
    const product = products.filter(({ name }) => name.toLowerCase()
      .includes(value.toLowerCase()));
    setFilterProduct(product);
    
    setFilters({
      ...filters,
      filterByName: {
        name: value, 
      },
    });
  }

  function handlerClick (e) {
    e.preventDefault();
    navigate("/products");
  }

  function hanlderClickInfo(e) {
    e.preventDefault();
    navigate("/product/:id");
  }

  const contextValue = {
    products,
    infoProduct,
    filterProduct,
    handleChange,
    handlerClick,
    hanlderClickInfo,
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