"use client"
import { useState } from "react";
import Button from "../Inputs/Button";
import "./css/style.css";
import "../../variables.css"
import "../../GeneralPages.css"
import globalDatabaseNameConverter from "@/app/globalDatabaseNameConverter";
import ModalScheduling from "../Modal/ModalScheduling";
import StatusScheduling from "./StatusScheduling";
import decodeDoubleBase64 from "@/app/utils/decodeDoubleBase64";

export default function SchedulingCard(props: {usuario? :any, obj :Record<string, string | string[] | any>, modalInfo :schedulesModalInfo}) {
    const { city, neighborhood, hours, name, phone, photo} = props.obj;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = function(){
        setIsModalOpen(!isModalOpen)
    }
    console.log("realtorPhoto", props.modalInfo.propertyPhoto)
    console.log("realtorPhoto", decodeDoubleBase64(props.modalInfo.propertyPhoto))

    return(
        <div className="cardContainer">
            <img
                src={`${decodeDoubleBase64(props.modalInfo.propertyPhoto)}`} 
                alt="imagem user"
                className="mainImageContainer"/>     

            <div className="mainContentContainer">
                
                <div className="mainContentContainerTop">
                    <div className="addressData">

                        <p className="city">{globalDatabaseNameConverter[city]}</p>
                        <p className="neighborhood">{globalDatabaseNameConverter[neighborhood].toUpperCase()}</p>
                    </div>
                    <div className="styleCustomerInfo">

                    </div>

                    <p className="hour">{hours[0]} - {hours[hours.length - 1].slice(3) === "00" ? 
                                                `${hours[hours.length - 1].slice(0, 2)}:30` : 
                                                `${(parseInt(hours[hours.length - 1].slice(0, 2)) + 1).toString().padStart(2, '0')}:00`}
                                            </p>
                </div>
                <div className="mainContentContainerBottom">
                    <div className="customerInfo">
                        <img
                        src={`data:image/png;base64,${photo}`} 
                        alt="imagem user"
                        className="imageContentInfo"/>
                            
                        
                        <div className="textContentInfo">
                            <p className="name">{name}</p>
                            <p className="phone">{phone}</p>
                            <StatusScheduling size={true} text={props.modalInfo.status}></StatusScheduling>

                        </div>
                    </div>
                    <Button onClick={() =>{toggleModal()}} type="submit" size={"small"} text="Mais Dados" hover="lightHover" color="var(--text-white)"
                    background="var(--button-color)" />
                    {isModalOpen ==true?
                    <div className={"overlay"}>
                            <ModalScheduling usuario = {props.usuario}onClose={() =>{toggleModal()}} obj ={props.modalInfo}/>
                    </div>:<></>
                    }

                    
                       
                </div>
            </div>
        </div>
    )
}