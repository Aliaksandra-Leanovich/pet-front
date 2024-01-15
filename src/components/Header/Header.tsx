import React, { Component } from "react";
import { Burger } from "../Burger";
import { RightNavigation } from "../Navigation/RightNavigation";
import { TopNavigation } from "../Navigation/TopNavigation";
import {
  ContainerBottomSC,
  LogoContainerSC,
  StyledHeaderSC,
  WrapperSC,
} from "./style";

interface HeaderState {
  isOpen: boolean;
}

class Header extends Component<{}, HeaderState> {
  state: HeaderState = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <StyledHeaderSC>
        <WrapperSC>
          <ContainerBottomSC>
            <LogoContainerSC href="/">i-Store</LogoContainerSC>
            <TopNavigation isOpen={isOpen} />
            <RightNavigation isOpen={isOpen} />
            <Burger isOpen={isOpen} setOpen={this.handleToggle} />
          </ContainerBottomSC>
        </WrapperSC>
      </StyledHeaderSC>
    );
  }
}

export default Header;
