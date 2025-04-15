const BASE_URL = `http://localhost:9090/proprietor`

export default async function () {
    try {
        const respose = await fetch(`${BASE_URL}/getAll`)
        if (!respose.ok) throw new Error("Erro ao buscar a quanitdade de proprietários")
        const data = await respose.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}