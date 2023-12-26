import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import {
  getAllProducts,
  getProduct,
} from "../store/selectors/productsSelectors";
import { fetchProductDetails } from "../store/slices/productsSlice";
import { Product } from "../components/Product/Product";

export const ProductDetails = () => {
  const { id = "" } = useParams();
  const { result } = useAppSelector(getAllProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [id, dispatch]);

  return (
    <div>
      <Product product={result} />
    </div>
  );
};
