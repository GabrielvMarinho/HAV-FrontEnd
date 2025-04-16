export default async function FetchScheduleFutureByIdAndFree(id :any){
    const url = `http://localhost:9090/schedules/free/${id}`;
    const response = await fetch(url, {
        
        credentials:"include"
    })
    const data = await response.json()
    
    return data;
}