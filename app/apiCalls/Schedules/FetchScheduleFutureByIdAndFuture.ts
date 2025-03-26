export default async function FetchScheduleFutureByIdAndFuture(id :any){
    const url = `http://localhost:9090/schedules/${id}`;
    const response = await fetch(url)
    const data = await response.json()
    
    return data;
}