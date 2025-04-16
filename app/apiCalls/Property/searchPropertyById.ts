
/* export default async function (id: number): Promise<PropertyEditDto> {
  const url = `http://localhost:9090/property/${id}`;
  try {

    const response = await fetch(url);

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

  } catch {
    return {} as PropertyEditDto;
  }
} */

import fetchPropertyImages from "../Image/searchPropertyImagesById";

export default async function searchPropertyById(id: number): Promise<PropertyEditDto> {
  const url = `http://localhost:9090/property/${id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("Resposta da API (property):", data);

    const {
      realtors,
      proprietor,
      address,
      taxes,
      propertyFeatures,
      imageIds, // lista de ids da imagem que virá do backend
      ...rest
    } = data;

    // Monta o objeto da propriedade
    const property = {
      ...rest,
      ...address,
      ...taxes,
      ...propertyFeatures,
      proprietor,
      realtors,
    };

    // Carrega as imagens se houver IDs
    let imageBase64List: string[] = [];
    if (imageIds && Array.isArray(imageIds) && imageIds.length > 0) {
      imageBase64List = await fetchPropertyImages(imageIds);
    }

    // Transforma booleanos em 1 ou 0
    const transformedProperty = Object.fromEntries(
      Object.entries(property).map(([key, value]) => {
        if (value === true) return [key, 1];
        if (value === false) return [key, 0];
        return [key, value];
      })
    ) as unknown as PropertyEditDto;

    // Adiciona a lista de imagens à propriedade
    transformedProperty.imageBase64List = imageBase64List;

    return transformedProperty;

  } catch (error) {
    console.error("Erro ao buscar property:", error);
    return {} as PropertyEditDto;
  }
}
