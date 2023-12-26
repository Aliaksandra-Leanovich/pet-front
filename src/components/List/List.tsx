import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { ListItem } from "../ListItem/ListItem";
import { StyledBookList } from "./style";
import { getAllProducts } from "../../store/selectors/productsSelectors";
import { featchProducts } from "../../store/slices/productsSlice";

export const List = () => {
  const products = useAppSelector(getAllProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(featchProducts());
  }, [dispatch]);

  return (
    <StyledBookList>
      {products.products.map((product) => {
        return <ListItem key={product._id} product={product} />;
      })}
    </StyledBookList>
  );
};
