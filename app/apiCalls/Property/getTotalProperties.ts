const BASE_URL = "http://localhost:9090/property"

export default async function (){
    try{
        const response = await fetch(`${BASE_URL}/getAll`)
        if(!response.ok) throw new Error("Erro ao coseguir buscar o total de propriedades")
        return await response.json();
    }catch(e){
        console.log(e);
    }
}