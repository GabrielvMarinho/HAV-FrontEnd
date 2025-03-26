"use client"
import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import InputDropdown from "@/app/components/Inputs/InputDropdown";
import Title from "@/app/components/NonInteractable/Title";
import { dropdownFields } from "@/app/components/globalFormsConfig/InputDropdownsConfig";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { pt } from "react-day-picker/locale";
import "./style/style.css"
import FetchScheduleFutureByIdAndFuture from "@/app/apiCalls/Schedules/FetchScheduleFutureByIdAndFuture";


export default function calendar(){
    const [selected, setSelected] = useState<Date>();
    const [data, setData] = useState();
    
    useEffect(() => {
        async function fetch(){
            const data = await FetchScheduleFutureByIdAndFuture(5)
            setData(data);

        }
        fetch();
      }, []);

      console.log(data)
      console.log(new Date(2025, 12, 2))
      const modifierList ={
            freeDays: data?.map((schedule) => {
                const [year, month, day] = schedule.day.split("-").map(Number); // Divide e converte para número
                return new Date(year, month -1, day)
            }),
            freeDaysWithCustomer: []
      }
      console.log(modifierList)
    return(
        <> 
        <HeaderAdm/>
        <Title tag="h1" text="Agenda" /> 
        <DayPicker
            showOutsideDays
            fixedWeeks
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={
                selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
            }
            
            modifiers={modifierList}
            modifiersClassNames={{
                freeDays:"free_day_style",
                freeDaysWithCustomer:"free_day_with_customer_style"
            }}
            locale={pt}
            />
        <NavBarAdm options={NavBarPath.historic} />
        <Footer/>

        
        </>
    )
}
