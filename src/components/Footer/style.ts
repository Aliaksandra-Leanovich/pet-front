import { media } from "../../ui";
import styled from "@emotion/styled";

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
  column-gap: 200px;

  ${media.DESKTOP} {
    column-gap: 140px;
    padding: 76px 100px;
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
  border-top: 1px solid #d8d8d8;
  padding: 30px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  column-gap: 100px;
`;

export const BlockFormSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  row-gap: 36px;
`;

export const InputSC = styled.input`
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  padding: 4px;
  padding-top: 0;
  width: 250px;
  border: none;
  outline: none;
  border-bottom: 1px solid #000000;
`;

export const IconsContainerSC = styled.div`
  display: flex;
  column-gap: 26px;

  img {
    height: 18px;
  }
`;
