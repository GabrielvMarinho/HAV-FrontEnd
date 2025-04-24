"use client";
import { useForm } from "react-hook-form";
import InputTextLogin from "../Inputs/InputTextLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Inputs/Button";
import { useState } from "react";
import "@/app/variables.css";
import { ForgotPasswordFormValidator } from "@/app/Validators/ForgotPasswordFormValidator";
import { forgotPassword } from "@/app/apiCalls/User/forgotPassword";

export default function FormForgotPassword() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSucessMessage] = useState<string | null>(null);

  const form = useForm<ForgotPasswordFormValidator>({
    resolver: zodResolver(ForgotPasswordFormValidator),
    mode: "onTouched",
  });

  const handleForgotPassword = async (data: ForgotPasswordFormValidator) => {
    const response = await forgotPassword(data.email);

    if (response.status) {
      setErrorMessage(null)
      setSucessMessage(response.message);
      form.reset();
    } else {
      setSucessMessage(null)
      setErrorMessage(response.message);
    }
  };

  return (
    <form className="loginForm" onSubmit={form.handleSubmit(handleForgotPassword)}>
      {errorMessage && (
        <div className="errorContainerLogin">
          <h3 className="ErrorLogin">{errorMessage}</h3>
        </div>
      )}
      {successMessage && (
        <div className="successContainerLogin">
          <h3 className="ErrorLogin">{successMessage}</h3>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <InputTextLogin
          name="email"
          register={form.register}
          error={form.formState.errors.email}
          size="login"
          id="email"
          text="E-mail"
          placeholder="Digite seu e-mail"
        />
      </div>

      <div className="botao">
        <Button
          type="submit"
          name="button"
          background="var(--button-color)"
          size="small"
          text="Enviar link de redefinição"
        />
      </div>
    </form>
  );
}
