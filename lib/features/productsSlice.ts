import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export interface SingleProduct {
  image: string;
  name: string;
  id: number;
  categories: string;
}

export type Products = SingleProduct[];

// Define a type for the slice state
interface ProductsState {
  products: Products;
}

// Define the initial state using that type
const initialState: ProductsState = {
  products: [
    {
      image: "/img/Brown.png",
      name: "Nullam vitae ",
      id: 1,
      categories: "brown",
    },
    {
      image: "/img/Violet.png",
      name: "Cras sed",
      id: 2,
      categories: "violet",
    },
    {
      image: "/img/Blue.png",
      name: "Pellentesque cursus",
      id: 3,
      categories: "blue",
    },
    {
      image: "/img/Brown.png",
      name: "Etiam pulvinar",
      id: 4,
      categories: "brown",
    },
    {
      image: "/img/Violet.png",
      name: "Sed auctor",
      id: 5,
      categories: "violet",
    },
    {
      image: "/img/Blue.png",
      name: "Aenean finibus",
      id: 6,
      categories: "blue",
    },
    {
      image: "/img/Brown.png",
      name: "Curabitur vestibulum",
      id: 7,
      categories: "brown",
    },
    {
      image: "/img/Violet.png",
      name: "Duis vestibulum",
      id: 8,
      categories: "violet",
    },
    {
      image: "/img/Blue.png",
      name: "Suspendisse",
      id: 9,
      categories: "blue",
    },
    {
      image: "/img/Brown.png",
      name: "Aliquam fermentum",
      id: 10,
      categories: "brown",
    },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProduct: (state: ProductsState, action: PayloadAction<Products>) => {
      state.products.push(...action.payload);
    },
  },
});

export const { addProduct } = productsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
