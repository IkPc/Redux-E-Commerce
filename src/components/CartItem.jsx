import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../store/cart/actions';


const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(item.id));
  };


  return (
    <li>
      {item.name} - Quantidade: {item.quantity}
      <button onClick={handleAddItem}>Adicionar</button>
      <button onClick={handleRemoveItem}>Remover</button>
    </li>
  );
};


export default CartItem;