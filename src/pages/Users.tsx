import React from "react";

import { useNavigate } from "react-router-dom";

export const Users = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return <>users</>;
};
