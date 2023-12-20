import { Outlet } from "react-router-dom";
import { ContainerSC, WrapperSC } from "./style";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const MainTemplate = () => {
  return (
    <WrapperSC>
      <ContainerSC>
        <Header />
        <Outlet />
        <Footer />
      </ContainerSC>
    </WrapperSC>
  );
};
