"use client"

export default async function editEditor(id :any, editor: EditorEditDto) {
    
  const url = `http://localhost:9090/editor/${id}`;
  
  try {
      const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json", // Garante que está enviando JSON
          },
          body:JSON.stringify({
            "name": editor.name,
            "cpf": editor.cpf,
            "email": editor.email,
            "celphone": editor.celphone,
            "phoneNumber": editor.phoneNumber,
            "archived": false,
            "address": {
              "cep": editor.cep,
              "street": editor.street,
              "neighborhood": editor.neighborhood,
              "city": editor.city,
              "state": editor.state,
              "propertyNumber": editor.propertyNumber,
              "complement": editor.complement
              }
            }
          )
        });

      return "success"
  } catch (error) {
      return "fail"
  }
}
