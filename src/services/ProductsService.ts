import axios from "axios";
import { IProduct } from "./types";

class ProductsService {
  private readonly API_URL = "https://istore-backend-5t3i.onrender.com/api";

  private api = axios.create({
    baseURL: this.API_URL,
  });

  public async getProducts(): Promise<IProduct[]> {
    const { data } = await this.api.get<IProduct[]>("/products");

    return data;
  }

  public async getProductDetails(id: string): Promise<IProduct> {
    const { data } = await this.api.get<IProduct>(`/products/${id}`);

    return data;
  }
}
export const productsApi = new ProductsService();
