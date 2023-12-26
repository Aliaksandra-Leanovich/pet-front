import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../services/types";

export interface ICartStore {
  cartItems: IProduct[];
  total: number;
  isLoading: boolean;
}

const initialState: ICartStore = {
  cartItems: [],
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }: PayloadAction<IProduct>) => {
      state.cartItems = [
        { ...payload },
        ...state.cartItems.filter((item) => item._id !== payload._id),
      ];
    },

    deleteCart: (state, { payload }: PayloadAction<IProduct>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== payload._id
      );
    },
  },
});
export const { setCart, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
