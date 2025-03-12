
export default async function(

    cpf?: string,
    name?: string,
    email?: String,
    cellphone?: number,
    phoneNumber?: string,
    archived?: boolean
  
  ): Promise<Editor[]> {

    const url = "http://localhost:9090/editor/filter";
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
        "phoneNumber":phoneNumber,
        "archived":archived
      })
    });
  
  
    const data = await response.json();
  
    const editors: Editor[] = data.content.map((editor: Editor) => editor);
    return editors

    }catch{
      return [];
    }
  }
  