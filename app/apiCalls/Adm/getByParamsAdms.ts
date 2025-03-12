
export default async function(

    cpf?: string,
    name?: string,
    email?: String,
    cellphone?: number,
    phoneNumber?: string,
    archived?: boolean
  
  ): Promise<Adm[]> {
    const url = "http://localhost:9090/adm/filter";
    try{
      console.log(JSON.stringify({
        "cpf":cpf, 
        "name":name, 
        "email":email,
        "cellphone":cellphone,
        "phoneNumber":phoneNumber,
        "archived":archived
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
        "archived":archived
      })
    });
  
  
    const data = await response.json();
  
    const adms: Adm[] = data.content.map((adm: Adm) => adm);
    return adms;
  }catch{
    return [];
  }
  }
  