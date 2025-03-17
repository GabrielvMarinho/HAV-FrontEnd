export default async function postEditor(
  formData: { [key: string]: FormDataEntryValue } | null
): Promise<string> {
  const url = "http://localhost:9090/editor";
  console.log("Enviando dados para o backend:", formData);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData?.name,
        cpf: formData?.cpf,
        cnpj: formData?.cnpj,
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
      console.log("Erro do backend:", errorData);

      // Lança o erro com a estrutura completa
      throw {
        response: {
          data: errorData,
          status: response.status,
        },
      };
    }

    console.log("Sucesso ao enviar dados para o backend");
    return await response.json(); // Retorna a resposta em caso de sucesso
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error; // Relança o erro para que possa ser capturado externamente
  }
}