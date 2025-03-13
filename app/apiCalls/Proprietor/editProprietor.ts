"use client"

export default async function editProprietor(id :any, proprietor: ProprietorEditDto) {
    
  const url = `http://localhost:9090/proprietor/${id}`;
  
  try {
      const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json", // Garante que está enviando JSON
          },
          body:JSON.stringify({
            "name": proprietor.name,
            "cpf": proprietor.cpf,
            "email": proprietor.email,
            "celphone": proprietor.celphone,
            "phoneNumber": proprietor.phoneNumber,
            "archived": false,
            "address": {
              "cep": proprietor.cep,
              "street": proprietor.street,
              "neighborhood": proprietor.neighborhood,
              "city": proprietor.city,
              "state": proprietor.state,
              "propertyNumber": proprietor.propertyNumber,
              "complement": proprietor.complement
              }
            }
          )
        });

      return "success"
  } catch (error) {
      return "fail"
  }
}
