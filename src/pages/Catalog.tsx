import styled from "@emotion/styled";
import { List } from "../components/List/List";
import { media } from "../ui";
import { Link } from "react-router-dom";

export const Catalog = () => {
  return (
    <WrapperSC>
      <ContainerSC>
        <CartTitleSC>Shop The Latest</CartTitleSC>
        <List />
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
