import React, { Component, ReactNode } from "react";
import Links from "../Links/Links";
import {
  BorderSC,
  IconSC,
  LinksContainerSC,
  StyledNavigationSC,
} from "./style";
import { INavigationProps } from "./type";
import AccountIcon from "../../assets/icons/account.svg";

class Navigation extends Component<INavigationProps> {
  render(): ReactNode {
    const { isOpen } = this.props;

    return (
      <StyledNavigationSC isOpen={isOpen}>
        <Links />
        <BorderSC />
        <LinksContainerSC>
          <IconSC to="/account">
            <img src={AccountIcon} alt="" />
          </IconSC>
        </LinksContainerSC>
      </StyledNavigationSC>
    );
  }
}

export default Navigation;
