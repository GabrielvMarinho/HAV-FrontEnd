
/* export default async function editProperty(id: any, formData: { [key: string]: FormDataEntryValue } | null) {

  const url = `http://localhost:9090/property/${id}`;
  const files = formData?.images;

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
        "additionals": [...new Set(formData?.additionals?.split(',').map(s => Number(s.trim())))],
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

    if (files) {
      Array.from(files).forEach(file => {
        form.append("newImages", file); // Adiciona cada arquivo com a mesma chave "images"
      });
    }

    const response = await fetch(url, {
      method: "PUT",
      credentials:"include",
      body:form,
    });
    console.log("asdasd", response)
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
    console.log(error)
    throw error; // Relança o erro para que possa ser capturado externamente
  }
} */

export default async function editProperty(id: number, formData: { [key: string]: FormDataEntryValue }) {
  const url = `http://localhost:9090/property/${id}`;
  const form = new FormData();

  // Constrói o objeto JSON para o corpo da requisição
  const propertyData = {
    title: formData.title,
    propertyDescription: formData.propertyDescription,
    propertyType: formData.propertyType,
    propertyStatus: formData.status,
    purpose: formData.purpose,
    area: formData.area,
    price: formData.price,
    promotionalPrice: formData.promotionalPrice,
    highlight: formData.highlight === "1",
    floors: formData.floors,
    additionals: [...new Set(formData.additionals?.toString().split(',').map(s => Number(s.trim())))],
    address: {
      street: formData.street,
      propertyNumber: formData.propertyNumber,
      city: formData.city,
      state: formData.state,
      cep: formData.cep,
      neighborhood: formData.neighborhood,
      complement: formData.complement
    },
    taxes: {
      iptu: formData.iptu,
      condominiumFee: formData.condominiumFee
    },
    propertyFeatures: {
      bedRoom: formData.bedRoom,
      bathRoom: formData.bathRoom,
      garageSpace: formData.garageSpace,
      suite: formData.suite,
      livingRoom: formData.livingRoom,
      isFurnished: formData.isFurnished === "1",
      allowsPet: formData.allowsPet === "1"
    },
    realtors: formData.realtors?.toString().split(",").map(s => Number(s.trim())),
    proprietor: Number(formData.proprietor)
  };

  // Adiciona os dados da propriedade como um Blob
  form.append("property", new Blob([JSON.stringify(propertyData)], { type: "application/json" }));

  // Adiciona imagens novas (se houver)
  /* const newImages = formData.images as unknown as FileList;
  if (newImages && newImages.length > 0) {
    Array.from(newImages).forEach((file) => {
      form.append("newImages", file);
    });
  } */
  const newImages = formData.images as unknown as FileList;

  if (newImages && newImages.length > 0) {
    Array.from(newImages).forEach((file) => {
      const imageBlob = new Blob([file], { type: "application/octet-stream" });
      form.append("newImages", imageBlob, file.name);
    });
  }


  // Log para debug
  console.log("Dados enviados:");
  for (let pair of form.entries()) {
    console.log(pair[0], pair[1]);
  }

  try {
    const response = await fetch(url, {
      method: "PUT",
      body: form,
      credentials: "include"

    });

    if (!response.ok) {
      const errorData = await response.json();
      throw { response: { data: errorData, status: response.status } };
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao editar propriedade:", error);
    throw error;
  }
}
