export default async function getPercentageRent() {
    const BASE_URL = "http://localhost:9090/property/getPercentageRental"
    try {
        const response = await fetch(BASE_URL,{
            credentials: "include"
        })
        if (!response.ok) throw new Error("Erro ao buscar dados")
        return await response.json();
    } catch (e) {
        console.log(e);
    }
}

