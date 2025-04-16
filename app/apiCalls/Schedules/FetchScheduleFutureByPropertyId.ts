export default async function FetchScheduleFutureByPropertyId(id :any){
    const url = `http://localhost:9090/schedules/free/property/${id}`;
    const response = await fetch(url, {
        
        credentials:"include"
    })
    const data = await response.json()
    
    return data;
}