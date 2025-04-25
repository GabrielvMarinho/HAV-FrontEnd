export const InputFilterConfig = {
    name: { name: "name", size: "medium", text: "Nome", placeholder: "ex: kauani da SIlva", id: "nome" },
    cpf: { name: "cpf", size: "medium", text: "CPF", placeholder: "ex: 123-123-123-00", id: "cpf" },
    email: { name: "email", size: "medium", text: "E-mail", placeholder: "ex: kauani@gmail.com", id: "email" },
    street: { name: "street", size: "medium", text: "Rua", placeholder: "Frederico Curt Alberto Vasel", id: "rua" },
    phoneNumber: { name: "phoneNumber", size: "medium", text: "Telefone", placeholder: "Digite o telefone", id: "phoneNumber" },
    cellphone: { name: "cellphone", size: "medium", text: "Celular", placeholder: "+55 ( )", id: "celular" },
    cnpj: { name: "cnpj", size: "medium", text: "CNPJ", placeholder: "ex: 123-123-123/0001-22", id: "cnpj" },
    
    priceRangesSell: { name: "price", key: "price", min: 0, max: "2000000", step: 10000, id: "priceRanger" },
    priceRangesRent: { name: "price", key: "price", min: 0, max: "10000", step: 100, id: "priceRanger" },

}