import CrossIcon from "../../assets/icons/cross.svg";
import {
  ButtonSC,
  ContainerButtonSC,
  ContainerChildSC,
  ContainerSC,
  WrapperSC,
} from "./styles";
import { IModalProps } from "./types";

export const Modal = ({ handleClose, show, children }: IModalProps) => {
  return (
    <WrapperSC show={show}>
      <ContainerSC show={show}>
        <ContainerButtonSC>
          <ButtonSC type="button" onClick={handleClose}>
            <img src={CrossIcon} alt="" />
          </ButtonSC>
        </ContainerButtonSC>
        <ContainerChildSC>
          <p>{children}</p>
        </ContainerChildSC>
      </ContainerSC>
    </WrapperSC>
  );
};
