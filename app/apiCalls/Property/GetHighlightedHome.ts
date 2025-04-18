export async function GetHighlightsHome(purpose?: string) {
    try {
      const response = await fetch("http://localhost:9090/property/getHighlightedHome")
      const data = await response.json();
      return data;
    } catch (e) {
      console.error("Erro ao buscar os highlights da home", e);
      return { highlightsCards: [], pages: 1 };
    }
  }
  