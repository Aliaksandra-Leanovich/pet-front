import { useState } from "react";
import { Burger } from "../Burger";
import { RightNavigation } from "../Navigation/RightNavigation";
import { TopNavigation } from "../Navigation/TopNavigation";
import {
  ContainerBottomSC,
  LogoContainerSC,
  StyledHeaderSC,
  WrapperSC,
} from "./style";
import Logo from "../../assets/icons/logo.svg";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledHeaderSC>
      <WrapperSC>
        <ContainerBottomSC>
          <LogoContainerSC>
            <img src={Logo} alt="" />
          </LogoContainerSC>
          <TopNavigation isOpen={isOpen} />
          <RightNavigation isOpen={isOpen} />
          <Burger isOpen={isOpen} setOpen={setOpen} />
        </ContainerBottomSC>
      </WrapperSC>
    </StyledHeaderSC>
  );
};
