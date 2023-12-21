import React, { useState } from "react";
import { LoginComponent } from "../LoginComponent/LoginComponent";
import { RegisterComponent } from "../RegisterComponent/RegisterComponent";
import { useTranslation } from "react-i18next";
import {
  BlockSC,
  ButtonSC,
  ButtonsContainerSC,
  ContainerSC,
  WrapperSC,
} from "./style";

type FormType = "signin" | "register";

const AuthFormComponent: React.FC = () => {
  const { t } = useTranslation();
  const [activeButton, setActiveButton] = useState<FormType>("signin");

  const handleSwitchForm = (formType: FormType) => {
    setActiveButton(formType);
  };

  return (
    <WrapperSC>
      <ContainerSC>
        <BlockSC>
          <ButtonsContainerSC>
            <ButtonSC
              onClick={() => handleSwitchForm("signin")}
              isActive={activeButton === "signin"}
            >
              {t("button.login")}
            </ButtonSC>
            <ButtonSC
              onClick={() => handleSwitchForm("register")}
              isActive={activeButton === "register"}
            >
              {t("button.register")}
            </ButtonSC>
          </ButtonsContainerSC>

          {activeButton === "signin" ? (
            <LoginComponent />
          ) : (
            <RegisterComponent />
          )}
        </BlockSC>
      </ContainerSC>
    </WrapperSC>
  );
};

export default AuthFormComponent;
