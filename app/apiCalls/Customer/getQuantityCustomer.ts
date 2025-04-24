export default async function getQuantityCustomer() {
    const BASE_URL = `http://localhost:9090/users/getQuantityCustomer`
    try {
        const response = await fetch(BASE_URL, {
            credentials: "include"
        })
        const data = await response.json();
        console.log("resps api", data);
        return data
    } catch (e) {
        console.log(e);
    }
}