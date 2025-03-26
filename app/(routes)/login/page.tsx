import HavLogo from "@/app/components/IconsTSX/HavLogoLight";
import "../login/style/style.css";
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
                <h2 className="tituloLogin"> LOGIN</h2>
                <div className="containerLinha">
                    <h2 className="linha"> </h2>
                </div>
                {/* <div className="tituloLogin">
                <Title tag="h1" text="LOGIN"/>
                </div> */}
                <form>
                    <InputText name="name" size="medium" id="user" text="E-mail" placeholder="Digite seu e-mail"/>
                    <InputText name="name" size="medium" id="pass" text="Senha" placeholder="Digite sua senha"/>
                    <p className="EsqueceuSenha">Esqueceu a senha?</p>
                    <div className="botao">
                        <Button name="button" size="small" text="Entrar" /> 
                    </div>
                    <p className="ou">ou</p>
                    <p className="logoGoogle"> logo </p>
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