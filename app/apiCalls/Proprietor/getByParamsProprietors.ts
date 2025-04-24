import findTokenOnCookie from "@/app/utils/findTokenOnCookie";

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
    const token = await findTokenOnCookie();

    
    try{
    const response = await fetch(url,{
      method:"POST",
      credentials:"include",
      headers: {
        "Content-Type": "application/json", // Garante que está enviando JSON
        "Cookie": `token=${token}`
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

    const proprietors: Proprietor[] = data.content.map((proprietor: Proprietor) => proprietor);
    console.log(proprietors)
    return {proprietors: proprietors, totalPages: data.totalPages}

    }catch{
      return {proprietors: [], totalPages: 0};
    }
  }
  