import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getArticle = createAsyncThunk(
  "article/getArticle",
  async ({ category, keyword }) => {
    const response = await axios.get(
      'https://newsapi.org/v2/top-headlines?' +
      'country=kr&' +
      `${category}` +
      `${keyword}` +
      'pageSize=100&' +
      'apiKey=5c95bcf4e770493282e390b31b3fbb07'
    );
    // console.log(response.data.articles);
    return response.data.articles;
  }
);

const articleSlice = createSlice({
  name: "article",
  initialState: { value: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticle.pending, (state, action) => {  //통신 중
      console.log(state, action);
    });
    builder.addCase(getArticle.fulfilled, (state, action) => {  //통신 성공
      state.value = action.payload;
    });
    builder.addCase(getArticle.rejected, (state, action) => { //통신 에러
      console.log(state, action);
    });
  },
});

export default articleSlice.reducer;