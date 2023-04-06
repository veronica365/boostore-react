import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state.categories.length) return state.categories;
      return 'Under construction';
    },
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
