import { z } from "zod";

export const newRealter = z.object({
    name: z.string().min(1, { message: "* Campo obrigatório" }),

    email: z.string().min(1, { message: "* Campo obrigatório" })
        .email({ message: "* E-mail inválido" }).refine(email => email.includes("@"), { message: "O E-mal deve ser válido", path: ["email"], }),
    cep: z.string().min(1, { message: "* Campo obrigatório" })
        .regex(/^\d{8}$/, { message: "* 8 dígitos numéricos" }), // Apenas números
    street: z.string().min(1, { message: "* Campo obrigatório" }),
    phoneNumber: z.string().min(1, { message: "* Campo obrigatório" })
        .regex(/^\d{10,11}$/, { message: "* 10 ou 11 dígitos" }), // Aceita fixo (10) ou celular (11)
    cellphone: z.string().min(1, { message: "* Campo obrigatório" })
        .regex(/^\d{11}$/, { message: "* 11 dígitos" }), // Apenas números
    propertyNumber: z.string().min(1, { message: "* Campo obrigatório" }),
    complement: z.string().optional(),
    cpf: z.string().min(11, { message: "* CPF deve ter 11 dígitos" }).max(11, { message: "* CPF deve ter 11 dígitos" }).regex(/^\d{11}$/, { message: "* CPF deve conter apenas números" }),
    creci: z.string()
        .min(1, { message: "* Campo obrigatório" }) // Agora é obrigatório
        .max(6, { message: "* Até 6 dígitos" }),
});

export type NewRealter = z.infer<typeof newRealter>;