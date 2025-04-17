import FormAddProprietor from "@/app/components/Forms/FormAddProprietor";
import AuthGuard from "@/app/context/AuthGuard";

export default async function page() {
    
    return (
        <>
        <AuthGuard requiredRole="ROLE_EDITOR"> 
            <FormAddProprietor/>
        </AuthGuard>
        </>
    )
}
