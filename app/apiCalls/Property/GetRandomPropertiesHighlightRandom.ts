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
        const properties: PropertySpecificCard[] = await Promise.all(
            data.map(async (property: PropertySpecificCard) => {
                try {
                    imageUrl = await fetchMainPropertyImage(property.id); // agora é URL
                } catch (err) {
                    console.warn(`Erro ao carregar imagem do imóvel ${property.id}:`, err);
                }
                console.log("data", data)

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
                    street: property.address.street,
                    state: property.address.state,
                    propertyNumber: property.address.propertyNumber,
                    promotionalPrice: property.promotionalPrice,
                    price: property.price,
                    purpose: property.purpose,
                    mainImage: property.mainImage,
                    mainPage: property.mainPage // seta a URL da imagem
                };
            })
        );

        return properties;
    } catch (error) {
        console.log(error);
        return [];
    }
}
