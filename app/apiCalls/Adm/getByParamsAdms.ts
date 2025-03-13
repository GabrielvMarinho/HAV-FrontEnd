
export default async function(

    cpf?: string,
    name?: string,
    email?: String,
    cellphone?: number,
    phoneNumber?: string,
    archived?: boolean,
    page?: number
  
  ): Promise<{
    admins: Adm[];
    totalPages: number;

  }>{
    const url = "http://localhost:9090/adm/filter";
    try{
      console.log(JSON.stringify({
        "cpf":cpf, 
        "name":name, 
        "email":email,
        "cellphone":cellphone,
        "phoneNumber":phoneNumber,
        "archived":archived,
        "page":page,
        "size":10
      }))
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
        "phoneNumber":phoneNumber,
        "archived":archived,
        "page":page,
        "size":10

      })
    });
  
  
    const data = await response.json();
  
    const admins: Adm[] = data.content.map((adm: Adm) => adm);
    return {admins: admins, totalPages: data.totalPages}

    }catch{
      return {admins: [], totalPages: 0};
    }
  }
  