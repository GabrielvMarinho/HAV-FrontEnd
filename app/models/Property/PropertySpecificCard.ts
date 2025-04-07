interface PropertySpecificCard {
    id: number;
    propertyStatus: string;
    propertyType: string;
    promotionalPrice: number;
    area: number;
    image: Base64URLString
    price: number; 
    purpose: string; 
    neighborhood: string;
    city: string;
    suite: number;
    garageSpace: number;
    bathRoom: number;
    bedRoom: number;
    livingRoom: number;
    // Address fields for geocoding
    street?: string;
    propertyNumber?: string;
    state?: string;
    cep?: string;
}

export type { PropertySpecificCard };