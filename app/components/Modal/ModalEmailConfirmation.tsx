'use client'

import { useState } from 'react';
import Calendar from '../IconsTSX/Calendar';
import Clock from '../IconsTSX/Clock';
import CategoryCardImovel from '../Information/CategoryCardImovel';
import Button from '../Inputs/Button';
import './css/style.css';


export default function ModalEmailConfirmation () {

   
        const [page, setPage] = useState(0);
        
        if(page==0){
            return(
                <div>
                    
                        <h2> Alteração do E-mail</h2>
                        <div> linha </div>
                        <div> textoooooooooooooooooo </div>

                        <div className="modalNewSchedule">
                    
                    <Calendar width={80} height={80} color="var(--box-white)"></Calendar>
                    <Button size={"small"} hover={"lightHover"} background={"var(--button-color-reverse)"} color={"var(--text-red-pink)"} text={"Agende sua visita"} onClick={() =>{setPage(1)}}></Button>
    
                </div>

                   
                </div>
            )
        }
        if(page==1){
            
            return(
               <div>
                oiiiieeeeeeeeeeee
               </div>
            )
        }
        




    return (
        <>

        </>
        )

}