import React from "react";
import {
  BlockSC,
  CategoryTitleSC,
  ContainerSC,
  DescriptionSC,
  ImageSc,
  TextSC,
  TitleSC,
  WrapperSC,
} from "./style";
import AboutImage1 from "../../assets/icons/about1.webp";
import AboutImage2 from "../../assets/icons/about2.jpg";

export const AboutDescription = () => {
  return (
    <WrapperSC>
      <ContainerSC>
        <BlockSC>
          <TitleSC>About</TitleSC>
          <TextSC>Who we are and why we do what we do!</TextSC>
          <DescriptionSC>
            Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
            sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
            eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor
            magna et, placerat urna. Curabitur eu magna enim. Proin placerat
            tortor lacus, ac sodales lectus placerat quis.
          </DescriptionSC>
          <ImageSc>
            <img src={AboutImage1} alt="" />
          </ImageSc>
          <CategoryTitleSC>Top trends</CategoryTitleSC>
          <DescriptionSC>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis.
          </DescriptionSC>

          <CategoryTitleSC>Produced with care</CategoryTitleSC>
          <ImageSc>
            <img src={AboutImage2} alt="" />
          </ImageSc>
          <DescriptionSC>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor
            odio, in molestie diam bibendu.
          </DescriptionSC>
        </BlockSC>
      </ContainerSC>
    </WrapperSC>
  );
};
