import { Outlet } from "react-router-dom";
import { ContainerSC, WrapperSC } from "./style";

import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";

export const MainTemplate = () => {
  return (
    <WrapperSC>
      <ContainerSC>
        <Header />
        <Outlet />
        <Footer inputPlaceholder="Enter your email for updates." />
      </ContainerSC>
    </WrapperSC>
  );
};
