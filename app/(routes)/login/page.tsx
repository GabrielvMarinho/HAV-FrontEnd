import HavLogo from "@/app/components/IconsTSX/HavLogoLight";
import "../login/style/style.css";
import Logo from "@/app/components/IconsTSX/logo";
import LogoFundo from "@/app/components/IconsTSX/logoFundo";
import Title from "@/app/components/NonInteractable/Title";
import InputText from "@/app/components/Inputs/InputText";
import Button from "@/app/components/Inputs/Button";
import InputTextLogin from "@/app/components/Inputs/InputTextLogin";
import StarFavorite from "@/app/components/Inputs/StarFavorite";
import User from "@/app/components/IconsTSX/User";
import "@/app/variables.css";
import ClosedPadlock from "@/app/components/IconsTSX/ClosedPadlock";
import Envelope from "@/app/components/IconsTSX/Envelope";
import Eye from "@/app/components/IconsTSX/Eye";
import LogoClara from "@/app/components/IconsTSX/LogoClara";

export default function login(){
    return(
        <>
        <div className= "container">
            <div className= "diagonal"> 
                <div className="LogoClara">
                    <LogoClara width="150" height="150"/>
                </div>
            </div>
            <div className="form-box">
                <h2 className="tituloLogin"> LOGIN</h2>
                <div className="containerLinha">
                    <h2 className="linha"> </h2>
                </div>
                <form className="loginForm">
                    <InputTextLogin name="name" size="medium" id="user" text="E-mail" placeholder="Digite seu e-mail" icon={<Envelope width="18" height="18" color="var(--text-light-red)"/>}/>
                    <InputTextLogin password={true} name="name" size="medium" id="user" text="Senha" placeholder="Digite sua senha" icon={<Eye width="18" height="18" color="var(--text-light-red)"/>}/>
                    
                   
                    <p className="EsqueceuSenha">Esqueceu a senha?</p>
                    <div className="botao">
                        <Button name="button" size="small" text="Entrar" /> 
                    </div>
                    <div className="containerGoogle">
                        <p className="ou">ou</p>
                        <img className={"Google"} src="/Image/Google.png"/>
                    </div>
                    <p className="naoPossuiConta"> Não possui conta? <p className="cadastrarConta"> Cadastrar </p></p>
                </form>
             </div>

            <div className="logoFundo">
                <LogoFundo width="100%" height="850"/>
            </div>

            <div className="logo"> 
                <Logo width="70%" height="450"/>
            </div>
        </div>

        </>
    )
}