export default async function (

  id: number

): Promise<
  PropertySpecific> {
  const url = `http://localhost:9090/property/propertyspecific/${id}`;
  try {

    console.log(url)
    const response = await fetch(url, {
      
      credentials:"include"
    });
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();

    const {address, taxes, propertyFeature, additionals, propertyStatus, proprietor, realtorPropertySpecific, ...rest } = data;

    const property: PropertySpecific = {
      ...rest,
      address,
      taxes,
      propertyFeature, 
      additionals,
      realtorPropertySpecific,
      propertyStatus,
      proprietor
    };
    console.log("0----_", property)

    return property;

  } catch {
    return {} as PropertySpecific;
  }
}
