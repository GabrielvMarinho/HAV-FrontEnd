import HavLogo from "@/app/components/IconsTSX/HavLogoLight";
import "../login/style/style.css";
import Logo from "@/app/components/IconsTSX/logo";
import LogoFundo from "@/app/components/IconsTSX/logoFundo";


export default function login(){
    return(
        <>
        <div className= "container">
            <div className= "diagonal"> </div>

            <div className="logoFundo">
                <LogoFundo width="800" height="850"/>
            </div>

            <div className="logo"> 
                <Logo/>
            </div>
        </div>


        </>
    )
}