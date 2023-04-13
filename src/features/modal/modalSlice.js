import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = modalSlice.actions;

export default modalSlice.reducer;
