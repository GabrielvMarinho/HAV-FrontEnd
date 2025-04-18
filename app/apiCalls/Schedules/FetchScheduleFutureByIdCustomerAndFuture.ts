export default async function FetchScheduleFutureByIdAndFuture(){
    const url = `http://localhost:9090/schedules/customer`;
    const response = await fetch(url, {
        credentials:"include"
    })
    console.log(response)
    const data = await response.json()
    console.log(data)
    return data;
}