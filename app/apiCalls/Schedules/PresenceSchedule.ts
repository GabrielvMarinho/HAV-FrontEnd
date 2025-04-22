export default async function PresenceSchedule(schedules_id :string[], property_id :string){
    console.log(schedules_id)
    const url = `http://localhost:9090/schedules/presence`;
  
    const response = await fetch(url, {
        method: "PUT",
        credentials:"include",
          headers: {
            "Content-Type": "application/json", 
          },
          body:JSON.stringify({
            "property_id":property_id,
            "schedule_id":schedules_id
        })
        
    })
    const data = await response.json()
    console.log(data)
    return data;
}