import React from "react";
import { useAppSelector } from "../store/hooks";
import { getUserInfo } from "../store/selectors";
import AuthFormComponent from "../components/AuthFormComponent/AuthFormComponent";
import { Orders } from "../components/Orders/Orders";

export const Account = () => {
  const { isAuthorized } = useAppSelector(getUserInfo);
  return isAuthorized ? <AuthFormComponent /> : <Orders />;
};
