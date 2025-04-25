export interface Customer {
    type: 'customer';
    cpf: string;
    name: string;
    email: string;
    cellphone: string;
    status: boolean;
    statusText?: string;
}