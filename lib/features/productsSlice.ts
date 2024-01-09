import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export interface SingleProduct {
  image: string;
  name: string;
  id: number;
  type: string;
  typeColor: string;
  totalSold: number;
  price: number;
  quantityOnStock: number;
}

export type Products = SingleProduct[];

// Define a type for the slice state
export interface ProductsState {
  products: Products;
}

// Define the initial state using that type
const initialState: ProductsState = {
  products: [
    {
      image: "/img/Brown.png",
      name: "Nullam vitae ",
      id: 1,
      typeColor: "brown",
      type: "milk",
      totalSold: 1000,
      price: 10,
      quantityOnStock: 10430,
    },
    {
      image: "/img/Violet.png",
      name: "Cras sed",
      id: 2,
      typeColor: "violet",
      type: "milk",
      totalSold: 10000,
      price: 8,
      quantityOnStock: 104320,
    },
    {
      image: "/img/Blue.png",
      name: "Pellentesque cursus",
      id: 3,
      typeColor: "blue",
      type: "milk",
      totalSold: 100,
      price: 3,
      quantityOnStock: 10300,
    },
    {
      image: "/img/Brown.png",
      name: "Etiam pulvinar",
      id: 4,
      typeColor: "brown",
      type: "milk",
      totalSold: 500,
      price: 4,
      quantityOnStock: 100,
    },
    {
      image: "/img/Violet.png",
      name: "Sed auctor",
      id: 5,
      typeColor: "violet",
      type: "dark",
      totalSold: 3000,
      price: 5,
      quantityOnStock: 105500,
    },
    {
      image: "/img/Blue.png",
      name: "Aenean finibus",
      id: 6,
      typeColor: "blue",
      type: "white",
      totalSold: 433000,
      price: 5,
      quantityOnStock: 1030,
    },
    {
      image: "/img/Brown.png",
      name: "Curabitur vestibulum",
      id: 7,
      typeColor: "brown",
      type: "milk",
      totalSold: 104320,
      price: 6,
      quantityOnStock: 100,
    },
    {
      image: "/img/Violet.png",
      name: "Duis vestibulum",
      id: 8,
      typeColor: "violet",
      type: "dark",
      totalSold: 13000,
      price: 7,
      quantityOnStock: 100,
    },
    {
      image: "/img/Blue.png",
      name: "Suspendisse",
      id: 9,
      typeColor: "blue",
      type: "white",
      totalSold: 10400,
      price: 8,
      quantityOnStock: 14000,
    },
    {
      image: "/img/Brown.png",
      name: "Aliquam fermentum",
      id: 10,
      typeColor: "brown",
      type: "milk",
      totalSold: 10100,
      price: 13,
      quantityOnStock: 1040,
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
