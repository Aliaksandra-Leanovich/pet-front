import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { validationSchema } from "../../helper";
import { Button } from "../Button";
import { Input } from "../Input";
import { StyledFormSC } from "./styles";
import { IUserForm } from "./types";

export const RegisterComponent = () => {
  const { t } = useTranslation();
  const [successMessage, setSuccessMessage] = useState("");
  const valueEmail = t("input.email");
  const valuePassword = t("input.password");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IUserForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: IUserForm) => {
    try {
      const response = await fetch(
        "https://istore-backend-5t3i.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setSuccessMessage(result.message || "Registration successful");
      } else {
        const result = await response.json();
        console.error("Form submission failed:", result.message);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <StyledFormSC onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            type="email"
            label="email"
            value={value}
            onChange={onChange}
            errors={errors.email?.message}
            register={register}
            placeholder={valueEmail}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            type="password"
            label="password"
            value={value}
            onChange={onChange}
            errors={errors.password?.message}
            register={register}
            placeholder={valuePassword}
          />
        )}
      />
      <Button type="submit">{t("button.register")}</Button>
      <p>{successMessage} </p>
    </StyledFormSC>
  );
};
