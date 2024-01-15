import React, { useState, ChangeEvent } from "react";
import {
  ButtonSC,
  InputSC,
  SelectSCContainerSC,
  StyledFormSC,
  TextareaSC,
  TitleSC,
} from "./styles";

export interface INewProduct {
  name: string;
  description: string;
  price: number;
  quantity: number;
  images: string[];
}

interface IProductFormProps {
  onSubmit: (product: INewProduct) => Promise<void>;
}

const CreateProduct: React.FC<IProductFormProps> = ({ onSubmit }) => {
  const [product, setProduct] = useState<INewProduct>({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    images: [],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      const imagesArray: string[] = [];

      for (let i = 0; i < fileList.length; i++) {
        const imageUrl = URL.createObjectURL(fileList[i]);
        imagesArray.push(imageUrl);
      }

      setProduct((prevProduct) => ({ ...prevProduct, images: imagesArray }));
    }
  };

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    onSubmit(product);

    setProduct({
      name: "",
      description: "",
      price: 0,
      quantity: 0,
      images: [],
    });
  };

  return (
    <StyledFormSC>
      <TitleSC>Create New Product</TitleSC>
      <InputSC
        type="text"
        placeholder="Enter product name"
        name="name"
        value={product.name}
        onChange={handleInputChange}
      />

      <TextareaSC
        placeholder="Enter product description"
        name="description"
        value={product.description}
        onChange={handleInputChange}
      />
      <SelectSCContainerSC>
        <label>Product price:</label>
        <InputSC
          placeholder="Enter product price"
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
      </SelectSCContainerSC>

      <SelectSCContainerSC>
        <label>Product quantity:</label>
        <InputSC
          type="text"
          placeholder="Enter product quantity"
          name="quantity"
          value={product.quantity}
          onChange={handleInputChange}
        />
      </SelectSCContainerSC>
      <SelectSCContainerSC>
        <label>Upload product image:</label>
        <InputSC
          type="file"
          placeholder="Upload product image"
          name="images"
          onChange={handleImageChange}
          multiple
          accept="image/*"
        />
      </SelectSCContainerSC>

      <ButtonSC onClick={handleSubmit}>Create Product</ButtonSC>
    </StyledFormSC>
  );
};

export default CreateProduct;
