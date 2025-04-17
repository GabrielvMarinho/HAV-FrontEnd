"use client"

export default async function deleteAdmList(list: string[]) {
  const url = "http://localhost:9090/adm";
  
  try {
      const response = await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json", // Garante que está enviando JSON
          }, 
          credentials:"include",
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
