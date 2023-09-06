import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import articleReducer from "./slices/articleSlice";
import keywordReducer from "./slices/keywordSlice";

const store = configureStore({
  reducer: {
    article: articleReducer,
    category: categoryReducer,
    keyword: keywordReducer,
  }
});

export default store;