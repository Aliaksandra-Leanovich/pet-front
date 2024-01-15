import React, { useEffect, useState } from "react";
import { ListItem } from "../ListItem/ListItem";
import {
  ContainerSC,
  InputSC,
  InputsContainerSC,
  SelectSC,
  SelectSCContainerSC,
  SortConatinerSC,
  StyledBookList,
} from "./style";
import { IProduct } from "../../services/types";
import ProductForm from "../ProductForm/ProductForm";
import { productsApi } from "../../services/ProductsService";
import Portal from "../Portal/Portal";
import { Modal } from "../Modal/Modal";
import { useShowModal } from "../../hooks/use-show-modal.hook";

interface IListProps {
  products: IProduct[];
}

export const List = ({ products }: IListProps) => {
  const { show, showModal } = useShowModal();
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [localProducts, setLocalProducts] = useState<IProduct[]>(products);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    setLocalProducts(products);
  }, [products]);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (minPrice === null || product.price >= minPrice) &&
        (maxPrice === null || product.price <= maxPrice)
    );

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setLocalProducts(sortedProducts);
  }, [products, searchQuery, minPrice, maxPrice, sortOrder]);

  const handleEdit = (product: IProduct) => {
    setSelectedProduct(product);
    showModal();
  };

  const handleEditSubmit = async (product: IProduct) => {
    try {
      const updatedProduct = await productsApi.editProduct(
        product._id,
        product
      );

      setLocalProducts((prevProducts) =>
        prevProducts.map((prevProduct) =>
          prevProduct._id === updatedProduct._id ? updatedProduct : prevProduct
        )
      );
      setSelectedProduct(null);
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  const handleDeleteSubmit = async (product: IProduct) => {
    try {
      await productsApi.deleteProduct(product._id);

      setLocalProducts((prevProducts) =>
        prevProducts.filter((productOld) => productOld._id !== product._id)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <ContainerSC>
      <SortConatinerSC>
        <InputSC
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <InputsContainerSC>
          <InputSC
            type="number"
            placeholder="Min Price"
            value={minPrice ?? ""}
            onChange={(e) =>
              setMinPrice(e.target.value !== "" ? Number(e.target.value) : null)
            }
          />
          <InputSC
            type="number"
            placeholder="Max Price"
            value={maxPrice ?? ""}
            onChange={(e) =>
              setMaxPrice(e.target.value !== "" ? Number(e.target.value) : null)
            }
          />
        </InputsContainerSC>

        <SelectSCContainerSC>
          <label>Sort Order:</label>
          <SelectSC
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </SelectSC>
        </SelectSCContainerSC>
      </SortConatinerSC>
      <StyledBookList>
        {localProducts &&
          localProducts.map((product) => {
            return (
              <ListItem
                key={product._id}
                product={product}
                onDelete={handleDeleteSubmit}
                onEdit={handleEdit}
              />
            );
          })}
      </StyledBookList>
      <Portal>
        <Modal
          children={
            <ProductForm
              selectedProduct={selectedProduct}
              onSubmit={handleEditSubmit}
              onCancel={() => setSelectedProduct(null)}
            />
          }
          show={show}
          handleClose={showModal}
        />
      </Portal>
    </ContainerSC>
  );
};
