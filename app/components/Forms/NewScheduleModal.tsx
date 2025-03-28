"use cliente"
import { useEffect, useState } from "react";
import "./css/style.css"
import Button from "../Inputs/Button";
import ArrowBackDraw from "../IconsTSX/ArrowBackDraw";
import "../../variables.css"
import Calendar from "../IconsTSX/Calendar";
import GetRealtorsPropertySpecific from "@/app/apiCalls/Property/GetRealtorsPropertySpecific";

export default function NewScheduleModal(props :{propertyId :string}){
    const [page, setPage] = useState(0);
    const [priority, setPriority] = useState<"data" | "corretor" | null>(null)
    const [realtor, setRealtor] = useState<string | null>(null);
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
          const fetchData = async () => {
            try {
                const data = await GetRealtorsPropertySpecific(parseInt(props.propertyId)) ?? [];
                console.log(data)

                return data;
            } catch (error) {
                console.error("Erro ao obter os corretores:", error);
            }
            };
            fetchData().then(setRealtors)
        }

        
      }, [page]); 

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
                            console.log(r)
                            console.log(realtor)

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

                <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"Confirmar"} onClick={() =>{setPage(3)}}></Button>
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
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>

                    <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"Confirmar"} onClick={() =>{setPage(4)}}></Button>
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
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>

                <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"Confirmar"} onClick={() =>{setPage(5)}}></Button>
                </div>

            </div>
        )
    }
    if(page==5){
        return(
            <div className="modalNewScheduleBig">
                <div className="topContentModal">
                    <p>DADOS DO CORRETOR</p>
                </div>
            </div>
        )
    }
    
    
    
}

