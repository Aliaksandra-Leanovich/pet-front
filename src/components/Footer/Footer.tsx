import { BlockCategories } from "../BlockCategories/BlockCategories";
import {
  BlockFormSC,
  BlockSC,
  ContainerSC,
  IconsContainerSC,
  InputSC,
  WrapperSC,
} from "./style";
import Linkedin from "../../assets/icons/linkedin.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/insta.svg";
import Twiter from "../../assets/icons/twit.svg";

export const Footer = ({
  inputPlaceholder = "Give an email, get the newsletter.",
}) => {
  return (
    <WrapperSC>
      <ContainerSC>
        <BlockSC>
          <BlockCategories />
          <BlockFormSC>
            <InputSC placeholder={inputPlaceholder} />
            <IconsContainerSC>
              <img src={Linkedin} alt="" />
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Twiter} alt="" />
            </IconsContainerSC>
          </BlockFormSC>
        </BlockSC>
      </ContainerSC>
    </WrapperSC>
  );
};
