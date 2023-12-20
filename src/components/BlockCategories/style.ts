import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
`;

export const BlockSecondSC = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 36px;
`;

export const CategorySC = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  color: #707070;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0;
`;

export const TermsSC = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`;
