import { media } from "../../ui";
import styled from "@emotion/styled";

interface ButtonProps {
  isActive: boolean;
}

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
  column-gap: 200px;

  ${media.DESKTOP} {
    column-gap: 140px;
    padding: 26px 100px;
  }

  ${media.LAPTOP} {
    display: grid;
    grid-template-columns: 600px 200px;
    row-gap: 40px;
    column-gap: 20px;
    padding: 76px 40px;
  }

  ${media.TABLET} {
    grid-template-columns: 1fr;
  }

  ${media.PHONE} {
    padding: 46px 0 46px 20px;
  }
`;

export const BlockSC = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

export const ButtonsContainerSC = styled.div`
  width: 100%;
  background: #efefef;
  border-radius: 8px;
  padding: 2px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ButtonSC = styled.button<ButtonProps>`
  border-radius: 8px;
  font-size: 20px;
  padding: 10px 86px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  border: none;
  background-color: ${({ isActive }) => (isActive ? "white" : "transparent")};
  box-shadow: ${({ isActive }) =>
    isActive ? "1px 1px 4px 0px #0000001A" : "none"};
`;
