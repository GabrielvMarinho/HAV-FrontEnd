import fetchUserImage from "../Image/searchUserImageById";

export default async function (id: number): Promise<{ adm: AdmEditDto, imageId?: number }> {
  const url = `http://localhost:9090/adm/${id}`;
  try{
    const response = await fetch(url, {
      credentials:"include"
    });
  
  
    const data = await response.json();

    let imageBase64;
    if (data.imageId) {
      imageBase64 = await fetchUserImage(data.imageId);
    }

    const deletedImageId = data.imageId;

    const { address, ...rest } = data;
    const adm = { ...rest, ...address, imageBase64, deletedImageId };

    return { adm, imageId: data.imageId };

  } catch (error) {
    return { adm: {} as AdmEditDto };
  }
}
