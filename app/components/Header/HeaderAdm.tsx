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
import Logout from "@/app/apiCalls/Auth/Logout";
import { usePathname } from "next/navigation";
import Hamburger from "../IconsTSX/Hamburguer";

export default function HeaderAdm() {

    //para gerenciar dropdowns do header
    const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);


    const toggleDropdown = (id: number) => {
        setOpenDropdownId((prev) => (prev === id ? null : id)); // Close if already open, otherwise open
    };
    const LogoutFetch = function(){
        async function fetch(){
            const data = await Logout()
            console.log("logout", data)
        }
        fetch()
    }
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
                    {/* <Language width={32} height={32} color="" /> */}
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
                    {/* <Language width={32} height={32} color="" /> */}
                </div>
                    <div onClick={() =>{setMobileOpen(false)}}>
                        <Hamburger width={32} height={32} color=""></Hamburger>
                    </div>
            </div>   
            <div>
                <div style={{width:"100%", height:"1px", backgroundColor:"var(--text-white)", marginTop:"20px"}}></div>
                <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px", marginBottom:"10px"}}>
                    <Link className="linkHeaderMobile" href={"/"}>Início</Link>
                    <Link className="linkHeaderMobile" href={"/search?purpose=venda"}>Compra</Link>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px", marginBottom:"10px"}}>
                    <Link className="linkHeaderMobile" href={"/chat"}>Mensagens</Link>
                    <Link className="linkHeaderMobile" href={"/search?purpose=locacao"}>Locação</Link>
                    
                </div>
                <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px", marginBottom:"10px"}}>
                    <Link className="linkHeaderMobile" href={"/favorites"}>Favoritos</Link>
                    <Link className="linkHeaderMobile" href={"/notification"}>Notificações</Link>
                    
                </div>
                <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px", marginBottom:"10px"}}>
                    <Link className="linkHeaderMobile" href={"/profile"}>Perfil</Link>
                    <Link className="linkHeaderMobile" href={"/manage/customers"}>Usuários</Link>
                    
                </div>
                <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px", marginBottom:"10px"}}>
                    <Link className="linkHeaderMobile" href={"/manage/properties"}>Imóveis</Link>
                    <Link className="linkHeaderMobile" href={"/aboutus"}>Sobre nós</Link>

                </div>
                <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px", marginBottom:"10px"}}>

                <Link className="linkHeaderMobile" href={"/"} onClick={() =>{LogoutFetch()}}>Logout</Link>
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

                    <div onClick={() => toggleDropdown(1)}>
                        <HeaderOptions
                            isOpen={openDropdownId === 1}
                            close={() => setOpenDropdownId(null)}
                            title={"Imóveis"}
                            options={["Compra", "Locação"]}
                            optionsLinks={["/search?purpose=venda", "/search?purpose=locacao"]}
                            optionsIcons=
                            {[<Money width={17} height={17} color={"var(--text-white)"} />,
                            <Range width={17} height={17} color={"var(--text-white)"} />]} />
                    </div>

                    <Link href={"/aboutus"}>Sobre Nós</Link>

                    <div onClick={() => toggleDropdown(2)}>
                        <HeaderOptions
                            isOpen={openDropdownId === 2}
                            close={() => setOpenDropdownId(null)}
                            title={"Área do Administrador"}
                            options={["Mensagens", "Perfil", "Favoritos", "Notificações"]}
                            optionsLinks={["/chat", "/profile", "/favorite", "/notification"]}
                            optionsIcons=
                            {[<Comments width={17} height={17} color={"var(--text-white)"} />,
                            <Profile width={17} height={17} color={"var(--text-white)"} />,
                            <StarIcon width={17} height={17} color={"var(--text-white)"} idUser={0} idProperty={0} selected={false} />,
                            <Bell width={17} height={17} color={"var(--text-white)"} />]} />
                    </div>



                    <div onClick={() => toggleDropdown(3)}>


                        <HeaderOptions
                            isOpen={openDropdownId === 3}
                            close={() => setOpenDropdownId(null)}
                            title={"Gestão"}
                            options={["Usuários", "Ímoveis"]}
                            optionsLinks={["/manage/customers", "/manage/properties"]}
                            optionsIcons=
                            {[<User width={17} height={17} color={"var(--text-white)"} />,
                            <Construcao width={17} height={17} color={"var(--text-white)"} />]} />

                    </div>
                    <div onClick={() => {LogoutFetch()}}>
                        <Link href={"/login"}>Logout</Link>
                    </div>
                </div>
                {/* <Language width={30} height={30} color="" /> */}
            </div>


            {/* <section className="headerMobile">
                <Hamburger width={32} height={32} color="" />
            </section> */}
        </header>
        </>
    );
}
