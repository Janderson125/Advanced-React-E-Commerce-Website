// src/components/ShoppingCart.tsx
import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/useTypedHooks';
import { removeFromCart, clearCart } from '../features/cart/cartSlice';

const ShoppingCart: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.cart.items);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.count, 0);

  if (items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="shopping-cart p-4 border rounded shadow mt-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} className="flex items-center mb-3">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mr-4" />
            <div className="flex-grow">
              <p className="font-semibold">{item.title}</p>
              <p>Quantity: {item.count}</p>
              <p>Price: ${(item.price * item.count).toFixed(2)}</p>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p>Total Items: {totalCount}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <button
          onClick={() => dispatch(clearCart())}
          className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
