const BASE_URL = `http://localhost:9090/users`

export default async function getPercentageProprietors() {
    try{
        const response = await fetch(`${BASE_URL}/getPercentageQuantityArchived`, {
            credentials: "include"
        })
        const data = await response.json();
        return data;
    }catch(e){
        console.log(e);
    }
}