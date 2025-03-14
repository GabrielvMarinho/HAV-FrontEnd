
//igual o PostProprietorDto
export default async function(

    formData: { [key: string]: FormDataEntryValue } | null
    
    
    ): Promise<string> {  
      const url = "http://localhost:9090/property";
      console.log("api")
      console.log(formData.name)
  
      try{
      const response = await fetch(url,{
        method:"POST",
        headers: {
          "Content-Type": "application/json", // Garante que está enviando JSON
        },
        body:JSON.stringify(
          {
            "title": formData.title,
            "propertyDescription": formData.propertyDescription,
            "propertyType": formData.propertyType,
            "propertyStatus": formData.propertyStatus,
            "purpose":  formData.purpose,
            "area": formData.propertyArea,
            "price": formData.propertyPrice,
            "promotionalPrice": formData.propertyPromocionalPrice,
            "highlight": formData.propertyHighlight,
            "propertyCategory": "",
            "address": {
              "street": formData.street,
              "propertyNumber": formData.propertyNumber,
              "city": formData.city,
              "state": formData.state,
              "cep": formData.cep,
              "neighborhood": formData.neighborhood,
              "Complement": formData.complement
            },
            "taxes": {
              "iptu": ,
              "condominiumFee": 0
            },
            "propertyFeatures": {
              "bedRoom": 3,
              "bathRoom": 2,
              "garageSpace": 2,
              "suite": 2,
              "livingRoom": 2,
              "isFurnished": false,
              "allowsPet": false
            },
            "additionals": [2],
            "realtors": [3],
            "proprietor": 1
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
    