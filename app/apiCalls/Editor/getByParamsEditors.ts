
export default async function(

    cpf?: string,
    name?: string,
    email?: String,
    cellphone?: number,
    phoneNumber?: string,
    archived?: boolean
  
  ): Promise<{
    editors: Editor[];
    totalPages: number;

  }>{

    const url = "http://localhost:9090/editor/filter";
    try{
    const response = await fetch(url,{
      method:"POST",
      credentials:"include",
      headers: {
        "Content-Type": "application/json", // Garante que está enviando JSON
      },
      body:JSON.stringify({
        "cpf":cpf===""?null:cpf, 
        "name":name===""?null:name, 
        "email":email===""?null:email,
        "cellphone":cellphone===""?null:cellphone,
        "phoneNumber":phoneNumber===""?null:phoneNumber,
        "archived":archived
      })
    });
  
  
    const data = await response.json();
  
    const editors: Editor[] = data.content.map((editor: Editor) => editor);
    return {editors: editors, totalPages: data.totalPages}

    }catch{
      return {editors: [], totalPages: 0};
    }
  }
  