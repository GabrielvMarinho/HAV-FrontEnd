import FormEditAdm from "@/app/components/Forms/FormEditAdm";
import FormEditCustomer from "@/app/components/Forms/FormEditCustomer";
import AuthGuard from "@/app/context/AuthGuard";

import WrappedPageEditCustomer from "./wrappedPage";

export default function PropagepertyPage() {



  return (
    <AuthGuard requiredRole="ROLE_EDITOR">
      <WrappedPageEditCustomer/>
    </AuthGuard>
    
    );

}
