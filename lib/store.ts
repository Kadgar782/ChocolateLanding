import { createSlice, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import cartReducer from "./features/productsInCartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    productsInCart: cartReducer,
  },
});

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
      productsInCart: cartReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
