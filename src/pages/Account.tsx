import React from "react";
import { useAppSelector } from "../store/hooks";
import { getUserInfo } from "../store/selectors";
import AuthFormComponent from "../components/AuthFormComponent/AuthFormComponent";
import { Orders } from "../components/Orders/Orders";
import { Button } from "../components/Button";
import { useLogOut } from "../hooks/use-log-out.hook";
import styled from "@emotion/styled";

export const Account = () => {
  const { isAuthorized } = useAppSelector(getUserInfo);
  const handleLogout = useLogOut();

  return !isAuthorized ? (
    <AuthFormComponent />
  ) : (
    <ContainerSC>
      <ButtonContainerSC>
        <Button type="submit" handleClick={handleLogout}>
          Log Out
        </Button>
      </ButtonContainerSC>
      <Orders />
    </ContainerSC>
  );
};

export const ContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ButtonContainerSC = styled.div`
  max-width: 200px;
  width: 100%;
`;
