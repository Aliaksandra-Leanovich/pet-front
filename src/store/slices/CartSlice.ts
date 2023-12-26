import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
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

interface ICheckoutPayload {
  products: string[];
  totalCost: number;
}

export const finishCheckout: AsyncThunk<any, ICheckoutPayload, {}> =
  createAsyncThunk(
    "cart/finishCheckout",
    async (checkoutPayload: ICheckoutPayload) => {
      try {
        const response = await fetch(
          "https://istore-backend-5t3i.onrender.com/api/orders/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(checkoutPayload),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to finish checkout");
        }

        return response.json();
      } catch (error) {
        console.error("Error during checkout:", error);
        throw error;
      }
    }
  );

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
  extraReducers: (builder) => {
    builder.addCase(finishCheckout.fulfilled, (state) => {
      state.cartItems = [];
      state.total = 0;
    });
  },
});
export const { setCart, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
