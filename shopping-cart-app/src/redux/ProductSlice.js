import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

//Initial state
const initialState = {
  products: [],
  loading: false,
  error: null,
};

//create thunk
export const fetchProducts = createAsyncThunk(`/products`, async (thunkApi) => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;

      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const productReducer = productSlice.reducer;
