import { z } from "zod";

export const newUser = z.object({
    type: z.enum(["pf", "pj"]),
    name: z.string().min(1, { message: "Campo obrigatório" }),
    email: z.string().min(1, { message: "Campo obrigatório" })
    .email({ message: "E-mail inválido" }).refine(email => email.includes("@"),
     {message: "O E-mal deve ser válido",path: ["email"],}),
    cep: z.string().min(1, { message: "Campo obrigatório" }).regex(/^\d{8}$/,
     { message: "CEP deve conter 8 dígitos numéricos" }), // Apenas números
    street: z.string().min(1, { message: "Campo obrigatório" }),
    phone: z.string().min(1, { message: "Campo obrigatório" }).regex(/^\d{10,11}$/,
     { message: "Telefone deve ter 10 ou 11 dígitos numéricos" }), // Aceita fixo (10) ou celular (11)
    cellphone: z.string().min(1, { message: "Campo obrigatório" }).regex(/^\d{11}$/,
     { message: "Celular deve conter 11 dígitos numéricos" }), // Apenas números
    propertyNumber: z.string().min(1, { message: "Campo obrigatório" }),
    complement: z.string().min(1, {message: "Campo obrigatório" }),
    cpf: z.string().optional().refine(cpf => !cpf || /^\d{11}$/.test(cpf), {
            message: "CPF deve conter 11 dígitos numéricos",
            path: ["cpf"]
        }),
    cnpj: z.string().optional()
        .refine(cnpj => !cnpj || /^\d{14}$/.test(cnpj), {
            message: "Campo obrigatório",
            path: ["cnpj"]
        }),
        // Para adicionar futuramente uma validação de erro com texto customizado
}).superRefine((data, ctx) => {
    if (data.type === "pf" && (!data.cpf || data.cpf.trim() === "")) {
        ctx.addIssue({
            code: "custom",
            message: "Campo obrigatório",
            path: ["cpf"],
        });
    }

    if (data.type === "pj" && (!data.cnpj || data.cnpj.trim() === "")) {
        ctx.addIssue({
            code: "custom",
            message: "Campo obrigatório",
            path: ["cnpj"],
        });
    }
});

export type NewUser = z.infer<typeof newUser>;