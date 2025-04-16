export default async function fetchPropertyImages(imageIds: number[]): Promise<string[]> {
    const url = `http://localhost:9090/images/property/images`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(imageIds),
    });

    if (!response.ok) {
        throw new Error('Erro ao buscar imagens da propriedade');
    }

    const imagesBase64DTO: { s3Key: string }[] = await response.json();
    console.log("Dto de image", imagesBase64DTO);

    // Mapeia a lista de DTOs para uma lista de strings base64
    return imagesBase64DTO.map(img => img.s3Key);
}
