import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("http://localhost:3000/api/products/");
    return res.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    await axios.delete(`http://localhost:3000/api/products/${productId}`);
    return productId;
  }
);

const productsReducer = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        return state.filter((product) => product._id !== action.payload);
      });
    //   .addCase(;
  },
});

// export const {fetchProducts} = productsReducer.actions;

export default productsReducer.reducer;
