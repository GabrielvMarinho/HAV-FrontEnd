const BASE_URL = "http://localhost:9090/realtor"

export default async function getAllNumber() {
    try {
        const response = await fetch(`${BASE_URL}/getAll`)
        if (!response.ok) throw new Error("Erro ao buscar a quantidade de corretores")
        const data = await response.json();
        return data
    } catch (e) {
    }
}