import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledBookItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  max-width: 300px;
  cursor: pointer;
  transition: all 0.5s ease-out;

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

export {
  HeartContainer,
  StyledBookItem,
  BookPrice,
  BookSubtitle,
  BookTitle,
  BookImage,
  StyledLink,
};
