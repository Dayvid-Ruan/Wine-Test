import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import frame from "../img/Frame 36.png";
import { Generate, ColumInfo, Sumary,
  TextInfo1, TextInfo2, TextInfo3, Arrow, ButtonFrame,
  NameInfo, CommentSommelier, Comment, ButtonAdicionar,
  ButtonAdd, ButtonSub, PriceMember, PriceNotMember
} from "../styles/productInfoStyle";


function ProductInfo () {
  const { infoProduct, handlerClick } = useContext(MyContext);

  return(
    <div>
      <ButtonFrame
        onClick={ handlerClick}
      >
        <img src={frame} alt="Voltar" />
      </ButtonFrame>
      {
        infoProduct.map(product => (
          <Generate key={product.id}>
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
          </Generate>
        ))
      }
    </div>
  );
}

export default ProductInfo;