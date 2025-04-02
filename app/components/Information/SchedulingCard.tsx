"use client"
import { useState } from "react";
import Button from "../Inputs/Button";
import "./css/style.css";
import "../../variables.css"
import "../../GeneralPages.css"
import globalDatabaseNameConverter from "@/app/globalDatabaseNameConverter";

export default function SchedulingCard(props: {obj :Record<string, string | string[]>}) {
    const { city, neighborhood, hours, name, phone } = props.obj;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = function(){
        setIsModalOpen(!isModalOpen)
    }
    return(
        <div className="cardContainer">
            <div className="mainImageContainer">

            </div>
            <div className="mainContentContainer">
                <div className="mainContentContainerTop">
                    <div className="addressData">
                        <p className="city">{globalDatabaseNameConverter[city]}</p>
                        <p className="neighborhood">{globalDatabaseNameConverter[neighborhood].toUpperCase()}</p>
                    </div>
                    <div className="styleCustomerInfo"></div>
                    <p className="hour">{hours[0]} - {hours[hours.length - 1].slice(3) === "00" ? 
                                                `${hours[hours.length - 1].slice(0, 2)}:30` : 
                                                `${(parseInt(hours[hours.length - 1].slice(0, 2)) + 1).toString().padStart(2, '0')}:00`}
                                            </p>
                </div>
                <div className="mainContentContainerBottom">
                    <div className="customerInfo">
                        <div className="imageContentInfo">

                        </div>
                        
                        <div className="textContentInfo">
                            <p className="name">{name}</p>
                            <p className="phone">{phone}</p>
                        </div>
                    </div>
                    <Button onClick={() =>{toggleModal()}}type="submit" size={"small"} text="Mais Dados" hover="lightHover" color="var(--text-white)"
                    background="var(--button-color)" />
                    {isModalOpen ?
                    <div className={"overlay"}>
                            <div>
                                <h1>dados do imóvel</h1>
                            </div>
                    </div>:<></>
                    }

                    
                       
                </div>
            </div>
        </div>
    )
}