import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';


const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);


  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <p>Total de Itens: {totalQuantity}</p>
      <ul>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};


export default Cart;
