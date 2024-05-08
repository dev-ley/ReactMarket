import React from 'react'
import styled from 'styled-components'
import { FaCartPlus } from "react-icons/fa6";
import formatCurrency from '../utils/formatCurrency';

const ProductCardContainer = styled.section`
  width: 100%;
  max-width: 300px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 10px auto;
  position: relative;
  transition: box-shadow 0.3s ease; 
  

&:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  button {
    display: flex;
  }
}
`;

const CardImg = styled.img`
    width: 100%;
    
`;

const CardInfo = styled.div`
  padding: 20px;
  border-top: 1px solid #ddd;
`;

const CardPrice = styled.h2`
    font-size: 30px;
    display: block;
    margin-bottom: 10px;
`;

const CardTitle = styled.h2`
    font-size: 15px;
    color: #000000a4;
    line-height: 1.5;    
`;

const AddCart = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  margin: 12px 12px;
  color: blue;
  display: none;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50px;
  background-color: #ffffff8b;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0 2px 10px #000000bc;
  }
`;

const ProductCard = ({ data }) => {
  const { title, thumbnail, price } = data;
  return (
    <ProductCardContainer>
     <CardImg src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" />
        <CardInfo>
            <CardPrice>{formatCurrency(price, 'BRL')}</CardPrice>
            <CardTitle> {title} </CardTitle>
        </CardInfo>
        <AddCart><FaCartPlus/></AddCart>
    </ProductCardContainer>
  )
}

export default ProductCard;
