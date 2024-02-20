import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingleProduct } from "./productsSlice";
import type { RootState } from "../store";

export interface CartItem extends SingleProduct {
  quantityInCart: number;
  isSelected: boolean;
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

export interface CartSelectParametrs {
  id: number;
  isSelected: boolean;
}

export const cartSlice = createSlice({
  name: "productsInCart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state: CartRootState, action: PayloadAction<CartProducts>) => {
      state.cart.push(...action.payload);
    },
    increaseQuantity(
      state: CartRootState,
      action: PayloadAction<CartUpdateParametrs>,
    ) {
      const { id, quantityInCart } = action.payload;
      const increaseQuantity = quantityInCart < 10 ? quantityInCart + 1 : 10;
      const itemToUpdate = state.cart.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.quantityInCart = increaseQuantity;
      }
    },
    decreaseQuantity(
      state: CartRootState,
      action: PayloadAction<CartUpdateParametrs>,
    ) {
      const { id, quantityInCart } = action.payload;
      const decreaseQuantity = quantityInCart > 1 ? quantityInCart - 1 : 1;
      const itemToUpdate = state.cart.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.quantityInCart = decreaseQuantity;
      }
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
    selectProductInCart: (
      state: CartRootState,
      action: PayloadAction<number>,
    ) => {
      const id = action.payload;
      const itemToUpdate = state.cart.find((item) => item.id === id);

      if (itemToUpdate) {
        const newState = !itemToUpdate.isSelected;
        itemToUpdate.isSelected = newState;
      }
    },
    selectAllProductsInCart: (state: CartRootState) => {
      const cart = state.cart;

      if (cart.some((item) => item.isSelected == false)) {
        state.cart = state.cart.map((item) => ({ ...item, isSelected: true }));
      } else {
        state.cart = state.cart.map((item) => ({ ...item, isSelected: false }));
      }
    },
    removeFromCart: (state: CartRootState, action: PayloadAction<number>) => {
      const productIdToRemove = action.payload;
      state.cart = state.cart.filter((item) => item.id !== productIdToRemove);
    },
    removeSelectedProducts: (state: CartRootState) => {
      // Remove products with selected labels
      state.cart = state.cart.filter((items) => items.isSelected === false);
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  removeSelectedProducts,
  selectProductInCart,
  selectAllProductsInCart,
} = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCartProducts = (state: RootState) => state.cart;

export default cartSlice.reducer;
