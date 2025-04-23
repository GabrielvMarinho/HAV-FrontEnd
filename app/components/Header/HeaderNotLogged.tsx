"use client"
import HavLogo from "../IconsTSX/HavLogoLight";
import Language from "../IconsTSX/Language";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import HeaderOptions from "./HeaderOptions";
import ChamadaTelefonica from "../IconsTSX/CellPhone";
import User from "../IconsTSX/User";
import Construcao from "../IconsTSX/Construcao";
import Money from "../IconsTSX/Money";
import Range from "../IconsTSX/Range";
import Comments from "../IconsTSX/Comments";
import StarFavorite from "../Inputs/StarFavorite";
import Profile from "../IconsTSX/Profile";
import StarIcon from "../IconsTSX/StarIcon";
import Bell from "../IconsTSX/Bell";
import Proprietor from "../IconsTSX/Proprietor";
import { usePathname } from "next/navigation";
import Hamburger from "../IconsTSX/Hamburguer";

export default function HeaderEditor() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const pathname = usePathname();

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);


    
    return (
        <>
        <div className="headerSpace"></div>

        <header className="headerContainerMobile">
            
            {mobileOpen==false ?
                <div style={{display:"flex",  justifyContent:"space-between", width:"100%"}}>
                    <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                    <img
                    style={{width:"28px", height:"28px"}}
                    src="/Image/LogoClaraMobile.png"></img>
                    <Language width={32} height={32} color="" />
                    </div>
                        <div onClick={() =>{setMobileOpen(true)}}>
                            <Hamburger width={32} height={32} color=""></Hamburger>
                        </div>
                </div> 
            :  
            <>
            <div style={{display:"flex",  justifyContent:"space-between", width:"100%"}}>
            <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                    <img
                    style={{width:"28px", height:"28px"}}
                    src="/Image/LogoClaraMobile.png"></img>
                    <Language width={32} height={32} color="" />
                </div>
                    <div onClick={() =>{setMobileOpen(false)}}>
                        <Hamburger width={32} height={32} color=""></Hamburger>
                    </div>
            </div>   
            <div>
                <div style={{width:"100%", height:"1px", backgroundColor:"var(--text-white)", marginTop:"20px"}}></div>
                <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
                    <Link className="linkHeaderMobile" href={"/"}>Início</Link>
                    <Link className="linkHeaderMobile" href={"/aboutus"}>Sobre nós</Link>

                </div>
            
              
                
                <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px", marginBottom:"10px"}}>
                    <Link className="linkHeaderMobile" href={"/login"}>Login</Link>
                    <Link className="linkHeaderMobile" href={"/signup"}>Cadastro</Link>

                    
                </div>


            </div>
            </>
        }
                       
        </header>
        <header className="headerContainer">


            <HavLogo width={25} height={25} color={"#111111"} />

            <div style={{ display: "flex", gap: "30px" }}>
                <div className="HeaderOptions">
                    <Link href={"/"}>Início</Link>

                    <Link href={"/aboutus"}>Sobre Nós</Link>
                    <Link href={"/login"}>Login</Link>
                    <Link href={"/aboutus"}>Sobre nós</Link>
                    <Link  href={"/signup"}>Cadastro</Link>
                </div>
                <Language width={30} height={30} color="" />
            </div>


         
        </header>
        </>
    );
}