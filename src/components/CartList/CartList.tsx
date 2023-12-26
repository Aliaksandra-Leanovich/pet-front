import React, { useEffect, useState } from "react";
import { CartItem } from "../CartItem/CartItem";
import {
  ButtonSC,
  ContainerSC,
  StyledListCart,
  StyledSubtotal,
  StyledTotal,
  SubtitleTotal,
  TitleTotal,
  TotalPrice,
} from "./style";
import { IProduct } from "../../services/types";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/selectors/CartSelectors";
import { finishCheckout } from "../../store/slices/CartSlice";
import { Modal } from "../Modal/Modal";
import Portal from "../Portal/Portal";
import { useShowModal } from "../../hooks/use-show-modal.hook";

interface ICart {
  products: IProduct[];
}

export const CartList = ({ products }: ICart) => {
  const [total, setTotal] = useState<number>(0.0);
  const { show, showModal } = useShowModal();

  const dispatch = useDispatch();
  const { cartItems } = useSelector(getCart);

  const handleFinishCheckout = async () => {
    const productIds: string[] = cartItems.map((item) => item._id);

    try {
      await dispatch(
        finishCheckout({ products: productIds, totalCost: total }) as any
      );

      showModal();
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

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
        <ButtonSC onClick={handleFinishCheckout}>Place Order</ButtonSC>
      </StyledTotal>
      <Portal>
        <Modal
          children={"We’ve received your order"}
          show={show}
          handleClose={showModal}
        />
      </Portal>
    </ContainerSC>
  );
};
