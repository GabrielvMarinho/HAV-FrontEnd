
export default async function(

    cpf?: string,
    name?: string,
    email?: String,
    cellphone?: number,
    creci?: string,
    archived?: boolean
  
  ): Promise<{
    realtors: Realtor[];
    totalPages: number;

  }>{
    const url = "http://localhost:9090/realtor/filter";
    console.log(JSON.stringify({
      "cpf":cpf===""?null:cpf, 
      "name":name===""?null:name, 
      "email":email===""?null:email,
      "cellphone":cellphone===""?null:cellphone,
      "creci":creci===""?null:creci,
      "archived":archived
    }))
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
        "creci":creci,
        "archived":archived
      })
    });
  
  
    const data = await response.json();
  
    const realtors: Realtor[] = data.content.map((realtor: Realtor) => realtor);
    return {realtors: realtors, totalPages: data.totalPages}

    }catch{
      return {realtors: [], totalPages: 0};
    }
  
  }
  