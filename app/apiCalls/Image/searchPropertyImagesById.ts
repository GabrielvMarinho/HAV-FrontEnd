/* export default async function fetchPropertyImages(imageIds: number[]): Promise<string[]> {
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

    // Mapeia a lista de DTOs para uma lista de strings base64
    return imagesBase64DTO.map(img => img.s3Key);
} */

/* export default async function fetchPropertyImages(imageIds: number[]): Promise<string[]> {
    const url = `http://localhost:9090/images/property/images`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(imageIds),
    });

    if (!response.ok) {
        throw new Error("Erro ao buscar imagens da propriedade");
    }

    const imageByteArrays: number[][] = await response.json();
    console.log("imageByteArrays:", imageByteArrays);

    // Para cada imagem, converte para base64 (data URL)
    const imageDataURLs: string[] = await Promise.all(
        imageByteArrays.map((byteArray: number[]) => {
            return new Promise<string>((resolve) => {
                const uint8Array = new Uint8Array(byteArray);
                const blob = new Blob([uint8Array], { type: "image/jpeg" }); // ajuste o MIME se for PNG
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result as string);
                reader.readAsDataURL(blob);
            });
        })
    );

    console.log("imageByteArrays2:", imageDataURLs);

    return imageDataURLs;
} */

export default async function fetchPropertyImages(imageIds: number[]): Promise<string[]> {
    const url = `http://localhost:9090/images/property/images`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(imageIds),
    });

    if (!response.ok) {
        throw new Error("Erro ao buscar imagens da propriedade");
    }

    const imageBase64Strings: string[] = await response.json();
    console.log("imageBase64Strings:", imageBase64Strings);

    // Para cada imagem, cria o Data URL (base64) corretamente
    const imageDataURLs: string[] = imageBase64Strings.map((base64String: string) => {
        return `data:image/jpeg;base64,${base64String}`; // Adiciona o prefixo correto
    });

    console.log("imageDataURLs:", imageDataURLs);

    return imageDataURLs;
}
