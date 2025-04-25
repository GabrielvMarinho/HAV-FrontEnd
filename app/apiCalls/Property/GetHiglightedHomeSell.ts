export default async function GetHighlightsHome() {
    try {
      const response = await fetch("http://localhost:9090/property/getHighlightedHomeSale")
      const data = await response.json();
      console.log("----------------data", data)
      const properties: PropertySpecificCard[] = data.map((property: PropertySpecificCard) => ({
        id: property.id,
        neighborhood: property.address.neighborhood,
        city: property.address.city,
        street: property.address.street,
        state: property.address.state,
        propertyNumber: property.address.propertyNumber,
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
        mainImage: property.mainImage,

      }));
      return properties;
    } catch (e) {
      console.error("Erro ao buscar os highlights da home", e);
      return { highlightsCards: [], pages: 1 };
    }
  }
  