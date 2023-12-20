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
`;

export const TitleSC = styled.p`
  font-size: 33px;
  font-weight: 500;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: center;
  margin: 0;
`;

export const TextSC = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
`;

export const DescriptionSC = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`;

export const CategoryTitleSC = styled.p`
  font-size: 26px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ImageSc = styled.div`
  width: 660px;
  border-radius: 8px;

  img {
    border-radius: 8px;
  }
`;
