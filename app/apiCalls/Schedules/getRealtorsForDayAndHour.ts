export default async function getRealtorsForDayAndHour(day :string, hour :string, propertyId :string){
    const url = `http://localhost:9090/schedules/hourAndDay/${day}/${hour}/${propertyId}`;
    const response = await fetch(url)
    const data = await response.json()
    
    return data;
}