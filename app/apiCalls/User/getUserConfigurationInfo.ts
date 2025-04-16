
export default async function getUserConfigurationInfo() {
    const response = await fetch(`http://localhost:9090/users/configuration`, {
        method: "GET",
        credentials: "include"
    });
    const data = await response.json();
    console.log(data);
    return data;
}

