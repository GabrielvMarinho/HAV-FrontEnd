"use client"
import { useEffect, useState } from "react";
import "../../variables.css"
import "./css/style.css"
import Button from "../Inputs/Button";
import { record } from "zod";
import SchedulingCard from "../Information/SchedulingCard";

export default function selectHour(props :{usuario :any; day: Date; ids :Record<string, number>, selectHours: string[],
     saveHours: (hoursAdd: string[], hoursRemove: string[]) => void, cards :Record<string, string | string[]>[],
    cardsModal :schedulesModalInfo[]}){

      
    
      console.log(props.usuario)
    
      if (!props.usuario) {
        return null; 
      }
      if (props.usuario.role !="ROLE_REALTOR") {
        return null; 
      }



    if(!props.day){
        return(
            <h3>selecione um dia</h3>
        )
    }
    const date = new Date()

    if (props.day.getFullYear() <= date.getFullYear() && 
        props.day.getMonth() <= date.getMonth() && 
        props.day.getDate() < date.getDate()) {
      return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"10px"}}>
        <h3>{props.day.toLocaleString()}</h3>
        <div className="hourButtonContainer">
          {Array.from({ length: 12 }, (_, i) => {
            const hour = i + 8;
            var time00 = `${hour}:00`;
            var time30 = `${hour}:30`;
            if(time00.length==4){
              time00 = "0"+time00
            }
            if(time30.length==4){
              time30 = "0"+time30
            }
            
            return (
                <>
                <button
                  onClick={() => {}}
                  className="hourButton"                  >
                  <div className="hourLine"></div>
                  <div className="hourContent">{time00}</div>
                </button>
                <button
                  onClick={() => {}}
                  className="hourButton"
                >
                  <div className="hourLineOpacity"></div>
                  <div className="hourContent">{time30}</div>
                  </button>
                </>
                );
          })}
            
        </div>
        <h3>não é possível editar data passada</h3>
        </div>
      )
    }
    
    const [selectedHours, setSelectedHours] = useState<string[]>(props.selectHours);
    const [addHours, setAddHours] = useState<string[]>([]);
    const [removeHours, setRemoveHours] = useState<string[]>([]);
    const [removeId, setRemoveId] = useState<string[]>([])

    useEffect(() =>{
        setSelectedHours(props.selectHours)
        setAddHours([])
        setRemoveHours([])
        setRemoveId([])
    }, [props.day, props.selectHours])


    const toggleAddHour = (hour: string) => {
        setAddHours((prev) =>
          prev.includes(hour) ? prev.filter((h) => h !== hour) : [...prev, hour]
        );
        
      };
    const toggleRemoveHour = (hour: string, id :string) =>{
        setRemoveHours((prev) =>
          prev.includes(hour) ? prev.filter((h) => h !== hour) : [...prev, hour]
        );
        setRemoveId((prev) =>
          prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
        
    }
      

    const areArraysEqual = () => {
        return addHours.length === 0 && removeHours.length === 0;
    };
    
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <h3>{props.day.toLocaleString()}</h3>
          <div className="hourButtonContainer">
            {Array.from({ length: 12 * 2 }, (_, i) => {
              const hour = 8 + Math.floor(i / 2);
              const minutes = i % 2 === 0 ? "00" : "30";
              let time = `${hour}:${minutes}`;
              if (time.length === 4) {
                time = "0" + time;
              }


              //testando se é o primero horário
              const indexArray = props.cards.findIndex(record => {
                  if (record["hours"][0] === time) {
                      return true; // Retorna o índice quando for o primeiro
                  }
              });

              if (indexArray !== -1) {
                return (
                  <div className="customerBox">
                    <div className={minutes === "00" ? "hourLineCustomer" : "hourLineCustomer"}></div>
                    <div className="hourContentCustomer">{time}</div>
                    <div style={{display:"flex", justifyContent:"center", marginBottom:"30px", marginTop:"15px"}}>
                    <SchedulingCard modalInfo={props.cardsModal[indexArray]} obj={props.cards[indexArray]}/>
                    </div>
                  </div>
                )
              }
              //testando se não é o primeiro mas inclui

              const includesElement = props.cards.find(record => record["hours"].includes(time));

              if (includesElement) {
                  return <></>;
              }

              return (
                <button 
                  key={time}
                  className={`${(selectedHours.includes(time) || addHours.includes(time)) && !removeHours.includes(time) ? "hourButtonSelect" : "hourButton"}`}
                  onClick={() => selectedHours.includes(time) ? toggleRemoveHour(time, props.ids[time]) : toggleAddHour(time)}
                >
                  <div className={minutes === "00" ? "hourLine" : "hourLineOpacity"}></div>
                  <div className="hourContent">{time}</div>
                </button>
              );
            })}
          </div>
          {areArraysEqual() ? (
            <div style={{ pointerEvents: "none", opacity: "0.5" }}>
              <Button
                type="button"
                size="medium"
                text="Salvar"
                color="var(--text-white)"
                background="var(--button-color)"
              />
            </div>
          ) : (
            <Button
              type="button"
              size="medium"
              text="Salvar"
              onClick={() => props.saveHours(addHours, removeId)}
              hover="darkHover"
              color="var(--text-white)"
              background="var(--button-color)"
            />
          )}
        </div>

        
      );
}