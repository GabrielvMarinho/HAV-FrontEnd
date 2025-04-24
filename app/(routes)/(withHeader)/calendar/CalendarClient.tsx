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
import NewScheduleModal from "@/app/components/Forms/NewScheduleModal";
import ModalScheduling from "@/app/components/Modal/ModalScheduling";
import AuthGuard from "@/app/context/AuthGuard";
import CalendarValidation from "@/app/components/ValidationComponents/CalendarValidation";
import findUserOnCookie from "@/app/utils/findUserOnCookie";
import FetchScheduleFutureByIdCustomerAndFuture from "@/app/apiCalls/Schedules/FetchScheduleFutureByIdCustomerAndFuture";


export default function calendar(props: {usuario: any}){

    const [selected, setSelected] = useState<Date>();
    const [data, setData] = useState([]);
    const [dataCustomer, setDataCustomer] = useState([]);


    const formatTime = (time :string) => time.slice(0, 5);

    useEffect(() => {
        async function fetch(){
            try{
                const data = await FetchScheduleFutureByIdAndFuture()
                setData(data || []);
            }catch{}
            try{
                const dataCustomer = await FetchScheduleFutureByIdCustomerAndFuture()
                setDataCustomer(dataCustomer || []);
            }catch{}
            

        }
        fetch();
      }, []);
        
    var modifierList =[];

    if(props.usuario.role == "ROLE_REALTOR"){
        modifierList ={
                
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
    }else{
        modifierList ={
            schedules: dataCustomer?.map((schedule) => {
                const [year, month, day] = schedule.day.split("-").map(Number); // Divide e converte para número
                return new Date(year, month -1, day)
            }),
            
        }
    }

    const getHoursFromDay = function(date :Date){

        var arrayOfHour :string[] = []
        if(data != null){
            data?.map((schedule) =>{

                const [year, month, day] = schedule.day.split("-").map(Number); // Divide e converte para número
                const scheduleDate = new Date(year, month - 1, day); // Cria um objeto Date para comparar
    
                if(date == undefined){
                    return
                }
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
    const getHoursFromDayCustomer = function(date :Date){

        var arrayOfHour :string[] = []
        if(dataCustomer != null){
            dataCustomer?.map((schedule) =>{

                const [year, month, day] = schedule.day.split("-").map(Number); // Divide e converte para número
                const scheduleDate = new Date(year, month - 1, day); // Cria um objeto Date para comparar
    
                if(date == undefined){
                    return
                }
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
    const getIdsFromDayCustomer = function(date :Date){
        var objectId :Record<string, number> = {}
        if(date){
            dataCustomer?.map((schedule) =>{

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
        }))
        AddSchedules(objects)
        window.location.href = window.location.href 
    }
    const getCardsData = function(date :Date){
        var arrayOfCardsData :Record<string, string | string[]>[] = []
        var index =0;
        if(date != undefined){
            data?.map((schedule) =>{

                const [year, month, day] = schedule.day.split("-").map(Number);
                const scheduleDate = new Date(year, month - 1, day);
    
                

                // Comparando apenas ano, mês e dia
                //compare date
                if(scheduleDate.getMonth() == date.getMonth() && scheduleDate.getFullYear() == date.getFullYear() && scheduleDate.getDate() == date.getDate()){
                
                    if(schedule.customer && schedule.property){
                        if(schedule.customer.id && schedule.property.id){
                            const indexArray = arrayOfCardsData.findIndex(record => 
                                record["customer_id"] === schedule.customer.id &&
                                record["property_id"] === schedule.property.id
                            );
                            if (indexArray !== -1) {
                                arrayOfCardsData[indexArray]["hours"].push(formatTime(schedule.start_hour));
                                //sorting hours
                                const times = arrayOfCardsData[indexArray]["hours"];

                                const sortedTimes = times.sort((a, b) => {
                                // Convert time strings (HH:mm) to Date objects for proper comparison
                                const [aHour, aMinute] = a.split(':').map(Number);
                                const [bHour, bMinute] = b.split(':').map(Number);
            
                                // Compare hours first, then minutes
                                if (aHour === bHour) {
                                    return aMinute - bMinute;
                                }
                                return aHour - bHour;
                                });
                                arrayOfCardsData[indexArray]["hours"] = sortedTimes

                            }else{
                                arrayOfCardsData[index] = {["hours"]: []}

                                arrayOfCardsData[index]["customer_id"] = schedule.customer.id
                                arrayOfCardsData[index]["property_id"] = schedule.property.id
                                if(props.usuario.role =="ROLE_REALTOR"){
                                    arrayOfCardsData[index]["name"] = schedule.customer.name
                                    arrayOfCardsData[index]["photo"] = schedule.customer.mainImageCustomer

                                    arrayOfCardsData[index]["phone"] = schedule.customer.celphone

                                }else{
                                    arrayOfCardsData[index]["photo"] = schedule.realtor.mainImageRealtor
                                    arrayOfCardsData[index]["name"] = schedule.realtor.name
                                    arrayOfCardsData[index]["phone"] = schedule.realtor.celphone
                                }
                                arrayOfCardsData[index]["city"] = schedule.property.address.city
                                arrayOfCardsData[index]["neighborhood"] = schedule.property.address.neighborhood
                                arrayOfCardsData[index]["hours"].push(formatTime(schedule.start_hour))
                                //sorting hours
                                const times = arrayOfCardsData[index]["hours"];

                                const sortedTimes = times.sort((a, b) => {
                                // Convert time strings (HH:mm) to Date objects for proper comparison
                                const [aHour, aMinute] = a.split(':').map(Number);
                                const [bHour, bMinute] = b.split(':').map(Number);
            
                                // Compare hours first, then minutes
                                if (aHour === bHour) {
                                    return aMinute - bMinute;
                                }
                                return aHour - bHour;
                                });
                                arrayOfCardsData[index]["hours"] = sortedTimes
                                    
                                index = index +1

                            }
                        }
                    }
                }
                    
                
            })
        }
        return arrayOfCardsData
    }
    const getCardsDataCustomer = function(date :Date){
        var arrayOfCardsData :Record<string, string | string[]>[] = []
        var index =0;
        if(date != undefined){
            dataCustomer?.map((schedule) =>{

                const [year, month, day] = schedule.day.split("-").map(Number);
                const scheduleDate = new Date(year, month - 1, day);
    
                

                // Comparando apenas ano, mês e dia
                //compare date
                if(scheduleDate.getMonth() == date.getMonth() && scheduleDate.getFullYear() == date.getFullYear() && scheduleDate.getDate() == date.getDate()){
                
                    if(schedule.customer && schedule.property){
                        if(schedule.customer.id && schedule.property.id){
                            const indexArray = arrayOfCardsData.findIndex(record => 
                                record["customer_id"] === schedule.customer.id &&
                                record["property_id"] === schedule.property.id
                            );
                            if (indexArray !== -1) {
                                arrayOfCardsData[indexArray]["hours"].push(formatTime(schedule.start_hour));
                                //sorting hours
                                const times = arrayOfCardsData[indexArray]["hours"];

                                const sortedTimes = times.sort((a, b) => {
                                // Convert time strings (HH:mm) to Date objects for proper comparison
                                const [aHour, aMinute] = a.split(':').map(Number);
                                const [bHour, bMinute] = b.split(':').map(Number);
            
                                // Compare hours first, then minutes
                                if (aHour === bHour) {
                                    return aMinute - bMinute;
                                }
                                return aHour - bHour;
                                });
                                arrayOfCardsData[indexArray]["hours"] = sortedTimes

                            }else{
                                arrayOfCardsData[index] = {["hours"]: []}
                                arrayOfCardsData[index]["customer_id"] = schedule.customer.id
                                arrayOfCardsData[index]["property_id"] = schedule.property.id
                                if(props.usuario.role =="ROLE_REALTOR"){
                                    arrayOfCardsData[index]["name"] = schedule.customer.name
                                    arrayOfCardsData[index]["phone"] = schedule.customer.celphone
                                    arrayOfCardsData[index]["photo"] = schedule.customer.mainImageCustomer


                                }else{
                                    arrayOfCardsData[index]["photo"] = schedule.realtor.mainImageRealtor

                                    arrayOfCardsData[index]["name"] = schedule.realtor.name
                                    arrayOfCardsData[index]["phone"] = schedule.realtor.celphone
                                }
                                arrayOfCardsData[index]["city"] = schedule.property.address.city
                                arrayOfCardsData[index]["neighborhood"] = schedule.property.address.neighborhood
                                arrayOfCardsData[index]["hours"].push(formatTime(schedule.start_hour))
                                //sorting hours
                                const times = arrayOfCardsData[index]["hours"];

                                const sortedTimes = times.sort((a, b) => {
                                // Convert time strings (HH:mm) to Date objects for proper comparison
                                const [aHour, aMinute] = a.split(':').map(Number);
                                const [bHour, bMinute] = b.split(':').map(Number);
            
                                // Compare hours first, then minutes
                                if (aHour === bHour) {
                                    return aMinute - bMinute;
                                }
                                return aHour - bHour;
                                });
                                arrayOfCardsData[index]["hours"] = sortedTimes
                                    
                                index = index +1

                            }
                        }
                    }
                }
                    
                
            })
        }
        return arrayOfCardsData
    }
   
    const getCardsDataModal = function(date :Date){
        var arrayOfCardsDataModal :schedulesModalInfo[] = []
        var index =0;
        if(date != undefined){
            
            data?.map((schedule) =>{

                const [year, month, day] = schedule.day.split("-").map(Number);
                const scheduleDate = new Date(year, month - 1, day);
                
                

                // Comparando apenas ano, mês e dia
                if(scheduleDate.getMonth() == date.getMonth() && scheduleDate.getFullYear() == date.getFullYear() && scheduleDate.getDate() == date.getDate()){

                    if(schedule.customer && schedule.property){
                        if(schedule.customer.id && schedule.property.id){
                            const obj :schedulesModalInfo={
                                id: schedule.id,
                                day :schedule.day,
                                propertyCode :schedule.property.propertyCode,
                                start_hour :schedule.start_hour,
                                realtorName :schedule.realtor.name,
                                realtorCreci :schedule.realtor.creci,
                                userName :schedule.customer.name,
                                userEmail :schedule.customer.email,
                                userCpf :schedule.customer.cpf,
                                realtorPhoto :schedule.realtor.mainImageRealtor,
                                customerPhoto :schedule.customer.mainImageCustomer,
                                propertyPhoto :schedule.property.mainImageProperty,

                                realtorCelphone :schedule.realtor.celphone,
                                realtorEmail :schedule.realtor.email,
                                purpose :schedule.property.purpose,
                                propertyType :schedule.property.propertyType,
                                status :schedule.status,
                                propertyNumber :schedule.property.address.propertyNumber,
                                street :schedule.property.address.street,
                                city :schedule.property.address.city,
                                state :schedule.property.address.state,
                                price :schedule.property.price,
                                neighborhood :schedule.property.address.neighborhood
                            } 
                            arrayOfCardsDataModal.push(obj);
                            
                        }
                    }
                }
                
                    
                
            })
        }
        return arrayOfCardsDataModal
    }
        const getCardsDataModalCustomer = function(date :Date){
            var arrayOfCardsDataModal :schedulesModalInfo[] = []
            var index =0;
            if(date != undefined){
                
                dataCustomer?.map((schedule) =>{
    
                    const [year, month, day] = schedule.day.split("-").map(Number);
                    const scheduleDate = new Date(year, month - 1, day);
                    
                    
    
                    // Comparando apenas ano, mês e dia
                    if(scheduleDate.getMonth() == date.getMonth() && scheduleDate.getFullYear() == date.getFullYear() && scheduleDate.getDate() == date.getDate()){
    
                        if(schedule.customer && schedule.property){
                            if(schedule.customer.id && schedule.property.id){
                                const obj :schedulesModalInfo={
                                    id: schedule.id,
                                    day :schedule.day,
                                    propertyCode :schedule.property.propertyCode,
                                    start_hour :schedule.start_hour,
                                    realtorName :schedule.realtor.name,
                                    realtorCreci :schedule.realtor.creco,
                                    realtorCelphone :schedule.realtor.celphone,
                                    realtorEmail :schedule.realtor.email,
                                    purpose :schedule.property.purpose,
                                    propertyType :schedule.property.propertyType,
                                    status :schedule.status,
                                    realtorPhoto :schedule.realtor.mainImageRealtor,
                                    customerPhoto :schedule.customer.mainImageCustomer,
                                    propertyPhoto :schedule.property.mainImageProperty,
                                    propertyNumber :schedule.property.address.propertyNumber,
                                    street :schedule.property.address.street,
                                    city :schedule.property.address.city,
                                    state :schedule.property.address.state,
                                    price :schedule.property.price,
                                    neighborhood :schedule.property.address.neighborhood

                                } 
                                arrayOfCardsDataModal.push(obj);
                                
                            }
                        }
                    }
                    
                        
                    
                })
            }
        return arrayOfCardsDataModal
    }

    const today = new Date();

    return(
        <> 
        
            <Title tag="h1" text="Agenda" /> 

            <NavBarAdm options={NavBarPath.historic} />
            <div style={{display:"flex", gap:"50px", margin:"100px"}}>
                {props.usuario.role == "ROLE_REALTOR" && 
                <DayPicker
                    disabled={{ before: today }}

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
                }

                {props.usuario.role != "ROLE_REALTOR" && 
                    <DayPicker
                        disabled={{ before: today }}

                        showOutsideDays
                        fixedWeeks
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        modifiers={modifierList}
                        modifiersClassNames={{

                            schedules:"free_day_with_customer_style"
                        }}
                        locale={pt}
                    />
                }
                {props.usuario.role == "ROLE_REALTOR" &&
                    <SelectHour usuario={props.usuario} cardsModal={getCardsDataModal(selected)} cards={getCardsData(selected)} saveHours={saveHours} ids={getIdsFromDay(selected)} day={selected} selectHours={getHoursFromDay(selected)}/>
                }
                {props.usuario.role != "ROLE_REALTOR" &&
                    <SelectHour usuario={props.usuario} cardsModal={getCardsDataModalCustomer(selected)} cards={getCardsDataCustomer(selected)} ids={getIdsFromDayCustomer(selected)} day={selected} selectHours={getHoursFromDayCustomer(selected)}/>
                }
                
            
            </div>
            
                
        </>
    )
}
