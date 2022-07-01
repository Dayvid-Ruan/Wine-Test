import styled from "styled-components";

export const Global = styled.div`
background-color: #FFFFFF;
display: flex;
align-items: center;
padding: 10px;
filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.35));
`;

export const Logo = styled.div`
margin-left: 6%;
margin-right: 10%;
width: 102.95px;
height: 31px;
left: calc(50% - 102.95px/2 - 517.77px);
top: calc(50% - 31px/2 - 0.62px);
`;

export const DivPages = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 48px;
`;

export const Pages = styled.button`
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
export const WineImg = styled.button`
border-radius: 50%;
border: none;
cursor: pointer;
background-color: #F6B554;
margin-left: 50px;
width: 56px;
`;

export const AvatarImg = styled.button`
cursor: pointer;
border: none;
background-color: #FFFFFF;
margin-left: 50px;
width: 56px;
`;

export const Buscar = styled.button`
cursor: pointer;
margin-left: 200px;
border: none;
background-color: #FFFFFF;
width: 56px;
`;