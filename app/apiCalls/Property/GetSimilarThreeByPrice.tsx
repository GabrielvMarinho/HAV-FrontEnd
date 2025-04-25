export default async function getSimilarThreeByPrice() {
    const url = "http://localhost:9090/property/getSliderContentOfThree"

    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log("Propriedades similares: ", data);
        
        const properties: PropertySpecificCard[] = data.map((property: PropertySpecificCard) =>({
            id:property.id,
            neighborhood:property.address.neighborhood,
            city:property.address.city,
            bedRoom:property.propertyFeatures.bedRoom,
            bathRoom:property.propertyFeatures.bathRoom,
            suite:property.propertyFeatures.suite,
            livingRoom:property.propertyFeatures.livingRoom,
            garageSpace:property.propertyFeatures.garageSpace,
            area:property.area,
            street: property.address.street,
            state: property.address.state,
            propertyNumber: property.address.propertyNumber,
            propertyStatus:property.propertyStatus,
            promotionalPrice:property.promotionalPrice,
            price:property.price,
            purpose:property.purpose
        }))
        return properties
    }catch(e){
        console.log(e, "Erro ao buscar propriedades similares");
        return []
    }
}