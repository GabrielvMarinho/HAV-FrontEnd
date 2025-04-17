interface CustomerEditDto {
    doc: string;
    cpf: string;
    name: string;
    email: string;
    cellphone: string;
    phoneNumber: string;
    cep: string;
    street: string;
    propertyNumber: number;
    complement: string;
    state: string;
    city: string;
    neighborhood: string;
    imageBase64?: string;
    deletedImageId?: number;
}