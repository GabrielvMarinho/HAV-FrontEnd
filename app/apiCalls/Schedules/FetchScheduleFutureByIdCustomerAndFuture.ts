export default async function FetchScheduleFutureByIdAndFuture(){
    const url = `http://localhost:9090/schedules/customer`;
    const response = await fetch(url, {
        credentials:"include"
    })
    const data = await response.json()
    console.log("data", data)
    return data;
}