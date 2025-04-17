import FormAddCustomer from "@/app/components/Forms/FormAddCustomer";
import AuthGuard from "@/app/context/AuthGuard";

export default function page(){
    return (
        <AuthGuard requiredRole="ROLE_ADMIN">
            <FormAddCustomer/>
        </AuthGuard>
    )
}