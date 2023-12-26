import styled from "@emotion/styled";
import { CartList } from "../components/CartList/CartList";
import { useAppSelector } from "../store/hooks/hooks";
import { getCart } from "../store/selectors/CartSelectors";
import { media } from "../ui";

export const Cart = () => {
  const { cartItems } = useAppSelector(getCart);

  return (
    <WrapperSC>
      <ContainerSC>
        <CartTitleSC>Shopping Cart</CartTitleSC>
        <CartList products={cartItems} />
      </ContainerSC>
    </WrapperSC>
  );
};

export const CartTitleSC = styled.p`
  font-size: 33px;
  font-weight: 500;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: left;
`;

export const WrapperSC = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerSC = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 76px 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;

  ${media.DESKTOP} {
    padding: 26px 100px;
  }

  ${media.LAPTOP} {
    padding: 76px 40px;
  }

  ${media.PHONE} {
    padding: 46px 0 46px 20px;
  }
`;
