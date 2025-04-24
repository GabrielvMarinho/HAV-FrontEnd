import FormEditAdm from "@/app/components/Forms/FormEditAdm";
import AuthGuard from "@/app/context/AuthGuard";

import { useParams } from "next/navigation";
import WrappedPageEditAdm from "./wrappedPage";

export default function Page() {
  
  


  return (
    <AuthGuard requiredRole="ROLE_ADMIN">

        <WrappedPageEditAdm/>

    </AuthGuard>
    );

}
