export default async function(

    id: number
  
  ): Promise<
    PropertySpecific>{
    const url = `http://localhost:9090/property/propertyspecific${id}`;
    try{

    console.log(url)
    const response = await fetch(url);
  
    const data = await response.json();
    console.log("resposta api")
    console.log(data)

    const { realtors, address, taxes, ...rest } = data;

    const property = { ...rest, ...address, ...taxes, ...realtors };

    console.log(property)
    return property

    }catch{
        return {} as PropertySpecific;
    }
  }
  