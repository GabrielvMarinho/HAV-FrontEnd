
export default async function(

    cpf?: string,
    name?: string,
    email?: String,
    cellphone?: string,
    status?: string,
    archived?: boolean,
    page?: number
  
  ): Promise<{
    customers: Customer[];
    totalPages: number;

  }>
   {
    const url = `http://localhost:9090/customer/filter?page=${page}`;
    
    try{
      console.log(JSON.stringify({
        "cpf":cpf, 
        "name":name, 
        "email":email,
        "cellphone":cellphone,
        "status":status,
        "archived":archived,
        "page":page,
      }))
      const response = await fetch(url,{
        method:"POST",
        headers: {
          "Content-Type": "application/json", // Garante que está enviando JSON
        },
        body:JSON.stringify({
          "cpf":cpf===""?null:cpf, 
          "name":name===""?null:name, 
          "email":email===""?null:email,
          "cellphone":cellphone===""?null:cellphone,
          "status":status===""?null:status,
          "archived":archived,
          "page":page,
          "size":10
        })
      });
    
    
      const data = await response.json();
    
      const customers: Customer[] = data.content.map((customer: Customer) => customer);
      return {customers: customers, totalPages: data.totalPages}

    }catch{
      return {customers: [], totalPages: 0};
    }
    
    
  }
  