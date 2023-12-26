import { IProduct } from "../../services/types";
import {
  StyledBookItem,
  BookPrice,
  BookSubtitle,
  BookTitle,
  BookImage,
  StyledLink,
} from "./style";

interface IBook {
  product: IProduct;
}

export const ListItem = ({ product }: IBook) => {
  return (
    <StyledBookItem key={product._id}>
      <StyledLink to={`/products/${product._id}`}>
        <BookImage
          src={`https://istore-backend-5t3i.onrender.com/${product._id}/images/0`}
          alt={product.name}
        />
        <BookTitle>{product.name}</BookTitle>
        <BookPrice>${product.price}</BookPrice>
      </StyledLink>
    </StyledBookItem>
  );
};
