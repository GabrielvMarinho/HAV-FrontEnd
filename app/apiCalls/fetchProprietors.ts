
export default async function(

    cpf?: string,
    name?: string,
    email?: String,
    numberProperties?: number,
    goal?: string,
  
  ): Promise<Proprietor[]> {
    const url = "http://localhost:9090/proprietor/filter";
    
    const response = await fetch(url,{
      method:"POST",
      headers: {
        "Content-Type": "application/json", // Garante que está enviando JSON
      },
      body:JSON.stringify({
        "cpf":cpf, 
        "name":name, 
        "email":email,
        "numberProperties":numberProperties,
        "goal":goal
      })
    });
  
  
    const data = await response.json();
  
    const proprietors: Proprietor[] = data.content.map((proprietor: Proprietor) => proprietor);
    
  
    
      return proprietors
  }
  