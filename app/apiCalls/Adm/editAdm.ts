"use client"

export default async function editAdm(id :any, adm: AdmEditDto) {
    
  const url = `http://localhost:9090/adm/${id}`;
  
  try {
      const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json", // Garante que está enviando JSON
          },
          body:JSON.stringify({
            "name": adm.name,
            "cpf": adm.cpf,
            "email": adm.email,
            "celphone": adm.celphone,
            "phoneNumber": adm.phoneNumber,
            "archived": false,
            "address": {
              "cep": adm.cep,
              "street": adm.street,
              "neighborhood": adm.neighborhood,
              "city": adm.city,
              "state": adm.state,
              "propertyNumber": adm.propertyNumber,
              "complement": adm.complement
              }
            }
          )
        });

      return "success"
  } catch (error) {
      return "fail"
  }
}
