import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggle } = cartSlice.actions;
export default cartSlice.reducer;
