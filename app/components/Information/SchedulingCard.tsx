"use client"
import { useState } from "react";
import Button from "../Inputs/Button";
import "./css/style.css";
import "../../variables.css"
import "../../GeneralPages.css"
import Modal from "../Modal/Modal";

export default function SchedulingCard(props: {obj :Record<string, string>}) {
    const { city, neighbourhood, start_hour, end_hour, name, phone } = props.obj;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = function(){
        setIsModalOpen(!isModalOpen)
        console.log(isModalOpen)
    }
    return(
        <div className="cardContainer">
            <div className="mainImageContainer">

            </div>
            <div className="mainContentContainer">
                <div className="mainContentContainerTop">
                    <div className="addressData">
                        <p className="city">{city}</p>
                        <p className="neighbourhood">{neighbourhood}</p>
                    </div>
                    <div className="styleCustomerInfo"></div>
                    <p className="hour">{start_hour} - {end_hour}</p>
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