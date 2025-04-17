import fetchUserImage from "../Image/searchUserImageById";

export default async function searchProprietorById(id: number): Promise<{ proprietor: ProprietorEditDto, imageId?: number }> {
  const url = `http://localhost:9090/proprietor/${id}`;

  try {
    const response = await fetch(url,{
      
      credentials:"include"
    });
  
  
    const data = await response.json();
    console.log("Resposta da API:", data);

    let imageBase64;
    if (data.imageId) {
      imageBase64 = await fetchUserImage(data.imageId);
    }

    const deletedImageId = data.imageId;

    const { address, ...rest } = data;
    const proprietor = { ...rest, ...address, imageBase64, deletedImageId };

    return { proprietor, imageId: data.imageId };

  } catch (error) {
    console.log(error);
    return { proprietor: {} as ProprietorEditDto };
  }
}