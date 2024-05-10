import React, { useContext } from 'react'
import CartItem from './CartItem'
import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'
import './Cart.css';

function Cart() {
  const { cartItems, setCartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  const handleRemoveItem = (indexToRemove) => {
    const updatedItems = cartItems.filter((item, index) => index !== indexToRemove);
    setCartItems(updatedItems);
  };
  
  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        { cartItems.map((cartItem, index) => <CartItem key={index} data={cartItem} index={index} handleRemoveItem={handleRemoveItem}
        />) 
        }
      </div>

      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Cart;
