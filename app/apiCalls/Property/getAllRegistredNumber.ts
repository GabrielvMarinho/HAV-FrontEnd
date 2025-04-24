export default async function () {
    const url = "http://localhost:9090/property/getAll";
    try {
        const response = await fetch(url, {
            credentials: "include"
        });
        const data = await response.json();
        return data; // aqui retorna apenas a quantidade
        
    } catch (e) {
        console.error("Erro ao buscar propriedades:", e);
        return 0;
    }
}
