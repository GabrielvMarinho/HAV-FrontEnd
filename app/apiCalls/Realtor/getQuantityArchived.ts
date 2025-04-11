const BASE_URL = `http://localhost:9090/realtor`

export default async function(){
    try{
        const response = await fetch(`${BASE_URL}/getQuantityOfArchived`)
        const data = await response.json();
        return data
    }catch(e){
        console.log(e);
    }
} 