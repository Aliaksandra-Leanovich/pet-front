import styled from "@emotion/styled";
import { List } from "../components/List/List";
import { media } from "../ui";
import { Link } from "react-router-dom";
import { productsApi } from "../services/ProductsService";
import Portal from "../components/Portal/Portal";
import { Modal } from "../components/Modal/Modal";
import { useShowModal } from "../hooks/use-show-modal.hook";
import CreateProduct, {
  INewProduct,
} from "../components/CreateProduct/CreateProduct";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getAllProducts } from "../store/selectors/productsSelectors";
import { useEffect } from "react";
import { featchProducts } from "../store/slices/productsSlice";

export const Home = () => {
  const { show, showModal } = useShowModal();
  const products = useAppSelector(getAllProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(featchProducts());
  }, [dispatch]);

  const handleCreateProduct = async (newProduct: INewProduct) => {
    try {
      await productsApi.createProduct(newProduct);

      dispatch(featchProducts());
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <WrapperSC>
      <ContainerSC>
        <TitleSC>
          <CartTitleSC>Shop The Latest</CartTitleSC>
          <ButtonSC onClick={showModal}>Create Product</ButtonSC>
          <LinkSC to="/catalog">View all</LinkSC>
        </TitleSC>
        <List products={products.products} />
        <Portal>
          <Modal
            children={<CreateProduct onSubmit={handleCreateProduct} />}
            show={show}
            handleClose={showModal}
          />
        </Portal>
      </ContainerSC>
    </WrapperSC>
  );
};

export const TitleSC = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const LinkSC = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #a18a68;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.5s ease-out;
  margin: 0;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #a18a68;
  }
`;

export const CartTitleSC = styled.p`
  font-size: 33px;
  font-weight: 500;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
`;

export const WrapperSC = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerSC = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 76px 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;

  ${media.DESKTOP} {
    padding: 26px 100px;
  }

  ${media.LAPTOP} {
    padding: 76px 40px;
  }

  ${media.PHONE} {
    padding: 46px 0 46px 20px;
  }
`;

export const ButtonSC = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  align-self: center;
  padding: 14px 0;
  width: 100%;
  text-transform: uppercase;
  background-color: black;
  color: white;
  border-radius: 4px;
  max-width: 200px;

  transition:
    background-color 0.5s ease-out,
    color 0.5s ease-out;

  &:hover {
    background-color: white;
    color: black;
  }
`;
