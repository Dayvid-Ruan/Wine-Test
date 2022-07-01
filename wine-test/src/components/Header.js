import React, { useState } from "react";
import { Global, Logo, DivPages, Pages, WineImg, AvatarImg, Buscar} from "../styles/HeaderStyle";

import logo from "../img/black.png";
import wineImg from "../img/Bitmap.png";
import buscaImg from "../img/Busca.png";
import conta from "../img/conta.png";
import SearchBar from "./SearchBar";

function Header () {
  const [showInput, setShowInput] = useState(false);

  return (
    <Global>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <DivPages>
        <Pages><p>Clube</p></Pages>
        <Pages><p>Loja</p></Pages>
        <Pages><p>Prdutores</p></Pages>
        <Pages><p>Ofertas</p></Pages>
        <Pages><p>Eventos</p></Pages>
      </DivPages>
      <div>
        <Buscar
          id="Buscar"
          type="button"
          onClick={ () => {
            setShowInput(!showInput);
          } }
        >
          <img src={buscaImg} alt="Buscar" />
        </Buscar>
        {showInput &&  (
          <div>
            <SearchBar />
          </div>
        )}
      </div>
      <AvatarImg><img src={conta} alt="conta" /></AvatarImg>
      <WineImg><img src={wineImg} alt="Wine imagem"/></WineImg>
    </Global>
  );
}

export default Header;