import { InputFilterConfig } from "@/app/components/globalFormsConfig/InputFilterConfig";


export default async function(

    propertyCode?: string, 
    propertyType?: string, 
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
      properties: PropertySpecificCard[];
      totalPages: number;
    }>{
      const url = `http://localhost:9090/property/filter/card?page=${page}`

      if(purpose==="venda"){
        console.log("é venda mesmo")
        console.log(minPrice)
        console.log(maxPrice)
        console.log(InputFilterConfig.priceRangesSell.max)
        if(minPrice===null){
          minPrice=0
        }
        if(maxPrice===null || maxPrice ===InputFilterConfig.priceRangesSell.max){
          console.log("igual")
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
      console.log(JSON.stringify({
        "propertyCode":propertyCode===""?null:propertyCode, 
        "minPric":minPrice, 
        "maxPric":maxPrice,
        "purpose":purpose,
        "propertyType":propertyType===""?null:propertyType,
        "propertyStatus":propertyStatus===""?null:propertyStatus,
        "archived":archived,
        "propertyFeatures":{
          "bedRoom":bedRoom,
          "bathRoom":bathRoom,
          "garageSpace":garageSpace,
          "suite":suite
        }
        
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
          "purpose":purpose,
          "propertyType":propertyType===""?null:propertyType,
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
      console.log(data)
      const properties: PropertySpecificCard[] = data.content.map((property: PropertySpecificCard) => ({

          id:property.id,
          neighborhood:property.address.neighborhood,
          city:property.address.city,
          bedRoom:property.propertyFeatures.bedRoom,
          bathRoom:property.propertyFeatures.bathRoom,
          livingRoom:property.propertyFeatures.livingRoom,
          propertyStatus:property.propertyStatus,
          promotionalPrice:property.promotionalPrice,
          price:property.price,
          purpose:property.purpose,
          area:property.area,
          propertyType: property.propertyType

      }));
        
      console.log(properties)
      return {properties: properties, totalPages: data.totalPages}

    }catch{
      return {properties: [], totalPages: 0};
    }
    }