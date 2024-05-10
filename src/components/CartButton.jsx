import React, { useContext } from 'react'
import styled from 'styled-components'
import { FaCartShopping } from "react-icons/fa6";
import AppContext from '../context/AppContext';
import '../index.css'

const ButtonCart = styled.button`

`;

const ItensCart = styled.span`
    background-color: red;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    font-size: 11px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CartButton = () => {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <ButtonCart
    type="button"
    className="cart__button"
    onClick={ () => setIsCartVisible(!isCartVisible) }

    >
        <FaCartShopping />
        { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> }
    </ButtonCart>
  )
}

export default CartButton;
