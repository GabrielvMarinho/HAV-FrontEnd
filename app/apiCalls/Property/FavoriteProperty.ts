export async function favoriteProperty(idUser: number, idProperty: number): Promise<Response> {
    const url = `http://localhost:9090/favorites/favoritar/${idProperty}`;
    try {
        const response = await fetch(url, {
            method: "POST", 
            credentials:"include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: idUser,
                propertyId: idProperty
            })
        });

        if (!response.ok) {
            throw new Error(`Erro na API ${response.status}`);
        }

        console.log("Propriedade favoritada com sucesso");
        return response;
    } catch (error) {
        console.log("Erro ao favoritar a propriedade ", error);
        throw error;
    }
}
