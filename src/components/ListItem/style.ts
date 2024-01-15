import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { media } from "../../ui";

const StyledBookItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  max-width: 300px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  border: 1px solid black;
  border-radius: 10px;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const BookImage = styled.img`
  width: 300px;
  border-radius: 8px;
`;

const BookTitle = styled.h3`
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;

const BookSubtitle = styled.p`
  margin-bottom: 40px;
  text-transform: capitalize;
`;

const BookPrice = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #a18a68;
`;

const HeartContainer = styled.div`
  align-self: flex-end;
  margin: 10px 0 0;
  padding: 10px 15px;

  cursor: pointer;

  &:hover {
    border-radius: 20px;
  }
  &:active {
    border-radius: 20px;
  }
`;

export const ContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ButtonContainerSC = styled.div`
  max-width: 200px;
  width: 100%;
`;

export const ButtonsContainrSC = styled.div`
  width: 100%;
  display: flex;
  column-gap: 10px;
  justify-content: end;
`;

export const ButtonSC = styled.button`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  padding: 18px 0;
  width: 100%;
  text-transform: uppercase;
  background-color: black;
  color: white;
  border-radius: 4px;

  transition:
    background-color 0.5s ease-out,
    color 0.5s ease-out;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const IconSC = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;

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

export {
  HeartContainer,
  StyledBookItem,
  BookPrice,
  BookSubtitle,
  BookTitle,
  BookImage,
  StyledLink,
};
