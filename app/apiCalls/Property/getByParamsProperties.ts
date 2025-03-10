

export default async function(

    propertyCode?: string, 
    propertyType?: string, 
    propertyCategory?: string,
    propertyStatus?: string,
    minPrice?: number,
    maxPrice?: number,
  
    ): Promise<Property[]> {
      const url = "http://localhost:9090/property/filter";
    
      const response = await fetch(url,{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          "propertyCode":propertyCode, 
          "minPric":minPrice, 
          "maxPric":maxPrice,
          "propertyType":propertyType,
          "propertyCategory":propertyCategory,
          "propertyStatus":propertyStatus
        })
      });
  
  
      const data = await response.json();
  
      const properties: Property[] = data.content.map((property: Property) => property);
  
      
    return properties
  }
  