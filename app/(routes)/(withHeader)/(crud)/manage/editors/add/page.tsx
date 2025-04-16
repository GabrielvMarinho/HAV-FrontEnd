import FormAddEditor from "@/app/components/Forms/FormAddEditor";
import AuthGuard from "@/app/context/AuthGuard";

export default function page(){
    return (
        <AuthGuard requiredRole="ROLE_ADMIN">
            <FormAddEditor/>
        </AuthGuard>
    )
}