import { IProduct } from "../../services/types";
import Trash from "../../assets/icons/trash-solid.svg";
import Edit from "../../assets/icons/edit-solid.svg";
import {
  StyledBookItem,
  BookPrice,
  BookTitle,
  BookImage,
  StyledLink,
  IconSC,
  ButtonsContainrSC,
} from "./style";

interface IItem {
  product: IProduct;

  onEdit: (product: IProduct) => void;
  onDelete: (product: IProduct) => void;
}

export const ListItem = ({ product, onDelete, onEdit }: IItem) => {
  return (
    <>
      <StyledBookItem key={product._id}>
        <ButtonsContainrSC>
          <IconSC onClick={() => onEdit(product)}>
            <img src={Edit} alt="edit" />
          </IconSC>
          <IconSC onClick={() => onDelete(product)}>
            <img src={Trash} alt="delete" />
          </IconSC>
        </ButtonsContainrSC>
        <StyledLink to={`/products/${product._id}`}>
          <BookImage
            src={`https://istore-backend-5t3i.onrender.com/${product._id}/images/0`}
            alt={product.name}
          />
          <BookTitle>{product.name}</BookTitle>
          <BookPrice>${product.price}</BookPrice>
        </StyledLink>
      </StyledBookItem>
    </>
  );
};
