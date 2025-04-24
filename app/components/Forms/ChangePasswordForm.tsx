"use client"
import { useForm } from "react-hook-form";
import InputTextLogin from "../Inputs/InputTextLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangePassword } from "@/app/Validators/ChangePasswordValidator";
import Eye from "../IconsTSX/Eye";
import Button from "../Inputs/Button";
import { useEffect, useState } from "react";
import changePassword from "@/app/apiCalls/User/changePassword";
import "@/app/variables.css";
import { useSearchParams } from "next/navigation";
import PasswordValidator from "@/app/Validators/PasswordValidator";

export default function FormChangePassword() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const form = useForm<ChangePassword>({
        resolver: zodResolver(ChangePassword),
        mode: "onTouched"
    });

    
    
      const handleChangePassword = async (data: ChangePassword) => {
        if (!token) {
            setErrorMessage("Token inválido ou ausente.");
            return;
        }

        const response = await changePassword(token, data.password);
        console.log(response)
        if (!response.status) {
            setErrorMessage(response.message);
            form.reset();
        } else {
            window.location.href = "/login"
        }
    };
    console.log(password)
    return (
        <form className="loginForm" onSubmit={form.handleSubmit(handleChangePassword)}>
            {errorMessage && (
                <div className="errorContainerLogin">
                    <h3 className="ErrorLogin">{errorMessage}</h3>
                </div>
            )}

            

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>

                <InputTextLogin
                    name="password"
                    register={form.register}
                    error={form.formState.errors.password}
                    size="login"
                    password={true}
                    id="password"
                    text="Nova senha"
                    placeholder="Digite sua nova senha"
                    icon={<Eye width="18" height="18" color="var(--text-light-red)" />}
                />

                <InputTextLogin
                    name="confirmPassword"
                    register={form.register}
                    error={form.formState.errors.confirmPassword}
                    size="login"
                    password={true}

                    id="confirmPassword"
                    text="Confirme a nova senha"
                    placeholder="Confirme sua nova senha"
                    icon={<Eye width="18" height="18" color="var(--text-light-red)" />}
                />
            </div>

            <div className="botao">
                <Button
                    type="submit"
                    name="button"
                    background="var(--button-color)"
                    size="small"
                    text="Alterar senha"
                />
            </div>
        </form>
    );
}
