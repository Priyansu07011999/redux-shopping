import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  isVisible: false, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          price: newItem.price,
          total: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.total += newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }
    },
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { addItem, removeItem, toggle } = cartSlice.actions;
export default cartSlice.reducer;
