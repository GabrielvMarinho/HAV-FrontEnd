import FormEditAdm from "@/app/components/Forms/FormEditAdm";
import FormEditProprietor from "@/app/components/Forms/FormEditProprietor";
import AuthGuard from "@/app/context/AuthGuard";

import WrappedPageEditProprietor from "./wrappedPage";

export default function page() {


  return (
    <AuthGuard requiredRole="ROLE_EDITOR"> 
      <WrappedPageEditProprietor/>
    </AuthGuard>
    );

}
