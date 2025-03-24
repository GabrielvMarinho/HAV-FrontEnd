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

    const { realtors, address, taxes, property_feature, ...rest } = data;

    const property = { ...rest, ...address, ...taxes, ...property_feature, ...realtors };

    return property

  } catch {
    return {} as PropertySpecific;
  }
}
