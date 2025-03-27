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
import SelectHour from "@/app/components/Forms/SelectHour";
import Button from "@/app/components/Inputs/Button";
import AddSchedules from "@/app/apiCalls/Schedules/AddSchedules";
import RemoveSchedules from "@/app/apiCalls/Schedules/RemoveSchedules";


export default function calendar(){
    const [selected, setSelected] = useState<Date>();
    const [data, setData] = useState();


    const realtorId = "1"



    useEffect(() => {
        async function fetch(){
            const data = await FetchScheduleFutureByIdAndFuture(realtorId)
            setData(data);
        }
        fetch();
      }, []);

      const modifierList ={
            freeDays: data?.map((schedule) => {
                const [year, month, day] = schedule.day.split("-").map(Number); // Divide e converte para número
                return new Date(year, month -1, day)
            }),
            freeDaysWithCustomer: data?.map((schedule) => {
                const [year, month, day] = schedule.day.split("-").map(Number); // Divide e converte para número
                if(schedule.customer != null){
                    return new Date(year, month -1, day)

                }

            }),
      }

    const getHoursFromDay = function(date :string){
        var arrayOfHour :string[] = []
        data?.map((schedule) =>{

            const [year, month, day] = schedule.day.split("-").map(Number); // Divide e converte para número
            
            if(date==new Date(year, month -1, day).toLocaleString()){
                arrayOfHour.push(schedule.start_hour.slice(0, 5))
            }
        })

        return arrayOfHour
    }
    const saveHours = function(addHours :string[], removeHoursId :string[]){
        if(removeHoursId.length!=0){
            RemoveSchedules(removeHoursId)
        }
        
        const objects :{day :string, start_hour: string, realtor_id :string}[]
         = addHours.map((hour) =>({
            day: selected?.toLocaleDateString() || "",
            start_hour: hour,
            realtor_id: realtorId, 
        }))
        console.log(objects)
        AddSchedules(objects)
        
    }
    return(
        <> 
        <HeaderAdm/>
        <Title tag="h1" text="Agenda" /> 
        <NavBarAdm options={NavBarPath.historic} />

        <div style={{display:"flex", gap:"50px", margin:"100px"}}>
        <DayPicker
            showOutsideDays
            fixedWeeks
            mode="single"
            selected={selected}
            onSelect={setSelected}
           
            
            modifiers={modifierList}
            modifiersClassNames={{
                freeDays:"free_day_style",
                freeDaysWithCustomer:"free_day_with_customer_style"
            }}
            locale={pt}
            />
            <SelectHour saveHours={saveHours} day={selected?.toLocaleDateString()} selectHours={getHoursFromDay(selected?.toLocaleString())}/>
            </div>
            
        <Footer/>

        
        </>
    )
}
