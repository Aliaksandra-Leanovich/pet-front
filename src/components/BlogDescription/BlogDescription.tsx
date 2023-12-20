import React from "react";
import {
  BlockSC,
  ContainerSC,
  DateDC,
  DescriptionSC,
  ImageSc,
  SlideSC,
  SlideTitleSc,
  TitleSC,
  WrapperSC,
} from "./style";
import Blog1 from "../../assets/icons/blog1.jpg";
import Blog2 from "../../assets/icons/blog2.png";
import Blog3 from "../../assets/icons/blog3.png";
import Blog4 from "../../assets/icons/blog4.png";

export const BlogDescription = () => {
  return (
    <WrapperSC>
      <ContainerSC>
        <TitleSC>Blog</TitleSC>
        <BlockSC>
          <SlideSC>
            <ImageSc>
              <img src={Blog1} alt="" />
            </ImageSc>
            <DateDC>Fashion - October 8, 2020</DateDC>
            <SlideTitleSc>Top Trends From Spring</SlideTitleSc>
            <DescriptionSC>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus
              augue, a maximus elit ex vitae libero...
            </DescriptionSC>
          </SlideSC>

          <SlideSC>
            <ImageSc>
              <img src={Blog2} alt="" />
            </ImageSc>
            <DateDC>Fashion - October 8, 2020</DateDC>
            <SlideTitleSc>Top Trends From Spring</SlideTitleSc>
            <DescriptionSC>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus
              augue, a maximus elit ex vitae libero...
            </DescriptionSC>
          </SlideSC>

          <SlideSC>
            <ImageSc>
              <img src={Blog3} alt="" />
            </ImageSc>
            <DateDC>Fashion - October 8, 2020</DateDC>
            <SlideTitleSc>Top Trends From Spring</SlideTitleSc>
            <DescriptionSC>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus
              augue, a maximus elit ex vitae libero...
            </DescriptionSC>
          </SlideSC>

          <SlideSC>
            <ImageSc>
              <img src={Blog4} alt="" />
            </ImageSc>
            <DateDC>Fashion - October 8, 2020</DateDC>
            <SlideTitleSc>Top Trends From Spring</SlideTitleSc>
            <DescriptionSC>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus
              augue, a maximus elit ex vitae libero...
            </DescriptionSC>
          </SlideSC>

          <SlideSC>
            <ImageSc>
              <img src={Blog1} alt="" />
            </ImageSc>
            <DateDC>Fashion - October 8, 2020</DateDC>
            <SlideTitleSc>Top Trends From Spring</SlideTitleSc>
            <DescriptionSC>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus
              augue, a maximus elit ex vitae libero...
            </DescriptionSC>
          </SlideSC>

          <SlideSC>
            <ImageSc>
              <img src={Blog2} alt="" />
            </ImageSc>
            <DateDC>Fashion - October 8, 2020</DateDC>
            <SlideTitleSc>Top Trends From Spring</SlideTitleSc>
            <DescriptionSC>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus
              augue, a maximus elit ex vitae libero...
            </DescriptionSC>
          </SlideSC>
        </BlockSC>
      </ContainerSC>
    </WrapperSC>
  );
};
