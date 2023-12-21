import { Links } from "../Links/Links";
import {
  BorderSC,
  IconSC,
  LinksContainerSC,
  StyledNavigationSC,
} from "./style";
import { INavigationProps } from "./type";
import AccountIcon from "../../assets/icons/account.svg";

export const Navigation = ({ isOpen }: INavigationProps) => {
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
};
