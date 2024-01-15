import React, { useState, useEffect } from "react";
import { IProduct } from "../../services/types";
import {
  ButtonSC,
  ButtonSecondarySC,
  ButtonsContainerSC,
  InputSC,
  SelectSCContainerSC,
  StyledFormSC,
  TitleSC,
} from "../CreateProduct/styles";

interface ProductFormProps {
  selectedProduct: IProduct | null;
  onSubmit: (editedProduct: IProduct) => void;
  onCancel: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  selectedProduct,
  onSubmit,
  onCancel,
}) => {
  const [editedProduct, setEditedProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    setEditedProduct(selectedProduct);
  }, [selectedProduct]);

  const handleSubmit = () => {
    if (editedProduct) {
      onSubmit(editedProduct);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct!,
      [name]: value,
    }));
  };

  return (
    <StyledFormSC>
      <TitleSC>Edit Product</TitleSC>
      <SelectSCContainerSC>
        <label>Product name:</label>
        <InputSC
          type="text"
          placeholder="Enter product name"
          name="name"
          value={editedProduct?.name || ""}
          onChange={handleInputChange}
        />
      </SelectSCContainerSC>

      <SelectSCContainerSC>
        <label>Product price:</label>
        <InputSC
          placeholder="Enter product price"
          type="number"
          name="price"
          value={editedProduct?.price || 0}
          onChange={handleInputChange}
        />
      </SelectSCContainerSC>
      <SelectSCContainerSC>
        <label>Product description:</label>
        <InputSC
          placeholder="Enter product description"
          type="text"
          name="description"
          value={editedProduct?.description || ""}
          onChange={handleInputChange}
        />
      </SelectSCContainerSC>
      <SelectSCContainerSC>
        <label>Product quantity:</label>
        <InputSC
          type="text"
          name="quantity"
          placeholder="Enter product quantity"
          value={editedProduct?.quantity || ""}
          onChange={handleInputChange}
        />
      </SelectSCContainerSC>
      <ButtonsContainerSC>
        <ButtonSC onClick={handleSubmit}>Submit</ButtonSC>
        <ButtonSecondarySC onClick={onCancel}>Cancel</ButtonSecondarySC>{" "}
      </ButtonsContainerSC>
    </StyledFormSC>
  );
};

export default ProductForm;
