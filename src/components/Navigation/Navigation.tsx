import { Links } from "../Links/Links";
import {
  IconFavoriteSC,
  IconSC,
  LinksContainerSC,
  StyledNavigationSC,
} from "./style";
import { INavigationProps } from "./type";

export const Navigation = ({ isOpen }: INavigationProps) => {
  return (
    <StyledNavigationSC isOpen={isOpen}>
      <Links />
      <LinksContainerSC>ICONS</LinksContainerSC>
    </StyledNavigationSC>
  );
};
