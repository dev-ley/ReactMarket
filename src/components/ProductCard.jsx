import React from 'react'
import styled from 'styled-components'


const ProductCardContainer = styled.section`

width: 100%;
max-width: 300px;
background-color: blue;
display: flex;
flex-direction: column;
cursor: pointer;
margin: 0 auto;
padding-top: 90px
`;
const CardImg = styled.img`
    width: 100%;
`;
const CardInfo = styled.div`

`;
const CardPrice = styled.h2`
    
`;
const CardTitle = styled.h2`
    
`;

const AddCart = styled.button`

`

const ProductCard = () => {
  return (
    <ProductCardContainer>
     <CardImg src="https://http2.mlstatic.com/D_772185-MLB49987707973_052022-W.jpg" alt="product" />
        <CardInfo>
            <CardPrice>R$20.000</CardPrice>
            <CardTitle> Manual do Dev</CardTitle>
        </CardInfo>
        <AddCart>bt</AddCart>

    </ProductCardContainer>
  )
}

export default ProductCard;
