import axios from "axios";
import { IProduct } from "./types";
import { INewProduct } from "../components/CreateProduct/CreateProduct";

class ProductsService {
  private readonly API_URL = "https://istore-backend-5t3i.onrender.com/api";

  private api = axios.create({
    baseURL: this.API_URL,
  });

  public async getProducts(): Promise<IProduct[]> {
    const { data } = await this.api.get<IProduct[]>("/products");
    return data;
  }

  public async createProduct(newProduct: INewProduct): Promise<INewProduct> {
    const formData = new FormData();

    formData.append("name", newProduct.name);
    formData.append("description", newProduct.description);
    formData.append("price", newProduct.price.toString());
    formData.append("quantity", newProduct.quantity.toString());

    newProduct.images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await fetch(
        "https://istore-backend-5t3i.onrender.com/api/products",
        {
          method: "POST",
          body: formData,
        }
      );

      return response.json();
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  }

  public async editProduct(
    productId: string,
    updatedProduct: IProduct
  ): Promise<IProduct> {
    try {
      const response = await fetch(`${this.API_URL}/products/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const editedProduct = await response.json();

      return editedProduct;
    } catch (error) {
      console.error("Error editing product:", error);
      throw error;
    }
  }

  public async deleteProduct(productId: string): Promise<IProduct[]> {
    try {
      const response = await fetch(`${this.API_URL}/products/${productId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const updatedProducts = await response.json();

      return updatedProducts;
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  }

  public async getProductDetails(id: string): Promise<IProduct> {
    const { data } = await this.api.get<IProduct>(`/products/${id}`);
    return data;
  }
}

export const productsApi = new ProductsService();
