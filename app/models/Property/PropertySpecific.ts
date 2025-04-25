interface ProprietorGetResponseDTO {
    image: string;

    name: string;
    email: string;
    celphone: string;
}


interface PropertySpecific {
    id: number;
    address: {
        neighborhood: string;
        city: string;
        state: string;
        street: string;
        propertyNumber: string;

    };
    propertyFeature: {
        bedRoom: number;
        bathRoom: number;
        garageSpace: number;
        livingRoom: number;
        areaProperty: number;
        isFurnished: boolean;
    };
    propertyId: string;

    propertyStatus: string;
    additionals: AdditionalsPropertySpecific[];
    propertyCode: string;
    promotionalPrice: number;
    actualPrice: number;
    taxes: number;
    purpose: string; // venda, vendaPromocao, locacao
    propertyDescription: string,
    propertyType: string;

    imagesProperty: string[];

    realtorPropertySpecific: realtorPropertySpecific[];
    proprietor: ProprietorGetResponseDTO;

    price: number; //botei esse pra ver se ta funcionando (sim)
}