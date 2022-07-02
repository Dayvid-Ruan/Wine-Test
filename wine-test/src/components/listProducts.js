import React, { useContext, useState } from "react";
import { 
  Global, Card, ImgProduct, Name, PriceAndDiscount,
  PriceNotMemberAndDiscount, PriceMemberAndText, TextPriceMember,
  PriceMember, PriceNotMember, Discount, DivButton, ButtonAdd, DivPages, ButtonPages
} from "../styles/listProductsStyle";
import MyContext from "../context/MyContext";

function ListProducts () {
  const { filterProduct, handerClickInfo } = useContext(MyContext);
  const [itensPerPage, ] = useState(9);
  const [currentPage, setCurrebtPage ] = useState(0);

  const pages = Math.ceil(filterProduct.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = filterProduct.slice(startIndex, endIndex);

  return(
    <div>
      {
        currentItens.map(product => (
          <Global key={product.id}>
            <Card
              onClick={ handerClickInfo }
            >
              <ImgProduct src={product.image } />
              <Name>{ product.name }</Name>
              <PriceAndDiscount>
                <PriceNotMemberAndDiscount>R${product.price.toFixed(2) }</PriceNotMemberAndDiscount>
                <Discount>{ product.discount }%OFF</Discount>
              </PriceAndDiscount>
              <PriceMemberAndText>
                <TextPriceMember>SÓCIO WINE</TextPriceMember>
                <PriceMember>R${ product.priceMember.toFixed(2) }</PriceMember>
              </PriceMemberAndText>
              <PriceNotMember>NÂO SÓCIO R${ product.priceNonMember.toFixed(2) }</PriceNotMember>
            </Card>
            <DivButton>
              <ButtonAdd
              >Adicionar</ButtonAdd>
            </DivButton>
          </Global>
        ))
      }
      <DivPages>
        {Array.from(Array(pages), (item, index) => {
          return(
            <ButtonPages
              value={index}
              onClick={
                (e) =>  setCurrebtPage(Number(e.target.value)
                )
              }>
              {index +1}
            </ButtonPages>
          );
        })}
      </DivPages>
    </div>
  );
}

export default ListProducts;