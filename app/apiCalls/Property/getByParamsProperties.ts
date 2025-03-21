import { InputFilterConfig } from "@/app/components/globalFormsConfig/InputFilterConfig";


export default async function(

    propertyCode?: string, 
    propertyType?: string, 
    propertyCategory?: string,
    propertyStatus?: string,
    minPrice?: number,
    maxPrice?: number,
    archived?: boolean,
    page?: string,
    bedRoom?: boolean,
    bathRoom?: boolean,
    garageSpace?: boolean,
    suite?: boolean,
    purpose?: string

    ): Promise<{
      properties: Property[];
      totalPages: number;
    }>{
      const url = `http://localhost:9090/property/filter?page=${page}`
      

      if(purpose==="venda"){
        if(minPrice===null){
          minPrice=0
        }
        if(maxPrice===null || maxPrice ===InputFilterConfig.priceRangesSell.max){
          maxPrice = 100000000
        }

      } else if(purpose==="locacao") {
        if(minPrice===null){
          minPrice = 0
        }
        if(maxPrice===null || maxPrice ===InputFilterConfig.priceRangesRent.max){
          maxPrice = 100000000
        }
      }  
      
      
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
          "archived":archived,
          "propertyFeatures":{
            "bedRoom":bedRoom,
            "bathRoom":bathRoom,
            "garageSpace":garageSpace,
            "suite":suite
          }
          
        })
      });
  
  
      const data = await response.json();
      const properties: Property[] = data.content.map((property: Property) => property);
      return {properties: properties, totalPages: data.totalPages}

    }catch{
      return {properties: [], totalPages: 0};
    }
    }