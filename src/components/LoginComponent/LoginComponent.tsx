import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { validationSchema } from "../../helper";
import { Button } from "../Button";
import { Input } from "../Input";
import { StyledFormSC } from "./styles";
import { IUserForm } from "./types";
import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { setUserEmail } from "../../store/slices/userSlice";
import { routes } from "../../routes";

interface IUser {
  user: {
    role: string;
    orders: [];
    _id: string;
    email: string;
    email_is_verified: boolean;
    password: string;
    date: string;
    __v: number;
  };
  message: string;
}

export const LoginComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
        "https://istore-backend-5t3i.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(data),
        }
      );

      const result: IUser = await response.json();

      if (response.ok) {
        localStorage.setItem("userEmail", result.user.email);
        localStorage.setItem("role", result.user.role);
        dispatch(
          setUserEmail({
            email: result.user.email,
            userDetails: result.user.role,
          })
        );
        navigate(routes.HOME);
      } else {
        console.error("Registration failed:", result.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
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
      <Button type="submit">{t("button.login")}</Button>
    </StyledFormSC>
  );
};
