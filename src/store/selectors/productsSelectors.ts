import { RootState } from "../store";

export const getAllProducts = (state: RootState) => state.products;
export const getProduct = (state: RootState) => state.products.result;
