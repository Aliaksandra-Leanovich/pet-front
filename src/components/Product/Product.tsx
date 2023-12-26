import { IProduct } from "../../services/types";
import { useAppDispatch } from "../../store/hooks/hooks";

import {
  AddToCartButton,
  BookImage,
  ImageContainer,
  BookTitle,
  ContainerBook,
  Info,
  MainInformation,
  StyledDetailed,
  TextInfo,
  ContainerMainInfo,
  DescriptionSC,
} from "./style";
import { setCart } from "../../store/slices/CartSlice";

interface IDetailsProduct {
  product: IProduct;
}

export const Product: React.FC<IDetailsProduct> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleCart = (product: IProduct) => {
    dispatch(setCart(product));
  };

  return (
    <StyledDetailed>
      <ContainerBook>
        <ImageContainer>
          <BookImage
            src={`https://istore-backend-5t3i.onrender.com/${product._id}/images/0`}
            alt={product.name}
          />
        </ImageContainer>
        <MainInformation>
          <BookTitle>{product?.name ? product.name : "No title"}</BookTitle>
          <TextInfo>${product?.price}</TextInfo>
          <ContainerMainInfo>
            <Info>Quantity:</Info>
            <TextInfo>{!product?.quantity ? "0" : product?.quantity}</TextInfo>
          </ContainerMainInfo>
          <DescriptionSC>{product.description}</DescriptionSC>
          <AddToCartButton onClick={() => handleCart(product)}>
            ADD TO CART
          </AddToCartButton>
        </MainInformation>
      </ContainerBook>
    </StyledDetailed>
  );
};
