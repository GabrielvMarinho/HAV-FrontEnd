const BASE_URL = "http://localhost:9090/property"

export default async function(){
    try{
        const response = await fetch(`${BASE_URL}/getPercentageOfArchiveStatus`)
        if(!response.ok) throw new Error("Erro ao buscar a porcentagem de propriedades arquivadas")
        return await response.json();
    }catch(e){
        console.log(e);
    }
}