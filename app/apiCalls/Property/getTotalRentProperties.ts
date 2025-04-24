export default async function () {
    const BASE_URL = "http://localhost:9090/property/getQuantityOfRentalProperties"
    try {
        const response = await fetch(BASE_URL, {
            credentials: "include"
        })
        if (!response.ok) throw new Error("Erro ao buscar dados do total de propriedades para locação")
        return await response.json();
    } catch (e) {
        console.log(e);
    }
}

