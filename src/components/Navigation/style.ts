import styled from "@emotion/styled";
import { media } from "../../ui";
import { IStylesProps } from "../Burger/types";

export const StyledNavigationSC = styled.nav<IStylesProps>`
  display: flex;
  justify-content: end;
  align-items: center;
  column-gap: 30px;
  width: 100%;

  ${media.LAPTOP} {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    padding: 40px 0;
    flex-direction: column;
    row-gap: 30px;
  }
`;

export const LinksContainerSC = styled.div`
  display: flex;
  column-gap: 25px;
`;

export const ContainerRightSC = styled.div<IStylesProps>`
  background: ${(props) => props.theme.color.primary};
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 30px;
  position: absolute;
  top: 0;
  right: 0;

  ${media.LAPTOP} {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    background: ${(props) => props.theme.color.navigationBackground};
  }

  ${media.PHONE} {
    width: 100%;
  }

  main {
    overflow: ${({ isOpen }) => (isOpen ? "hidden" : "auto")};
  }
`;

export const ContainerTopNavigationSC = styled.div`
  display: flex;
  width: 100%;

  ${media.LAPTOP} {
    display: none;
  }
`;

export const IconSC = styled.button`
  &:hover {
    svg {
      path {
        fill: ${(props) => props.theme.color.labelSlider};
      }
    }
  }

  ${media.LAPTOP} {
    svg {
      path {
        fill: ${(props) => props.theme.color.labelSlider};
      }
    }
  }
`;

export const IconFavoriteSC = styled.div`
  &:hover {
    svg {
      path {
        stroke: ${(props) => props.theme.color.labelSlider};
      }
    }
  }
`;
