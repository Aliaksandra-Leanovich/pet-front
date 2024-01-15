export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: string;
  __v: number;
  images: string[];
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
    images: string[];
    __v: number;
  };
}

export type RequestStatusType = "idle" | "loading" | "success" | "error";
