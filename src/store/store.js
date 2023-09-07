import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import articleReducer from "./slices/articleSlice";
import keywordReducer from "./slices/keywordSlice";
import localeReducer from "./slices/localeSlice";

const store = configureStore({
  reducer: {
    article: articleReducer,
    locale: localeReducer,
    category: categoryReducer,
    keyword: keywordReducer,
  }
});

export default store;