export default async function(id :string, reason :string, description :string){
    const url = `http://localhost:9090/contactus`
    console.log(url)
    console.log(JSON.stringify({
        id: id,
        subject: reason,
        body: description
    }))
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json", // Garante que está enviando JSON
          },
        method: "POST",
        credentials:"include",
        body: JSON.stringify({
            id: id,
            subject: reason,
            body: description
        })
    })
    
    const data = await response.json()
    console.log(data)
}