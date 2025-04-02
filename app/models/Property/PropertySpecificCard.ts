interface PropertySpecificCard {
    id: number;
    propertyStatus: string;
    promotionalPrice: number;
    price: number; 
    purpose: string; 
    address: {
        neighborhood: string;
        city: string;
    }
    propertyFeatures: {
        bathRoom: number;
        bedRoom: number;
        livingRoom: number
    }
}