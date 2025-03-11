
export default async function(

    cpf?: string,
    name?: string,
    email?: String,
    cellphone?: string,
    status?: string,
  
  ): Promise<Customer[]> {
    const url = "http://localhost:9090/customer/filter";

    try{
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
          "status":status
        })
      });
    
    
      const data = await response.json();
    
      const customers: Customer[] = data.content.map((customer: Customer) => customer);
      return customers

    }catch{
      return [];
    }
    
    
  }
  