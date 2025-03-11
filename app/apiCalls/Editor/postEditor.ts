
//igual o PostProprietorDto
export default async function(

    formData: { [key: string]: FormDataEntryValue } | null
    
    
    ): Promise<string> {  
      const url = "http://localhost:9090/editor";
      console.log("api")
      console.log(formData.name)
  
      console.log(JSON.stringify({
        "name": formData.name,
        "cpf": formData.cpf,
        "cnpj": formData.cnpj,
        "email": formData.email,
        "celphone": formData.cellphone,
        "phoneNumber": formData.phoneNumber,
        "archived": false,
        "address": {
          "cep": formData.cep,
          "street": formData.street,
          "neighborhood": formData.neighborhood,
          "city": formData.city,
          "state": formData.state,
          "propertyNumber": formData.propertyNumber,
          "complement": formData.complement
          }
        }
      ))
  
      try{
      const response = await fetch(url,{
        method:"POST",
        headers: {
          "Content-Type": "application/json", // Garante que está enviando JSON
        },
        body:JSON.stringify({
          "name": formData.name,
          "cpf": formData.cpf,
          "cnpj": formData.cnpj,
          "email": formData.email,
          "celphone": formData.cellphone,
          "phoneNumber": formData.phoneNumber,
          "archived": false,
          "address": {
            "cep": formData.cep,
            "street": formData.street,
            "neighborhood": formData.neighborhood,
            "city": formData.city,
            "state": formData.state,
            "propertyNumber": formData.propertyNumber,
            "complement": formData.complement
            }
          }
        )
      });
      if (!response.ok) {
        const errorData = await response.json(); // Tenta pegar o erro do servidor
        throw new Error(`Erro ${response.status}: ${errorData.message || "Erro desconhecido"}`);
      }
  
      console.log("sucesso")
    }catch(error){
      console.error("Erro na requisição:", error);
      throw error; // Relança o erro para que possa ser capturado externamente
    }

    }
    