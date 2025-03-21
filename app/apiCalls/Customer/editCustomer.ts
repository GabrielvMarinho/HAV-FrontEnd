"use client"

export default async function editCustomer(id :any, customer: CustomerEditDto) {
    
  const url = `http://localhost:9090/customer/${id}`;
  
  try {
      const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json", // Garante que está enviando JSON
          },
          body:JSON.stringify({
            "name": customer.name,
            "cpf": customer.cpf,
            "email": customer.email,
            "celphone": customer.celphone,
            "phoneNumber": customer.phoneNumber,
            "archived": false,
            "address": {
              "cep": customer.cep,
              "street": customer.street,
              "neighborhood": customer.neighborhood,
              "city": customer.city,
              "state": customer.state,
              "propertyNumber": customer.propertyNumber,
              "complement": customer.complement
              }
            }
          )
        });

      return "success"
  } catch (error) {
      return "fail"
  }
}
