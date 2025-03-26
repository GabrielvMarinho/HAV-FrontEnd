"use client"
import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import InputDropdown from "@/app/components/Inputs/InputDropdown";
import Title from "@/app/components/NonInteractable/Title";
import { dropdownFields } from "@/app/components/globalFormsConfig/InputDropdownsConfig";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { pt } from "react-day-picker/locale";

export default function calendar(){
    const [selected, setSelected] = useState<Date>();

    return(
        <> 
        <HeaderAdm/>
        <Title tag="h1" text="Agenda" /> 
        <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={
                selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
            }
            
            modifiers={{
                freeDays: [
                    new Date(2025, 3, 3),
                    new Date(2025, 3, 3),
                    new Date(2025, 3, 3)
                ]
            }}
            locale={pt}
            />
        <NavBarAdm options={NavBarPath.historic} />
        <Footer/>

        
        </>
    )
}
