import findUserOnCookie from "@/app/utils/findUserOnCookie";
import CalendarClient from "./calendarClient";



export default async function page(){

    const usuario = await findUserOnCookie();
    
    return(
        <CalendarClient usuario={usuario}/> 
    );
}