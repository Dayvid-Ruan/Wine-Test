import React from "react";
import styled from "styled-components";

function FilterPrice () {

  const FilterPrice = styled.div`
  // margin-left: 2%;
  // position: absolute;
width: 256px;
height: 24px;
left: 160px;
top: calc(50% - 24px/2 - 619px);
  `;

  const TitleFilter = styled.h4`
  font-family: 'Neo Sans Std';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  `;

  const Filter = styled.p`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #333333;
  `;

  const LiPrice = styled.li`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #1D1D1B;
  `;

  return(
    <FilterPrice>
      <ul>
        <TitleFilter>Refine sua busca</TitleFilter>
        <LiPrice><Filter>Por preço</Filter></LiPrice>
        <LiPrice><input type="radio" value="Até R$40" />Até R$40</LiPrice>
        <LiPrice><input type="radio" value="R$40 a R$60"/>R$40 a R$60</LiPrice>
        <LiPrice><input type="radio" value="R$100 a R$200" />R$100 a R$200</LiPrice>
        <LiPrice><input type="radio" value="R$200 a R$500" />R$200 a R$500</LiPrice>
        <LiPrice><input type="radio" value="Acima de R$500" />Acima de R$500</LiPrice>
      </ul>
    </FilterPrice>
  );
}

export default FilterPrice;