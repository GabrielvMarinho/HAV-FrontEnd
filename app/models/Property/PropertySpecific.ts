interface PropertySpecific{
    id: number;
    propertyCode: string;
    address: string;
    PromotionalPrice: number;
    ActualPrice: number;
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