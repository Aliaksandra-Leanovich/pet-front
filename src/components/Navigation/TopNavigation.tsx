import React from "react";
import { ContainerTopNavigationSC } from "./style";
import { INavigationProps } from "./type";
import Navigation from "./Navigation";

export const TopNavigation = ({ isOpen }: INavigationProps) => {
  return (
    <ContainerTopNavigationSC>
      <Navigation isOpen={isOpen} />
    </ContainerTopNavigationSC>
  );
};
