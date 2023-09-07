import { createSlice } from "@reduxjs/toolkit";

const localeSlice = createSlice({
  name: "locale",
  initialState: { value: "kr" },
  reducers: {
    setLocale: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLocale } = localeSlice.actions;

export default localeSlice.reducer;