"use client"
import { ReactNode, useEffect } from "react";
import './css/style.css';
import Button from "../Inputs/Button";
import { Content } from "next/font/google";
import SelectHour from "../Forms/SelectHour";
import { useAuth } from "@/app/context/AuthContext";

export default function CalendarValidation(props :{day: Date; ids :Record<string, number>, selectHours: string[],
    saveHours: (hoursAdd: string[], hoursRemove: string[]) => void, cards :Record<string, string | string[]>[],
   cardsModal :schedulesModalInfo[]}) {
      const { usuario, loading } = useAuth();
    
      if (loading) {
        return null; // ou um spinner, esqueleto, etc.
      }
    
      if (!usuario) {
        return null; // ou um fallback caso o usuário não esteja logado
      }
      console.log(usuario.role)

    return (
        <>
            {usuario.role === "REALTOR" && <>
            
                <SelectHour cardsModal={getCardsDataModal(selected)} cards={getCardsData(selected)} saveHours={saveHours} ids={getIdsFromDay(selected)} day={selected} selectHours={getHoursFromDay(selected)}/>

            
            </>}
        </>
    )
}