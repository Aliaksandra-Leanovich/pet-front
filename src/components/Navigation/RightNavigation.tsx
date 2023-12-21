import React from "react";
import { ContainerRightSC } from "./style";
import { INavigationProps } from "./type";
import Navigation from "./Navigation";

export const RightNavigation = ({ isOpen }: INavigationProps) => {
  return (
    <ContainerRightSC isOpen={isOpen}>
      <Navigation isOpen={isOpen} />
    </ContainerRightSC>
  );
};
