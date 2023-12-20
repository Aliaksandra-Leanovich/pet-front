import { Link } from "react-router-dom";
import { media } from "../../ui";
import styled from "@emotion/styled";

export const LinksContainerSC = styled.div`
  display: flex;
  column-gap: 25px;

  ${media.LAPTOP} {
    flex-direction: column;
    column-gap: 0;
    row-gap: 10px;
  }
`;

export const LinkSC = styled(Link)`
  font-size: 18px;
  line-height: 27px;
  padding-bottom: 6px;
  color: ${(props) => props.theme.color.primary};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.5s ease-out;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid ${(props) => props.theme.color.primary};
  }

  ${media.LAPTOP} {
    color: ${(props) => props.theme.color.labelSlider};

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.color.labelSlider};
    }
  }
`;
