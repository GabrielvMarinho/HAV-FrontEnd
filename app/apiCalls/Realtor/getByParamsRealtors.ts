import page from "@/app/(routes)/(withHeader)/(crud)/manage/admins/page";

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
    console.log(page)
    const url = `/realtor/filter?page=${page}`;
   
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
      }),
      credentials: "include"

    });
    
  
  
    const data = await response.json();
    console.log("000000000000",data)
    const realtors: Realtor[] = data.content.map((realtor: Realtor) => realtor);
    return {realtors: realtors, totalPages: data.totalPages}

    }catch(err){
      console.log(err)
      return {realtors: [], totalPages: 0};
    }
  
  }
  