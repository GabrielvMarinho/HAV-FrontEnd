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
    console.log("resposta api", data)

    const { realtors, address, taxes, propertyFeatures, ...rest } = data;

    const property = { ...rest, ...address, ...taxes, ...propertyFeatures, ...realtors };

    return property

  } catch {
    return {} as PropertySpecific;
  }
}
