
export default async function(

    cpf?: string,
    name?: string,
    email?: String,
    numberProperties?: number,
    goal?: string,
    archived?: boolean
  
  ): Promise<{
    proprietors: Proprietor[];
    totalPages: number;

  }>{
    const url = "http://localhost:9090/proprietor/filter";
    try{
    const response = await fetch(url,{
      method:"POST",
      headers: {
        "Content-Type": "application/json", // Garante que está enviando JSON
      },
      body:JSON.stringify({
        "cpf":cpf===""?null:cpf, 
        "name":name===""?null:name, 
        "email":email===""?null:email,
        "numberProperties":numberProperties===""?null:numberProperties,
        "goal":goal===""?null:goal,
        "archived":archived
      })
    });
  
    const data = await response.json();
  
    const proprietors: Proprietor[] = data.content.map((proprietor: Proprietor) => proprietor);
    return {proprietors: proprietors, totalPages: data.totalPages}

    }catch{
      return {proprietors: [], totalPages: 0};
    }
  }
  