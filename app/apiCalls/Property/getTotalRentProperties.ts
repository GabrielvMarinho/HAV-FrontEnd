const BASE_URL = "http://localhost:9090/property"

export default async function () {
    try {
        const response = await fetch(`${BASE_URL}/getQuantityOfRentalProperties`)
        if (!response.ok) throw new Error("Erro ao buscar dados do total de propriedades para locação")
        return await response.json();
    } catch (e) {
        console.log(e);
    }
}

