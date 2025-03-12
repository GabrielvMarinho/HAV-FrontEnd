"use client"

export default async function changeArchivedStatusRealtor(list: string[]) {
    console.log("bora");
  const url = "http://localhost:9090/realtor/changeArchiveStatus";
  
  try {
    console.log(JSON.stringify(list))
      const response = await fetch(url, {
          method: "PATCH",
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
