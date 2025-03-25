
export default async function(

    id: number
  
  ): Promise<
    PropertyEditDto>{
    const url = `http://localhost:9090/property/${id}`;
    try{

    const response = await fetch(url);
  
    const data = await response.json();
    console.log(data)
    const { realtors, proprietor, address, taxes, propertyFeatures, ...rest } = data;

    const property = { ...rest, ...address, ...taxes, ...propertyFeatures, proprietor, realtors };

    return property as PropertyEditDto

    }catch{
        return {} as PropertyEditDto;
    }
  }
  