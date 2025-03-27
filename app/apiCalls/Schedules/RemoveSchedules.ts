export default async function RemoveSchedules(ids :string[]){
    
    const url = `http://localhost:9090/schedules`;
    const response = await fetch(url, {
        method: "DELETE",
          headers: {
            "Content-Type": "application/json", // Garante que está enviando JSON
          },
          body:JSON.stringify(ids)
    })
    const data = await response.json()
    
    return data;
}