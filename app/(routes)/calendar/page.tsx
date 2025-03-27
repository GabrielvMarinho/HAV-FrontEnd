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
import SchedulingCard from "@/app/components/Information/SchedulingCard";


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

    const getHoursFromDay = function(date :Date){
        var arrayOfHour :string[] = []
        if(date != undefined){
            data?.map((schedule) =>{

                const [year, month, day] = schedule.day.split("-").map(Number); // Divide e converte para número
                const scheduleDate = new Date(year, month - 1, day); // Cria um objeto Date para comparar
    


                // Comparando apenas ano, mês e dia
                if (scheduleDate.getFullYear() === date.getFullYear() && 
                    scheduleDate.getMonth() === date.getMonth() && 
                    scheduleDate.getDate() === date.getDate()) {
                    arrayOfHour.push(schedule.start_hour.slice(0, 5))
                }
            })
        }
        

        return arrayOfHour
    }

    const getIdsFromDay = function(date :Date){
        var objectId :Record<string, number> = {}
        if(date){
            data?.map((schedule) =>{

                const [year, month, day] = schedule.day.split("-").map(Number); // Divide e converte para número
                const compareDate = new Date(year, month-1, day)
    
                if (compareDate.getFullYear() === date.getFullYear() && 
                    compareDate.getMonth() === date.getMonth() && 
                        compareDate.getDate() === date.getDate()) {            
                    objectId[schedule.start_hour.slice(0, 5)] = schedule.id
                }
            })
        }
       
        return objectId
    }
    const saveHours = function(addHours :string[], removeHoursId :string[]){
        if(removeHoursId.length!=0){
            RemoveSchedules(removeHoursId)
        }
        
        const objects :{day :string, start_hour: string, realtor_id :string}[]
         = addHours.map((hour) =>({
            day: selected 
            ? `${selected.getDate().toString().padStart(2, '0')}-${(selected.getMonth() + 1).toString().padStart(2, '0')}-${selected.getFullYear()}`
            : "",
            start_hour: hour,
            realtor_id: realtorId, 
        }))
        AddSchedules(objects)
        window.location.href = window.location.href 
    }
    const getCardsData = function(date :Date){
        var arrayOfCardsData :Record<string, string>[] = []
        var index =0;
        if(date != undefined){
            data?.map((schedule) =>{

                const [year, month, day] = schedule.day.split("-").map(Number);
                const scheduleDate = new Date(year, month - 1, day);
    
                

                // Comparando apenas ano, mês e dia
                if (scheduleDate.getFullYear() === date.getFullYear() && 
                    scheduleDate.getMonth() === date.getMonth() && 
                    scheduleDate.getDate() === date.getDate()) {
                    if(schedule.customer && schedule.property){
                        if(schedule.customer.id && schedule.property.id){
                            const indexArray = arrayOfCardsData.findIndex(record => 
                                record["customer_id"] === schedule.customer.id &&
                                record["property_id"] === schedule.property.id
                            );
                            if (indexArray !== -1) {
                                arrayOfCardsData[indexArray]["end_hour"] = schedule.start_hour;
                            }else{
                                console.log(arrayOfCardsData[index])
                                arrayOfCardsData[index] = {}
                                arrayOfCardsData[index]["customer_id"] = schedule.customer.id
                                arrayOfCardsData[index]["property_id"] = schedule.property.id
                                arrayOfCardsData[index]["name"] = schedule.customer.name
                                arrayOfCardsData[index]["city"] = schedule.property.address.city
                                arrayOfCardsData[index]["neighbourhood"] = schedule.property.address.neighbourhood
                                arrayOfCardsData[index]["phone"] = schedule.customer.celphone
                                arrayOfCardsData[index]["start_hour"] = schedule.start_hour
                                arrayOfCardsData[index]["end_hour"] = schedule.start_hour

                                index = index+1

                            }
                        }
                    }
                }
            })
        }
        

        return arrayOfCardsData
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
            <SelectHour cards={getCardsData(selected)} saveHours={saveHours} ids={getIdsFromDay(selected)} day={selected} selectHours={getHoursFromDay(selected)}/>
            </div>
            
        <Footer/>

        
        </>
    )
}
