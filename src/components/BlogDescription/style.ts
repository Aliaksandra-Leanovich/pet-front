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
  flex-direction: column;
  row-gap: 40px;

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

export const BlockSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;

  ${media.TABLET} {
    grid-template-columns: 1fr;
  }

  ${media.PHONE} {
    padding: 46px 0 46px 20px;
  }
`;

export const SlideSC = styled.div`
  max-width: 450px;
  width: 100%;
`;

export const TitleSC = styled.p`
  font-size: 33px;
  font-weight: 500;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: center;
  margin: 0;
`;

export const ImageSc = styled.div`
  width: 450px;
  border-radius: 8px;

  img {
    border-radius: 8px;
    width: 100%;
  }
`;

export const DateDC = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #707070;
`;

export const SlideTitleSc = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;

export const DescriptionSC = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #707070;
`;
