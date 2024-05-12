import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "lib/types/product";

type initialStateType = {
  products: Product[];
  deliveryFee: number;
  discount: number;
};
const initialState: initialStateType = {
  products: [],
  deliveryFee: 5,
  discount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addCartProduct: (state, action: PayloadAction<Product>) => {
      state.products.unshift(action.payload);
    },
    removeCartProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
    incrementCartQty: (state, action: PayloadAction<string>) => {
      state.products = state.products.map((item) =>
        item._id === action.payload ? { ...item, qty: item.qty! + 1 } : item
      );
    },
    decrementCartQty: (state, action: PayloadAction<string>) => {
      state.products = state.products.map((item) =>
        item._id === action.payload ? { ...item, qty: item.qty! - 1 } : item
      );
    },
  },
});

export const {
  addCartProduct,
  removeCartProduct,
  incrementCartQty,
  decrementCartQty,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
