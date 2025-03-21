"use client"

export default async function changeArchivedStatusRealtor(list: string[]) {
  const url = "http://localhost:9090/realtor/changeArchiveStatus";
  
  try {
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
