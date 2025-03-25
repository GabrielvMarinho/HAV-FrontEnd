// interface AddressPropertySpecific{

// }

// interface FeaturesPropertySpecific{

// }

interface PropertySpecific {
    id: number;
    address: {
        neighborhood: string;
        city: string;
        state: string;
        street: string;
    };
    propertyFeature: {
        bedRoom: number;
        bathRoom: number;
        garageSpace: number;
        livingRoom: number;
        areaProperty: number;
    };
    bedRoom: number;
    propertyCode: string;
    promotionalPrice: number;
    actualPrice: number;
    taxes: number;
    purpose: string; // venda, vendaPromocao, locacao
    propertyDescription: string,
    isFurnished: boolean;
    propertyType: string;
    additional: string[];
    realtors: Realtor[];
    price: number; //botei esse pra ver se ta funcionando (sim)
}