import FormAddRealtor from "@/app/components/Forms/FormAddRealtor";
import AuthGuard from "@/app/context/AuthGuard";

export default function page(){
    return (
        <AuthGuard requiredRole="ROLE_ADMIN">
            <FormAddRealtor/>
        </AuthGuard>
    )
}