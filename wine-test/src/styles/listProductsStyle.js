import styled from "styled-components";


export const Global = styled.div`
  display: inline-block;
  `;

export const Card = styled.button`
  width: 250px;
  margin: 15px;
  background: #FFFFFF;
  border: none;
  cursor: pointer;
  box-shadow: 1px 9.73384px 14.6008px rgb(0 0 0 / 10%);
  `;

export const ImgProduct = styled.img`
  width: 80%
  `;

export const Name = styled.h3`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.222488px;
  color: #1D1D1B;
  `;

export const PriceAndDiscount = styled.div`
  display: flex;
  justify-content: center;
  `;

export const PriceNotMemberAndDiscount = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  text-decoration-line: line-through;
  color: #888888;
  `;

export const PriceMemberAndText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  `;

export const TextPriceMember = styled.p`
  text-align: right;
  text-transform: uppercase;
  color: #1D1D1B;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  `;

export const PriceMember = styled.p`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 10px;
  color: #B6116E;
  margin-left: 5px;
  `;

export const PriceNotMember = styled.div`
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

export const Discount = styled.div`
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

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  `;
export const ButtonAdd = styled.button`
  width: 90%;
  border: none;
  cursor: pointer;
  height: 39.36px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 14px;
  background: #7EBC43;
  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
  border-radius: 3.89354px;
  `;

export const DivPages = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  margin-right: 17%;
  `;
export const ButtonPages = styled.button`
cursor: pointer;
width: 5%;
border: 1px solid #B6116E;
border-radius: 3px;
height: 30px;
background-color: #F5F8FA;
`;
