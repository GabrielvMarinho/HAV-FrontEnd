
export default async function(

    id: number
  
  ): Promise<
    PropertyEditDto>{
    const url = `http://localhost:9090/property/${id}`;
    try{

    const response = await fetch(url);
  
  
    const data = await response.json();

    const { realtors, proprietor, address, taxes, propertyFeatures, ...rest } = data;

    const property = { ...rest, ...address, ...taxes, ...propertyFeatures, proprietor, realtors };

    return property

    }catch{
        return {} as PropertyEditDto;
    }
  }
  