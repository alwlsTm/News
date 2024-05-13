import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getArticle = createAsyncThunk(
  "article/getArticle",
  async ({ locale, category, keyword }) => {
    const query = `country=${locale}&category=${category}&q=${keyword || ""}`;
    const response = await axios.get(
      'https://newsapi.org/v2/top-headlines?' +
      `${query}&` +
      'pageSize=100&' +
      'apiKey=5c95bcf4e770493282e390b31b3fbb07'
    );
    return response.data.articles;
  }
);

const articleSlice = createSlice({
  name: "article",
  initialState: { loading: false, articles: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticle.pending, (state) => {  //통신 중
      state.loading = true;
    });
    builder.addCase(getArticle.fulfilled, (state, action) => {  //통신 성공
      state.loading = false;
      const article = action.payload.filter(({ title }) => title !== "[Removed]");
      state.articles = article;
    });
    builder.addCase(getArticle.rejected, (state) => { //통신 에러
      state.loading = false;
    });
  },
});

export default articleSlice.reducer;