import fetchUserImage from "../Image/searchUserImageById";

export default async function searchRealtorById(id: number): Promise<{ realtor: RealtorEditDto, imageId?: number }> {
  const url = `http://localhost:9090/realtor/${id}`;

  try {
    const response = await fetch(url, {
      
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
    const realtor = { ...rest, ...address, imageBase64, deletedImageId };

    return { realtor, imageId: data.imageId };

  } catch (error) {
    console.log(error);
    return { realtor: {} as RealtorEditDto };
  }
}
