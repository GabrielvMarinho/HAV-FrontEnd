import findUserOnCookie from "@/app/utils/findUserOnCookie"
import WrappedPagePropertySpecific from "./WrappedPagePropertySpecific";

export default async function page(){
    const user = await findUserOnCookie();

    return(
        <WrappedPagePropertySpecific user = {user}/>
    )
}