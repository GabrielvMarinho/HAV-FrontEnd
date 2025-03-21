interface Address{
  
    neighborhood: string;
    city: string;
    state: string;
}


interface PropertySpecific{
    id: number;
    propertyCode: string;
    address: Address;
    promotionalPrice: number;
    actualPrice: number;
    taxes: number;
    purpose: string; // venda, vendaPromocao, locacao
    bedroom: number;
    propertyDescription: string,
    bathroom: number;
    garage :number;
    livingRoom: number;
    areaProperty: number;
    isFurnished: boolean;
    propertyType: string;
    additional: string[];
    realtors: Realtor[];
    price: number; //botei esse pra ver se ta funcionando (sim)
}