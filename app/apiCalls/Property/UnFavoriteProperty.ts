export async function unfavoriteProperty(idProperty: number): Promise<void> {
    const url = `http://localhost:9090/favorites/desfavoritar/${idProperty}`;

    try {
        const response = await fetch(url, { method: "DELETE", 
        credentials:"include" });

        if (!response.ok) {
            throw new Error(`Erro ao desfavoritar: ${response.status}`);
        }

        console.log("Propriedade removida dos favoritos com sucesso!");

    } catch (error) {
        console.error("Erro ao remover dos favoritos:", error);
    }
}
