import React, { useContext } from 'react'
import styled from 'styled-components'
import { BsCartDashFill } from "react-icons/bs";
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

const CartItemSection = styled.section`
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
    margin-bottom: 20px;
    position: relative;
    &:last-child {
        border-bottom: none;
    }
`;

const CartItemImg = styled.img`
    width: 70px;
`;

const CartItemContent = styled.div`
    font-size: 0.85rem;
    color: #00000075;
    margin-bottom: 8px;
`;

const CartItemTitle = styled.h3`
    font-size: 25px;

`;

const CartItemPrice = styled.h3`
    padding: 0 35px 0 10px;
`;

const ButtonRemoveItem = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    color: #d83232;
    font-size: 1.4rem;
    border: none;
    background-color: #fff;
    cursor: pointer;


`;

function CartItem({ data, index, handleRemoveItem }) {

    const { id, thumbnail, title, price } = data;
  
  return (
    <CartItemSection>
      <CartItemImg 
      src={thumbnail}
      alt="asdasd" />
      <CartItemContent>
        <CartItemTitle>{title}</CartItemTitle>
        <CartItemPrice>{formatCurrency(price, 'BRL')}</CartItemPrice>

        <ButtonRemoveItem 
        type='button'
        onClick={() => handleRemoveItem(index)}>
        <BsCartDashFill />
        </ButtonRemoveItem>
        </CartItemContent>
    </CartItemSection>
  )
}

export default CartItem
