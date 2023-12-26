import styled from "@emotion/styled";
import { media } from "../../ui";

export const StyledDetailed = styled.div`
  padding: 20px 30px;
`;

export const MainInformation = styled.div`
  max-width: 448px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
`;

export const ContainerMainInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;

  ${media.TABLET} {
    column-gap: 20px;
    row-gap: 20px;
    margin-bottom: 20px;
  }

  ${media.PHONE} {
    column-gap: 10px;
    row-gap: 5px;
    margin-bottom: 10px;
  }
`;

export const ContainerBook = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
  padding-bottom: 50px;
  border-bottom: 1px gray solid;
`;

export const BookImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
`;

export const BookTitle = styled.p`
  color: black;
  font-size: 26px;
  font-weight: 400;
  line-height: 35px;
  margin-bottom: 16px;
`;

export const Info = styled.p`
  font-weight: 300;

  ${media.TABLET} {
    font-weight: 300;
  }

  ${media.PHONE} {
    font-weight: 300;
  }
`;

export const TextInfo = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #a18a68;
  text-transform: capitalize;
`;

export const DescriptionSC = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #707070;
  text-transform: capitalize;
`;

export const AddToCartButton = styled.button`
  border: 1px solid #000000;
  background: none;
  border-radius: 4px;
  padding: 16px 120px;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  cursor: pointer;

  &:hover {
    border: 1px solid red;
  }
  &:active {
    border: 1px solid gray;
  }
`;

export const ImageContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin-right: 128px;

  ${media.TABLET} {
    max-width: 250px;
    margin-right: 30px;
  }
  ${media.PHONE} {
    max-width: 150px;
    margin-right: 10px;
    padding: 5px;
  }
`;
