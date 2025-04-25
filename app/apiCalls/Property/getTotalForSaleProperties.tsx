export default async function () {
    const BASE_URL = "http://localhost:9090/property/getQuantityOfForSaleProperties"
    try {
        const response = await fetch(BASE_URL, {
            credentials: "include"
        })
        if(!response.ok) throw new Error("Erro ao buscar a quantidade de propriedades em venda")
        return await response.json();
    } catch (e) {
        console.log(e);
    }
}