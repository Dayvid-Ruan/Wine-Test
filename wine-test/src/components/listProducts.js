import React, { useContext } from "react";
import styled from "styled-components";
import MyContext from "../context/MyContext";

function ListProducts () {
  const { products } = useContext(MyContext);
  console.log(products);

  const Global = styled.div`
  display: inline-block;
  `;

  const Card = styled.button`

  width: 250px;
  margin: 15px;
  background: #FFFFFF;
  border: none;
  cursor: pointer;
  box-shadow: 1px 9.73384px 14.6008px rgb(0 0 0 / 10%);
  `;

  const ImgProduct = styled.img`
  width: 80%
  `;

  const Name = styled.h3`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.222488px;
  color: #1D1D1B;
  `;

  const PriceAndDiscount = styled.div`
  display: flex;
  justify-content: center;
  `;

  const PriceNotMemberAndDiscount = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  text-decoration-line: line-through;
  color: #888888;
  `;

  const PriceMemberAndText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  `;

  const TextPriceMember = styled.p`
  text-align: right;
  text-transform: uppercase;
  color: #1D1D1B;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  `;

  const PriceMember = styled.p`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 10px;
  color: #B6116E;
  margin-left: 5px;
  `;

  const PriceNotMember = styled.div`
  font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
text-transform: uppercase;
color: #888888;
  `;

  const Discount = styled.div`
  margin-left: 2%;
  background: #F79552;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 1.94677px;
  `;

  const DivButton = styled.div`
  display: flex;
  justify-content: center;
  `;
  const ButtonAdd = styled.button`
  width: 90%;
  border: none;
  height: 39.36px;
  display: flex;
  justify-content: center;
align-items: center;
text-align: center;
font-feature-settings: 'liga' off;
flex: none;
order: 1;
flex-grow: 0;
color: #FFFFFF;

  font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
  top: 348px;
  background: #7EBC43;
  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
  border-radius: 3.89354px;
  `;

  return(
    <div>
      {
        products?.map(product => (
          <Global key={product.id}>
            <Card>
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
              <ButtonAdd>Adicionar</ButtonAdd>
            </DivButton>
          </Global>
        ))
      }
    </div>
  );
}

export default ListProducts;