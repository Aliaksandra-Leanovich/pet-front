import React, { useEffect, useState } from "react";
import { CartItem } from "../CartItem/CartItem";
import {
  ContainerSC,
  StyledListCart,
  StyledSubtotal,
  StyledTotal,
  SubtitleTotal,
  TitleTotal,
  TotalPrice,
} from "./style";
import { IProduct } from "../../services/types";

interface ICart {
  products: IProduct[];
}

export const CartList = ({ products }: ICart) => {
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    let totalAmount = 0.0;
    products.forEach((product) => {
      totalAmount += Number(product.price);
    });
    setTotal(totalAmount);
  }, [products]);

  return (
    <ContainerSC>
      <StyledListCart>
        {products.map((product) => {
          return <CartItem key={product._id} product={product} />;
        })}
      </StyledListCart>
      <StyledTotal>
        <TitleTotal>Cart totals</TitleTotal>
        <StyledSubtotal>
          <SubtitleTotal>total </SubtitleTotal>
          <TotalPrice>$ {total.toFixed(2)}</TotalPrice>
        </StyledSubtotal>
      </StyledTotal>
    </ContainerSC>
  );
};
