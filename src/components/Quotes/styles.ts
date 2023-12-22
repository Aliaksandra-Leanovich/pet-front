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
  max-width: 660px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;

export const TitleSC = styled.p`
  font-size: 33px;
  font-weight: 500;
  line-height: 43px;
  letter-spacing: 0em;
  margin: 0;
`;

export const TextSC = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;

export const QuotsSC = styled.div`
  display: flex;
  flex-direction: column;
`;
