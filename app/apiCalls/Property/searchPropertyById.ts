
export default async function(

    id: number
  
  ): Promise<
    PropertyEditDto>{
    const url = `http://localhost:9090/property/${id}`;
    try{

    const response = await fetch(url, {
      
      credentials:"include"
    });
  
    const data = await response.json();
    console.log(data)
    const { realtors, proprietor, address, taxes, propertyFeatures, ...rest } = data;

    const property = { ...rest, ...address, ...taxes, ...propertyFeatures, proprietor, realtors };

    const transformedProperty = Object.fromEntries(
      Object.entries(property).map(([key, value]) => {
        if (value === true) return [key, 1];
        if (value === false) return [key, 0];
        return [key, value];
      })
    ) as PropertyEditDto;

    return transformedProperty;

    }catch{
        return {} as PropertyEditDto;
    }
  }
  