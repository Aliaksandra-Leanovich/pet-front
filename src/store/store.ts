import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import productsSlice from "./slices/productsSlice";
import CartSlice from "./slices/CartSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsSlice,
    cart: CartSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
