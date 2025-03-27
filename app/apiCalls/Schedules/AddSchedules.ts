export default async function AddSchedules(objects :any[]){
  const updatedObjects = objects.map((object) => {
    return { 
        ...object, 
        day: object.day.replace(/\//g, "-") 
    };
});
    const url = `http://localhost:9090/schedules`;
    const response = await fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json", // Garante que está enviando JSON
          },
          body:JSON.stringify(
            updatedObjects
          )
    })
    
    const data = await response.json()
    
    return data;
}