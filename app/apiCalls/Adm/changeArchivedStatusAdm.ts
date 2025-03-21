"use client"

export default async function changeArchivedStatusAdm(list: string[]) {
  const url = "http://localhost:9090/adm/changeArchiveStatus";
  
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
