"use client"

export default async function changeArchivedStatusProprietor(list: string[]) {
    console.log("bora");
  const url = "http://localhost:9090/proprietor/changeArchiveStatus";
  
  try {
    console.log(JSON.stringify(list))
      const response = await fetch(url, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json", // Garante que está enviando JSON
          },
          body: JSON.stringify(list),
        });
        
        const urlNew = new URL(window.location.href);
        urlNew.searchParams.set('page', (0).toString());
        
        window.location.href = urlNew.toString();

      return "success"
  } catch (error) {
      return "fail"
  }
}
