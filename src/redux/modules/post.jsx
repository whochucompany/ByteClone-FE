
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    posts: [],
    isLoading: false,
    success: null,
    error: null,
    post: {},
  };
  

export const __getPost = createAsyncThunk(
    "posts/__getPost",
    async (newsId, thunkAPI) => {
      try {
        const { data } = await axios.get(
          `http://15.164.170.89/api/news/detail/${newsId}`
        );
        return thunkAPI.fulfillWithValue(data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  const postSlice = createSlice({
    name: "posts",
    initialState,
    reducer: {},
    extraReducers: {
        [__getPost.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
          }
    },
});



  export default postSlice.reducer;
