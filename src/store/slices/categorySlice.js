import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { value: "all" },
  reducers: {
    setCategory: (state, action) => {
      state.value = action.payload;
      //{type: 'category/setCategory', payload: 'business'}
    },
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;