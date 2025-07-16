import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(sessionStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      sessionStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      sessionStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      sessionStorage.removeItem('cart');
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      sessionStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;