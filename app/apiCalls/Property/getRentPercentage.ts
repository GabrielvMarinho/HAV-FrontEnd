const BASE_URL = "http://localhost:9090/property"

export default async function getPercentageRent() {
    try {
        const response = await fetch(`${BASE_URL}/getPercentageRental`)
        if (!response.ok) throw new Error("Erro ao buscar dados")
        return await response.json();
    } catch (e) {
        console.log(e);
    }
}

