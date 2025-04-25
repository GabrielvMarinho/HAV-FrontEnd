import findUserOnCookie from "@/app/utils/findUserOnCookie";
import CalendarClient from "./calendarClient";
import AuthGuard from "@/app/context/AuthGuard";
import Footer from "@/app/components/Footer/Footer";



export default async function page(){

    const usuario = await findUserOnCookie();
    
    return(
        <AuthGuard requiredRole={"ROLE_CUSTOMER"}>
            <CalendarClient usuario={usuario}/> 
            
            <Footer/>
        </AuthGuard>
    );
}