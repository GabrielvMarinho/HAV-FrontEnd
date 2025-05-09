export default async function postEditor(
  formData: { [key: string]: FormDataEntryValue } | null
): Promise<string> {
  const url = "http://localhost:9090/editor";


  const file = formData?.image[0];

  try {
    const form = new FormData();
  
    form.append("editor", new Blob([JSON.stringify({
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
      )],  { type: "application/json" }));

    if (file) {
      form.append("image", file); // Agora enviando a imagem como base64
    }

    const response = await fetch(url, {
      method: "POST",
      credentials:"include",
      body:form,
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