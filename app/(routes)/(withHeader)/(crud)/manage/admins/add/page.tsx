import FormAddAdm from "@/app/components/Forms/FormAddAdm";
import AuthGuard from "@/app/context/AuthGuard";

export default function page(){
    return (
        <AuthGuard requiredRole="ROLE_ADM">
            <FormAddAdm/>
        </AuthGuard>
    )
}