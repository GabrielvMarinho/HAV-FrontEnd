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
            credentials:"include",
            headers: {
            "Content-Type": "application/json", // Garante que está enviando JSON
          },
          credentials:"include",
          body:JSON.stringify(
            updatedObjects
          )
    })
    
    const data = await response.json()
    
    return data;
}