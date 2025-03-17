
export default async function(

  cpf?: string,
  cnpj?: string,

    name?: string,
    email?: String,
    numberProperties?: number,
    goal?: string,
    archived?: boolean,
    page?: any
  ): Promise<{
    proprietors: Proprietor[];
    totalPages: number;

  }>{
    
    const url = `http://localhost:9090/proprietor/filter?page=${page}`;
    console.log(url)

    console.log(JSON.stringify({
      "cpf": cpf===""?null:cpf,
      "cnpj": cnpj===""?null:cnpj,
      "name":name===""?null:name, 
      "email":email===""?null:email,
      "numberOfProperty":numberProperties===null?null:numberProperties,
      "goal":goal===""?null:goal,
      "archived":archived
    }))
    try{
    const response = await fetch(url,{
      method:"POST",
      headers: {
        "Content-Type": "application/json", // Garante que está enviando JSON
      },
      body:JSON.stringify({
        "cpf": cpf===""?null:cpf,
        "cnpj": cnpj===""?null:cnpj,
        "name":name===""?null:name, 
        "email":email===""?null:email,
        "numberOfProperty":numberProperties===null?null:numberProperties,
        "goal":goal===""?null:goal,
        "archived":archived
      })
    });

    const data = await response.json();
    console.log(data)

    const proprietors: Proprietor[] = data.content.map((proprietor: Proprietor) => proprietor);
    return {proprietors: proprietors, totalPages: data.totalPages}

    }catch{
      return {proprietors: [], totalPages: 0};
    }
  }
  