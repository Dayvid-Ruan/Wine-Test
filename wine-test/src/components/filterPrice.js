import React from "react";
import {FilterPriceGenerate, TitleFilter, Filter, LiPrice } from "../styles/filterPriceStyle";

function FilterPrice () {
  return(
    <FilterPriceGenerate>
      <ul>
        <TitleFilter>Refine sua busca</TitleFilter>
        <LiPrice><Filter>Por preço</Filter></LiPrice>
        <LiPrice><input type="radio" name="radioCheck" value="radio" />Até R$40</LiPrice>
        <LiPrice><input type="radio" name="radioCheck" value="radio" />R$40 a R$60</LiPrice>
        <LiPrice><input type="radio" name="radioCheck" value="radio" />R$100 a R$200</LiPrice>
        <LiPrice><input type="radio" name="radioCheck" value="radio" />R$200 a R$500</LiPrice>
        <LiPrice><input type="radio" name="radioCheck" value="radio" />Acima de R$500</LiPrice>
      </ul>
    </FilterPriceGenerate>
  );
}

export default FilterPrice;