

export default async function(){
    const BASE_URL = "http://localhost:9090/property/getPercentageForSale"
    try{
        const response = await fetch(BASE_URL,{
            credentials: "include"
        })
        if(!response.ok) throw new Error("Erro ao buscar a porcentagem de propriedades a venda") 
        return await response.json();
    }catch(e){
        console.log(e);
    }
}