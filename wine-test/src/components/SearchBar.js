import React, { useState } from "react";


function SearchBar () {
  const [busca, setBusca] = useState("");

  return(
    <div>
      <input
        type="text"
        placeholder="Buscar"
        id="buscar"
        name="buscar"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;