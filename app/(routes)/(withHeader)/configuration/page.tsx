
import FormEditAdm from "./page";
import { useParams } from "next/navigation";
import ProfileEditUser from "./ProfileEditUser";
import findUserOnCookie from "@/app/utils/findUserOnCookie";

export default async function PropertyPage() {
  
  const user = await findUserOnCookie();
  

  return (
    <ProfileEditUser role={user?.role}/>
  );

}
