"use client"

export default async function changeArchivedStatusEditor(list: string[]) {
  const url = "http://localhost:9090/editor/changeArchiveStatus";
  
  try {
      const response = await fetch(url, {
          method: "PATCH",
          
          credentials:"include",
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
