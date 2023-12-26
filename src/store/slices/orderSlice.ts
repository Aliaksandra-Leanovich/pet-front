import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Order {
  id: string;
  // Add other fields for your order
}

interface OrdersState {
  orders: Order[];
  status: "idle" | "loading" | "succeeded" | "error";
  error: string | null;
}

export const fetchOrders = createAsyncThunk<Order[]>(
  "orders/fetchOrders",
  async () => {
    const response = await fetch(
      "https://istore-backend-5t3i.onrender.com/api/orders/"
    );
    const data: Order[] = await response.json();
    return data;
  }
);

const initialState: OrdersState = {
  orders: [],
  status: "idle",
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      fetchOrders.fulfilled,
      (state, action: PayloadAction<Order[]>) => {
        state.status = "succeeded";
        state.orders = action.payload;
      }
    );

    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.status = "error";
    });
  },
});

export default ordersSlice.reducer;
