
//igual o PostProprietorDto
export default async function(

    formData: { [key: string]: FormDataEntryValue } | null
    
    ): Promise<string> {  
      const url = "http://localhost:9090/property";

      
      
  
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
          "propertyStatus": formData.status,
          "purpose":  formData.purpose,
          "area": formData.area,
          "price": formData.price,
          "promotionalPrice": formData.promotionalPrice,
          "highlight": formData.highlight==="1"?true:false,
          "floors":formData.floors,

          "propertyCategory": "",
          "floors":formData.floors,

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
            "iptu": formData.iptu,
            "condominiumFee": formData.condominiumFee
          },
          "propertyFeatures": {
            "bedRoom": formData.bedRoom,
            "bathRoom": formData.bathRoom,
            "garageSpace": formData.garageSpace,
            "suite": formData.suite,
            "livingRoom": formData.livingRoom,
            "isFurnished": formData.isFurnished==="1"?true:false,
            "allowsPet": formData.allowsPet==="1"?true:false
          },
          "additionals": null,
          "realtors": formData.realtors.split(",").map((s: string) => Number(s.trim())),
          "proprietor": Number(formData.proprietor)
          }
        )
      });
    
    
      if (!response.ok) {
        const errorData = await response.json(); // Tenta pegar o erro do servidor
        throw new Error(`Erro ${response.status}: ${errorData.message || "Erro desconhecido"}`);
      }
  
    }catch(error){
      throw error; // Relança o erro para que possa ser capturado externamente
    }
    }
    