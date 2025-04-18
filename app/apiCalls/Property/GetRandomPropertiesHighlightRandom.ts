import fetchMainPropertyImage from "../Image/searchMainPropertyImage";

/* export default async function () {
    const url = "http://localhost:9090/property/randomHighlights"
    try {
        const response = await fetch(url, {
            credentials: "include"
        });
        const data = await response.json();

        console.log("testando", data)
        const properties: PropertySpecificCard[] = data.map((property: PropertySpecificCard) => ({
            id: property.id,
            neighborhood: property.address.neighborhood,
            city: property.address.city,
            bedRoom: property.propertyFeatures.bedRoom,
            bathRoom: property.propertyFeatures.bathRoom,
            suite: property.propertyFeatures.suite,
            livingRoom: property.propertyFeatures.livingRoom,
            garageSpace: property.propertyFeatures.garageSpace,
            area: property.area,
            propertyStatus: property.propertyStatus,
            promotionalPrice: property.promotionalPrice,
            price: property.price,
            purpose: property.purpose,
        }));

        return properties
    } catch (error) {
        console.log(error)
        return []
    }
} */

export default async function getHighlightedProperties() {
    const url = "http://localhost:9090/property/randomHighlights";
    try {
        const response = await fetch(url, {
            credentials: "include"
        });
        const data = await response.json();
        console.log("data",data);
        const properties: PropertySpecificCard[] = await Promise.all(
            data.map(async (property: PropertySpecificCard) => {
                let imageUrl: string | undefined = undefined;
                try {
                    imageUrl = await fetchMainPropertyImage(property.id); // agora é URL
                    console.log("imageUrl", imageUrl);
                } catch (err) {
                    console.warn(`Erro ao carregar imagem do imóvel ${property.id}:`, err);
                }

                return {
                    id: property.id,
                    neighborhood: property.address.neighborhood,
                    city: property.address.city,
                    bedRoom: property.propertyFeatures.bedRoom,
                    bathRoom: property.propertyFeatures.bathRoom,
                    suite: property.propertyFeatures.suite,
                    livingRoom: property.propertyFeatures.livingRoom,
                    garageSpace: property.propertyFeatures.garageSpace,
                    area: property.area,
                    propertyStatus: property.propertyStatus,
                    promotionalPrice: property.promotionalPrice,
                    price: property.price,
                    purpose: property.purpose,
                    image: imageUrl // seta a URL da imagem
                };
            })
        );

        return properties;
    } catch (error) {
        console.log(error);
        return [];
    }
}
