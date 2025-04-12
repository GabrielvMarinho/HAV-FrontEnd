/* "use client"

export default async function editCustomer(id: any, formData: { [key: string]: FormDataEntryValue } | null) {

  const url = `http://localhost:9090/customer/${id}`;

  const file = formData?.image[0];

  try {
    const form = new FormData();

    form.append("customer", new Blob([JSON.stringify({
      name: formData?.name,
      cpf: formData?.cpf,
      email: formData?.email,
      celphone: formData?.cellphone,
      phoneNumber: formData?.phoneNumber,
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

    if (file) {
      form.append("newImage", file); // Agora enviando a imagem como base64
    }
    const response = await fetch(url, {
      method: "PUT",
      body: form,
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
} */
// src/api/customer/editCustomer.ts
"use client"

export default async function editCustomer(id: number, formData: { [key: string]: FormDataEntryValue }) {
  const url = `http://localhost:9090/customer/${id}`;

  const form = new FormData();

  // Adiciona o JSON do customer
  form.append("customer", new Blob([JSON.stringify({
    name: formData.name,
    cpf: formData.cpf,
    doc: formData.doc,
    phoneNumber: formData.phoneNumber,
    celphone: formData.celphone,
    email: formData.email,
    cep: formData.cep,
    city: formData.city,
    state: formData.state,
    street: formData.street,
    complement: formData.complement,
    neighborhood: formData.neighborhood,
    propertyNumber: formData.propertyNumber
  })], { type: "application/json" }));

  // Adiciona imagem nova (se tiver)
  if (formData.image && (formData.image as FileList)[0]) {
    form.append("newImage", (formData.image as FileList)[0]);
  }

  // Adiciona o ID da imagem deletada (se tiver)
  if (formData.deletedImageId) {
    form.append("deletedImageId", formData.deletedImageId);
  }

  for (let pair of form.entries()) {
    console.log(pair[0], pair[1]);
  }

  const response = await fetch(url, {
    method: "PUT",
    body: form
  });

  if (!response.ok) {
    const error = await response.json();
    throw { response: { data: error } };
  }

  return response;
}
