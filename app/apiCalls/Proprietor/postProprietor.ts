export default async function postProprietor(
  formData: { [key: string]: FormDataEntryValue } | null
): Promise<string> {
  const url = "http://localhost:9090/proprietor";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData?.name,
        cpf: formData?.cpf === "" ? null : formData?.cpf,
        cnpj: formData?.cnpj === "" ? null : formData?.cnpj,
        email: formData?.email,
        celphone: formData?.cellphone,
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
        },
      }),
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