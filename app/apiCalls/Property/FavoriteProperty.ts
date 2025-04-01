export default async function (idUser: number, idProperty: number): Promise<Response> {

    const url = `https://localhost9090/favorites/${idUser}/${idProperty}`
    try {
        const response = await fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: idUser,
                propertyId: idProperty
            })
        });

        if (!response.ok) {
            throw new Error(`Erro na api ${response.status}`)
        }

        console.log("Propriedade favoritada com sucesso");
        return response;
    } catch (error) {
        console.log("Erro ao favoritar a propriedade ", error);
        throw error;
    }
}