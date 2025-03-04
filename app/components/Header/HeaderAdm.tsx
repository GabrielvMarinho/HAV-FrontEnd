"use client"
import HavLogo from "../IconsTSX/HavLogo";
import Language from "../IconsTSX/Language";
import Hamburger from "../IconsTSX/Hamburguer";
import Link from "next/link";
import { ReactNode } from "react";
import { useState, useEffect, useRef } from "react";
import HeaderOptions from "./HeaderOptions";
import ChamadaTelefonica from "../IconsTSX/CellPhone";



export default function HeaderAdm() {
    
    //para gerenciar dropdowns do header
    const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);


    const toggleDropdown = (id: number) => {
        setOpenDropdownId((prev) => (prev === id ? null : id)); // Close if already open, otherwise open
      };
    

    return (
        <header className="headerContainer">
                

                <HavLogo width={25} height={25} color={"#111111"} />

            <div style={{display:"flex", gap:"30px"}}>
                <div className="HeaderOptions">
                
                <Link href={"/xxx"}>asd</Link>
                <Link href={"/asdma"}>asd</Link>
                <Link href={"/asdma"}>asd</Link>
                <Link href={"/asdma"}>asd</Link>
                <div onClick={() => toggleDropdown(1)}>
                    <HeaderOptions 
                    isOpen={openDropdownId === 1} 
                    close={() => setOpenDropdownId(null)}
                    title={"Área do Admin"} 
                    options={["asd", "asd"]}
                    optionsLinks={["/asd", "/asd"]}
                    optionsIcons = 
                                {[<ChamadaTelefonica width={15} height={15} color={"var(--text-white)"}/>,
                                <ChamadaTelefonica width={15} height={15} color={"var(--text-white)"}/>,
                                <ChamadaTelefonica width={15} height={15} color={"var(--text-white)"}/>]}/>
                                </div>



                                <div onClick={() => toggleDropdown(2)}>


                    <HeaderOptions 
                    isOpen={openDropdownId === 2} 
                    close={() => setOpenDropdownId(null)}
                    title={"Área do Admin"} 
                    options={["asd", "asd"]}
                    optionsLinks={["/asd", "/asd"]}
                    optionsIcons = 
                                {[<ChamadaTelefonica width={15} height={15} color={"var(--text-white)"}/>,
                                <ChamadaTelefonica width={15} height={15} color={"var(--text-white)"}/>,
                                <ChamadaTelefonica width={15} height={15} color={"var(--text-white)"}/>]}/>
                                </div>
                    </div>
                <Language width={30} height={30} color="" />
            </div>
             

            {/* <section className="headerMobile">
                <Hamburger width={32} height={32} color="" />
            </section> */}
        </header>
    );
}
