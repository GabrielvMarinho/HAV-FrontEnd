import { InputFilterConfig } from "@/app/components/globalFormsConfig/InputFilterConfig";


export default async function(
    ) {
      const url = `http://localhost:9090/favorites/map`

      
    try{
      const response = await fetch(url, {
        
        credentials:"include"
      });
  
    
      const data = await response.json();

      const properties: Object = data.map((property: Object) => ({
          id:property.id,
          neighborhood:property.address.neighborhood,
          city:property.address.city,
          street:property.address.street,
          state:property.address.state,
          propertyNumber:property.address.propertyNumber,
          propertyStatus:property.propertyStatus,
          price:property.price,
          purpose:property.purpose,

      }));
      return properties;

    }catch{
      return [];
    }
    }