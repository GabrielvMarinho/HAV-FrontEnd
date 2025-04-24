import AuthGuard from "@/app/context/AuthGuard";
import WrappedPageFavorite from "./wrappedPageFavorite";
import findUserOnCookie from "@/app/utils/findUserOnCookie";


export default async function wrappedPageFavorite() {
    const usuario = await findUserOnCookie();
    return (
        <AuthGuard requiredRole="ROLE_CUSTOMER">
            <WrappedPageFavorite usuario={usuario} />
        </AuthGuard>
    )
    
}
