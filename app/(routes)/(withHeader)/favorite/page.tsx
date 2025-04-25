import AuthGuard from "@/app/context/AuthGuard";
import WrappedPageFavorite from "./wrappedPageFavorite";
import findUserOnCookie from "@/app/utils/findUserOnCookie";
import Footer from "@/app/components/Footer/Footer";


export default async function wrappedPageFavorite() {
    const usuario = await findUserOnCookie();
    return (
        <AuthGuard requiredRole="ROLE_CUSTOMER">
            <WrappedPageFavorite usuario={usuario} />
            
            <Footer/>
        </AuthGuard>
    )
    
}
