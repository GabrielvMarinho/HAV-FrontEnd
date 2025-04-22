import AuthGuard from "@/app/context/AuthGuard";
import UserReportsValidation from "./UserReportsValidation";


export default function page() {
  return (
    <AuthGuard requiredRole="ROLE_ADMIN">
      <UserReportsValidation/>
    </AuthGuard>

  );
}