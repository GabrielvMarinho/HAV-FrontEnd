const BASE_URL = "http://localhost:9090/property"

export default async function(){
    try{
        const response = await fetch(`${BASE_URL}/getPercentageForSale`)
        if(!response.ok) throw new Error("Erro ao buscar a porcentagem de propriedades a venda") 
        console.log("Resposta da api",response);
        return await response.json();
    }catch(e){
        console.log(e);
    }
}