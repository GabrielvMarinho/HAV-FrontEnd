import searchPropertyById from "@/app/apiCalls/Property/searchPropertyById";
import FormEditAdm from "@/app/components/Forms/FormEditAdm";
import FormEditCustomer from "@/app/components/Forms/FormEditCustomer";
import FormEditEditor from "@/app/components/Forms/FormEditEditor";
import AuthGuard from "@/app/context/AuthGuard";

import { useParams } from "next/navigation";
import { useState } from "react";
import WrappedPageEditEditor from "./wrappedPage";
export default function PropertyPage() {

  return (
    <WrappedPageEditEditor/>
    );

}
