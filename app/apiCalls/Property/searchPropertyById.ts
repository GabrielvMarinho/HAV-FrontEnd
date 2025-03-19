
export default async function(

    id: number
  
  ): Promise<
    PropertyEditDto>{
    const url = `http://localhost:9090/property/${id}`;
    try{

    console.log(url)
    const response = await fetch(url);
  
  
    const data = await response.json();
    console.log("resposta api")
    console.log(data)

    const { realtors, proprietor, address, taxes, propertyFeatures, ...rest } = data;

    const property = { ...rest, ...address, ...taxes, ...propertyFeatures, proprietor, realtors };

    console.log(property)
    return property

    }catch{
        return {} as PropertyEditDto;
    }
  }
  