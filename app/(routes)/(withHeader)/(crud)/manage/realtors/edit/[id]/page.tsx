import FormEditAdm from "@/app/components/Forms/FormEditAdm";
import FormEditCustomer from "@/app/components/Forms/FormEditCustomer";
import FormEditEditor from "@/app/components/Forms/FormEditEditor";
import FormEditRealtor from "@/app/components/Forms/formEditRealtor";
import AuthGuard from "@/app/context/AuthGuard";

import { useParams } from "next/navigation";
import WrappedPageEditRealtor from "./wrappedPage";

export default function page() {

  return (
    <AuthGuard requiredRole="ROLE_EDITOR">
      <WrappedPageEditRealtor/>
    </AuthGuard>
    );

}
