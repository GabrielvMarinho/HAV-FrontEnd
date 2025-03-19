interface PropertySpecific{
    id: string;
    address: string;
    PromotionalPrice: number;
    ActualPrice: number;
    Taxes: number;
    Purpose: string; // venda, vendaPromocao, locacao
    bedroom: number;
    bathroom: number;
    garage :number;
    livingRoom: number;
    areaProperty: number;
    isFurnished: boolean;
    additional: string[];
}