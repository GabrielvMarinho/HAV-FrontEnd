import { z } from "zod"

export const newUser = z.object({
    name: z.string().min(1, {message: "Campo obrigatório"}),
    cpf: z.string().min(1, {message: "Campo obrigatório"}),
    email: z.string().min(1, {message: "Campo obrigatório"}),
    cep: z.string().min(1, {message: "Campo obrigatório"}),
    street: z.string().min(1, {message: "Campo obrigatório"}),
    phone: z.string().min(1, {message: "Campo obrigatório"}),
    cellphone: z.string().min(1, {message: "Campo obrigatório"}),
    propertyNumber: z.string().min(1, {message: "Campo obrigatório"}),
    complement: z.string().min(1, {message: "Campo obrigatório"})
});

export type NewUser = z.infer<typeof newUser>