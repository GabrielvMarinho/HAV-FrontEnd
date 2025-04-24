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
import LoginForm from "@/app/components/Forms/LoginForm";
import ChangePasswordForm from "@/app/components/Forms/ChangePasswordForm";
import ForgotPasswordForm from "@/app/components/Forms/ForgotPasswordForm";

export default function page(){



    
    return(
        <>
        <div className= "container">
            <div className= "diagonal"> 
                <div className="LogoClara">
                    <LogoClara width="150" height="150"/>
                </div>
            </div>
            <div className="form-box">
                <h2 className="tituloLogin"> ESCREVA SEU EMAIL</h2>
                <div className="containerLinha">
                    <h2 className="linha"> </h2>
                </div>
                <ForgotPasswordForm/>
             </div>

            <div className="logoFundo">
                <LogoFundo width="900" height="1000"/>
            </div>

            <div className="logo"> 
                <Logo width="70%" height="450"/>
            </div>
        </div>

        </>
    )
}