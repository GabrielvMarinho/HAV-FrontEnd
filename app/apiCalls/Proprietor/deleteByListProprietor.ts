"use client"

export default async function deleteProprietorList(list: string[]) {
  console.log("bora");
  const url = "http://localhost:9090/proprietor";
  
  try {
    console.log(JSON.stringify(list))
      const response = await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json", // Garante que está enviando JSON
          },
          body: JSON.stringify(list),
        });

      return "success"
  } catch (error) {
      return "fail"
  }
}
