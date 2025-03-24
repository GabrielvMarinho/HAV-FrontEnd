export default async function (){
    const url = "http://localhost:9090/additionals"
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (error) {
        return "fail"
    }
}
