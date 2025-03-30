"use cliente"
import { useEffect, useState } from "react";
import "./css/style.css"
import Button from "../Inputs/Button";
import ArrowBackDraw from "../IconsTSX/ArrowBackDraw";
import "../../variables.css"
import Calendar from "../IconsTSX/Calendar";
import GetRealtorsPropertySpecific from "@/app/apiCalls/Property/GetRealtorsPropertySpecific";
import FetchScheduleFutureByIdAndFuture from "@/app/apiCalls/Schedules/FetchScheduleFutureByIdAndFuture";
import PresenceSchedule from "@/app/apiCalls/Schedules/PresenceSchedule";
import FetchScheduleFutureByIdAndFree from "@/app/apiCalls/Schedules/FetchScheduleFutureByIdAndFree";
import FetchScheduleFutureByPropertyId from "@/app/apiCalls/Schedules/FetchScheduleFutureByPropertyId";
import getRealtorsForDayAndHour from "@/app/apiCalls/Schedules/getRealtorsForDayAndHour";

export default function NewScheduleModal(props :{propertyId :string, userId :string;}){
    const [page, setPage] = useState(0);
    const [priority, setPriority] = useState<"data" | "corretor" | null>(null)
    const [realtor, setRealtor] = useState<string | null>(null);
    const [realtorHours, setRealtorHours] = useState(null);
    const [realtorHoursSelected, setRealtorHoursSelected] = useState<string[] | null>([]);

    const [realtorHoursDaySelected, setRealtorHoursDaySelected] = useState(null);
    const [realtorHoursHourSelected, setRealtorHoursHourSelected] = useState(null);
    

    //data first
    const [allHours, setAllHours] = useState([]);
    const [hourDataFirst, setHourDataFirst] = useState([]);
    const [realtorsDataFirst, setRealtorsDataFirst] = useState([]);
    const [realtorDataFirst, setRealtorDataFirst] = useState({});




    const [hour, setHour] = useState<string | null>(null);
    const [day, setDay] = useState<string | null>(null);
    const [realtors, setRealtors] = useState([]);

    const setRealtorAndGetHour = function(r :any){
        setRealtor(r)
        
    }

    useEffect(() => {
        if (page==1) { 
          setPriority(null);
          setRealtor(null);
          setHour(null);
          setHourDataFirst([])
          
          const fetchData = async () => {
            try {
                const data = await GetRealtorsPropertySpecific(parseInt(props.propertyId)) ?? [];
                
                return data;
            } catch (error) {
                console.error("Erro ao obter os corretores:", error);
            }
            };
            fetchData().then(setRealtors)
        }
        if(page ==6){
            const fetchData = async () => {
                try {
                    const data = await getRealtorsForDayAndHour(hourDataFirst[0].day, hourDataFirst[0].start_hour, props.propertyId) ?? [];
                    console.log(data)
                    return data;
                } catch (error) {
                    console.error("Erro ao obter os corretores:", error);
                }
                };
                fetchData().then(setRealtorsDataFirst)
                console.log(realtorsDataFirst)
            
        }

        
      }, [page]); 
    useEffect(() =>{
        if(priority =="data"){
            
            async function fetch(){
                const data = await FetchScheduleFutureByPropertyId(props.propertyId)
                setAllHours(data);
            }
            fetch();
        }
    }, [priority]);
    useEffect(() =>{
        if(realtor){
            async function fetch(){
                const data = await FetchScheduleFutureByIdAndFree(realtor.id)
                console.log(data)
                setRealtorHours(data);
            }
            fetch();
        }
    }, [realtor])

    if(page==0){
        return(
            <div className="modalNewSchedule">
                
                <Calendar width={80} height={80} color="var(--box-white)"></Calendar>
                <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"Agende sua visita"} onClick={() =>{setPage(1)}}></Button>

            </div>
        )
    }
    if(page==1){
        
        return(
            <div className="modalNewScheduleBig">
                <div className="modalNewScheduleBigContent">
                    <div className="topContentModal">
                        <p>PRIORIZAR QUAL</p>
                    </div>
                    <div className="bottomContentModal">
                        <div style={{display:"flex", gap:"10px"}}>
                            <input
                                type="radio"
                                value="data"
                                checked={priority === "data"}
                                onChange={() => setPriority("data")}
                                />
                                <div className="bottomContentModalData">
                                    <label>DATA</label>
                                    <p>Prioriza a disponibilidade</p>
                                </div>
                        </div>
                        <div style={{display:"flex", gap:"10px"}}>
                        <input
                            type="radio"
                            value="corretor"
                            checked={priority === "corretor"}
                            onChange={() => setPriority("corretor")}
                            />
                           <div className="bottomContentModalData">
                                    <label>CORRETOR</label>
                                    <p>Prioriza quem atenderá</p>
                                </div>
                        </div>
                    </div>
                </div>
                {priority ?
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"Agende sua visita"} 
                        onClick={priority === "data"?() =>{setPage(3)}:() =>{setPage(2)}}></Button>
                    </div>:
                    <div style={{display:"flex", justifyContent:"center", pointerEvents:"none", opacity:"0.3"}}>
                        <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"Agende sua visita"} 
                        onClick={priority === "data"?() =>{setPage(3)}:() =>{setPage(2)}}></Button>
                    </div>
                }
                
            </div>
        )
    }
    if(page==2){
        
        return(
            <div className="modalNewScheduleBig">
                <div className="modalNewScheduleBigContent">
                    <div className="topContentModal">
                        <p>ESCOLHA O CORRETOR</p>
                        <div onClick={() =>{setPage(1)}}>
                            <ArrowBackDraw width={25} height={25} color="var(--box-white)"/>
                        </div>
                    </div>
                    <div className="bottomContentModal">
                        <div className="realtorsList">
                        {realtors?.map((r)=>{

                            return (
                                <>
                            <div style={{display:"flex", gap:"10px"}}>
                                <input
                                type="radio"
                                value="realtors"
                                checked={r === realtor}
                                onChange={() => setRealtorAndGetHour(r)}
                                />
                                <p>{r.name}</p>
                                <p>-</p>
                                <p>{r.celphone}</p>

                            </div>
                            
                            </>
                            )
                        }
                        )}
                    </div>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                {realtor ?
                    <div style={{display:"flex", justifyContent:"center"}}>
                    <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"Confirmar"} onClick={() =>{setPage(3)}}></Button>
                    </div>:
                    <div style={{display:"flex", justifyContent:"center", pointerEvents:"none", opacity:"0.3"}}>
                    <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"Confirmar"} onClick={() =>{setPage(3)}}></Button>
                    </div>
                }
                </div>
            </div>
        )
    }
    if(page==3){
        return(
            <div className="modalNewScheduleBig">
                <div className="modalNewScheduleBigContent">
                    <div className="topContentModal">
                        <p>ESCOLHA O DIA E HORÁRIO</p>
                        <div onClick={() =>{setPage(1)}}>
                            <ArrowBackDraw width={25} height={25} color="var(--box-white)"/>
                        </div>
                    </div>
                    <div className="bottomContentModal">
                        <div className="datesList">

                        {realtor !=null? 
                        <>
                        {realtorHours.map((hours) => (
                            <div style={{display:"flex", gap:"10px"}}>
                            <input
                            type="radio"
                            value="idHours"
                            checked={hours.id === realtorHoursSelected[0]}
                            onChange={() => {setRealtorHoursSelected([hours.id]), setRealtorHoursDaySelected(hours.day), setRealtorHoursHourSelected(hours.start_hour)}}
                            />
                            <p>{hours.day}</p>
                            <p>-</p>
                            <p>{hours.start_hour}</p>
                            
                        </div>
                        ))}
                        
                    </>
                        
                        :
                        
                        <>
                        {allHours.map((hours) =>{
                            
                            return <div style={{display:"flex", gap:"10px"}}>
                                <input
                                type="radio"
                                value="idHours"
                                checked={hourDataFirst && hourDataFirst.length >0 && hours.id === hourDataFirst[0].id}
                                onChange={() => {setHourDataFirst([hours])}}
                                />
                                <p>{hours.day}</p>
                                <p>-</p>
                                <p>{hours.start_hour}</p>

                            </div>
                        })}
                        </>
                        }
                    </div>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                {Object.keys(hourDataFirst).length || realtorHoursSelected?.length>0 ?
                    <div style={{display:"flex", justifyContent:"center"}}>
                    <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"Confirmar"} onClick={() =>{setPage(6)}}></Button>
                    </div>:
                    <div style={{display:"flex", justifyContent:"center", pointerEvents:"none", opacity:"0.3"}}>
                    <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"Confirmar"} onClick={() =>{setPage(6)}}></Button>
                    </div>
                }
                </div>
            </div>
        )
    }
    if(page==6){
        if(realtorHoursSelected?.length>0){
            setPage(4);
        }
        return(
            <div className="modalNewScheduleBig">
                <div className="modalNewScheduleBigContent">
                    <div className="topContentModal">
                        <p>CORRETORES LIVRES</p>
                        <div onClick={() =>{setPage(1)}}>
                            <ArrowBackDraw width={25} height={25} color="var(--box-white)"/>
                        </div>
                    </div>
                    <div className="bottomContentModal">
                        <div className="realtorsList">
                        {realtorsDataFirst?.map((r)=>{
                            if(r.id)
                            return (
                                <>
                            <div style={{display:"flex", gap:"10px"}}>
                                <input
                                type="radio"
                                value="realtors"
                                checked={r === realtorDataFirst}
                                onChange={() => setRealtorDataFirst(r)}
                                />
                                <p>{r.name}</p>
                                <p>-</p>
                                <p>{r.celphone}</p>

                            </div>
                            
                            </>
                            )
                        }
                        )}
                    </div>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                {Object.keys(realtorDataFirst).length ?
                    <div style={{display:"flex", justifyContent:"center"}}>
                    <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"Confirmar"} onClick={() =>{setPage(4)}}></Button>
                    </div>:
                    <div style={{display:"flex", justifyContent:"center", pointerEvents:"none", opacity:"0.3"}}>
                    <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"Confirmar"} onClick={() =>{setPage(4)}}></Button>
                    </div>
                }
                </div>
            </div>
        )
    }
    
    
    if(page==4){
        return(
            <div className="modalNewScheduleBig">
                <div className="modalNewScheduleBigContent">
                    <div className="topContentModal">
                        <p>CONFIRMAR DADOS</p>
                        <div onClick={() =>{setPage(1)}}>
                            <ArrowBackDraw width={25} height={25} color="var(--box-white)"/>
                        </div>
                    </div>
                    <div className="topContentModal">
                        {realtor ?
                        <>
                        <p>{realtor.name}</p>
                        <p>{realtorHoursDaySelected}</p>
                        <p>{realtorHoursHourSelected}</p>
                            </>:
                            <><p>{realtorDataFirst.name}</p>
                            <p>{hourDataFirst[0].day}</p>
                            <p>{hourDataFirst[0].start_hour}</p></>
                            }       
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                {realtor ?

                <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"Confirmar"} onClick={() =>{setPage(5)}}></Button>
                    :
                    <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"Confirmar"} onClick={() =>{setPage(5)}}></Button>

            }
                </div>

            </div>
        )
    }
    if(page==5){
        if(realtor){
            PresenceSchedule(realtorHoursSelected, props.propertyId, props.userId)
        }else{
            const ids: string[] = [];
            console.log(hourDataFirst)
            hourDataFirst.forEach(obj => {
                if (obj && obj.hasOwnProperty('id')) {
                  ids.push(obj.id);  // Adiciona o ID na lista
                }
              });
              console.log("entrou")
            PresenceSchedule(ids, props.propertyId, props.userId)
        }
        return(
            <div className="modalNewScheduleBig">
                <div className="topContentModal">
                    <p>DADOS DO CORRETOR</p>
                </div>
            </div>
        )
    }
    
    
    
    
}


