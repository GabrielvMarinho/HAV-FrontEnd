import { jwtDecode } from "jwt-decode";
import { cookies } from "next/dist/server/request/cookies";


export default async function (){
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    if (!token) {
        return null;
    }
    return token;
}