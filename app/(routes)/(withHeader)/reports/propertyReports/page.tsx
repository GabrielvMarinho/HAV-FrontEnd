import AuthGuard from "@/app/context/AuthGuard";
import PropertyReportsValidation from "./propertyReportsValidation";

export default function ReportsPage() {
  return (
    <AuthGuard requiredRole="ROLE_ADMIN" >
      <PropertyReportsValidation/> 
    </AuthGuard>
  );
}