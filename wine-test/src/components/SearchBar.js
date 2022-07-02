import React, { useContext } from "react";
import MyContext from "../context/MyContext";


function SearchBar () {
  const { handleChange } = useContext(MyContext);

  return(
    <div>
      <input
        type="text"
        placeholder="Buscar"
        id="buscar"
        name=""
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;