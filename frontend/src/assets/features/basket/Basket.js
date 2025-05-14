import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      if (!Array.isArray(state.items)) {
        console.warn("basket.items craked...");
        state.items = [];
      }

      const existingProduct = state.items.find(
        (item) => item._id === action.payload._id
      );

      if (!existingProduct) {
        state.items.push({ ...action.payload, count: 1 });
      } else {
        existingProduct.count += 1;
      }
    },
  },
});

export const { addBasket } = basketSlice.actions;
export default basketSlice.reducer;
