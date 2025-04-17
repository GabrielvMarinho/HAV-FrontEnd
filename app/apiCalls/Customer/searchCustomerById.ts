import fetchUserImage from "../Image/searchUserImageById";

export default async function searchCustomerById(id: number): Promise<{ customer: CustomerEditDto, imageId?: number }> {
  const url = `http://localhost:9090/customer/${id}`;

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
    const customer = { ...rest, ...address, imageBase64, deletedImageId };

    return { customer, imageId: data.imageId };

  } catch (error) {
    console.log(error);
    return { customer: {} as CustomerEditDto };
  }
}