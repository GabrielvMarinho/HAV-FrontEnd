import page from "@/app/(routes)/(crud)/manage/admins/page";

export default async function(

    cpf?: string,
    name?: string,
    email?: String,
    cellphone?: number,
    creci?: string,
    archived?: boolean,
    page? :string
  ): Promise<{
    realtors: Realtor[];
    totalPages: number;

  }>{
    const url = `http://localhost:9090/realtor/filter?page=${page}`;

   
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
  