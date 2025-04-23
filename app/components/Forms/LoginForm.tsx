"use client"
import { useForm } from "react-hook-form";
import InputTextLogin from "../Inputs/InputTextLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { Login } from "@/app/Validators/LoginValidator";
import Envelope from "../IconsTSX/Envelope";
import Button from "../Inputs/Button";
import Eye from "../IconsTSX/Eye";
import LoginAttempt from "@/app/apiCalls/Auth/LoginAttempt";
import { useState } from "react";
import "@/app/variables.css"
import { useDispatch } from "react-redux";
import { loginUser } from "@/app/redux/Auth/action";
import Link from "next/link";

export default function FormLogin() {

    const dispatch = useDispatch();

    const [errorLogin, setErrorLogin] = useState<string | null>(null);
    
    const handleLogin = async (data: Login) => {
        const response = await dispatch<any>(loginUser(data.email, data.password));
        console.log(response)
        if (response.success) {
            console.log("Usuário logado:", response.user);

            localStorage.setItem('token', response.jwt);

            if (response.user) {
                localStorage.setItem('user', JSON.stringify(response.user));
            }

            window.location.href = "/";
        } else {
            console.log(response.message)
            setErrorLogin(response.message);
        }
    }

    const form = useForm<Login>({
        resolver: zodResolver(Login),
        mode: "onTouched"
    });
    console.log(errorLogin)
    return (
        <form className="loginForm" onSubmit={form.handleSubmit(handleLogin)}>
            {errorLogin ?
                <div className="errorContainerLogin">
                    <h3 className="ErrorLogin">{errorLogin}</h3>
                </div> : ""
            }
            <div style={{ display: "flex", flexDirection: "column", alignItems:"center", gap: "10px" }}>
                <InputTextLogin name="email" register={form.register} error={form.formState.errors["email" as keyof Login]} size="login" id="user" text="E-mail" placeholder="Digite seu e-mail" icon={<Envelope width="18" height="18" color="var(--text-light-red)" />} />
                <InputTextLogin name="password" register={form.register} error={form.formState.errors["password" as keyof Login]} password={true} size="login" id="user" text="Senha" placeholder="Digite sua senha" icon={<Eye width="18" height="18" color="var(--text-light-red)" />} />
            </div>

            <Link href="/forgotpassword" className="EsqueceuSenha">Esqueceu a senha?</Link>
            <div className="botao">
                <Button type="submit" name="button" background="var(--button-color)" size="small" text="Entrar" />
            </div>
            {/* <div className="containerGoogle">   
                        <p className="ou">ou</p>
                        <img className={"Google"} src="/Image/Google.png"/>
                    </div> */}
            <div className="textSignup">
                <p className="naoPossuiConta"> Não possui conta?  </p>
            
                    <Link href={"/signup"} className="linkSignup"> cadastrar </Link>
            </div>
            
        </form>
    )
}