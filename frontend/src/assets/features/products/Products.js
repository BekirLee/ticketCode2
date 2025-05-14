import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get(BASE_URL);
    return res.data; 
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    await axios.delete(`${BASE_URL}/${productId}`);
    return productId;
  }
);

const initialState = {
  products: [],
  allProducts: [],
};

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      state.products = state.allProducts.filter((product) =>
        product.name.toLowerCase().includes(action.payload.trim().toLowerCase())
      );
    },
    sortAz: (state) => {
      state.products = [...state.products].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    },
    sortZa: (state) => {
      state.products = [...state.products].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    },
    sortLowToHigh: (state) => {
      state.products = [...state.products].sort((a, b) => a.price - b.price);
    },
    sortHighToLow: (state) => {
      state.products = [...state.products].sort((a, b) => b.price - a.price);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.allProducts = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const id = action.payload;
        state.products = state.products.filter((p) => p._id !== id);
        state.allProducts = state.allProducts.filter((p) => p._id !== id);
      });
  },
});

export const { searchProduct, sortAz, sortZa, sortLowToHigh, sortHighToLow } =
  productsReducer.actions;

export default productsReducer.reducer;
