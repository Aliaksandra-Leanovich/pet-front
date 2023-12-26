import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../../services/ProductsService";
import { IProduct, IProductsApi } from "../../services/types";

const initialState = {
  products: [],
  status: "idle",
  result: {
    _id: "",
    name: "",
    description: "",
    price: 0,
    quantity: "",
  },
} as IProductsApi;

export const featchProducts = createAsyncThunk<IProduct[]>(
  "products/featchProducts",
  async () => {
    const newProducts = await productsApi.getProducts();

    return newProducts;
  }
);

export const fetchProductDetails = createAsyncThunk<IProduct, string>(
  "products/fetchProductDetails",
  async (id) => {
    const product = await productsApi.getProductDetails(id);
    return product;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(featchProducts.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(featchProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.products = action.payload;
    });

    builder.addCase(featchProducts.rejected, (state, action) => {
      state.status = "error";
    });

    builder.addCase(fetchProductDetails.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
      state.result = action.payload;
      state.status = "success";
    });

    builder.addCase(fetchProductDetails.rejected, (state) => {
      state.status = "loading";
    });
  },
});
export default productsSlice.reducer;
