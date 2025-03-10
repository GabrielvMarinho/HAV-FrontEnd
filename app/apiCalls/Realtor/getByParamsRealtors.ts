
export default async function(

    cpf?: string,
    name?: string,
    email?: String,
    cellphone?: number,
    creci?: string,
  
  ): Promise<Realtor[]> {
    const url = "http://localhost:9090/realtor/filter";
    
    const response = await fetch(url,{
      method:"POST",
      headers: {
        "Content-Type": "application/json", // Garante que está enviando JSON
      },
      body:JSON.stringify({
        "cpf":cpf, 
        "name":name, 
        "email":email,
        "cellphone":cellphone,
        "creci":creci
      })
    });
  
  
    const data = await response.json();
  
    const realtors: Realtor[] = data.content.map((realtor: Realtor) => realtor);
  
    
      return realtors
  }
  