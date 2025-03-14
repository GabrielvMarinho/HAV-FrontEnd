"use client"

export default async function editRealtor(id :any, realtor: RealtorEditDto) {
    
  const url = `http://localhost:9090/realtor/${id}`;
  
  try {
      const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json", // Garante que está enviando JSON
          },
          body:JSON.stringify({
            "name": realtor.name,
            "cpf": realtor.cpf,
            "email": realtor.email,
            "celphone": realtor.celphone,
            "phoneNumber": realtor.phoneNumber,
            "archived": false,
            "address": {
              "cep": realtor.cep,
              "street": realtor.street,
              "neighborhood": realtor.neighborhood,
              "city": realtor.city,
              "state": realtor.state,
              "propertyNumber": realtor.propertyNumber,
              "complement": realtor.complement
              }
            }
          )
        });

      return "success"
  } catch (error) {
      return "fail"
  }
}
