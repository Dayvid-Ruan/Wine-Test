import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { 
  Global, Card, ImgProduct, Name, PriceAndDiscount,
  PriceNotMemberAndDiscount, PriceMemberAndText, TextPriceMember,
  PriceMember, PriceNotMember, Discount, DivButton, ButtonAdd, DivPages, ButtonPages
} from "../styles/listProductsStyle";
import MyContext from "../context/MyContext";

function ListProducts () {
  const { products } = useContext(MyContext);
  const navigate = useNavigate();
  const [itensPerPage, ] = useState(9);
  const [currentPage, setCurrebtPage ] = useState(0);

  const pages = Math.ceil(products.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = products.slice(startIndex, endIndex);


  async function hanlderClick(e) {
    e.preventDefault();
    console.log(products);
    navigate("/product/:id");
  }

  async function handlerClickAdd (e) {
    e.preventDefault();
    currentItens.filter(pro => (
      pro.id
    ));
  }

  return(
    <div>
      {
        currentItens.map(product => (
          <Global key={product.id}>
            <Card
              onClick={ hanlderClick }
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
                onClick={handlerClickAdd}
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

ListProducts.defaultProps = {
  orderInfo: {},
};

ListProducts.propTypes = {
  orderInfo: PropTypes.shape(PropTypes.object),
};