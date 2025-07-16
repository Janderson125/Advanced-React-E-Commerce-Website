import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cartSlice';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleCheckout = () => {
    alert('Checkout complete! Your cart has been cleared.');
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} width="50" />
                <div>
                  <h4>{item.title}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                  <button onClick={() => handleRemove(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <p>Total Items: {totalQuantity}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;