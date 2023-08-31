import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import articleReducer from "./slices/articleSlice";

const store = configureStore({
  reducer: {
    article: articleReducer,
    category: categoryReducer
  }
});

export default store;