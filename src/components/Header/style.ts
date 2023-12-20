import styled from "@emotion/styled";
import { media } from "../../ui";

export const StyledHeaderSC = styled.header`
  width: 100%;
  z-index: 3;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.color.secondary};
  position: relative;
  margin: 0 auto;
`;

export const WrapperSC = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const ContainerTopSC = styled.div`
  background-color: ${(props) => props.theme.color.lightPrimary};
  padding: 16px 110px;

  ${media.DESKTOP} {
    padding: 16px 34px;
  }
`;

export const InformationSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerBottomSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.color.secondary};
  column-gap: 40px;
  padding: 30px 110px;

  ${media.DESKTOP} {
    padding: 30px 100px;
  }
`;

export const LogoContainerSC = styled.a`
  max-width: 124px;
  width: 100%;
  cursor: pointer;
`;

export const PhoneNumberSC = styled.p`
  font-size: 22px;
  line-height: 33px;
  color: ${(props) => props.theme.color.textSlider3};
`;
