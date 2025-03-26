import HavLogo from "@/app/components/IconsTSX/HavLogoLight";
import "../signup/style/style.css";
import Logo from "@/app/components/IconsTSX/logo";
import LogoFundo from "@/app/components/IconsTSX/logoFundo";
import Title from "@/app/components/NonInteractable/Title";
import InputText from "@/app/components/Inputs/InputText";
import Button from "@/app/components/Inputs/Button";


export default function login(){
    return(
        <>
        <div className= "container">
            <div className= "diagonal"> </div>

            <div className="form-box">
                <h2 className="tituloLogin"> CADASTRO</h2>
                <div className="containerLinha">
                    <h2 className="linha"> </h2>
                </div>
                <form>
                    <InputText name="name" size="medium" id="name" text="Nome" placeholder="Digite seu nome"/>
                    <InputText name="name" size="medium" id="user" text="E-mail" placeholder="Digite seu e-mail"/>
                    <InputText name="name" size="medium" id="pass" text="Senha" placeholder="Digite sua senha"/>
                    <InputText name="name" size="medium" id="pass" text="Confirme sua senha" placeholder="Digite sua senha"/>
                    <div className="botao">
                        <Button name="button" size="small" text="Entrar" /> 
                    </div>
                    <div className="containerGoogle">
                        <p className="ou">ou</p>
                        <img className={"Google"} src="/Image/Google.png"/>
                    </div>
                    <p className="naoPossuiConta"> Já possui Conta? <p className="cadastrarConta"> Entrar </p></p>
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