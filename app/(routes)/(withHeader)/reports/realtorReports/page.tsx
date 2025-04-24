import AuthGuard from "@/app/context/AuthGuard";
import RealtorReportsValidation from "./RealtorReportsValidation";

export default function page() {
  return (
    <AuthGuard requiredRole="ROLE_ADMIN"> 
      <RealtorReportsValidation/>
    </AuthGuard>

  );
}
