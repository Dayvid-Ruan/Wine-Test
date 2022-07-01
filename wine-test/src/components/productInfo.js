import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import { useNavigate } from "react-router-dom";
import frame from "../img/Frame 36.png";
import styled from "styled-components";


function ProductInfo () {
  const { infoProduct } = useContext(MyContext);
  const navigate = useNavigate();

  async function handlerClick (e) {
    e.preventDefault();
    navigate("/products");
  }

  const Global = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 20%;
  margin-bottom: 5%;
  width: 75%
  `;

  const ColumInfo = styled.div`
  display: flex;
  align-items: center;
  `;

  const Sumary = styled.div`
  display: flex;
  `;
  const TextInfo1 = styled.p`
  margin: 5px;
  color: #C81A78;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  `;
  const TextInfo2 = styled.p`
  margin: 5px;
  color: #C81A78;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  `;
  const TextInfo3 = styled.p`
  margin: 5px;
  color: #888888;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  `;

  const Arrow = styled.p`
  marign: 5px;
  color: #888888;
  width: 10px;
  `;

  const ButtonFrame = styled.button`
  border: none;
  cursor: pointer;
  margin-top: 30px;
  margin-left: 50px;
  background: #F5F8FA;
  `;

  const NameInfo = styled.h3`
  margin: 0px;
  font-family: 'Neo Sans Std';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  `;

  const CommentSommelier = styled.h5`
  font-family: 'Neo Sans Std';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  `;

  const Comment = styled.p`
  font-family: 'Saira';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  `;
  const ButtonAdicionar = styled.button`
  cursor: pointer;
  border: none;
  background: #7EBC43;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  width: 60%;
  margin-top: 30px;
  padding: 15px;
  font-weight: 700;
  color:  #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

  const ButtonAdd = styled.button`
  cursor: pointer;
  border: 1px solid white;
  border-radius: 100%;
  color: white;
  margin-right: 15px;
  background: #7EBC43;
  `;

  const ButtonSub = styled.button`
  cursor: pointer;
  border: 1px solid white;
  border-radius: 100%;
  margin-right: 15px;
  margin-left: 15px;
  color: white;
  background: #7EBC43;
  `;

  const PriceMember = styled.p`
  font-weight: 900;
  margin: 0;
  line-height: 32px;
  font-family: 'Lato';
  font-style: normal;
  font-size: 24px;
  color: #C81A78;
  `;

  const PriceNotMember = styled.div`
  font-family: 'Lato';
  font-style: normal;
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #888888;
  `;

  return(
    <div>
      <ButtonFrame
        onClick={ handlerClick}
      >
        <img src={frame} alt="Voltar" />
      </ButtonFrame>
      {
        infoProduct.map(product => (
          <Global key={product.id}>
            <div >
              <img src={product.image} />
            </div>
            <div>
              <ColumInfo>
                <TextInfo1>{product.type}</TextInfo1>
                <Arrow>{">"}</Arrow>
                <TextInfo2>{product.country}</TextInfo2>
                <Arrow>{">"}</Arrow>
                <TextInfo3>{product.region}</TextInfo3>
              </ColumInfo>
              <div>
                <NameInfo>{product.name}</NameInfo>
                <Sumary>
                  <p>{product.country}</p>
                  <p>{product.type}</p>
                  <p>{product.classification}</p>
                  <p>{product.size}</p>
                  <p>{product.rating}</p>
                  <p>({product.avaliations})</p>
                </Sumary>
              </div>
              <div>
                <PriceMember>R${product.price}</PriceMember>
                <PriceNotMember>NÂO SÓCIO R${product.priceNonMember}/UN.</PriceNotMember>
              </div>
              <div>
                <CommentSommelier>Comentário da sommelier</CommentSommelier>
                <Comment>{product.sommelierComment}</Comment>
                <ButtonAdicionar>
                  <ButtonAdd>+</ButtonAdd>
                  <p>1</p>
                  <ButtonSub>-</ButtonSub>
                  Adicionar
                </ButtonAdicionar>
              </div>
            </div>
          </Global>
        ))
      }
    </div>
  );
}

export default ProductInfo;