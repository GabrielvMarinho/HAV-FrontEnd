"use client"

export default async function editAdm(id: any, formData: { [key: string]: FormDataEntryValue }) {

  const url = `http://localhost:9090/adm/${id}`;

  try {
    const form = new FormData();
    console.log("formData", JSON.stringify({
      name: formData?.name,
      cpf: formData?.cpf,
      email: formData?.email,
      cellphone: formData?.cellphone,
      phoneNumber: formData?.phoneNumber,
      archived: false,
      address: {
        cep: formData?.cep,
        street: formData?.street,
        neighborhood: formData?.neighborhood,
        city: formData?.city,
        state: formData?.state,
        propertyNumber: formData?.propertyNumber,
        complement: formData?.complement,
      }
    }
    ))
    form.append("adm", new Blob([JSON.stringify({
      name: formData?.name,
      cpf: formData?.cpf,
      email: formData?.email,
      cellphone: formData?.cellphone,
      phoneNumber: formData?.phoneNumber,
      archived: false,
      address: {
        cep: formData?.cep,
        street: formData?.street,
        neighborhood: formData?.neighborhood,
        city: formData?.city,
        state: formData?.state,
        propertyNumber: formData?.propertyNumber,
        complement: formData?.complement,
      }
    }
    )], { type: "application/json" }));

    if (formData.deletedImageId) {
      const deletedIdBlob = new Blob(
        [JSON.stringify(formData.deletedImageId)],
        { type: "application/json" }
      );
      form.append("deletedImageId", deletedIdBlob);
    }


    if (formData.image && (formData.image as FileList)[0]) {
      const file = (formData.image as FileList)[0];
      const imageBlob = new Blob([file], { type: "application/octet-stream" });
      form.append("newImage", imageBlob, file.name);
    }


    console.log("Dados enviados:");
    for (let pair of form.entries()) {
      console.log(pair[0], pair[1]);
    }

    const response = await fetch(url, {
      method: "PUT",
      body:form,
      credentials:"include"
    });
    if (!response.ok) {
      const errorData = await response.json(); // Captura a resposta de erro do backend
      console.log(errorData)
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
