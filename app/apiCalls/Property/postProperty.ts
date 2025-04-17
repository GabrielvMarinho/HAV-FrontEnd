
//igual o PostProprietorDto
export default async function (

  formData: { [key: string]: FormDataEntryValue }

): Promise<string> {
  const url = "http://localhost:9090/property";


  try {
    const form = new FormData();

    form.append("property", new Blob([JSON.stringify(
      {
        "title": formData?.title,
        "propertyDescription": formData?.propertyDescription,
        "propertyType": formData?.propertyType,
        "propertyStatus": formData?.status,
        "purpose": formData?.purpose,
        "area": formData?.area,
        "price": formData?.price,
        "promotionalPrice": formData?.promotionalPrice,
        "highlight": formData?.highlight === "1" ? true : false,
        "floors": formData?.floors,
        "additionals": formData?.additionals,
        "address": {
          "street": formData?.street,
          "propertyNumber": formData?.propertyNumber,
          "city": formData?.city,
          "state": formData?.state,
          "cep": formData?.cep,
          "neighborhood": formData?.neighborhood,
          "Complement": formData?.complement
        },
        "taxes": {
          "iptu": formData?.iptu,
          "condominiumFee": formData?.condominiumFee
        },
        "propertyFeatures": {
          "bedRoom": formData?.bedRoom,
          "bathRoom": formData?.bathRoom,
          "garageSpace": formData?.garageSpace,
          "suite": formData?.suite,
          "livingRoom": formData?.livingRoom,
          "isFurnished": formData?.isFurnished === "1" ? true : false,
          "allowsPet": formData?.allowsPet === "1" ? true : false
        },
        "realtors": formData?.realtors.split(",").map((s: string) => Number(s.trim())),
        "proprietor": Number(formData?.proprietor)
      }
    )], { type: "application/json" }));



    const newImages = formData.images as unknown as FileList;

    if (newImages && newImages.length > 0) {
      Array.from(newImages).forEach((file) => {
        const imageBlob = new Blob([file], { type: "application/octet-stream" });
        form.append("images", imageBlob, file.name);
      });
    }
    



    const response = await fetch(url, {
      method: "POST",
      body: form,
    });

    if (!response.ok) {
      const errorData = await response.json(); // Captura a resposta de erro do backend

      // Lança o erro com a estrutura completa
      throw {
        response: {
          data: errorData,
          status: response.status,
        },
      };
    }

    return await response.json(); // Retorna a resposta em caso de sucesso
  } catch (error) {
    throw error; // Relança o erro para que possa ser capturado externamente
  }
}
