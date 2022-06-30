import React from "react";
import styled from "styled-components";

import logo from "../img/black.png";
import wineImg from "../img/Bitmap.png";
import busca from "../img/Busca.png";
import conta from "../img/conta.png";

function NavBar () {
  const Global = styled.div`
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  padding: 10px;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.35));
`;

  const Logo = styled.div`
  margin-left: 6%;
  margin-right: 10%;
  width: 102.95px;
  height: 31px;
  left: calc(50% - 102.95px/2 - 517.77px);
  top: calc(50% - 31px/2 - 0.62px);
  `;

  const DivPages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 48px;
  `;

  const Pages = styled.button`
  p {
    &:hover {
      color: #D14B8F;
    }
  }
  cursor: pointer;
  background-color: #FFFFFF;
  border: none;
  font-family: 'Neo Sans Std';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #555555;
  flex: none;
  order: 2;
  flex-grow: 0;
  `;
  const WineImg = styled.button`
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: #F6B554;
  margin-left: 50px;
  width: 56px;
  `;

  const AvatarImg = styled.button`
  cursor: pointer;
  border: none;
  background-color: #FFFFFF;
  margin-left: 50px;
  width: 56px;
  `;
  
  const Buscar = styled.button`
  cursor: pointer;
  margin-left: 200px;
  border: none;
  background-color: #FFFFFF;
  width: 56px;
  `;

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
        <Buscar><img src={busca} alt="Buscar" /></Buscar>
        <AvatarImg><img src={conta} alt="conta" /></AvatarImg>
        <WineImg><img src={wineImg} alt="Wine imagem"/></WineImg>
      </div>
    </Global>
  );
}

export default NavBar;