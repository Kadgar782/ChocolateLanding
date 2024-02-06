import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingleProduct } from "./productsSlice";
import type { RootState } from "../store";

export interface CartItem extends SingleProduct {
  quantityInCart: number;
}

export interface CartRootState {
  cart: CartItem[];
}

export type CartProducts = CartItem[];

const initialState: CartRootState = {
  cart: [],
};

export interface CartUpdateParametrs {
  id: number;
  quantityInCart: number;
}

export const cartSlice = createSlice({
  name: "productsInCart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state: CartRootState, action: PayloadAction<CartProducts>) => {
      state.cart.push(...action.payload);
    },
    updateQuantity(
      state: CartRootState,
      action: PayloadAction<CartUpdateParametrs>,
    ) {
      const { id, quantityInCart } = action.payload;
      const itemToUpdate = state.cart.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.quantityInCart = quantityInCart;
      }
    },
    removeFromCart: (state: CartRootState, action: PayloadAction<number>) => {
      const productIdToRemove = action.payload;
      state.cart = state.cart.filter((item) => item.id !== productIdToRemove);
    },
    removeAllFromCart: (state: CartRootState) => {
      state.cart = [];
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCartProducts = (state: RootState) => state.productsInCart;

export default cartSlice.reducer;
