export default async function FindHistoryByRealtorId(status :string, id :any, page :string){
    const url = `http://localhost:9090/schedules/history/realtor/${id}?page=${page}`;
    const response = await fetch(url)
    const data = await response.json()
    
    return data;
}

      
    
    