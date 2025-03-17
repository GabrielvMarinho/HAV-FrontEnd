

export default async function(

    propertyCode?: string, 
    propertyType?: string, 
    propertyCategory?: string,
    propertyStatus?: string,
    minPrice?: number,
    maxPrice?: number,
    archived?: boolean,
    page?: string
    ): Promise<{
      properties: Property[];
      totalPages: number;
    }>{
      const url = `http://localhost:9090/property/filter?page=${page}`

      console.log(JSON.stringify({
        "propertyCode":propertyCode===""?null:propertyCode, 
        "minPric":minPrice, 
        "maxPric":maxPrice,
        "propertyType":propertyType===""?null:propertyType,
        "propertyCategory":propertyCategory===""?null:propertyCategory,
        "propertyStatus":propertyStatus===""?null:propertyStatus,
        "archived":archived
      }))
    try{
      const response = await fetch(url,{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          "propertyCode":propertyCode===""?null:propertyCode, 
          "minPric":minPrice, 
          "maxPric":maxPrice,
          "propertyType":propertyType===""?null:propertyType,
          "propertyCategory":propertyCategory===""?null:propertyCategory,
          "propertyStatus":propertyStatus===""?null:propertyStatus,
          "archived":archived
        })
      });
  
  
      const data = await response.json();
      console.log(data)
      const properties: Property[] = data.content.map((property: Property) => property);
      console.log("total pages")
      console.log(properties)
      console.log(data.totalPages)
      return {properties: properties, totalPages: data.totalPages}

    }catch{
      return {properties: [], totalPages: 0};
    }
    }