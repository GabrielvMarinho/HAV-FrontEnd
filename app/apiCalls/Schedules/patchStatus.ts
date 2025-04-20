export default async function(id :any, status :string){
    const url = `http://localhost:9090/schedules/changeStatus/${id}/${status}`;
    const response = await fetch(url, {
        method:"PATCH",
        credentials:"include"
    })
    const data = await response.json()
    return data;
}