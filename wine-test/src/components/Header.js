import React, { useContext, useState } from "react";
import MyContext from "../context/MyContext";
import { Global, Logo, DivPages, Pages, WineImg, AvatarImg, Buscar} from "../styles/HeaderStyle";

import logo from "../img/black.png";
import wineImg from "../img/vazio.png";
import buscaImg from "../img/Busca.png";
import conta from "../img/conta.png";
import SearchBar from "./SearchBar";

function Header () {
  const [showInput, setShowInput] = useState(false);
  const { 
    handlerClickProducts,
    handerClickClub,
    handerClickEvents,
    handerClickOffers,
    handerClickProducers} = useContext(MyContext);

  return (
    <Global>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <DivPages>
        <Pages onClick={handerClickClub}><p>Clube</p></Pages>
        <Pages onClick={handlerClickProducts}><p>Loja</p></Pages>
        <Pages onClick={handerClickProducers}><p>Prdutores</p></Pages>
        <Pages onClick={handerClickOffers}><p>Ofertas</p></Pages>
        <Pages onClick={handerClickEvents}><p>Eventos</p></Pages>
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
      <WineImg><img src={wineImg} alt="Wine imagem" /></WineImg>
    </Global>
  );
}

export default Header;