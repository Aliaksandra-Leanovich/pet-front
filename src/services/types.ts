export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: string;
}

export interface IProductsApi {
  products: IProduct[];
  status: RequestStatusType;
  result: {
    _id: string;
    name: string;
    description: string;
    price: number;
    quantity: string;
  };
}

export type RequestStatusType = "idle" | "loading" | "success" | "error";
