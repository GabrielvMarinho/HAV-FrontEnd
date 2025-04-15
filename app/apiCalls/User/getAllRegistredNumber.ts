const BASE_ULR = "http://localhost:9090/users"

export default async function getAllUsersNumber() {
    try {
        const response = await fetch(`${BASE_ULR}/getAll`)
        if (!response.ok) throw new Error("Erro no getAllUserNumber");
        const data = await response.json();
        return data
    } catch (e) {
        console.log(e);
    }
}