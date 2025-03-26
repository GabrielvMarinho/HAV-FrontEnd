export default async function (

  id: number

): Promise<
  PropertySpecific> {
  const url = `http://localhost:9090/property/propertyspecific/${id}`;
  try {

    console.log(url)
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();

    const { realtors, address, taxes, propertyFeature, additional, ...rest } = data;

    const property: PropertySpecific = {
      ...rest,
      address,
      taxes,
      propertyFeature, 
      additional,
      realtors
    };
    return property;

  } catch {
    return {} as PropertySpecific;
  }
}
