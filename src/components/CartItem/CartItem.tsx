import React, { useState } from "react";
import Trash from "../../assets/icons/cross.svg";

import { useAppDispatch } from "../../store/hooks/hooks";

import {
  AdditionalContainer,
  BookImage,
  BookPrice,
  BookSubtitle,
  BookTitle,
  Container,
  InfoContainer,
  QuantityButtonSC,
  QuantitySC,
  StyledItemCart,
  StyledLink,
  TrashContainer,
} from "./style";
import { deleteCart } from "../../store/slices/CartSlice";
import { IProduct } from "../../services/types";

interface ICartProduct {
  product: IProduct;
}

export const CartItem = ({ product }: ICartProduct) => {
  const dispatch = useAppDispatch();
  const handleCart = (product: IProduct) => {
    dispatch(deleteCart(product));
  };

  const [quantity, setQuantity] = useState<number>(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Container>
      <StyledItemCart>
        <StyledLink to={`/products/${product._id}`}>
          <BookImage
            src={`https://istore-backend-5t3i.onrender.com/${product._id}/images/0`}
            alt={product.name}
          />
          <InfoContainer>
            <BookTitle>{product.name}</BookTitle>
            <BookPrice>${product.price}</BookPrice>
            <BookSubtitle>{product.description}</BookSubtitle>
          </InfoContainer>
        </StyledLink>
        <AdditionalContainer>
          <QuantityButtonSC onClick={handleDecreaseQuantity}>
            -
          </QuantityButtonSC>
          <QuantitySC>{quantity}</QuantitySC>
          <QuantityButtonSC onClick={handleIncreaseQuantity}>
            +
          </QuantityButtonSC>
        </AdditionalContainer>
      </StyledItemCart>
      <TrashContainer onClick={() => handleCart(product)}>
        <img src={Trash} alt="cross" />
      </TrashContainer>
    </Container>
  );
};
