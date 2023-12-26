import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 600px;
`;

export const StyledItemCart = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  transition: all 0.5s ease-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  width: 100%;
`;

export const TrashContainer = styled.div`
  cursor: pointer;
  margin-left: 40px;
`;

export const AdditionalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #efefef;
  width: fit-content;
  border-radius: 4px;
  column-gap: 4px;
  height: fit-content;
  padding: 10px 20px;
`;

export const QuantityButtonSC = styled.button`
  border: none;
  color: #707070;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`;

export const QuantitySC = styled.p`
  color: #707070;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`;

export const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export const BookImage = styled.img`
  width: 140px;
  margin-right: 10px;
`;

export const BookPrice = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #a18a68;
`;

export const BookTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: black;
  text-transform: capitalize;
  margin: 2px 0;
`;

export const BookSubtitle = styled.p`
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #707070;
  margin: 2px 0;
`;
