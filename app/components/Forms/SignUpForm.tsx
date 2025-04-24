"use client"
import { useForm } from "react-hook-form";
import Envelope from "../IconsTSX/Envelope";
import Eye from "../IconsTSX/Eye";
import User from "../IconsTSX/User";
import Button from "../Inputs/Button";
import InputTextLogin from "../Inputs/InputTextLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpValidator } from "@/app/Validators/SignUpValidator";
import { useDispatch } from "react-redux";
import { SignUpFetch } from "@/app/redux/Auth/action";
import { useState } from "react";
import Link from "next/link";

export default function SignUpForm(){

    const form = useForm<SignUpValidator>({
        resolver: zodResolver(SignUpValidator),
        mode: "onTouched"
    });

    const [errorLogin, setErrorLogin] = useState<string | null>(null);
    
    const handleSignUp = async (data: SignUpValidator) => {
        if (Object.keys(form.formState.errors).length > 0) {
            return;
        }
            const response = await SignUpFetch(data.name, data.email, data.password);
            console.log(response)
            if (response.success) {
                console.log("Usuário cadastradot:", response.user);
    
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
    return(
            <form className="loginForm" onSubmit={form.handleSubmit(handleSignUp)}>
                {errorLogin ?
                <div className="errorContainerLogin">
                    <h3 className="ErrorLogin">{errorLogin}</h3>
                </div> : ""
                }   
                <div style={{ display: "flex", flexDirection: "column", alignItems:"center", gap: "10px" }}>

                <InputTextLogin name="name" register={form.register} error={form.formState.errors["name" as keyof SignUpValidator]} size="login" id="user" text="Nome" placeholder="Digite seu nome" icon={<User width="18" height="18" color="var(--text-light-red)"/>}/>
                <InputTextLogin name="email" register={form.register} error={form.formState.errors["email" as keyof SignUpValidator]}size="login" id="user" text="E-mail" placeholder="Digite seu e-mail" icon={<Envelope width="18" height="18" color="var(--text-light-red)"/>}/>
                <InputTextLogin password={true} name="password" register={form.register} error={form.formState.errors["password" as keyof SignUpValidator]} size="login" id="user" text="Senha" placeholder="Digite sua senha" icon={<Eye width="18" height="18" color="var(--text-light-red)"/>}/>
                <InputTextLogin password={true} name="confirmPassword" register={form.register} error={form.formState.errors["confirmPassword" as keyof SignUpValidator]} size="login" id="user" text="Confirmar senha" placeholder="Digite sua senha" icon={<Eye width="18"  height="18" color="var(--text-light-red)"/>}/>
                </div>
                    <div className="botao" style={{marginBottom:"15px"}}>
                        <Button name="button" size="small" text="Entrar" /> 
                    </div>
                    
                    <p className="naoPossuiConta"> Já possui Conta? <Link href="/login" className="cadastrarConta"> Entrar </Link></p>
                </form>
    );
}

