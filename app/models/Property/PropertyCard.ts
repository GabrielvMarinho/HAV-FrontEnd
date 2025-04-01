interface PropertyCard{
    propertyFeatures: {
        bathRoom: number;
        bedRoom: number;
        livingRoom: number;
    }
    address: {
        neighborhood: string;
        city: string;
    }
    price: number;
    purpose: string;
    propertyStatus: string;
    id: number;
}