import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import cartReducer from "./features/productsInCartSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import storage from "redux-persist/lib/storage";

// const createNoopStorage = () => {
//   return {
//     getItem(_key: string) {
//       return Promise.resolve(null);
//     },
//     setItem(_key: string, value: string) {
//       return Promise.resolve(value);
//     },
//     removeItem(_key: string) {
//       return Promise.resolve();
//     },
//   };
// };

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
// we combine the redusers to pass them to the persistedReducer
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const persistConfig = {
//   key: "root",
//   storage: storage,
//   whitelist: ["productsInCart"],
// };

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
