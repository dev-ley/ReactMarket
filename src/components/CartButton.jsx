import React from 'react'
import styled from 'styled-components'
import { FaCartShopping } from "react-icons/fa6";


const ButtonCart = styled.button`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border: none;
    background: none;
    cursor: pointer;
    position: relative;
    margin-left: 20px;
    color: #333;
`

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
`

const CartButton = () => {
  return (
    <ButtonCart>
        <FaCartShopping />
        <ItensCart>1</ItensCart>
    </ButtonCart>
  )
}

export default CartButton
